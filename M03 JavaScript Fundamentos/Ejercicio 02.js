/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   // Debe retornar un string.
   return string
}

// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   // Retorna el resultado de su suma.
   suma = x+y;
   return suma;
}

function resta(x, y) {
   // Retorna el resultado de la resta.
   resta = x - y;
   return resta
}

function divide(x, y) {
   // Retorna el resultado de su división.
   divide = x / y;
   return divide;
}

function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   multiplica = x * y;
   return multiplica;
}

function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   resto = x % y;
   return resto;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
