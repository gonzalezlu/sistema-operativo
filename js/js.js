var ico_carp = document.getElementById("carp");
var carpeta = document.getElementById("carpeta");



function activar () {
    carpeta.classList.add("carpeta-vista");
}
ico_carp.addEventListener("click", activar);

