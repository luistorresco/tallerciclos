var formulario = document.getElementById('formulario');
var tablaContainer = document.getElementById('tabla-container');

formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    var numero = parseInt(document.getElementById('numero').value);

    if (isNaN(numero)) {
        alert('Por favor, ingrese un número válido.');
    } else {
        tablaContainer.innerHTML = generarTablaMultiplicarDescendente(numero);
    }
});

function generarTablaMultiplicarDescendente(numero) {
    var tabla = '<table>';
    tabla += '<caption>Tabla de multiplicar descendente del ' + numero + '</caption>';
    tabla += '<tr><th>Número</th><th>Resultado</th></tr>';

    for (var i = 10; i >= 1; i--) {
        var resultado = numero * i;
        tabla += '<tr><td>' + numero + ' x ' + i + '</td><td>' + resultado + '</td></tr>';
    }

    tabla += '</table>';

    return tabla;
}