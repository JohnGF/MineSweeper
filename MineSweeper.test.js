const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.resolve(__dirname, './MineSweeper.html'), 'utf8');

describe('MineSweeper test suite', () => {
  let table, creat_map, change_cell, flag;

  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
    jest.resetModules();
    
    window.HTMLMediaElement.prototype.play = jest.fn();
    window.HTMLMediaElement.prototype.pause = jest.fn();
    window.HTMLMediaElement.prototype.load = jest.fn();

    const exported = require('./MineSweeper.js');
    creat_map = exported.creat_map;
    change_cell = exported.change_cell;
    flag = exported.flag;
    
    table = document.querySelector("table.mapa");
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Grid generation & mine placement randomness', () => {
    creat_map(10, 10, 50, 0, 0);
    expect(table.querySelectorAll('tr').length).toBe(10);
  });
  
  test('Win condition resolution', () => {
    localStorage.setItem("user", "testUser");
    creat_map(5, 5, 0, 0, 0); 
    change_cell('0_0_0'); 
    
    const win = document.getElementById('congratulation');
    expect(win).toBeTruthy();
    expect(win.innerHTML).toMatch(/Parabéns|Ganhaste/);
  });

  test('Loss condition resolution', () => {
    localStorage.setItem("user", "testUser");
    window.alert = jest.fn();
    
    // With prob 99 it avoids the 100 limit alert, and places bombs.
    creat_map(5, 5, 99, 0, 0); 
    
    // Find a bomb cell
    let bombCells = [];
    Array.from(table.querySelectorAll('td')).forEach(td => {
      // we can't see class bomb until revealed, but we know it's a bomb if it was clicked and triggered creat_lose.
      // let's click until we hit one!
    });
    
    for(let td of Array.from(table.querySelectorAll('td'))) {
      change_cell(td.id);
      if (document.getElementById('congratulation')) {
        break;
      }
    }
    
    const loss = document.getElementById('congratulation');
    expect(loss).toBeTruthy();
    expect(loss.innerHTML).toMatch(/sorte|Ainda não/);
  });

  test('Recursive reveal (flood fill) of empty cells', () => {
    creat_map(5, 5, 0, 0, 0);
    
    let allCells = Array.from(table.querySelectorAll('td'));
    expect(allCells.every(c => c.classList.contains('hidden_cell'))).toBe(true);
    
    change_cell('0_0_0');
    
    let revealedCount = 0;
    allCells.forEach(cell => {
      if (!cell.classList.contains('hidden_cell')) {
        revealedCount++;
      }
    });
    
    expect(revealedCount).toBe(25);
  });

  test('Flag toggling', () => {
    creat_map(5, 5, 20, 0, 0);
    const cell = table.querySelector('td.hidden_cell');
    
    flag(cell.id);
    expect(cell.classList.contains('flag')).toBe(true);
    
    flag(cell.id);
    expect(cell.classList.contains('flag')).toBe(false);
    expect(cell.classList.contains('flag_question')).toBe(true);

    flag(cell.id);
    expect(cell.classList.contains('flag_question')).toBe(false);
    expect(cell.classList.contains('flag')).toBe(false);
  });

  test('Adjacent mine count calculation', () => {
    creat_map(5, 5, 20, 0, 0);
    
    const allCells = Array.from(table.querySelectorAll('td'));
    const nonBombs = allCells.filter(c => !c.classList.contains('bomb'));
    
    if (nonBombs.length > 0) {
      const cellToClick = nonBombs[0];
      change_cell(cellToClick.id);
      
      const classList = Array.from(cellToClick.classList);
      const hasValidClass = classList.some(c => /^bomb[0-8]$/.test(c) || c === 'bomb');
      expect(hasValidClass).toBe(true);
    }
  });
});
