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

    document.getElementById("bomb_count_flag").innerHTML=`Bombas com bandeira:${bomb_table.length-document.getElementsByClassName("flag").length}`
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