/* document.querySelector(".chequear").addEventListener("click", function(event){
    event.stopPropagation();
    alert("hemos pulsado el boton");
})
document.addEventListener("click",function(event){
    alert("hemos lanzado una alerta");
}) */


window.addEventListener("copy", function(event){
    event.preventDefault();
    this.alert("Intento de copua de contenido");
})