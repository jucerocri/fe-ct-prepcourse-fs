/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:

      let arreglo = [];
      for (let key in objeto) {
        arreglo.push([key, objeto[key]]);
      }
      return arreglo;
    
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:

      let result = {};
      for (let i = 0; i < string.length; i++) {
        let char = string[i];
        if (result[char]) {
          result[char]++;
        } else {
          result[char] = 1;
        }
      }
      let sortedKeys = Object.keys(result).sort(); // Método Object.keys() --> devuelve un objeto Array Iterator con las claves de un objeto.
                                                   // Método sort() --> Fundamental si queremos ordenar los elementos de un array.
      let sortedResult = {};
      for (let i = 0; i < sortedKeys.length; i++) {
        sortedResult[sortedKeys[i]] = result[sortedKeys[i]];
      }
      return sortedResult;
    }


function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   
   let mayus = [];
   let minus = [];
   
   let cadena = string;
   for (let i = 0; i < cadena.length; i++) {
       
       if (cadena[i] === cadena[i].toUpperCase()) {
                                   
           mayus.push(cadena[i]);
       }else{
          minus.push(cadena[i]);
           
       }
   }
   
   let palabra = "";
   let array3 = mayus.concat(minus);
   for (let i = 0; i < array3.length; i++){
       
       palabra += array3[i];
   }
   
   return(palabra);

}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"

      return frase.split(" ").map(word => word.split("").reverse().join("")).join(" ");
}
        

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   if (numero === parseInt(numero.toString().split("").reverse().join(""))){
      return "Es capicua";
   }else{
       return "No es capicua";
  }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   
   //Un reemplazo global: https://www.w3schools.com/jsref/jsref_replace.asp
   //let text = "amo buena comida";
   //let resuelto = text.replace(/[abc]/ig, "");
   //resuelto;
   
   var cadena = string.toLocaleLowerCase();

   for (var i = cadena.length -1; i >= 0; i--) {
    //console.log (string [i]);
    if (cadena[i] === "a"){
        cadena = cadena.replace("a", "");
    }
    if (cadena[i] === "b"){
        cadena = cadena.replace("b", "");
    }
    if (cadena[i] === "c"){
        cadena = cadena.replace("c", "");
    }
    
}
return(cadena);
}


function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   
   //https://www.w3schools.com/jsref/jsref_sort.asp#
   
   // El sort()ordena los elementos de una matriz.
   // El sort()sobrescribe la matriz original.
   // El sort()ordena los elementos como cadenas en orden alfabético y ascendente.
   
   return arrayOfStrings.sort((a, b) => a.length - b.length);
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.

   //https://www.w3schools.com/jsref/jsref_includes_array.asp
   //Metodo filter()método crea una nueva matriz llena de elementos que pasan una prueba proporcionada por una función.
   //Metodo includes()método devuelve true si una matriz contiene un valor especificado.

   return array1.filter(x => array2.includes(x));
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
