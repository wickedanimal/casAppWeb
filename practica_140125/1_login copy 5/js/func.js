function test() {
    let con = document.forms["formTest"]["contraID"].value;
    let patron = /^[0-9]{7}[A-Z]{1}$/;
    if (patron.test(con)==true){
        let text = "<p id='textoP'>"+ con + " es una DNI correcto.</p>"
        return document.getElementById("textoP").innerHTML=text;
    } else {
        let text = "<p id='textoP'>"+ con + " es un DNI incorrecto.</p>"
        return document.getElementById("textoP").innerHTML=text;
    }
}