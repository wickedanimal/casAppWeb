function showColors(x) {
  let color = x.split(" ");
  switch (color[0]) {
    case "red":
      document.getElementById("pr").style.backgroundColor = color[0]; document.getElementById("prh2").textContent = color[0]; document.getElementById("prh2").style.color="white";
      document.getElementById("sg").style.backgroundColor = color[1]; document.getElementById("sgh2").textContent = color[1]; document.getElementById("sgh2").style.color="white";
      document.getElementById("tr").style.backgroundColor = color[2]; document.getElementById("trh2").textContent = color[2]; document.getElementById("trh2").style.color="white";
      break;
    case "yellow":
      document.getElementById("pr").style.backgroundColor = color[0]; document.getElementById("prh2").textContent = color[0]; document.getElementById("prh2").style.color="white";
      document.getElementById("sg").style.backgroundColor = color[1]; document.getElementById("sgh2").textContent = color[1]; document.getElementById("sgh2").style.color="white";
      document.getElementById("tr").style.backgroundColor = color[2]; document.getElementById("trh2").textContent = color[2]; document.getElementById("trh2").style.color="white";
      break;
    case "grey":
      document.getElementById("pr").style.backgroundColor = color[0]; document.getElementById("prh2").textContent = color[0]; document.getElementById("prh2").style.color="white";
      document.getElementById("sg").style.backgroundColor = color[1]; document.getElementById("sgh2").textContent = color[1]; document.getElementById("sgh2").style.color="white";
      document.getElementById("tr").style.backgroundColor = color[2]; document.getElementById("trh2").textContent = color[2]; document.getElementById("trh2").style.color="white";
      break;
  }
}

function revertColors(x) {
  let color = x.split(" ");
  let revColor = color.toReversed();

  switch (color[0]) {
    case "red":
      document.getElementById("pr").style.backgroundColor = revColor[0]; document.getElementById("prh2").textContent = revColor[0]; document.getElementById("prh2").style.color="white";
      document.getElementById("sg").style.backgroundColor = revColor[1]; document.getElementById("sgh2").textContent = revColor[1]; document.getElementById("sgh2").style.color="white";
      document.getElementById("tr").style.backgroundColor = revColor[2]; document.getElementById("trh2").textContent = revColor[2]; document.getElementById("trh2").style.color="white";
      break;
    case "yellow":
      document.getElementById("pr").style.backgroundColor = revColor[0]; document.getElementById("prh2").textContent = revColor[0]; document.getElementById("prh2").style.color="white";
      document.getElementById("sg").style.backgroundColor = revColor[1]; document.getElementById("sgh2").textContent = revColor[1]; document.getElementById("sgh2").style.color="white";
      document.getElementById("tr").style.backgroundColor = revColor[2]; document.getElementById("trh2").textContent = revColor[2]; document.getElementById("trh2").style.color="white";
      break;
    case "grey":
      document.getElementById("pr").style.backgroundColor = revColor[0]; document.getElementById("prh2").textContent = revColor[0]; document.getElementById("prh2").style.color="white";
      document.getElementById("sg").style.backgroundColor = revColor[1]; document.getElementById("sgh2").textContent = revColor[1]; document.getElementById("sgh2").style.color="white";
      document.getElementById("tr").style.backgroundColor = revColor[2]; document.getElementById("trh2").textContent = revColor[2]; document.getElementById("trh2").style.color="white";
      break;
  }
}