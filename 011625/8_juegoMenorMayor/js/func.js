function game(x) {
  let num = Math.floor(Math.random() * 100) + 1;
  do{
    if(num<x){
      alert("El número es menor que " + x);
      x = prompt("Introduce un número");
    }else if(num>x){
      alert("El número es mayor a " + x);
      x = prompt("Introduce un número");
    }else{
      console.log("¡Felicidades! El número era " + x);
      document.getElementById("ganador").innerHTML=`<h1>¡Felicidades! El numero era <span>${x}</span></h1>`;
    }
  }while(num!=x);
  console.log("¡Felicidades! El número era " + x);
  document.getElementById("ganador").innerHTML=`<h1>¡Felicidades! El numero era <span>${x}</span></h1>`;
}
