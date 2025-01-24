let promo = (edad = parseInt(x)) => {
    (edad<=(-1)) ? alert("Introduce una edad real") : (edad>0 && edad<10) ? alert("Todos los productos te cuestan 10€") : alert("Estas fuera del rango de edad");
}