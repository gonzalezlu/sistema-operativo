var max = document.getElementById("max");
var carpeta = document.getElementById("carpeta");



function activar () {
    carpeta.classList.add("carpeta-max");
}

max.addEventListener("click", activar);
