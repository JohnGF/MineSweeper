document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    
    let id_k =`${x}_${y}_${mapa}`
    let cell_tochange=document.getElementById(id_k)
    console.log(keyName)
    if(cell_tochange.classList[1]!="selec_keyboard"){cell_tochange.classList.toggle("selec_keyboard")}
    console.log(id_k)
    if (keyName === 'ArrowDown') {
        if (x<r){x+=1}
        cell_tochange.classList.toggle("selec_keyboard")
        id_k =`${x}_${y}_${mapa}`
        cell_tochange=document.getElementById(id_k)
        cell_tochange.classList.toggle("selec_keyboard")
        return console.log(id_k);
      }
    if (keyName === 'ArrowUp') {
        if (x>0){x-=1}
        cell_tochange.classList.toggle("selec_keyboard")
        id_k =`${x}_${y}_${mapa}`
        cell_tochange=document.getElementById(id_k)
        cell_tochange.classList.toggle("selec_keyboard")
        return console.log(id_k);
    }
    if (keyName === 'ArrowLeft') {
        if (y>0){y-=1}
        cell_tochange.classList.toggle("selec_keyboard")
        id_k =`${x}_${y}_${mapa}`
        cell_tochange=document.getElementById(id_k)
        cell_tochange.classList.toggle("selec_keyboard")
        return console.log(id_k);
    }
    if (keyName === 'ArrowRight') {
    
        if (y<c){y+=1}
        cell_tochange.classList.toggle("selec_keyboard")
        id_k =`${x}_${y}_${mapa}`
        cell_tochange=document.getElementById(id_k)
        cell_tochange.classList.toggle("selec_keyboard")
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

document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    
    let id_k =`${x}_${y}_${mapa}`
    document.getElementById(id_k)
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
function flag(id){
    let id_c = id


    var cell_tochange = document.getElementById(id_c);
    if (cell_tochange.classList[0]!="hidden_cell"){ console.log("ja foi clicado");return }
    //
    if (selector==2){cell_tochange.classList.toggle("flag_question");selector=3}
    if (selector==1){cell_tochange.classList.toggle("flag"),cell_tochange.classList.toggle("flag_question");selector=2}
    if (selector==0){cell_tochange.classList.toggle("flag");selector=1}
    if (selector==3){selector=0}

    document.getElementById("bomb_count_flag").innerHTML=`Bombas sem bandeira:${bomb_table.length-document.getElementsByClassName("flag").length}`
    // if (cell_tochange.classList.contains("flag")){cell_tochange.classList.remove("flag")}
    // if (cell_tochange.classList.contains("")){cell_tochange.classList.add("flag")}
    // console.log(cell_tochange.classList)
    // if(cell_tochange.classList[1]=="flag_question"){cell_tochange.classList.remove("flag_question")}
    // if(cell_tochange.classList[1]=="flag"){cell_tochange.classList.remove("flag");cell_tochange.classList.add("flag_question")}
    // if (cell_tochange.classList[0]=="hidden_cell"){cell_tochange.classList.add("flag")}
}

if (cell_tochange.classList[0]!="hidden_cell"){ console.log("ja foi clicado") }
if (cell_tochange.classList.contains("flag_question")){cell_tochange.classList.toggle("flag_question")}
if (cell_tochange.classList.contains("flag")){cell_tochange.classList.toggle("flag"),cell_tochange.classList.toggle("flag_question");selector=2}
if (cell_tochange.classList.length==1){cell_tochange.classList.toggle("flag")} 

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
if(special==1){
    let random=Math.floor(Math.random() * 101)
    if(0<random<25){t=0}
    else if(25<random<50){t=1}
    else if(50<random<75){t=2}
    else if(75<random<100){t=3}}

    if(special=1){
        let b_type=bomb_table[it].t
        if (b_type==0){console.log("normal bomb"),cell_tochange.classList.replace("hidden_cell","bomb")}
        if (b_type==1){console.log("bomb-1"),cell_tochange.classList.replace("hidden_cell","bomb-1")}
        if (b_type==2){console.log("bomb-2"),cell_tochange.classList.replace("hidden_cell","bomb-2")}
        if (b_type==3){console.log("bomb-3"),cell_tochange.classList.replace("hidden_cell","bomb-3")}
    }
////
let table = document.querySelector("table.mapa");
let multi_table = document.querySelector("table.mapa1");
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
let multi = 0;

//timer
var win = 0

let old_time = 0
var bomb_count = 0;
let r = 9;
let c = 9;
let SList = new Array();
let f_click = 0
let win_condition = 0
let s = 0
let sec = 0
let id_timer = 0
let timer_star = document.createElement("div")
//keyboard
let x = 0
let y = 0
let mapa = 0
//flag
let selector = 0
let idc = 0
//present log in
user_v = String()
//Special Game mode
let life = Number();
let special = 0;
let b = 0 //block play
let hist_jogos = new Array()
function special_togle() {
    if (special == 0) { special = 1; return }
    else { special = 0; return }

}
if (table != null) {
    table.addEventListener('contextmenu', e => {
        e.preventDefault();
    })
}

function login() {
    let user = document.getElementById("user")
    let pass = document.getElementById("pass")
    let form = document.getElementById("form")
    localStorage.setItem("user", user.value)
    localStorage.setItem("pass", pass.value)
    let welcome = document.createElement("div")
    welcome.classList.add("welcome")
    user_v = user.value
    welcome.innerHTML = `Bem vindo ${user.value}`
    form.innerHTML = ""
    form.append(welcome)


}
function first_click() {

};
function explorer(SList) {
    id = SList.shift()
    split_id = id.split("_");
    let selected_cell = [parseInt(split_id[0], 10), parseInt(split_id[1], 10), parseInt(split_id[2], 10)];
    //console.log(selected_cell)
    change_cell(`${selected_cell[0] + 1}_${selected_cell[1]}_${selected_cell[2]}`)
    change_cell(`${selected_cell[0]}_${selected_cell[1] + 1}_${selected_cell[2]}`)
    change_cell(`${selected_cell[0] + 1}_${selected_cell[1] + 1}_${selected_cell[2]}`)

    change_cell(`${selected_cell[0] - 1}_${selected_cell[1]}_${selected_cell[2]}`)
    change_cell(`${selected_cell[0]}_${selected_cell[1] - 1}_${selected_cell[2]}`)
    change_cell(`${selected_cell[0] - 1}_${selected_cell[1] - 1}_${selected_cell[2]}`)

    change_cell(`${selected_cell[0] + 1}_${selected_cell[1] - 1}_${selected_cell[2]}`)
    change_cell(`${selected_cell[0] - 1}_${selected_cell[1] + 1}_${selected_cell[2]}`)

};
function creat_map_aux() {
    localStorage.setItem("row", document.querySelector("#r").value);
    localStorage.setItem("col", document.querySelector("#c").value);
    localStorage.setItem("prob", document.querySelector("#prob").value);
    //localStorage.setItem("prob", document.querySelector("#prob").value); por tempo
    r = localStorage.getItem("row");
    c = localStorage.getItem("col");
    let prob = localStorage.getItem("prob");
    if (r == "" && c == "" && prob == "") {
        r = 9; c = 9; prob = 25
        s = 0
    }

    if (r > 100 | c > 100) { alert("numero de linhas ou colunas excede 100"); return }
    if (prob < 0 | prob > 101) { alert("probabilidade n??o valida"); return }
    return [r, c, prob]
};

//up is working
function creat_map(r, c, prob, mapa, s = 1) {

    bomb_table = new Array(); id_table = new Array(); f_click = 0; sec = 0; clearInterval(id_timer); timer.innerHTML = `Tempo:0`; x = 0; y = 0; let random = 0, b = 0

    let oldtable = document.querySelector(".mapa");
    if (s == 1) { r = creat_map_aux()[0]; c = creat_map_aux()[1]; prob = creat_map_aux()[2] };
    if (oldtable.innerHTML != "") { oldtable.innerHTML = ""; };
    table.appendChild(timer_star)

    //console.log(`${r},${c}`)


    clear_map(".mapa")
    if (special == 1) {
        life = 5
        for (let i = 0; i < r; i++) {
            let row = table.insertRow(i);
            for (let j = 0; j < c; j++) {
                let cell = row.insertCell(j);
                let id_cell = `${i}_${j}_0`
                cell.setAttribute("id", id_cell);
                cell.classList.add("hidden_cell")

                cell.setAttribute("onclick", "change_cell(this.id)")
                cell.setAttribute("oncontextmenu", "flag(this.id)")

                if (Math.floor(Math.random() * 101) < prob) {
                    random = (Math.floor(Math.random() * 101))

                    if (0 < random && random < 25) { bomb_table.push({ i: i, j: j, m: 0, p: 0 }) }
                    else if (25 < random && random < 50) { bomb_table.push({ i: i, j: j, m: 0, p: 1 }) }
                    else if (50 < random && random < 75) { bomb_table.push({ i: i, j: j, m: 0, p: 2 }) }
                    else { bomb_table.push({ i: i, j: j, m: 0, p: 3 }) }
                    //bomb_table.push({ i: i, j: j,m:0 });
                }
                else (id_table.push({ i: i, j: j, m: 0 }));

            };
        };
    }
    else {
        for (let i = 0; i < r; i++) {
            let row = table.insertRow(i);
            for (let j = 0; j < c; j++) {
                let cell = row.insertCell(j);
                let id_cell = `${i}_${j}_0`
                cell.setAttribute("id", id_cell);
                cell.classList.add("hidden_cell")

                cell.setAttribute("onclick", "change_cell(this.id)")
                cell.setAttribute("oncontextmenu", "flag(this.id)")

                if (Math.floor(Math.random() * 101) < prob) {
                    bomb_table.push({ i: i, j: j, m: 0 });
                }
                else (id_table.push({ i: i, j: j, m: 0 }));

            };
        };

    }

    //----
    win = id_table.lengt
    //----
    if (multi == 1) {
        clear_map(".mapa1")
        multi_table.innerHTML = ""
        for (let i = 0; i < r; i++) {
            let row = multi_table.insertRow(i);
            for (let j = 0; j < c; j++) {
                let cell = row.insertCell(j);
                let id_cell = `${i}_${j}_1`
                cell.setAttribute("id", id_cell);
                cell.classList.add("hidden_cell")

                cell.setAttribute("onclick", "change_cell(this.id)")
                cell.setAttribute("oncontextmenu", "flag(this.id)")

                if (Math.floor(Math.random() * 101) < prob) {
                    bomb_table.push({ i: i, j: j, m: 1 });
                }
                else (id_table.push({ i: i, j: j, m: 1 }));

            };
        };

    }
    return bomb_table
};
function multiplayer(l = 0) {
    multi = 1
    creat_map(r, c, prob, s = 1)
    document.getElementById("game_container").classList.add("game_container1")

    if (l == 0) {
        creat_map(r, c, prob, s = 1)
    }
}

function change_cell(id) {
    if (b == 1) { return }
    if (f_click == 0) { id_timer = setInterval(timer_f, 1000); } //conta tempo
    //if (f_click==0){const id_timer=setInterval(coundown(time),time*1000)} //cronometra
    let id_c = id
    const cell_tochange = document.getElementById(id_c);
    if (cell_tochange == null) { return }
    if (cell_tochange.classList.contains("flag")) { return }
    if (cell_tochange.classList.contains("flag_question")) { return }
    if (cell_tochange.classList[0] != "hidden_cell") { return }
    if (win == 1) { alert("Ganhaste") }

    split_id = id_c.split("_");
    let selected_cell = [parseInt(split_id[0], 10), parseInt(split_id[1], 10), parseInt(split_id[2], 10)];
    for (let it = 0; it < bomb_table.length; it++) {
        if (bomb_table[it].i == selected_cell[0] && bomb_table[it].j == selected_cell[1] && bomb_table[it].m == selected_cell[2]) {
            if (f_click == 0) {
                creat_map(r, c)
                change_cell(id)
                return
            }
            else {
                if (special == 1) {
                    if (bomb_table[it].p == 0) { cell_tochange.classList.replace("hidden_cell", "bomb-0"), life = life - 1 }
                    else if (bomb_table[it].p == 1) { cell_tochange.classList.replace("hidden_cell", "bomb-1"), life = life - 2 }
                    else if (bomb_table[it].p == 2) { cell_tochange.classList.replace("hidden_cell", "bomb-2"), life = life - 3 }
                    else if (bomb_table[it].p == 3) { cell_tochange.classList.replace("hidden_cell", "bomb-3"), life = life - 4 }
                    if (life <= 0) { b = 1; alert("perdeste"); hist_jogos.push({ user: localStorage.getItem("user"), score: sec, modo: "Diferenciado" }), localStorage.setItem("hist_jogos", JSON.stringify(hist_jogos)) }
                }
                else { cell_tochange.classList.replace("hidden_cell", "bomb"), b = 1 }

                if (special == 0) {
                    hist_jogos.push({ user: localStorage.getItem("user"), score: sec, modo: "classic" })
                    
                    cell_tochange.classList.replace("hidden_cell", "bomb")
                    clearInterval(id_timer);
                    if (multi == 1) {
                        if (selected_cell[2] == 1) { return alert("jogador 2 perdeu"), multiplayer(l = 1), hist_jogos.push({ user: "user1", score: sec, modo: "multiplayer" }), localStorage.setItem("hist_jogos", JSON.stringify(hist_jogos)) }
                        if (selected_cell[2] == 0) { return alert("jogador 1 perdeu"), creat_map(r, c), hist_jogos.push({ user: "user2", score: sec, modo: "multiplayer" }), localStorage.setItem("hist_jogos", JSON.stringify(hist_jogos)) }
                    }
                    else{localStorage.setItem("hist_jogos", JSON.stringify(hist_jogos))}
                }
            }

        }

        f_click = 1
        bomb_count = 0;
        if (selected_cell[2] == 0) {
            for (let itb = 0; itb < bomb_table.length; itb++) {
                if (selected_cell[0] + 1 == bomb_table[itb].i && selected_cell[1] + 1 == bomb_table[itb].j && 0 == bomb_table[itb].m) { bomb_count += 1; }
                if (selected_cell[0] + 1 == bomb_table[itb].i && selected_cell[1] == bomb_table[itb].j && 0 == bomb_table[itb].m) { bomb_count += 1; }
                if (selected_cell[0] + 1 == bomb_table[itb].i && selected_cell[1] - 1 == bomb_table[itb].j && 0 == bomb_table[itb].m) { bomb_count += 1; }
                if (selected_cell[0] == bomb_table[itb].i && selected_cell[1] + 1 == bomb_table[itb].j && 0 == bomb_table[itb].m) { bomb_count += 1; }
                if (selected_cell[0] - 1 == bomb_table[itb].i && selected_cell[1] - 1 == bomb_table[itb].j && 0 == bomb_table[itb].m) { bomb_count += 1; }
                if (selected_cell[0] - 1 == bomb_table[itb].i && selected_cell[1] + 1 == bomb_table[itb].j && 0 == bomb_table[itb].m) { bomb_count += 1; }
                if (selected_cell[0] - 1 == bomb_table[itb].i && selected_cell[1] == bomb_table[itb].j && 0 == bomb_table[itb].m) { bomb_count += 1; }
                if (selected_cell[0] == bomb_table[itb].i && selected_cell[1] - 1 == bomb_table[itb].j && 0 == bomb_table[itb].m) { bomb_count += 1; }
            }
        }
        if (selected_cell[2] == 1) {
            for (let itb = 0; itb < bomb_table.length; itb++) {
                if (selected_cell[0] + 1 == bomb_table[itb].i && selected_cell[1] + 1 == bomb_table[itb].j && 1 == bomb_table[itb].m) { bomb_count += 1; }
                if (selected_cell[0] + 1 == bomb_table[itb].i && selected_cell[1] == bomb_table[itb].j && 1 == bomb_table[itb].m) { bomb_count += 1; }
                if (selected_cell[0] + 1 == bomb_table[itb].i && selected_cell[1] - 1 == bomb_table[itb].j && 1 == bomb_table[itb].m) { bomb_count += 1; }
                if (selected_cell[0] == bomb_table[itb].i && selected_cell[1] + 1 == bomb_table[itb].j && 1 == bomb_table[itb].m) { bomb_count += 1; }
                if (selected_cell[0] - 1 == bomb_table[itb].i && selected_cell[1] - 1 == bomb_table[itb].j && 1 == bomb_table[itb].m) { bomb_count += 1; }
                if (selected_cell[0] - 1 == bomb_table[itb].i && selected_cell[1] + 1 == bomb_table[itb].j && 1 == bomb_table[itb].m) { bomb_count += 1; }
                if (selected_cell[0] - 1 == bomb_table[itb].i && selected_cell[1] == bomb_table[itb].j && 1 == bomb_table[itb].m) { bomb_count += 1; }
                if (selected_cell[0] == bomb_table[itb].i && selected_cell[1] - 1 == bomb_table[itb].j && 1 == bomb_table[itb].m) { bomb_count += 1; }
            }
        }

        //console.log(`bombas volta:${bomb_count}`)
        if (bomb_count == 0) { cell_tochange.classList.replace("hidden_cell", "bomb0"); SList.push(id); explorer(SList) }
        if (bomb_count == 1) { cell_tochange.classList.replace("hidden_cell", "bomb1"); }
        if (bomb_count == 2) { cell_tochange.classList.replace("hidden_cell", "bomb2"); }
        if (bomb_count == 3) { cell_tochange.classList.replace("hidden_cell", "bomb3"); }
        if (bomb_count == 4) { cell_tochange.classList.replace("hidden_cell", "bomb4"); }
        if (bomb_count == 5) { cell_tochange.classList.replace("hidden_cell", "bomb5"); }
        if (bomb_count == 6) { cell_tochange.classList.replace("hidden_cell", "bomb6"); }
        if (bomb_count == 7) { cell_tochange.classList.replace("hidden_cell", "bomb7"); }
        if (bomb_count == 8) { cell_tochange.classList.replace("hidden_cell", "bomb8"); }
        win_condition = win_condition + 1

        if (document.getElementsByClassName("hidden_cell").length == bomb_table.length) { alert("Parab??ns GANHAS-TE"); localStorage.setItem("score", `${sec},${user_v}`) }//creat_map(r,c,prob,s)}
        document.getElementById("bomb_count").innerHTML = `N??mero de Bombas:${bomb_table.length}`
        return bomb_count = 0
    }
}
function timer_f() {
    sec = sec + 1
    timer.innerHTML = `Tempo:${sec}`
}
function coundown(sec) {
    sec = sec - 1
    timer.innerHTML = `Tempo:${sec}`
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
    if (old_time == 0) { old_time = currentDate.getSeconds() }
    if (oldtime - currentDate.getSeconds() == 1) { old_time = currentDate.getSeconds(); time -= 1 }
    score.innerHTML = time
}


function flag(id) {
    let id_c = id
    if (idc != id) { idc = id; selector = 0 }



    var cell_tochange = document.getElementById(id_c);
    if (cell_tochange.classList[0] != "hidden_cell") { return }

    if (selector == 2) { cell_tochange.classList.toggle("flag_question"); selector = 3 }
    if (selector == 1) { cell_tochange.classList.toggle("flag"), cell_tochange.classList.toggle("flag_question"); selector = 2 }
    if (selector == 0) { cell_tochange.classList.toggle("flag"); selector = 1 }
    if (selector == 3) { selector = 0 }

    document.getElementById("bomb_count_flag").innerHTML = `Bombas sem bandeira:${bomb_table.length - document.getElementsByClassName("flag").length}`
}
function flag_q(id) {
    let id_c = id
    var cell_tochange = document.getElementById(id_c);
    if (cell_tochange.classList[0] != "hidden_cell") { return }
    cell_tochange.classList.toggle("flag_question")
}
function setting_menu() {
    document.getElementById("container_generator").classList.toggle("hidden");
}
function reveal_map() {
    for (let i = 0; i < id_table.length; i++) {
        //console.log(`${id_table[i].i}_${id_table[i].j}`)
        change_cell(`${id_table[i].i}_${id_table[i].j}_${id_table[i].m}`)
        clearInterval(id_timer)
    }
}
//keyboard input
document.addEventListener('keydown', (event) => {
    const keyName = event.key;

    let id_k = `${x}_${y}_${mapa}`
    let cell_tochange = document.getElementById(id_k)
    //console.log(keyName)
    if (cell_tochange.classList[1] != "selec_keyboard") { cell_tochange.classList.toggle("selec_keyboard") }
    //console.log(id_k)
    if (keyName === 'ArrowDown') {
        if (x < r) { x += 1 }
        cell_tochange.classList.toggle("selec_keyboard")
        id_k = `${x}_${y}_${mapa}`
        cell_tochange = document.getElementById(id_k)
        cell_tochange.classList.toggle("selec_keyboard")
        //return console.log(id_k);
    }
    else if (keyName === 'ArrowUp') {
        if (x > 0) { x -= 1 }
        cell_tochange.classList.toggle("selec_keyboard")
        id_k = `${x}_${y}_${mapa}`
        cell_tochange = document.getElementById(id_k)
        cell_tochange.classList.toggle("selec_keyboard")
        //return console.log(id_k);
    }
    else if (keyName === 'ArrowLeft') {
        if (y > 0) { y -= 1 }
        cell_tochange.classList.toggle("selec_keyboard")
        id_k = `${x}_${y}_${mapa}`
        cell_tochange = document.getElementById(id_k)
        cell_tochange.classList.toggle("selec_keyboard")
        //return console.log(id_k);
    }
    else if (keyName === 'ArrowRight') {

        if (y < c) { y += 1 }
        cell_tochange.classList.toggle("selec_keyboard")
        id_k = `${x}_${y}_${mapa}`
        cell_tochange = document.getElementById(id_k)
        cell_tochange.classList.toggle("selec_keyboard")
        //return console.log(id_k);
    }
    else if (keyName === "Control") {
        flag(id_k)
    }
    else if (keyName === ' ') {
        change_cell(id_k)
    }
    else { if (cell_tochange.classList[1] == "selec_keyboard") { cell_tochange.classList.toggle("selec_keyboard") } }
})
function update_table() {


    let tabelaAntiga = document.getElementsByClassName("table_score")[0];


    let tabelaNova = document.createElement("table");
    tabelaNova.setAttribute("class", "table_score");

    let linhaTabela = document.createElement("tr");
    linhaTabela.innerHTML = "<th>#</th>" +
        "<th>Nome</th>" +
        "<th>Score</th>" +
        "<th>Modo de Jogo</th>"

    tabelaNova.appendChild(linhaTabela);
    //user=getItem("user")
    let numeroEncomenda = 1;
    for (let hist_jogo of hist_jogos) {

        // Uma linha de dados por cada encomenda no hist??rico.
        linhaTabela = document.createElement("tr");
        linhaTabela.innerHTML = "<td>" + numeroEncomenda + "</td>" +
            "<td>" + hist_jogo.user + "</td>" +
            "<td>" + hist_jogo.score + "</td>" +
            "<td>" + hist_jogo.modo + "</td>" +

            tabelaNova.appendChild(linhaTabela);
        numeroEncomenda++;
    }

    // Substitui a tabela antiga pela nova.
    tabelaAntiga.parentNode.replaceChild(tabelaNova, tabelaAntiga);

}

function delete_table() {
    document.getElementsByClassName(table_score).innerHTML = ""
}
