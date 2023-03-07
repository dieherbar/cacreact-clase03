var a = 1;
let b = 3;

var myDom = document;

let visitante = prompt("Identifiquese por favor")

if (visitante != "" && visitante != null) {
  document.getElementById("demo").innerHTML =
  "Hola " + visitante + "! Bienvenido al sitio";
}