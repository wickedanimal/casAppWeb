$(document).ready(function () {
    $("registro").validate(
        {
            rules: {
                nombre: { required: true },
                mail: { required: true, email: true },
                contra: { required: true, rangeLength: [8, 16] },
                ccontra: { equalTo: '#contra' }
            },
            messages: {
                nombre: {required: "Campo obligatorio"} ,
                mail: {required: "Campo obligatorio", email: "Debe ser un correo válido"} ,
                contra: {required: "Campo obligatorio", rangeLength: "Debe tener entre 8 y 16 caracteres" },
                ccontra: {required: "Las contraseñas no coinciden"} 
            }
        }
    )
});