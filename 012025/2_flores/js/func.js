function floresSel(x){
    let flowerImg = ["rosas_rojas", "rosas_rosas", "rosas_amarillas", "rosas_blancas", "rosas_multi"];
    switch(flowerImg[x.value]){
        case "rosas_rojas":
            document.getElementById("flores").src=`img/${flowerImg[x.value]}.jpg`;
            break;
        case "rosas_rosas":
            document.getElementById("flores").src=`img/${flowerImg[x.value]}.jpg`;
            break;
        case "rosas_amarillas":
            document.getElementById("flores").src=`img/${flowerImg[x.value]}.jpg`;
            break;
        case "rosas_blancas":
            document.getElementById("flores").src=`img/${flowerImg[x.value]}.jpg`;
            break;
        case "rosas_multi":
            document.getElementById("flores").src=`img/${flowerImg[x.value]}.jpg`;
            break;
    }
}