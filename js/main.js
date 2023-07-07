let titulo = "Cotización de tu envío\n\n";

let formulario = document.getElementById("formulario");

let resultadoContainer = document.getElementById("resultado-container");

formulario.addEventListener('submit', function(event) {

    event.preventDefault();

    fetch("/tasaPaises.json")

        .then(response => response.json())

        .then(tasaPaises => {

        localStorage.setItem('tasaPaises', JSON.stringify(tasaPaises));

    let origen = document.getElementById("origen").value.toLowerCase();

    let destino = document.getElementById("destino").value.toLowerCase();

    let cantidad = parseInt(document.getElementById("cantidad").value);

    let peso = parseInt(document.getElementById("peso").value);

    let alto = parseInt(document.getElementById("alto").value);

    let ancho = parseInt(document.getElementById("ancho").value);

    let largo = parseInt(document.getElementById("largo").value);

        if (!existePais(origen)) {

            mostrarError(document.getElementById("origen"), "El país de origen ingresado no es válido. Por favor, vuelva a intentarlo.");

            Swal.fire('El país de origen ingresado no es válido. Por favor, vuelva a intentarlo.');

            return;

        }

        if (!existePais(destino)) {

            mostrarError(document.getElementById("destino"), "");

            Swal.fire('El país de destino ingresado no es válido. Por favor, vuelva a intentarlo.', );

            return;

        }

        if (isNaN(cantidad) || cantidad <= 0) {

            mostrarError(document.getElementById("cantidad"), "");

            Swal.fire('La cantidad de paquetes ingresada no es válida. Por favor, vuelva a intentarlo.');
        
            return;

        }

        if (isNaN(peso) || peso <= 0) {

            mostrarError(document.getElementById("peso"), "");

            Swal.fire('El peso de cada paquete ingresado no es válido. Por favor, vuelva a intentarlo.');

            return;

        }

        if (isNaN(alto) || alto <= 0) {

            mostrarError(document.getElementById("alto"), "");

            Swal.fire('El alto del paquete ingresado no es válido. Por favor, vuelva a intentarlo.');

            return;

        }

        if (isNaN(ancho) || ancho <= 0) {

            mostrarError(document.getElementById("ancho"), "");

            Swal.fire('El ancho del paquete ingresado no es válido. Por favor, vuelva a intentarlo.');

            return;

        }

        if (isNaN(largo) || largo <= 0) {

            mostrarError(document.getElementById("largo"), "");

            Swal.fire('El largo del paquete ingresado no es válido. Por favor, vuelva a intentarlo.');

            return;

        }

        const seguro = 25;

    let tasaDestino = obtenerTasa(destino);

    let pesoTotal = cantidad * peso;

        if (pesoTotal <= 20) {

            let resultado = pesoTotal * tasaDestino + seguro;

            mostrarResultado("", origen, destino, cantidad, alto, ancho, largo, resultado, seguro);

            Swal.fire('Su envío se cotizó por peso suministrado.');

            return;

        } else {

            let factorVolumetrico = 5000;

            let pesoVolumetrico = calcularPesoVolumetrico(alto, ancho, largo, factorVolumetrico);

            let resultado = pesoVolumetrico * cantidad * tasaDestino + seguro;

            mostrarResultado("", origen, destino, cantidad, alto, ancho, largo, resultado, seguro);

            Swal.fire('Su envío se cotizó por peso volumétrico.');

            return;

        }
    })
    .catch(error => {

        console.log('Error:', error);

        Swal.fire('');

    });

});

function existePais(pais) {

    let storedTasaPaises = localStorage.getItem('tasaPaises');

    if (storedTasaPaises) {

        let parsedTasaPaises = JSON.parse(storedTasaPaises);

        return parsedTasaPaises.some(item => item.pais === pais);

    }

    return false;

}

function obtenerTasa(pais) {

    let storedTasaPaises = localStorage.getItem('tasaPaises');

    if (storedTasaPaises) {

        let parsedTasaPaises = JSON.parse(storedTasaPaises);

        return parsedTasaPaises.find(item => item.pais === pais).tasa;

    }

    return 0;

}

function calcularPesoVolumetrico(alto, ancho, largo, factorVolumetrico) {

    let volumen = alto * ancho * largo;

    return volumen / factorVolumetrico;

}

function mostrarResultado(mensaje, origen, destino, cantidad, alto, ancho, largo, resultado, seguro) {

    let resultadoTexto =

        `<h2>${titulo}</h2>` +

        `<p><strong>El costo de su envío es:</strong></p>` +

        `<ul>` +

        `<li>País de origen: ${origen}</li>` +

        `<li>País de destino: ${destino}</li>` +

        `<li>Cantidad de paquetes: ${cantidad}</li>` +

        `<li>Dimensiones ingresadas:</li>` +

        `<ul>` +

        `<li>Alto: ${alto}</li>` +

        `<li>Ancho: ${ancho}</li>` +

        `<li>Largo: ${largo}</li>` +

        `</ul>` +

        `<li>Costo del seguro: ${seguro}</li>` +

        `</ul>` +

        `<p><strong>El costo total de su envío es de $${resultado.toFixed(2)} USD</strong></p>`;

    resultadoContainer.innerHTML = mensaje + resultadoTexto;

}

function mostrarError(elemento, mensaje) {

    elemento.classList.add("error");

    resultadoContainer.textContent = mensaje;

}




