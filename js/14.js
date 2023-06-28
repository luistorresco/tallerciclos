var numeroAdivinar = Math.floor(Math.random() * 10) + 1; // Genera un número aleatorio entre 1 y 10
var intentos = 3; // Número de intentos permitidos

function adivinarNumero() {
    var numeroUsuario = parseInt(document.getElementById("numero").value);

    if (isNaN(numeroUsuario)) {
        mostrarResultado("Ingresa un número válido.");
        return;
    }

    if (numeroUsuario === numeroAdivinar) {
        mostrarResultado("¡Felicitaciones! Adivinaste el número.");
    } else {
        intentos--;

        if (intentos > 0) {
            mostrarResultado("Intenta nuevamente. Te quedan " + intentos + " intentos.");
        } else {
            mostrarResultado("Lo siento, no lograste adivinar el número. El número correcto era: " + numeroAdivinar);
        }
    }
}

function mostrarResultado(mensaje) {
    document.getElementById("resultado").innerHTML = mensaje;
}