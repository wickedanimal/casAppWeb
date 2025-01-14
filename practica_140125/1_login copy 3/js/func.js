function test() {
    let con = document.forms["formTest"]["contraID"].value;
    let patron = /^[0-9 a-z A-Z]{6,20}$/;
    if (patron.test(con)==true){
        let text = "<p id='textoP'>"+ con + " es una contraseña correcto.</p>"
        return document.getElementById("textoP").innerHTML=text;
    } else {
        let text = "<p id='textoP'>"+ con + " es un contraseña incorrecto.</p>"
        return document.getElementById("textoP").innerHTML=text;
    }
}