let table = document.querySelector("table.mapa");
let multi_table= document.querySelector("table.mapa1");
let map_generator = document.querySelector(".map_generator");

let titlo = document.querySelector("#titulo_jogo");
//let tr= document.createElement("tr");
let td = document.createElement("td");

let score = document.querySelector("#score");
let bomb_table = new Array();
let id_table = new Array();
//multiplayer
let bomb_table_1 = new Array();
let id_table_1 = new Array();
let multi=0;
//
var win = 0

let old_time=0
var bomb_count = 0;
let r = 8;
let c = 8;


table.addEventListener('contextmenu', e => {
  e.preventDefault();
});

function creat_map_aux() {
    localStorage.setItem("row", document.querySelector("#r").value);
    localStorage.setItem("col", document.querySelector("#c").value);
    localStorage.setItem("prob", document.querySelector("#prob").value);
    r = localStorage.getItem("row");
    c = localStorage.getItem("col");
    let prob = localStorage.getItem("prob");
    
    if(r>100 | c>100){alert("numero de linhas ou colunas excede 100");return}
    if(prob<0 | prob>101){alert("probabilidade não valida");return }
    return [r, c,prob]
};

//up is working
function creat_map(r, c,prob,mapa,s = 1) {
    bomb_table = new Array();id_table = new Array();
    
    let oldtable = document.querySelector(".mapa");
    if (s == 1) { r = creat_map_aux()[0]; c = creat_map_aux()[1];prob=creat_map_aux()[2] };
    if (oldtable.innerHTML !="") { oldtable.innerHTML = ""; };

    //console.log(`${r},${c}`)


    clear_map(".mapa") 
    for (let i = 0; i < r; i++) {
        let row = table.insertRow(i);
        for (let j = 0; j < c; j++) {
            let cell = row.insertCell(j);
            let id_cell = `${i}_${j}_0`
            cell.setAttribute("id", id_cell);
            cell.classList.add("hidden_cell")

            cell.setAttribute("onclick", "change_cell(this.id)")
            cell.setAttribute("oncontextmenu","flag(this.id)")


            if (Math.floor(Math.random() * 101) < prob) {
                bomb_table.push({ i: i, j: j,m:0 });
            }
            else(id_table.push({ i: i, j: j,m:0 })); 

        };
    };

    //----
    win = id_table.lengt
    //----
    if(multi==1){
        clear_map(".mapa1") 
        multi_table.innerHTML=""
        for (let i = 0; i < r; i++) {
            let row = multi_table.insertRow(i);
            for (let j = 0; j < c; j++) {
                let cell = row.insertCell(j);
                let id_cell = `${i}_${j}_1`
                cell.setAttribute("id", id_cell);
                cell.classList.add("hidden_cell")

                cell.setAttribute("onclick", "change_cell(this.id)")
                cell.setAttribute("oncontextmenu","flag(this.id)")
    
    
                if (Math.floor(Math.random() * 101) < prob) {
                    bomb_table.push({ i: i, j: j,m:1 });
                }
                else(id_table.push({ i: i, j: j,m:1 })); 

            };
        };

    }
    return bomb_table
};
function multiplayer(l=0){
    multi=1
    creat_map(r, c,prob,s = 1)

    document.getElementById("game_container").classList.add("game_container1")

    if (l==0){
        creat_map(r, c,prob,s = 1)}
}

function change_cell(id,g=1) {
    
    let id_c = id
    const cell_tochange = document.getElementById(id_c);
    if (cell_tochange==null){return}
    if (cell_tochange.classList.contains("flag")){return }
    if (cell_tochange.classList[0]!="hidden_cell"){ console.log("ja foi clicado");return }
    if (win==1){alert("Ganhaste")}
    win-=1

    split_id = id_c.split("_");
    let selected_cell = [parseInt(split_id[0],10), parseInt(split_id[1],10),parseInt(split_id[2],10)];
    for (let it = 0; it < bomb_table.length; it++) {
        if (bomb_table[it].i == selected_cell[0] && bomb_table[it].j == selected_cell[1] && bomb_table[it].m==selected_cell[2]){
            cell_tochange.classList.replace("hidden_cell","bomb")
            if(selected_cell[2]==1){return alert("jogador 2 perdeu"),multiplayer(l=1)}
            if(selected_cell[2]==0){return alert("jogador 1 perdeu"),creat_map(r,c)}
        }

        // if (bomb_table[it].i == selected_cell[0] && bomb_table[it].j == selected_cell[1]) {
        //     cell_tochange.classList.replace("hidden_cell","bomb");
        //     if(g==1){alert("clicked a bomb try again!");return creat_map(r,c)}
        //     return
        // }
    }
    bomb_count = 0;
    if(selected_cell[2]==0){
    for (let itb = 0; itb < bomb_table.length; itb++) {
        if (selected_cell[0] + 1 == bomb_table[itb].i && selected_cell[1] + 1 == bomb_table[itb].j && 0==bomb_table[itb].m) { bomb_count += 1; }
        if (selected_cell[0] + 1 == bomb_table[itb].i && selected_cell[1] == bomb_table[itb].j     && 0==bomb_table[itb].m) { bomb_count += 1; }
        if (selected_cell[0] + 1 == bomb_table[itb].i && selected_cell[1] - 1 == bomb_table[itb].j && 0==bomb_table[itb].m) { bomb_count += 1; }
        if (selected_cell[0] == bomb_table[itb].i && selected_cell[1] + 1 == bomb_table[itb].j     && 0==bomb_table[itb].m) { bomb_count += 1; }
        if (selected_cell[0] - 1 == bomb_table[itb].i && selected_cell[1] - 1 == bomb_table[itb].j && 0==bomb_table[itb].m) { bomb_count += 1; }
        if (selected_cell[0] - 1 == bomb_table[itb].i && selected_cell[1] + 1 == bomb_table[itb].j && 0==bomb_table[itb].m) { bomb_count += 1; }
        if (selected_cell[0] - 1 == bomb_table[itb].i && selected_cell[1] == bomb_table[itb].j     && 0==bomb_table[itb].m) { bomb_count += 1; }
        if (selected_cell[0] == bomb_table[itb].i && selected_cell[1] - 1 == bomb_table[itb].j     && 0==bomb_table[itb].m) { bomb_count += 1; }
    } }
    if(selected_cell[2]==1){
    for (let itb = 0; itb < bomb_table.length; itb++) {
        if (selected_cell[0] + 1 == bomb_table[itb].i && selected_cell[1] + 1 == bomb_table[itb].j && 1==bomb_table[itb].m) { bomb_count += 1; }
        if (selected_cell[0] + 1 == bomb_table[itb].i && selected_cell[1] == bomb_table[itb].j     && 1==bomb_table[itb].m) { bomb_count += 1; }
        if (selected_cell[0] + 1 == bomb_table[itb].i && selected_cell[1] - 1 == bomb_table[itb].j && 1==bomb_table[itb].m) { bomb_count += 1; }
        if (selected_cell[0] == bomb_table[itb].i && selected_cell[1] + 1 == bomb_table[itb].j     && 1==bomb_table[itb].m) { bomb_count += 1; }
        if (selected_cell[0] - 1 == bomb_table[itb].i && selected_cell[1] - 1 == bomb_table[itb].j && 1==bomb_table[itb].m) { bomb_count += 1; }
        if (selected_cell[0] - 1 == bomb_table[itb].i && selected_cell[1] + 1 == bomb_table[itb].j && 1==bomb_table[itb].m) { bomb_count += 1; }
        if (selected_cell[0] - 1 == bomb_table[itb].i && selected_cell[1] == bomb_table[itb].j     && 1==bomb_table[itb].m) { bomb_count += 1; }
        if (selected_cell[0] == bomb_table[itb].i && selected_cell[1] - 1 == bomb_table[itb].j     && 1==bomb_table[itb].m) { bomb_count += 1; }
    } }  
    
    //console.log(`bombas volta:${bomb_count}`)
    if (bomb_count == 0) { cell_tochange.classList.replace("hidden_cell","bomb0"); }
    if (bomb_count == 1) { cell_tochange.classList.replace("hidden_cell","bomb1"); }
    if (bomb_count == 2) { cell_tochange.classList.replace("hidden_cell","bomb2"); }
    if (bomb_count == 3) { cell_tochange.classList.replace("hidden_cell","bomb3"); }
    if (bomb_count == 4) { cell_tochange.classList.replace("hidden_cell","bomb4"); }
    if (bomb_count == 5) { cell_tochange.classList.replace("hidden_cell","bomb5"); }
    if (bomb_count == 6) { cell_tochange.classList.replace("hidden_cell","bomb6"); }
    if (bomb_count == 7) { cell_tochange.classList.replace("hidden_cell","bomb7"); }
    if (bomb_count == 8) { cell_tochange.classList.replace("hidden_cell","bomb8"); }
    return cell_tochange.classList[0]=0
}

function clear_map(mapa) {
    let oldtable = document.querySelector(mapa);
    oldtable.innerHTML = "";
}
function update_score() {

    currentDate.getSeconds();
    value = parseInt(score.innerHTML);
    score.innerHTML = value + 50;

}
function update_score_ticker() {
    if (old_time==0){old_time=currentDate.getSeconds()}
    if(oldtime-currentDate.getSeconds()==1){old_time=currentDate.getSeconds();time-=1}
    score.innerHTML=time
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
        change_cell(`${id_table[i].i}_${id_table[i].j}_${id_table[i].m}`)
    }

}
// while (true){update_score_ticker(),console.log("running")
// if(time==0){break}}