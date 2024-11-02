let numeroPar = 0;

// Función para actualizar el número en pantalla
function actualizarNumero() {
    document.getElementById("numero").textContent = numeroPar;
}

// Evento para detectar teclas de flecha
document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowRight") { // Flecha derecha
        numeroPar += 2;
    } else if (event.key === "ArrowLeft") { // Flecha izquierda
        numeroPar = Math.max(0, numeroPar - 2); // No permitimos números negativos
    }
    actualizarNumero();
});

actualizarNumero(); // Mostrar el número inicial
