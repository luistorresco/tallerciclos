var formulario = document.getElementById('formulario');
var resultado = document.getElementById('resultado');

formulario.addEventListener('submit', function (event) {
  event.preventDefault();

  var nombreEstudiante = document.getElementById('nombre').value;
  var cantidadNotas = parseInt(document.getElementById('cantidad-notas').value);

  if (isNaN(cantidadNotas) || cantidadNotas <= 0) {
    resultado.textContent = 'Por favor, ingrese una cantidad válida de notas.';
  } else {
    var sumaNotas = 0;

    for (var i = 1; i <= cantidadNotas; i++) {
      var nota = parseFloat(prompt('Ingrese la nota ' + i + ':'));
      sumaNotas += nota;
    }

    var promedio = sumaNotas / cantidadNotas;

    var mensajeResultado;
    if (promedio >= 3) {
      mensajeResultado = 'El estudiante ' + nombreEstudiante + ' aprueba con un promedio de ' + promedio.toFixed(2);
    } else {
      mensajeResultado = 'El estudiante ' + nombreEstudiante + ' reprueba con un promedio de ' + promedio.toFixed(2);
    }

    resultado.textContent = mensajeResultado;
  }
});