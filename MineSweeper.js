let table = document.querySelector("table.mapa");
let multi_table= document.querySelector("table.mapa1");
let map_generator = document.querySelector(".map_generator");

//board generation
let titlo = document.querySelector("#titulo_jogo");
//let tr= document.createElement("tr");
let td = document.createElement("td");
let score = document.querySelector("#score");
let timer = document.querySelector("#timer");
let bomb_table = new Array();
let id_table = new Array();
//multiplayer
let bomb_table_1 = new Array();
let id_table_1 = new Array();
let multi=0;

//timer
var win = 0

let old_time=0
var bomb_count = 0;
let r = 9;
let c = 9;
let SList=new Array();
let f_click=0
let win_condition=0
let s=0
let sec=0
let id_timer=0
let timer_star = document.createElement("div")
//keyboard
let x=0
let y=0
let mapa=0


table.addEventListener('contextmenu', e => {
  e.preventDefault();
});
function first_click(){

};
function explorer(SList) {
    id=SList.shift()
    split_id = id.split("_");
    let selected_cell = [parseInt(split_id[0],10), parseInt(split_id[1],10),parseInt(split_id[2],10)];
    //console.log(selected_cell)
    change_cell(`${selected_cell[0]+1}_${selected_cell[1]}_${selected_cell[2]}`)
    change_cell(`${selected_cell[0]}_${selected_cell[1]+1}_${selected_cell[2]}`)
    change_cell(`${selected_cell[0]+1}_${selected_cell[1]+1}_${selected_cell[2]}`)

    change_cell(`${selected_cell[0]-1}_${selected_cell[1]}_${selected_cell[2]}`)
    change_cell(`${selected_cell[0]}_${selected_cell[1]-1}_${selected_cell[2]}`)
    change_cell(`${selected_cell[0]-1}_${selected_cell[1]-1}_${selected_cell[2]}`)

    change_cell(`${selected_cell[0]+1}_${selected_cell[1]-1}_${selected_cell[2]}`)
    change_cell(`${selected_cell[0]-1}_${selected_cell[1]+1}_${selected_cell[2]}`)

};
function creat_map_aux() {
    localStorage.setItem("row", document.querySelector("#r").value);
    localStorage.setItem("col", document.querySelector("#c").value);
    localStorage.setItem("prob", document.querySelector("#prob").value);
    //localStorage.setItem("prob", document.querySelector("#prob").value); por tempo
    r = localStorage.getItem("row");
    c = localStorage.getItem("col");
    let prob = localStorage.getItem("prob");
    if(r=="" && c==""&& prob=="") {
        r=9;c=9;prob=25
        s=0
    }
   
    if(r>100 | c>100){alert("numero de linhas ou colunas excede 100");return}
    if(prob<0 | prob>101){alert("probabilidade não valida");return }
    return [r, c,prob]
};

//up is working
function creat_map(r, c,prob,mapa,s = 1) {
    
    bomb_table = new Array();id_table = new Array();f_click=0;sec=0;clearInterval(id_timer);timer.innerHTML=`Tempo:0`;x=0;y=0;
    
    let oldtable = document.querySelector(".mapa");
    if (s == 1) { r = creat_map_aux()[0]; c = creat_map_aux()[1];prob=creat_map_aux()[2] };
    if (oldtable.innerHTML !="") { oldtable.innerHTML = ""; };
    table.appendChild(timer_star)

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
    if (f_click==0){id_timer=setInterval(timer_f,1000);} //conta tempo
    //if (f_click==0){const id_timer=setInterval(coundown(time),time*1000)} //cronometra
    let id_c = id
    const cell_tochange = document.getElementById(id_c);
    if (cell_tochange==null){return}
    if (cell_tochange.classList.contains("flag")){return }
    if (cell_tochange.classList[0]!="hidden_cell"){ console.log("ja foi clicado");return }
    if (win==1){alert("Ganhaste")}
    
    split_id = id_c.split("_");
    let selected_cell = [parseInt(split_id[0],10), parseInt(split_id[1],10),parseInt(split_id[2],10)];
    for (let it = 0; it < bomb_table.length; it++) {
        if (bomb_table[it].i == selected_cell[0] && bomb_table[it].j == selected_cell[1] && bomb_table[it].m==selected_cell[2]){
            if (f_click==0){
                creat_map(r,c)
                change_cell(id)
                return
            }
            cell_tochange.classList.replace("hidden_cell","bomb")
            clearInterval(id_timer);
            if(selected_cell[2]==1){return alert("jogador 2 perdeu"),multiplayer(l=1)}
            if(selected_cell[2]==0){return alert("jogador 1 perdeu"),creat_map(r,c)}
        }
        

    }

    f_click=1
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
    if (bomb_count == 0) { cell_tochange.classList.replace("hidden_cell","bomb0");SList.push(id);explorer(SList) }
    if (bomb_count == 1) { cell_tochange.classList.replace("hidden_cell","bomb1"); }
    if (bomb_count == 2) { cell_tochange.classList.replace("hidden_cell","bomb2"); }
    if (bomb_count == 3) { cell_tochange.classList.replace("hidden_cell","bomb3"); }
    if (bomb_count == 4) { cell_tochange.classList.replace("hidden_cell","bomb4"); }
    if (bomb_count == 5) { cell_tochange.classList.replace("hidden_cell","bomb5"); }
    if (bomb_count == 6) { cell_tochange.classList.replace("hidden_cell","bomb6"); }
    if (bomb_count == 7) { cell_tochange.classList.replace("hidden_cell","bomb7"); }
    if (bomb_count == 8) { cell_tochange.classList.replace("hidden_cell","bomb8"); }
    win_condition=win_condition+1

    if(document.getElementsByClassName("hidden_cell").length==bomb_table.length){alert("Parabéns GANHAS-TE");}//creat_map(r,c,prob,s)}
    document.getElementById("bomb_count").innerHTML=`Número de Bombas:${bomb_table.length}` 
    return //cell_tochange.classList[0]=0
}
function timer_f(){
    sec=sec+1
    timer.innerHTML=`Tempo:${sec}`
}
function coundown(sec){
    sec=sec-1
    timer.innerHTML=`Tempo:${sec}`
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


function flag(id){
    let id_c = id
    var cell_tochange = document.getElementById(id_c);
    if (cell_tochange.classList[0]!="hidden_cell"){ console.log("ja foi clicado");return }
    cell_tochange.classList.toggle("flag")
    document.getElementById("bomb_count_flag").innerHTML=`Bombas com bandeira:${bomb_table.length-document.getElementsByClassName("flag").length}`
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
        clearInterval(id_timer)
    }
}
//keyboard input
document.addEventListener('keydown', (event) => {
    const keyName = event.key;

    let id_k =`${x}_${y}_${mapa}`
    console.log(keyName)
    if(document.getElementById(id_k).classList[1]=="selec_keyboard")
    {document.getElementById(id_k).classList.remove("selec_keyboard")}
    else{document.getElementById(id_k).classList.add("selec_keyboard")}
    console.log(id_k)
    if (keyName === 'ArrowDown') {
        if (x<r){x+=1}
        if(document.getElementById(id_k).classList[1]=="selec_keyboard")
        {document.getElementById(id_k).classList.remove("selec_keyboard")}
        id_k =`${x}_${y}_${mapa}`
        document.getElementById(id_k).classList.add("selec_keyboard")
        return console.log(id_k);
      }
    if (keyName === 'ArrowUp') {
        if (x>0){x-=1}
        if(document.getElementById(id_k).classList[1]=="selec_keyboard")
        {document.getElementById(id_k).classList.remove("selec_keyboard")}

        id_k =`${x}_${y}_${mapa}`
        document.getElementById(id_k).classList.add("selec_keyboard")
        return console.log(id_k);
    }
    if (keyName === 'ArrowLeft') {
        if (y>0){y-=1}
        if(document.getElementById(id_k).classList[1]=="selec_keyboard")
        {document.getElementById(id_k).classList.remove("selec_keyboard")}

        id_k =`${x}_${y}_${mapa}`
        document.getElementById(id_k).classList.add("selec_keyboard")
        return console.log(id_k);
    }
    if (keyName === 'ArrowRight') {
    
        if (y<c){y+=1}
        if(document.getElementById(id_k).classList[1]=="selec_keyboard")
        {document.getElementById(id_k).classList.remove("selec_keyboard")}
        id_k =`${x}_${y}_${mapa}`
        document.getElementById(id_k).classList.add("selec_keyboard")
        return console.log(id_k);
    }
    if (event.ctrlKey) {
        if (keyName === ' ') {
            flag(id_k)
        }
    if (keyName === ' ') {
            change_cell(id_k)



    }
    }
})

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

// while (true){update_score_ticker(),console.log("running")
// if(time==0){break}}
