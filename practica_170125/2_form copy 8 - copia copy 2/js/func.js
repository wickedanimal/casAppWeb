let a = [["Enero", "Invierno"],
["Febrero", "Invierno"],
["Marzo", ["Invierno","Primavera"]],
["Abril", "Primavera"],
["Mayo", "Primavera"], 
["Junio", ["Primavera","Verano"]], 
["Julio", "Verano"], 
["Agosto", "Verano"], 
["Septiembre", ["Verano","Otoño"]], 
["Octubre", "Otoño"], 
["Noviembre", "Otoño"], 
["Diciembre", ["Otoño", "Invierno"]]
];
function mes(x){
  document.getElementById("res").textContent = a[parseInt(x)-1][0];
}

function estacion(x){
  document.getElementById("res").textContent = `Estacion: ${a[parseInt(x)-1][1]}`;
}