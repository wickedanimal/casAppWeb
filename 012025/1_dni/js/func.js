function calDni(x) {
    // let dni = parseInt(x);
    // let letra = "TRWAGMYFPDXBNJZSQVHLCKET";
    // let b = parseInt(x)/23;
    // let a = parseInt(parseInt(x)/23);
    // console.log(`${a} b= ${b}`);
    // let letr = letra.substring(num, num + 1);
    // return  document.getElementById("container").textContent=letr;
    console.log(x);
    console.log(typeof x);
    if (x.length != 8) {
        alert("El DNI debe tener 8 dígitos");
        return false;
    } else{
      let dni = parseInt(x)%23;
      let dniArray = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","Q","E","T"];
      return document.getElementById("container").textContent=dniArray[dni];
    }
}