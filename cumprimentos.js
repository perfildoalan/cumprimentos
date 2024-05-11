const data = new Date();
var tempo = data.getHours();

var titulo = document.getElementById("bom");
var background = document.getElementById("body");

if (tempo >= 6 && tempo < 12) {
  titulo.innerText = "Bom Dia";
  background.className = "gradiente-dia";
}
else if (tempo >= 12 && tempo < 18) {
  titulo.innerText = "Boa Tarde";
  background.className = "gradiente-tarde";
}
else {
  titulo.innerText = "Boa Noite";
  background.className = "gradiente-noite";
}