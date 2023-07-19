// Una variable que contenga tu altura en centímetros (entero)
let alturaCM = 185;

// Una variable que contenga tu altura en metros (número de coma flotante)
let alturaMTS = 1.85;

// Una variable que contenga tu peso en kilogramos (número de coma flotante)
let pesoKG = 90.5;

// Una variable que contenga tu altura en metros redondeada hacia arriba
let redondeoaltura = (alturaMTS.toFixed(1));

// Una variable que contenga tu peso en kilogramos redondeado hacia abajo
let redondeadoAbajo = Math.floor(pesoKG);

//  Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
let maxValuePlusOne = Number.MAX_VALUE + 1;
let maxValue = Number.MAX_VALUE;

if (maxValuePlusOne === maxValue) {
  console.log("El máximo valor + 1 es igual al máximo valor en JavaScript.");
} else {
  console.log("El máximo valor + 1 NO es igual al máximo valor en JavaScript.");
}