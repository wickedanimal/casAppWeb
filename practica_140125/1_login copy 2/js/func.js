function test() {
    let tel = Number(document.forms["formTest"]["telefonoID"].value);
    let patron = /^[67]{1}[0-9]{8}$/;
    if (patron.test(tel)==true){
        let text = "<p id='textoP'>"+ tel + " es un numero correcto.</p>"
        return document.getElementById("textoP").innerHTML=text;
    } else {
        let text = "<p id='textoP'>"+ tel + " es un numero incorrecto.</p>"
        return document.getElementById("textoP").innerHTML=text;
    }
}