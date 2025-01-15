function promo(b, t) {
    switch (b) {
        case "dalia":
        case "azalea":
        case "bolso3":
            if (t == "pq") {
                alert("El precio del producto es de 100€");
            } else if (t == "md") {
                alert("El precio del producto es de 200€");
            } else {
                alert("El precio del producto es de 300€");
            }
            break;
        case "bolso4":
            if (t == "pq") {
                alert("El precio del producto es de 150€");
            } else if (t == "md") {
                alert("El precio del producto es de 250€");
            } else {
                alert("El precio del producto es de 350€");
            }
            break;
        case "bolso5":
            if (t == "pq") {
                alert("El precio del producto es de 90€");
            } else if (t == "md") {
                alert("El precio del producto es de 180€");
            } else {
                alert("El precio del producto es de 250€");
            }
            break;
    }
}