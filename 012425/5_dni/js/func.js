let enviar = (x) => {
    let patron = /^[0-9]{8}[a-z A-Z]{1}$/i;
    if(patron.test(x) == true){
        return alert(`DNI ${x} es correcto`);
    } else {
        document.forms.myForm.dni.value="";
        return alert(`DNI incorrecto, vuelva a ingresar`);
    }
} 