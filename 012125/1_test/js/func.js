// TEST 1
// function enviar(){
//     let p = /(^[1-9]$)|(10)/;
//     let n = document.getElementById("num");
//     if(p.test(n.value)){
//         alert("Número válido");
//     }else{
//         alert("Número inválido");
//         n.value = "";
//     }
// }


// TEST 2
function enviar(){
    let num = document.getElementById("num").value;
    if(isNaN(num) || num < 1 || num > 10){
        document.getElementById("res").textContent =`${num} es un número inválido, escribe un numero del 1 al 10`;
    }else{
        document.getElementById("res").textContent = `${num} es un número válido`;
    }
}