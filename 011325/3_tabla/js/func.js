function replaceNombre(){
    let nom = prompt("Indica tu nombre"); 
    return document.getElementById("btnC01").innerHTML="<p class='prompt'>" + nom + "</p>";
}

function replaceCurso(){
    let cur = prompt("Indica el curso que quieres tomar", "Java, Python, Web dev"); 
    return document.getElementById("btnC02").innerHTML="<p class='prompt'>" + cur + "</p>";
}

function replaceTelefono(){
    let tel = prompt("Indica tu Telefono", "+3461312345"); 
    return document.getElementById("btnC03").innerHTML="<p class='prompt'>" + tel + "</p>";
}