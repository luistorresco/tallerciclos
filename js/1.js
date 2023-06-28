// Obtener el formulario y el elemento para mostrar el resultado
var formulario = document.getElementById('formulario');
var resultado = document.getElementById('resultado');

formulario.addEventListener('submit', function (event) {
  event.preventDefault();

  // Obtener el número límite de los primeros números naturales
  var limite = parseInt(document.getElementById('limite').value);

  // Validar si el número límite es válido
  if (isNaN(limite) || limite <= 0) {
    resultado.textContent = 'Por favor, ingrese un número válido y mayor a cero.';
  } else {
    // Calcular la suma de los N primeros números naturales
    var suma = 0;
    for (var i = 1; i <= limite; i++) {
      suma += i;
    }

    // Mostrar el resultado de la suma
    resultado.textContent = 'La suma de los primeros ' + limite + ' números naturales es: ' + suma;
  }
});