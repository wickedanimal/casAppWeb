function create(){
    let p = document.createElement("div");
    p.id = "box";
    // let t = document.createTextNode("This is new.");
    p.append("Texto");
    document.body.appendChild(p);
}

function remove(){
    let p = document.getElementById("box");
    p.remove();
}