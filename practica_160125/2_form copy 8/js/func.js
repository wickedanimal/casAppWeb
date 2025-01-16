function game() {
  let numJugadores = +prompt("Introduce el número de jugadores");
  let masDeCinco = 0;
  let menosDeCinco = 0;
  let i = 0;
  let nameJugadorMasCinco = new Array();
  let nameJugadorMenosCinco = new Array();

  while (i < numJugadores) {
    let nameJugador = prompt("Introduce el nombre del jugador");
    let golesJugador = +prompt("Introduce el número de goles de " + nameJugador);

    if (golesJugador >= 5) {
      masDeCinco += 1;
      nameJugadorMasCinco.push(nameJugador);
    } else {
      menosDeCinco += 1;
      nameJugadorMenosCinco.push(nameJugador);
    }
    i++;
  }
  
  document.getElementById("jugadoresMasCinco").textContent=`Jugadores con 5 o mas goles: ${masDeCinco} - [${nameJugadorMasCinco.join(", ")}]`;
  document.getElementById("jugadoresMenosCinco").textContent=`Jugadores con menos de 5 goles: ${menosDeCinco} - [${nameJugadorMenosCinco.join(", ")}]`;
}
