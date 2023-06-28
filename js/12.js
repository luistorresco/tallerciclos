// Obtener la referencia a la tabla
var tabla = document.getElementById('tabla-numeros');
var numeros = 1;

// Rellenar la tabla con los números del 1 al 15
for (var i = 0; i < 3; i++) {
    var fila = tabla.tBodies[0].rows[i];
    for (var j = 0; j < 5; j++) {
        var celda = fila.cells[j];
        celda.textContent = numeros++;
    }
}