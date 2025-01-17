function darNombre(x){
    if(x=="naranja"){
        document.getElementById("vacio").innerHTML="naranja";
    } else if(x=="rojo"){
        document.getElementById("vacio").innerHTML="rojo";
    } else if(x=="verde"){
        document.getElementById("vacio").innerHTML="verde";
    } else if(x=="gris"){
        document.getElementById("vacio").innerHTML="gris";
    } else if(x=="azul"){
        document.getElementById("vacio").innerHTML="azul";
    } else if(x=="morado"){
        document.getElementById("vacio").innerHTML="morado";
    } else{
        document.getElementById("vacio").innerHTML="ninguno";
    }
}