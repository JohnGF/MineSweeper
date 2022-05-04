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