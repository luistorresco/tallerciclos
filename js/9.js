var formulario = document.getElementById('formulario');
var escaleraPre = document.getElementById('escalera');

formulario.addEventListener('submit', function(event) {
  event.preventDefault();

  var altura = parseInt(document.getElementById('altura').value);

  if (isNaN(altura)) {
    alert('Por favor, ingrese una altura válida.');
  } else {
    escaleraPre.innerText = '';
    crearEscaleraInvertida(altura);
  }
});

function crearEscaleraInvertida(altura) {
  for (var i = 0; i < altura; i++) {
    var linea = '';
    for (var j = 0; j < i; j++) {
      linea += ' ';
    }
    for (var k = i; k < altura; k++) {
      linea += '*';
    }
    escaleraPre.innerText += linea + '\n';
  }
}