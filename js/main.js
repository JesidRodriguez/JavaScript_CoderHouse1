let titulo = "Cotización de tu envío\n\n";

let origen = prompt("Ingrese su país de origen").toLowerCase();

let destino = prompt("Ingrese el país sudamericano de destino").toLowerCase();

let cantidad = parseInt(prompt("Ingrese la cantidad de paquetes"));

let peso = parseInt(prompt("Ingrese el peso de cada paquete en kg"));

let alto = parseInt(prompt("Ingrese el alto del paquete en centímetros"));

let ancho = parseInt(prompt("Ingrese el ancho del paquete en centímetros"));

let largo = parseInt(prompt("Ingrese el largo del paquete en centímetros"));

const seguro = 25;

let tasaPaises = [

    { pais: 'colombia', tasa: 10 },

    { pais: 'argentina', tasa: 15 },

    { pais: 'bolivia', tasa: 5 },

    { pais: 'brazil', tasa: 12 },

    { pais: 'chile', tasa: 11 },

    { pais: 'ecuador', tasa: 12 },

    { pais: 'guayana', tasa: 9 },

    { pais: 'paraguay', tasa: 16 },

    { pais: 'surinam', tasa: 18 },

    { pais: 'trinidadYtobago', tasa: 20 },

    { pais: 'uruguay', tasa: 19 },

    { pais: 'venezuela', tasa: 3 }

];

let pesoTotal = cantidad * peso;

let factorVolumetrico = calcularPesoVolumetrico(alto, ancho, largo, 5000);

let resultado;

if (!existePais(destino)) {

    alert("El destino ingresado no es válido. Por favor, vuelva a intentarlo.");

} else {

    if (pesoTotal <= 20) {

        resultado = obtenerTasa(destino) * pesoTotal + seguro;

        alert("Su envío se cotizó por peso suministrado.");

    } else {

        resultado = obtenerTasa(destino) * factorVolumetrico * cantidad + seguro;

        alert("Su envío se cotizó por peso volumétrico.");

    }

    mostrarResultado(resultado);

}

function existePais(pais) {

    return tasaPaises.some(item => item.pais === pais);

}

function obtenerTasa(pais) {

    return tasaPaises.find(item => item.pais === pais).tasa;

}

function calcularPesoVolumetrico(alto, ancho, largo, factorVolumetrico) {

  let volumen = alto * ancho * largo;

    return volumen / factorVolumetrico;

}

function mostrarResultado(resultado) {

    alert(

        titulo + "El costo de su envío es: " + "\n" +

        "País de origen: " + origen + "\n" +

        "País de destino: " + destino + "\n" + 

        "Cantidad de paquetes: " + cantidad + "\n" +

        "Dimesiones ingresadas: " + "\n" +
        
        "Alto: " + alto + "\n" + 
        
        "Ancho: " + ancho + "\n" + 
        
        "Largo: " + largo + " \n" +

        "Costo del seguro: " + seguro + "\n\n\n" +

        "El costo total de su envío es de $" + resultado.toFixed(2) + " USD");

}
