// Variable para contar los estudiantes menores de edad
var menoresEdad = 0;

// Variable para contar los estudiantes mayores de edad
var mayoresEdad = 0;

// Bucle para pedir la edad a 10 estudiantes
for (var i = 1; i <= 10; i++) {
    var edad = parseInt(prompt("Ingrese la edad del estudiante #" + i));

    // Verificar si es menor o mayor de edad
    if (edad < 18) {
        menoresEdad++;
    } else {
        mayoresEdad++;
    }
}

// Mostrar resultados en HTML
var resultadoHTML = "Estudiantes menores de edad: " + menoresEdad + "<br>";
resultadoHTML += "Estudiantes mayores de edad: " + mayoresEdad;

// Agregar los resultados al elemento con el id "resultado"
document.getElementById("resultado").innerHTML = resultadoHTML;