// function replaceA(){
//     document.getElementById("btnC01").innerHTML="A"
// }

function replaceA() {
    let newElement = document.createElement('p');
    newElement.textContent = 'A';
    document.getElementById('btnC01').replaceWith(newElement);
}

function replaceB() {
    let newElement = document.createElement('p');
    newElement.textContent = 'B';
    document.getElementById('btnC02').replaceWith(newElement);
}

function replaceC() {
    let newElement = document.createElement('p');
    newElement.textContent = 'C';
    document.getElementById('btnC03').replaceWith(newElement);
}

function replaceD() {
    let newElement = document.createElement('p');
    newElement.textContent = 'D';
    document.getElementById('btnC04').replaceWith(newElement);
}