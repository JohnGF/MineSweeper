let table = document.querySelector("table.mapa");
let map_generator = document.querySelector(".map_generator");

let titlo = document.querySelector("#titulo_jogo");
let = document.createElement("tr");

let td = document.createElement("td");
let score = document.querySelector("#score");
var bomb_table = new Array();
var id_table = new Array();


table.addEventListener('contextmenu', e => {
  e.preventDefault();
});



function creat_map_aux() {
    localStorage.setItem("row", document.querySelector("#r").value);
    localStorage.setItem("col", document.querySelector("#c").value);
    let r = localStorage.getItem("row");
    let c = localStorage.getItem("col");
    if(r>100 | c>100){alert("numero de linhas ou colunas excede 100");return}
    return [r, c]
};

//working
function creat_map(r, c, s = 1,prob = 15) {
    bomb_table = new Array();id_table = new Array();
    //if(bomb_bit=1){bomb_table = new Array();id_table = new Array();console.log("reset")}

    //let mapa=document.querySelector("#mapa")
    //titlo.innerHTML="MineSweeper The game"
    let oldtable = document.querySelector(".mapa");
    if (s == 1) { r = creat_map_aux()[0]; c = creat_map_aux()[1]; };
    if (oldtable.innerHTML = !"") { oldtable.innerHTML = ""; };

    //console.log(`${r},${c}`)


    for (let i = 0; i < r; i++) {
        let row = table.insertRow(i);
        for (let j = 0; j < c; j++) {
            let cell = row.insertCell(j);
            let id_cell = `${i}_${j}`
            cell.setAttribute("id", id_cell);
            //debug
            //cell.innerHTML = id_cell;
            cell.setAttribute("onclick", "change_cell(this.id)")
            cell.setAttribute("oncontextmenu","flag(this.id)")


            if (Math.floor(Math.random() * 101) < prob) {
                bomb_table.push({ i: i, j: j });
            }
            id_table.push({ i: i, j: j }); 
            //cell.setAttribute("class","Bomb")
        };
    };
    return bomb_table.displ
};

function change_cell(id,g=1) {
    
    let id_c = id

    //console.log(id_c)
    //cell_tochange =id_c document.getElementById(`"${id}"`)
    const cell_tochange = document.getElementById(id_c);
    if (cell_tochange.classList.contains("flag")){return }
    
    
    //console.log(cell_tochange);
    split_id = id_c.split("_");
    let selected_cell = [parseInt(split_id[0]), parseInt(split_id[1])];
    for (let it = 0; it < bomb_table.length; it++) {

        if (bomb_table[it].i == selected_cell[0] && bomb_table[it].j == selected_cell[1]) {
            //console.log("its a bomb")
            cell_tochange.classList.add("bomb");
            if(g==0){alert("clicked a bomb try again!");return creat_map(r,c)}
            return
        }


    };
    var bomb_count = 0;
    for (let itb = 0; itb < bomb_table.length; itb++) {
        if (selected_cell[0] + 1 == bomb_table[itb].i && selected_cell[1] + 1 == bomb_table[itb].j) { bomb_count += 1; }
        if (selected_cell[0] + 1 == bomb_table[itb].i && selected_cell[1] == bomb_table[itb].j) { bomb_count += 1; }
        if (selected_cell[0] + 1 == bomb_table[itb].i && selected_cell[1] - 1 == bomb_table[itb].j) { bomb_count += 1; }
        if (selected_cell[0] == bomb_table[itb].i && selected_cell[1] + 1 == bomb_table[itb].j) { bomb_count += 1; }
        if (selected_cell[0] - 1 == bomb_table[itb].i && selected_cell[1] - 1 == bomb_table[itb].j) { bomb_count += 1; }
        if (selected_cell[0] - 1 == bomb_table[itb].i && selected_cell[1] + 1 == bomb_table[itb].j) { bomb_count += 1; }
        if (selected_cell[0] - 1 == bomb_table[itb].i && selected_cell[1] == bomb_table[itb].j) { bomb_count += 1; }
        if (selected_cell[0] == bomb_table[itb].i && selected_cell[1] - 1 == bomb_table[itb].j) { bomb_count += 1; }
    }
    //console.log(`bombas volta:${bomb_count}`)
    if (bomb_count == 0) { cell_tochange.classList.add("bomb0"); }
    if (bomb_count == 1) { cell_tochange.classList.add("bomb1"); }
    if (bomb_count == 2) { cell_tochange.classList.add("bomb2"); }
    if (bomb_count == 3) { cell_tochange.classList.add("bomb3"); }
    if (bomb_count == 4) { cell_tochange.classList.add("bomb4"); }
    if (bomb_count == 5) { cell_tochange.classList.add("bomb5"); }
    if (bomb_count == 6) { cell_tochange.classList.add("bomb6"); }
    if (bomb_count == 7) { cell_tochange.classList.add("bomb7"); }
    if (bomb_count == 8) { cell_tochange.classList.add("bomb8"); }
    return


};

function clear_map() {
    let oldtable = document.querySelector(".mapa");
    oldtable.innerHTML = "";

}
function update_score() {
    value = parseInt(score.innerHTML);
    score.innerHTML = value + 50;

};
function update_score_ticker(t) {
    value = parseInt(score.innerHTML);
    t
    score.innerHTML = value - 1;

}
// function startTimer(duration, display) {
//     document.getElementById("mapa").removeEventListener("click", startTimer);

//     var timer = duration, minutes, seconds;
//     setInterval(function () {
//         minutes = parseInt(timer / 60, 10)
//         seconds = parseInt(timer % 60, 10);

//         minutes = minutes < 10 ? "0" + minutes : minutes;
//         seconds = seconds < 10 ? "0" + seconds : seconds;

//         display.textContent = minutes + ":" + seconds;

//         if (--timer < 0) {
//             timer = duration;
//         }
//     }, 1000);
// }
;
function flag(id){
    let id_c = id
    var cell_tochange = document.getElementById(id_c);
    cell_tochange.classList.toggle("flag")
    // if (cell_tochange.classList.contains("flag")){cell_tochange.classList.remove("flag")}
    // if (cell_tochange.classList.contains("")){cell_tochange.classList.add("flag")}
}
function setting_menu(){
    document.getElementById("container_generator").classList.toggle("hidden");
}
function reveal_map(){
    for (let i=0; i<id_table.length;i++){
        //console.log(`${id_table[i].i}_${id_table[i].j}`)
        change_cell(`${id_table[i].i}_${id_table[i].j}`)
        
    }

}
