var formulario = document.getElementById('formulario');
var resultadoDiv = document.getElementById('resultado');

formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    var numero = parseInt(document.getElementById('numero').value);

    if (isNaN(numero)) {
        alert('Por favor, ingrese un número válido.');
    } else {
        resultadoDiv.innerText = '';
        realizarCiclo(numero);
    }
});

function realizarCiclo(numero) {
    for (var i = 1; i <= 30; i += numero) {
        resultadoDiv.innerText += i + ', ';
    }
}