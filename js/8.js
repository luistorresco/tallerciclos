var formulario = document.getElementById('formulario');
var escaleraDiv = document.getElementById('escalera');

formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    var altura = parseInt(document.getElementById('altura').value);

    if (isNaN(altura)) {
        alert('Por favor, ingrese una altura válida.');
    } else {
        escaleraDiv.innerText = '';
        crearEscalera(altura);
    }
});

function crearEscalera(altura) {
    for (var i = 1; i <= altura; i++) {
        var linea = '';
        for (var j = 1; j <= i; j++) {
            linea += '*';
        }
        escaleraDiv.innerText += linea + '\n';
    }
}