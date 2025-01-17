function sumar(x, y){
  let res = parseInt(x) + parseInt(y);
  return document.getElementById("container").textContent=res;

}

function preguntar(){
  let x = confirm("Quieres seguir?");
  if(x){
    document.getElementById("myForm").reset();
    document.getElementById("container").textContent="";
  } else {
    alert("Gracias por tu visita");
    document.getElementById("myForm").reset();
    document.getElementById("container").textContent="";
  }
}