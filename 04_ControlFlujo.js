/**
 * Control de flujo
 */

//Estructura IF

// if (condicion) {

// }

var llueve = true;
if (llueve) {
  console.log("Necesito una sombrilla");
}

var administrador = "administradora";
if (administrador === "administrador") {
  console.log("bienvenido al sistema");
}

const MAYORIA_DE_EDAD = 18;
var edadPersona = 18;

if (edadPersona >= MAYORIA_DE_EDAD) {
  console.log("Es mayor de edad");
} else {
  console.log("Es menor de edad");
}

var semaforo = "rojo";
if (semaforo === "verde") {
  console.log("Arranca");
} else if (semaforo === "amarillo") {
  console.log("Listo?");
} else if (semaforo === "rojo") {
  console.log("motores apagados");
} else {
  console.log("Color no identificado");
}

//switch

var producto = "naranjas";
switch (producto) {
  case "papaya":
  case "naranjas":
    console.log("Las naranja y naranjas cuestan 1€ cada kilo");
    break;
  case "mango":
    console.log("El mango cuesta 2€ cada kilo");
    break;
  default:
    console.log("No disponemos de ese producto");
}
