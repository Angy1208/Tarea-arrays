// Inicializar una variable para almacenar el número más alto
var mayorNumero = -Infinity;

// Solicitar al usuario 10 números
for (var i = 1; i <= 10; i++) {
    var numeroDeUsuario = parseFloat(prompt("Ingrese el número " + i + ":"));

    // Verificar si el input es un número válido
    if (isNaN(numeroDeUsuario)) {
        console.log("Por favor, ingrese un número válido.");
        i--;  // Decrementar el contador para repetir la solicitud del mismo número
    } else {
        // Determinar si el número actual es el más alto hasta ahora
        if (numeroDeUsuario > mayorNumero) {
            mayorNumero = numeroDeUsuario;
        }
    }
}

// Mostrar el número más alto en la consola
console.log("El número más alto ingresado es: " + mayorNumero);