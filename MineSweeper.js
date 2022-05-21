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
let p = 0
let bomb_table_1 = new Array();
let id_table_1 = new Array();
let multi = 0;
let id_timer1 = 0 //para countdowns
let id_timer2 = 0
let time1 = document.createElement("div")
let time2 = document.createElement("div")
time1.setAttribute("id", "time_multi")
time2.setAttribute("id", "time_multi")
let timeout = 60
let timeout1 = 60
let timeout2 = 60
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
let random = 0
let special = 0;
let b = 0   //block play
let img = document.createElement("img");
img.setAttribute("id", "life_counter")
//
let music=new Audio()
let kirby=new Audio("resources/music/Kirby dream land theme song.ogg")
let bethoven=new Audio("resources/music/Beethoven Sonata No 23 Appassionata 3rd Movement.mp3")
let starwars=new Audio("resources/music/Star Wars - The Imperial March.ogg")
let hist_jogos = new Array()
function isPlaying(audelem) { return !audelem.paused; }
if (hist_jogos = JSON.parse(localStorage.getItem("hist_jogos")) != []) { hist_jogos = JSON.parse(localStorage.getItem("hist_jogos")) }

function special_togle() {
    if (special == 0) { special = 1; return }
    else { special = 0; return }
}

if (table != null) {
    table.addEventListener('contextmenu', e => {
        e.preventDefault();
    })
}
function check_loging() {
    if (localStorage.getItem("user") == null) { window.location = "login_special.html" }

}
function check_loging_s() {
    if (localStorage.getItem("user") == null) { window.location = "login_special.html" }
    else{window.location = "login_special_on.html" }
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
    let btt = document.createElement("button")
    btt.innerHTML = "logoff"
    btt.addEventListener("click", () => { localStorage.removeItem("user"); location.reload(); })
    form.append(btt)
    window.location = "index.html"

}

function explorer(SList) {
    id = SList.shift()
    split_id = id.split("_");
    let selected_cell = [parseInt(split_id[0], 10), parseInt(split_id[1], 10), parseInt(split_id[2], 10)];
    //console.log(selected_cell)
    change_cell(`${selected_cell[0] + 1}_${selected_cell[1]}_${selected_cell[2]}`, open = 1)
    change_cell(`${selected_cell[0]}_${selected_cell[1] + 1}_${selected_cell[2]}`, open = 1)
    change_cell(`${selected_cell[0] + 1}_${selected_cell[1] + 1}_${selected_cell[2]}`, open = 1)

    change_cell(`${selected_cell[0] - 1}_${selected_cell[1]}_${selected_cell[2]}`, open = 1)
    change_cell(`${selected_cell[0]}_${selected_cell[1] - 1}_${selected_cell[2]}`, open = 1)
    change_cell(`${selected_cell[0] - 1}_${selected_cell[1] - 1}_${selected_cell[2]}`, open = 1)

    change_cell(`${selected_cell[0] + 1}_${selected_cell[1] - 1}_${selected_cell[2]}`, open = 1)
    change_cell(`${selected_cell[0] - 1}_${selected_cell[1] + 1}_${selected_cell[2]}`, open = 1)

};
function creat_map_aux() {
    localStorage.setItem("row", document.querySelector("#r").value);
    localStorage.setItem("col", document.querySelector("#c").value);
    localStorage.setItem("prob", document.querySelector("#prob").value);
    localStorage.setItem("time", document.querySelector("#time").value);
    //localStorage.setItem("prob", document.querySelector("#prob").value); por tempo
    r = localStorage.getItem("row");
    c = localStorage.getItem("col");
    let prob = localStorage.getItem("prob");
    if (r == "" && c == "" && prob == "") {
        r = 9; c = 9; prob = 25
        s = 0
    }

    if (r > 100 | c > 100) { alert("numero de linhas ou colunas excede 100"); return }
    if (prob < 0 | prob > 101) { alert("probabilidade não valida"); return }
    return [r, c, prob]
};

//up is working
function creat_map(r, c, prob, mapa, s = 1) {
    if(isPlaying(music)){music.pause()}
    if (document.getElementById("congratulation") != null) { document.getElementById("congratulation").remove() }
    bomb_table = new Array(); id_table = new Array(); f_click = 0; sec = 0; clearInterval(id_timer); timer.innerHTML = `Tempo:0`; x = 0; y = 0; random = 0
    b = 0
    hist_jogos = JSON.parse(localStorage.getItem("hist_jogos"))
    if (hist_jogos == null) { hist_jogos = [] }
    let oldtable = document.querySelector(".mapa");
    if (s == 1) { r = creat_map_aux()[0]; c = creat_map_aux()[1]; prob = creat_map_aux()[2] };
    if (r == null || c == null || prob == null) { r = 9, c = 9, prob = 10 }
    if (localStorage.getItem("time") == "") { localStorage.setItem("time", 60) }
    if (oldtable.innerHTML != "") { oldtable.innerHTML = ""; };
    table.appendChild(timer_star)

    //console.log(`${r},${c}`)


    clear_map(".mapa")
    if (special == 1) {
        if (document.getElementById("life_counter") != null) { document.getElementById("life_counter").remove() }
        let div = document.createElement("div")

        img.src = "resources/life_5_5.png";
        life = 5 // posso passar para funcao
        //div.innerHTML=`Vidas ${life}`
        document.getElementById("board_stat").append(img)
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
        if (document.getElementById("life_counter") != null) { document.getElementById("life_counter").remove() }
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
        document.getElementById("game_container").classList.add("game_container1")
        clear_map(".mapa1")
        multi_table.innerHTML = ""
        time1.innerHTML = `Time left: ${timeout}`
        time2.innerHTML = `Time left: ${timeout}`
        document.getElementById("game_container").append(time1)
        document.getElementById("game_container").append(time2)
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
    if (multi == 0) { time1.innerHTML = ""; time2.innerHTML = "" }
    //document.getElementsByClassName("mapa1")[0].remove()
    if (document.getElementById("game_container").classList.contains("game_container1") && multi == 0) { document.getElementsByClassName("mapa1")[0].innerHTML = ""; document.getElementById("game_container").classList.remove("game_container1") }
    return bomb_table
};
//esta funcionar e de outro lado
function multiplayer() {
    if (multi == 0) { multi = 1; return }
    else { multi = 0; return }

    // creat_map(r, c, prob, s = 1)
    // document.getElementById("game_container").classList.add("game_container1")

    // if (l == 0) {
    //     creat_map(r, c, prob, s = 1)
    // }
}
//timeout1 = parseInt(localStorage.getItem("time"), 10);
function toggle_p() {
    
    if (p == 0) {
        time1.innerHTML = `Time left: ${timeout}`
        p = 1; clearInterval(id_timer2);
        id_timer1 = setInterval(countdown, 1000, time1);
        return
    }
    else {
        time2.innerHTML = `Time left: ${timeout}`
        p = 0; clearInterval(id_timer1);
        id_timer2 = setInterval(countdown, 1000, time2);
        return
    }
}
function pick_music(){
    
    if ((Math.floor(Math.random() * 101) < 33)) {music=kirby}
    else if(33<(Math.floor(Math.random() * 101)) && (Math.floor(Math.random() * 101) < 66)){music=bethoven}
    else { music=starwars}
    music.play()
}
function change_cell(id, open = 0) {
    let id_c = id

    split_id = id_c.split("_");
    if (multi == 1) {

        if (parseInt(split_id[2], 10) == 0 && p == 1) { return }
        else if (parseInt(split_id[2], 10) == 1 && p == 0) { return }
    }

    if (b == 1) { return }
    if (f_click == 0) {pick_music(); 
        id_timer = setInterval(timer_f, 1000); } //conta tempo
    

    const cell_tochange = document.getElementById(id_c);
    if (cell_tochange == null) { return }
    if (cell_tochange.classList.contains("flag")) { return }
    if (cell_tochange.classList.contains("flag_question")) { return }
    if (cell_tochange.classList[0] != "hidden_cell") { return }
    if (win == 1) { creat_congratulation() }


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
                    if (life < 0) { life = 0 }
                    if (life == 4) { img.src = "resources/life_4_5.png" }
                    else if (life == 3) { img.src = "resources/life_3_5.png" }
                    else if (life == 2) { img.src = "resources/life_2_5.png" }
                    else if (life == 1) { img.src = "resources/life_1_5.png" }
                    document.getElementById("life_counter").innerHTML = `Vidas ${life}`
                    clearInterval(id_timer)
                    if (life == 0) { b = 1; creat_lose(); hist_jogos.push({ dim: `${r}x${c}`, user: localStorage.getItem("user"), score: sec, modo: "Diferenciado" }); hist_jogos.push({ dim: `${r}x${c}`, user: localStorage.getItem("user"), score: sec, modo: "Diferenciado" }), localStorage.setItem("hist_jogos", JSON.stringify(hist_jogos)) }
                }
                else { cell_tochange.classList.replace("hidden_cell", "bomb"), b = 1 }

                if (special == 0) {

                    cell_tochange.classList.replace("hidden_cell", "bomb")
                    clearInterval(id_timer);
                    if (multi == 1) {

                        if (selected_cell[2] == 1) { return creat_congratulation(), hist_jogos.push({ dim: `${r}x${c}`, user: "user1", score: sec, modo: "multiplayer" }), hist_jogos.push({ dim: `${r}x${c}`, user: localStorage.getItem("user"), score: sec, modo: "Multiplayer" }), localStorage.setItem("hist_jogos", JSON.stringify(hist_jogos)), creat_map(r, c) }
                        if (selected_cell[2] == 0) { return creat_congratulation(), hist_jogos.push({ dim: `${r}x${c}`, user: "user2", score: sec, modo: "multiplayer" }), hist_jogos.push({ dim: `${r}x${c}`, user: localStorage.getItem("user"), score: sec, modo: "Multiplayer" }), localStorage.setItem("hist_jogos", JSON.stringify(hist_jogos)), creat_map(r, c) }
                    }

                    else { creat_lose(), clearInterval(id_timer), hist_jogos.push({ dim: `${r}x${c}`, user: localStorage.getItem("user"), score: sec, modo: "Classico" }), localStorage.setItem("hist_jogos", JSON.stringify(hist_jogos)) }
                }
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

    if (document.getElementsByClassName("hidden_cell").length == bomb_table.length) { creat_congratulation(); localStorage.setItem("score", `${sec},${user_v}`) }//creat_map(r,c,prob,s)}
    document.getElementById("bomb_count").innerHTML = `Número de Bombas:${bomb_table.length}`
    if (open == 0) { toggle_p() }
    return //cell_tochange.classList[0]=0
}
function timer_f() {
    sec = sec + 1
    timer.innerHTML = `Tempo:${sec}`
}
function countdown(ele) {
    t = parseInt(ele.innerHTML.split(":")[1], 10)
    t = t - 1
    if(t ==0){toggle_p()}
    ele.innerHTML = `Time left: ${t}`

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

    if (cell_tochange.classList.contains("flag_question")) { cell_tochange.classList.toggle("flag_question"); }
    else if (cell_tochange.classList.contains("flag")) { cell_tochange.classList.toggle("flag"), cell_tochange.classList.toggle("flag_question"); }
    else if (!(cell_tochange.classList.contains("flag"))) { cell_tochange.classList.toggle("flag"); }


    document.getElementById("bomb_count_flag").innerHTML = `Bombas com bandeira:${bomb_table.length - document.getElementsByClassName("flag").length}`
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
if (document.getElementById("game_container")) {
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
}
function update_table(lista) {
    if(lista==null){return}
    lista = lista
    let tabelaAntiga = document.getElementsByClassName("table_score")[0];


    let tabelaNova = document.createElement("table");
    tabelaNova.setAttribute("class", "table_score");

    let linhaTabela = document.createElement("tr");
    linhaTabela.innerHTML = "<th>#</th>" +
        "<th>Nome</th>" +
        "<th>Score</th>" +
        "<th>Modo de Jogo</th>" +
        "<th>Dimensõe do tabuleiro</th>"

    tabelaNova.appendChild(linhaTabela);
    //user=getItem("user")
    let numeroEncomenda = 1;
    for (let hist_jogo of lista) {

        // Uma linha de dados por cada encomenda no histórico.
        linhaTabela = document.createElement("tr");
        linhaTabela.innerHTML = "<td>" + numeroEncomenda + "</td>" +
            "<td>" + hist_jogo.user + "</td>" +
            "<td>" + hist_jogo.score + "</td>" +
            "<td>" + hist_jogo.modo + "</td>" +
            "<td>" + hist_jogo.dim + "</td>"


        tabelaNova.appendChild(linhaTabela);
        numeroEncomenda++;
    }

    // Substitui a tabela antiga pela nova.
    tabelaAntiga.parentNode.replaceChild(tabelaNova, tabelaAntiga);

}

function delete_table(lista) {
    localStorage.removeItem("hist_jogos")
    document.getElementsByClassName("table_score").innerHTML = ""
    update_table(lista)
}
function check_login() {
    let btt = document.createElement("button")
    user = localStorage.getItem("user")
    if (user != null) {
        btt.innerHTML = "logoff"
        btt.addEventListener("click", () => { localStorage.removeItem("user"); location.reload(); })
        let welcome = document.createElement("div")
        welcome.classList.add("welcome")
        user_v = user.value
        welcome.innerHTML = `Bem vindo ${user}`
        form.innerHTML = ""
        form.append(welcome)
        form.append(btt)
    }
}

function registry() {
    let div = document.createElement("div")
    let div1 = document.createElement("div")
    let div2 = document.createElement("div")
    let div3 = document.createElement("div")
    let btn = document.createElement("button")
    btn.innerHTML="Confirmar"
    btn.addEventListener("click",login)
    let l_mail = document.createElement("label")
    l_mail.innerHTML="Email:"
    let l_nome = document.createElement("label")
    l_nome.innerHTML="Nome:"
    let l_user = document.createElement("label")
    l_user.innerHTML="User:"
    let l_pass = document.createElement("label")
    l_pass.innerHTML="Password:"
    let mail= document.createElement("input")
    let nome= document.createElement("input")
    let User= document.createElement("input")
    User.setAttribute("id","user")
    let pass= document.createElement("input")
    pass.setAttribute("id","pass")

    //let div= document.createElement("div")
    //form.parentNode.appendChild(div)
    div.appendChild(l_nome)
    div.appendChild(nome)
    div1.appendChild(l_mail)
    div1.appendChild(mail)
    div2.appendChild(l_user)
    div2.appendChild(User)
    div3.appendChild(l_pass)
    div3.appendChild(pass)
    form.setAttribute("class","credentials")
    form.innerHTML = ""
    form.append(div)
    form.append(div1)
    form.append(div2)
    form.append(div3)
    form.append(btn)
    

}
function sort_list_score(lista) {
    lista.sort((a, b) => {
        if (a.score < b.score) {
            return 1
        }
        else { return -1 }
    })
    // sort needs to have a 0< a <0 and a 0 when its a tie
}

function sort_list_user() {
    user = localStorage.getItem("user")
    hist_jogos.sort((a, b) => {
        if (a.user == b.user) {
            return 1
        }
        else { return -1 }
    })
}

function slice_list_user(lista) {
    let user_list = new Array()
    user = localStorage.getItem("user")
    for (let jogo of lista) {
        if (jogo.user == user) { user_list.push(jogo) }
    }
    sort_list_score(user_list)
    //localStorage.setItem("user_list",JSON.stringify(user_list))
    update_table(user_list)
}
function slice_list_modo(lista, tipo) {
    let user_list = new Array()
    for (let jogo of lista) {
        if (jogo.modo == tipo) { user_list.push(jogo) }
    }
    sort_list_score(user_list)
    //localStorage.setItem("user_list",JSON.stringify(user_list))
    update_table(user_list)
}



function sort_list_score_10() {
    sort_list_score()
}
function creat_congratulation() {
    let mensagem = ""
    if ((Math.floor(Math.random() * 101) < 50)) { mensagem = "Parabéns &#x1F389! Aceitas novo desafio?" }
    else { mensagem = "Ganhaste! Voltamos a jogar?" }

    let div = document.createElement("div")
    div.setAttribute("id", "congratulation")
    let p = document.createElement("p")
    p.innerHTML = mensagem
    let btn = document.createElement("button")
    btn.innerHTML = "Sim"
    btn.addEventListener("click", creat_map)
    let btn1 = document.createElement("button")
    btn1.innerHTML = "Não"
    btn1.addEventListener("click", delete_div)
    body.appendChild(div)
    div.appendChild(p)
    div.appendChild(btn)

    div.appendChild(btn1)
}
function delete_div() {
    document.getElementById("congratulation").remove()
}

function creat_lose() {
    let mensagem = ""
    if ((Math.floor(Math.random() * 101) < 50)) { mensagem = "Terás mais sorte para a próxima! Aceitas novo desafio?" }
    else { mensagem = "Ainda não foi desta &#x1F923	! Jogas de novo?" }
    let div = document.createElement("div")
    div.setAttribute("id", "congratulation")
    let p = document.createElement("p")
    p.innerHTML = mensagem
    let btn = document.createElement("button")
    btn.innerHTML = "Sim"
    btn.addEventListener("click", creat_map)
    let btn1 = document.createElement("button")
    btn1.innerHTML = "Não"
    btn1.addEventListener("click", delete_div)
    body.appendChild(div)
    div.appendChild(p)
    div.appendChild(btn)

    div.appendChild(btn1)
}
function change_color() {
    let hue = document.getElementById("rangeHue")
    let saturation = document.getElementById("rangeSaturation")
    let light = document.getElementById("rangeLight")
    let color = `hsl(${hue.value},${saturation.value}%,${light.value}%)`
    document.documentElement.style.setProperty("--menu_background", color);
    document.documentElement.style.setProperty("--body_background", `hsl(${hue.value},${saturation.value - 25}%,${light.value - 25}%)`);
    if (light.value < 50) { document.documentElement.style.setProperty("--text-menu", "white"); localStorage.setItem("text-menu", "white") }
    else { document.documentElement.style.setProperty("--text-menu", "black"); localStorage.setItem("text-menu", "black") }
    localStorage.setItem("menu_background", color)

    localStorage.setItem("body_background", `hsl(${hue.value},${saturation.value - 25}%,${light.value - 25}%)`)
}

function lucky_color() {
    Math.floor(Math.random() * 256)
    let color = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`
    let color1 = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`
    document.documentElement.style.setProperty("--menu_background", color);
    document.documentElement.style.setProperty("--body_background", color1);

    localStorage.setItem("menu_background", color)
    localStorage.setItem("body_background", color1)

}
if (document.getElementById("rangeHue") != null) {
    document.getElementById("rangeHue").addEventListener("input", change_color)
    document.getElementById("rangeSaturation").addEventListener("input", change_color)
    document.getElementById("rangeLight").addEventListener("input", change_color)
}
function change_colors() {
    if (localStorage.getItem("menu_background") != null) {
        document.documentElement.style.setProperty("--menu_background", localStorage.getItem("menu_background"));
        document.documentElement.style.setProperty("--body_background", localStorage.getItem("body_background"));
        document.documentElement.style.setProperty("--text-menu", localStorage.getItem("text-menu"));
    }
}
function color_reset() {
    document.documentElement.style.setProperty("--menu_background", "orange");
    document.documentElement.style.setProperty("--body_background", "beige");
    document.documentElement.style.setProperty("--text-menu", "black");
    localStorage.setItem("menu_background", "orange")
    localStorage.setItem("body_background", "beige")
    localStorage.setItem("text-menu", "black")
}
