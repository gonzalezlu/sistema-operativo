
var inicio = document.getElementById("inicio");
var ventana = document.getElementById("ventana");

function activar () {
    ventana.classList.add("ventana-vista");
}
inicio.addEventListener("click", activar);