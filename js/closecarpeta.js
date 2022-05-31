var close = document.getElementById("close");
var carpeta = document.getElementById("carpeta");



function activar () {
    carpeta.classList.add("carpeta-none");
}

close.addEventListener("click", activar);
