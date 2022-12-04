/**
 * Imprima las tablas de multiplicar del 2 al 12 utilizando la declaración for.
 */

for (let tabla = 2; tabla <= 12; tabla++) {
  console.log(`Tabla del ${tabla}:`);
  for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
    console.log(`${tabla} x ${multiplicador} = ${tabla * multiplicador}`);
  }
  console.log("");
}

/**
 * Imprima las tablas de multiplicar del 2 al 12 utilizando la declaración while.
 */

var tabla = 2;
while (tabla <= 12) {
  console.log(`Tabla del ${tabla}:`);
  var multiplicador = 1;
  while (multiplicador <= 10) {
    console.log(`${tabla} x ${multiplicador} = ${tabla * multiplicador}`);
    multiplicador++;
  }
  console.log("");
  tabla++;
}

/**
 * Imprima las tablas de multiplicar del 2 al 12 utilizando la declaración do-while.
 */

var tabla = 2;
do {
  console.log(`Tabla del ${tabla}:`);
  var multiplicador = 1;
  do {
    console.log(`${tabla} x ${multiplicador} = ${tabla * multiplicador}`);
    multiplicador++;
  } while (multiplicador <= 10);
  console.log("");
  tabla++;
} while (tabla <= 12);
