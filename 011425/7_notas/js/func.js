function test() {
    let nom = ["Maria", "Alfredo", "Jorge", "Gustavo", "Nani"];
    let not = new Array(nom.length);
    let x = document.getElementById("alumno");

    for(let i = 0; i < nom.length; i++){
        not[i] = prompt("Nota de "+nom[i]);
        let text = "<tr><td>" + nom[i] + "</td><td>" + not[i] + "</td></tr>"
        document.getElementById("alumno").innerHTML+=text;
        // x.innerHTML+=("<tr>" + text + "</tr>");
        // document.getElementById("nombre").innerHTML=nom[i];
        // document.getElementById("notas").innerHTML=not[i];

    }





        // let text = "<p id='textoP'>"+ con + " es un DNI incorrecto.</p>"
        // return document.getElementById("textoP").innerHTML=text;
}