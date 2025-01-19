function enviar(nom, ape, telf) {
    let patron = /^([+]?\d{1,2}[-\s]?|)[67]{1}[0-9]{2}[-\s]?[0-9]{3}[-\s]?[0-9]{3}[-\s]?$/;
    if (nom == "" || ape == "" || telf == "") {
        alert("El campo no puede estar vacio");
        return false;
    } else if (patron.test(telf) == false) {
        alert("Numero incorrecto");
        return document.getElementById("tel").value = "";
    } else {
        alert("Formulario enviado");
    }
}

function lavar() {
    let lav = confirm("¿Desea lavar el pelo?");
    let newElement = document.createElement('p');
    if (lav == true) {
        newElement.textContent = 'Si';
        return document.getElementById('btnLav').replaceWith(newElement);
    } else {
        newElement.textContent = 'No';
        return document.getElementById('btnLav').replaceWith(newElement);
    }
}

function tenir() {
    let ten = confirm("¿Desea teñirse el pelo?");
    let newElement = document.createElement('p');
    if (ten == true) {
        newElement.textContent = 'Si';
        return document.getElementById('btnTen').replaceWith(newElement);
    } else {
        newElement.textContent = 'No';
        return document.getElementById('btnTen').replaceWith(newElement);
    }
}

function cortar() {
    let cort = prompt("¿Como te lo cortamos?");
    let newElement = document.createElement('p');
    newElement.textContent = cort;
    return document.getElementById('btnCor').replaceWith(newElement);
}

function pRojaClick() {
    document.getElementById('imgNails').style.cssText="filter: blur(0) grayscale(0);";
    document.getElementById('imgNails').src='img/redNails.jpg';
}

function pRojaOver() {
    document.getElementById('imgNails').style.cssText="filter: blur(1px) grayscale(100%);";
    document.getElementById('imgNails').src='img/redNails.jpg';
}

function pRojaOut() {
    document.getElementById('imgNails').src='img/logo.webp';
}

function pFrancesaClick() {
    document.getElementById('imgNails').style.cssText="filter: blur(0) grayscale(0);";
    document.getElementById('imgNails').src='img/frenchNails.avif';
}

function pFrancesaOver() {
    document.getElementById('imgNails').style.cssText="filter: blur(1px) grayscale(100%);";
    document.getElementById('imgNails').src='img/frenchNails.avif';
}

function pFrancesaOut() {
    document.getElementById('imgNails').src='img/logo.webp';
}

function borrar() {
    document.getElementById('imgNails').style.cssText="";
    document.getElementById('imgNails').src='img/logo.webp';
}

function clientes(){
    document.getElementById("h2Client").hidden=false;
    let clientes = ["Ana", "Luis", "Maria", "Pepe", "Rosa"];
    let text = "<ul>";
    for (let i = 0; i < clientes.length; i++) {
        text += "<li>" + clientes[i] + "</li>";
    }
    text += "</ul>";
    document.getElementById("Clientes1").innerHTML=text;

    let clientes2 = ["Martin", "Sara", "Pedro", "Lucia"];
    let text2 = "<ul>";
    for (let i = 0; i < clientes2.length; i++) {
        text2 += "<li>" + clientes2[i] + "</li>";
    }
    text2 += "</ul>";
    document.getElementById("Clientes2").innerHTML=text2;

    let clientes3 = ["Javier", "Sonia", "Carlos", "Eva"];
    let text3 = "<ul>";
    for (let i = 0; i < clientes3.length; i++) {
        text3 += "<li>" + clientes3[i] + "</li>";
    }
    text3 += "</ul>";
    document.getElementById("Clientes3").innerHTML=text3;
}