function game(x) {
  let num = Math.floor(Math.random() * 100) + 1;
  let contador = 0;
  let ganador = document.getElementById("ganador");
  let docContador = document.getElementById("contador")
  do{
    if(num<x){
      alert("El número es menor que " + x);
      x = prompt("Introduce un número");
      contador++;
    }else if(num>x){
      alert("El número es mayor a " + x);
      x = prompt("Introduce un número");
      contador++;
    }else{
      console.log("¡Felicidades! El número era " + x);
      ganador.innerHTML=`<h1>¡Felicidades! El numero era <span>${x}</span></h1>`;
    }
  }while(num!=x);
  console.log("¡Felicidades! El número era " + x);
  ganador.innerHTML=`<h1>¡Felicidades! El numero era <span>${x}</span></h1>`;
  docContador.textContent=`Intentos: ${contador}`;
}
