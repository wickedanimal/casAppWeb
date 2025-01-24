let cambioColor = () => {
    let colArray = new Array("red", "blue", "green", "grey", "yellow");
    let col = (document.forms.myForm.color.value).toLowerCase();
    let colN = { rojo: 0, azul: 1, verde: 2, gris: 3, amarillo: 4 };
    switch (col) {
        case "rojo":
            document.body.style.cssText = `background-color: ${colArray[colN[col]]};`
            break;
        case "azul":
            document.body.style.cssText = `background-color: ${colArray[colN[col]]};`
            break;
        case "verde":
            document.body.style.cssText = `background-color: ${colArray[colN[col]]};`
            break;
        case "gris":
            document.body.style.cssText = `background-color: ${colArray[colN[col]]};`
            break;
        case "amarillo":
            document.body.style.cssText = `background-color: ${colArray[colN[col]]};`
            break;
    }
}