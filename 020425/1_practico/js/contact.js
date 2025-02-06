function enviar(nom, email, tel, mensaje, checkbox) {
    let emailPatron = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/
    let telPatron = /^([+]?\d{1,2}[-\s]?|)[67]{1}[0-9]{2}[-\s]?[0-9]{3}[-\s]?[0-9]{3}[-\s]?$/;

    (nom === "" || email === "" || tel === "" || mensaje === "") 
    ? alert("Los campos no pueden estar vacios") 
    : (emailPatron.test(email) == false)
    ? alert("Email incorrecto, porfavor introdusca formato correcto") 
    : (telPatron.test(tel) == false)  
    ? alert("Telefono incorrecto, porfavor introdusca formato correcto") 
    : (checkbox == false) 
    ? alert("Lea los terminos de servicio y aceptelos")
    : alert("Gracias por su mensaje!");
  
    

}
