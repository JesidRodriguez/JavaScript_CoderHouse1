// cotizador de envios latinoamerica

function cotizacion() {

  let titulo = "Cotizancion de tu envío\n\n"; 

// variables suministradas segun interes del cliente

  let origen = prompt("Ingrese su país de origen").toUpperCase();
  
  let destino = prompt("Ingrese el país sudamericano de destino").toUpperCase(); 
  
  let cantidad = parseInt(prompt("Ingrese la cantidad de paquetes"));
  
  let peso = parseInt(prompt("Ingrese el peso de cada paquete en kg"));

// valores fijos establecidos por la compañia que podrian variar

  const seguro = 25;

  let tasaColombia = 10;

  let tasaArgentina = 15;

  let tasaBolivia = 5;

  let tasaBrazil = 12;

  let tasaChile = 11;

  let tasaEcuador = 12;

  let tasaGuyana = 9;

  let tasaParaguay = 16;

  let tasaPeru = 17;

  let tasaSurinam = 18;

  let tasaTrinidadYToBago = 20;

  let tasaUruguay = 19;

  let tasaVenezuela = 3;

// variables requeridas para liquidacion

  let pesoTotal = cantidad * peso;

  let resultado;

// para calcular dependiendo la seleccion del cliente

  switch (destino) {

    case "COLOMBIA":

      resultado = tasaColombia * pesoTotal + seguro;

      break;

    case "ARGENTINA":

      resultado = tasaArgentina * pesoTotal + seguro;

      break;

    case "BOLIVIA":

      resultado = tasaBolivia * pesoTotal + seguro;

      break;

    case "BRAZIL":

      resultado = pesoTotal * tasaBrazil + seguro;

      break;

    case "CHILE":

      resultado = pesoTotal * tasaChile + seguro;

      break;

    case "ECUADOR":

      resultado = pesoTotal * tasaEcuador + seguro;

      break;

    case "GUYANA":

      resultado = pesoTotal * tasaGuyana + seguro;

      break;

    case "PARAGUAY":

      resultado = pesoTotal * tasaParaguay + seguro;

      break;

    case "PERU":

      resultado = pesoTotal * tasaPeru + seguro;

      break;

    case "SURINAM":

      resultado = pesoTotal * tasaSurinam + seguro;

      break;

    case "TRINIDADYTOBAGO":

      resultado = pesoTotal * tasaTrinidadYToBago + seguro;

      break;

    case "URUGUAY":

      resultado = pesoTotal * tasaUruguay + seguro;

      break;

    case "VENEZUELA":

      resultado = pesoTotal * tasaVenezuela + seguro;

      break;

    default:

      resultado = 0;

      break;

  }

//con los parametros de la empresa solo son permitidos destinos sur americanos

  if (resultado === 0) {

    alert("El destino ingresado no es válido. Por favor, vuelva a intentarlo.");

  } else {

    alert(titulo + "El costo de su envío es:\n" 

      + "País de origen: " + origen + "\n" 

      + "País de destino: " + destino + "\n"

      + "Cantidad de paquetes: " + cantidad + "\n"

      + "Costo del seguro: " + seguro + "\n"

      + "El costo total de su envío es de $" + resultado.toFixed(2) + " USD");

  }

}

cotizacion();