function color() {
    /** @type {RadioNodeList} */
    let x = document.forms.co.color;
    for (let i = 0; i < x.length; i++) {
        let n = x[i];
        if (n.checked == true) {
            return n.value;
        }
    }
}

function coche() {
    let d = document.forms.co;
    let m = d.modelo.value;
    let f = new Date(d.fecha.value).toLocaleString("es-ES", {dateStyle:"medium"});
    let c = color();
    // }
    alert("Tu coche "+ m + " de color "+ c + " sera entregado "+ f.toUpperCase());
}