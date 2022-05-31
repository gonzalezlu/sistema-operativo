var icon_min = document.getElementById("min");
var carpeta = document.getElementById("carpeta");



function activar () {
    carpeta.classList.add("carpeta-none");
}

icon_min.addEventListener("click", activar);
