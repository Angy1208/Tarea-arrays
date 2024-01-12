function setAlarm() {
    // Solicitar al usuario la cantidad de segundos
    var segundos = parseInt(prompt("Ingrese la cantidad de segundos para la alarma:"));
    // Verificar si la entrada es un número válido
    if (isNaN(segundos) || segundos <= 0) {
        console.log("Ingrese un número de segundos válido y mayor que cero.");
        return;
    }

    // Mostrar un mensaje con la cuenta regresiva en tiempo real
    var countdownInterval = setInterval(function() {
        if (segundos === 0) {
            clearInterval(countdownInterval);
            console.log("¡Tiempo para la alarma!");
        } else {
            console.log("Tiempo para la alarma después de " + segundos + " segundos");
            segundos--;
        }
    }, 1000); // Actualizar cada segundo (1000 milisegundos)
}

// Llamar a la función para establecer la alarma
setAlarm();