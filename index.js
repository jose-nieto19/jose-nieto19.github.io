function mostrarContenido() {
    var opcion = document.getElementById("opciones").value;
    var contenido1 = document.getElementById("contenido1");
    var contenido2 = document.getElementById("contenido2");
    var contenido3 = document.getElementById("contenido3");
        

    // Muestra el contenido correspondiente a la opción seleccionada
    if (opcion === "1") {
        contenido1.style.display = "flex";
        contenido2.style.display = "none";
        contenido3.style.display = "none";
    } else if (opcion === "2") {
        contenido2.style.display = "flex";
        contenido1.style.display = "none";
        contenido3.style.display = "none";
    } else{
        contenido3.style.display = "flex";
        contenido1.style.display = "none";
        contenido2.style.display = "none";
    }    
}
