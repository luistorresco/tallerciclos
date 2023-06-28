// Arreglo para almacenar los alumnos ingresados
var alumnos = [];

// Capturar el formulario y agregar evento de envío
var formulario = document.getElementById("datosForm");
formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    // Obtener los valores ingresados por el usuario
    var nombre = document.getElementById("nombre").value;
    var materia = document.getElementById("materia").value;
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var nota3 = parseFloat(document.getElementById("nota3").value);

    // Calcular el promedio de notas
    var promedio = (nota1 + nota2 + nota3) / 3;

    // Crear un objeto alumno con los datos ingresados
    var alumno = {
        nombre: nombre,
        materia: materia,
        notas: [nota1, nota2, nota3],
        promedio: promedio.toFixed(1)
    };

    // Agregar el alumno al arreglo de alumnos
    alumnos.push(alumno);

    // Limpiar el formulario
    formulario.reset();

    // Actualizar la tabla de resultados
    actualizarTabla();
});

// Función para actualizar la tabla de resultados
function actualizarTabla() {
    // Crear una tabla con los resultados
    var tabla = "<table>";
    tabla += "<tr><th>Nombre</th><th>Materia</th><th>Nota 1</th><th>Nota 2</th><th>Nota 3</th><th>Promedio</th></tr>";

    // Agregar cada alumno al cuerpo de la tabla
    for (var i = 0; i < alumnos.length; i++) {
        var alumno = alumnos[i];

        tabla += "<tr>";
        tabla += "<td>" + alumno.nombre + "</td>";
        tabla += "<td>" + alumno.materia + "</td>";
        tabla += "<td>" + alumno.notas[0] + "</td>";
        tabla += "<td>" + alumno.notas[1] + "</td>";
        tabla += "<td>" + alumno.notas[2] + "</td>";
        tabla += "<td>" + alumno.promedio + "</td>";
        tabla += "</tr>";
    }

    tabla += "</table>";

    // Mostrar la tabla en el elemento con id "resultado"
    document.getElementById("resultado").innerHTML = tabla;
}