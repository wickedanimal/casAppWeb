let resultado;

function suma(x, y) {
    let text = "<p id='texto'> La suma entre " + x + " + " + y + " = " + "<span id='result'>" + (parseInt(x) + parseInt(y)) +  "</span></p>";
    return document.getElementById("texto").innerHTML = text;
}

function resta(x, y) {
    let text = "<p id='texto'> La resta entre " + x + " - " + y + " = " + "<span id='result'>" + (parseInt(x) - parseInt(y)) +  "</span></p>";
    return document.getElementById("texto").innerHTML = text;
}

function multiplicacion(x, y) {
    let text = "<p id='texto'> La multiplicacion entre " + x + " * " + y + " = " + "<span id='result'>" + (parseInt(x) * parseInt(y)) +  "</span></p>";
    return document.getElementById("texto").innerHTML = text;
}

function division(x, y) {
    let text = "<p id='texto'> La division entre " + x + " / " + y + " = " + "<span id='result'>" + (parseInt(x) / parseInt(y)) +  "</span></p>";
    return document.getElementById("texto").innerHTML = text;
}