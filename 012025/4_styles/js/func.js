function cambio(){
    let val = document.getElementsByName("estilo");
    let col = ["red", "blue", "green", "yellow", "grey"];
    
    for (let i = 0; i < val.length; i++) {
        if(val[i].checked){
            document.getElementById("estiloTxt").style.color = col[i];
        }
    }

}