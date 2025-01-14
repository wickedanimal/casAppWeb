function antiguedad() {
    let nom = document.forms["formAntiguedad"]["usuarioID"].value;
    let anno = Number(document.forms["formAntiguedad"]["antiguedadID"].value);
    if (anno > 10) {
        let text = "<p id='antiguedadPremio'>"+ nom + " eres un empleado con " + anno + " de antiguedad. Tienes un viaje.</p>"
        return document.getElementById("antiguedadPremio").innerHTML=text;
    } else if (anno > 3) {
        let text = "<p id='antiguedadPremio'>"+ nom + " eres un empleado veterano tienes " + anno + " de antiguedad. Tienes cesta Ibericos.</p>"
        return document.getElementById("antiguedadPremio").innerHTML=text;
    } else {
        let text = "<p id='antiguedadPremio'>"+ nom + " eres un empleado nuevo con " + anno + " de antiguedad. Te daremos un Jamon.</p>"
        return document.getElementById("antiguedadPremio").innerHTML=text;
    }
}