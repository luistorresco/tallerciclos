var formulario = document.getElementById('formulario');
var resultado = document.getElementById('resultado');
var numeros = [];
var suma = 0;

formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    var inputNumero = document.getElementById('numero');
    var numero = inputNumero.value.trim();

    if (numero.toUpperCase() === 'FIN') {
        var cantidadNumeros = numeros.length;
        resultado.innerHTML = '<p>Cantidad de números ingresados: ' + cantidadNumeros + '</p>' +
            '<p>Suma de los números: ' + suma + '</p>';
        inputNumero.disabled = true;
    } else {
        var numeroEntero = parseInt(numero);
        if (isNaN(numeroEntero)) {
            alert('Por favor, ingrese un número entero válido o "FIN" para terminar.');
        } else {
            numeros.push(numeroEntero);
            suma += numeroEntero;
            inputNumero.value = '';
        }
    }
});