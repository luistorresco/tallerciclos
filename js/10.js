var formulario = document.getElementById('formulario');
var productosDiv = document.getElementById('productosDiv');
var resumenDiv = document.getElementById('resumen');
var clientes = [];
var totalVentas = 0;
var totalGeneral = 0;

formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    var cliente = document.getElementById('cliente').value;
    var productos = parseInt(document.getElementById('productos').value);

    if (cliente.trim() === '' || isNaN(productos) || productos < 1) {
        alert('Por favor, ingrese valores válidos.');
    } else {
        var totalCompra = 0;
        productosDiv.innerHTML = '';

        for (var i = 1; i <= productos; i++) {
            var valorProducto = parseFloat(prompt('Ingrese el valor del producto #' + i));

            if (isNaN(valorProducto) || valorProducto <= 0) {
                alert('Por favor, ingrese un valor válido para el producto #' + i);
                return;
            }

            totalCompra += valorProducto;
            productosDiv.innerHTML += 'Valor p' + i + ': ' + valorProducto + '<br>';
        }

        clientes.push({
            cliente: cliente,
            productos: productos,
            totalCompra: totalCompra
        });

        formulario.reset();
    }
});

function mostrarResumen() {
    resumenDiv.innerHTML = '';

    for (var i = 0; i < clientes.length; i++) {
        var clienteData = clientes[i];

        resumenDiv.innerHTML += 'Cliente #' + clienteData.cliente + '<br>';
        resumenDiv.innerHTML += 'No. Productos: ' + clienteData.productos + '<br>';
        resumenDiv.innerHTML += productosDiv.innerHTML;
        resumenDiv.innerHTML += 'Total compra: ' + clienteData.totalCompra + '<br><br>';
    }

    resumenDiv.innerHTML += 'Total Ventas del día: ' + clientes.length + '<br>';
    resumenDiv.innerHTML += 'Total General del día: ' + calcularTotalGeneral() + '<br><br>';
}

function calcularTotalGeneral() {
    var total = 0;

    for (var i = 0; i < clientes.length; i++) {
        total += clientes[i].totalCompra;
    }

    return total;
}