/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   var arr = array;
   var first = arr[0];
   return (first);
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   const arr = array;

   const last_item = arr.pop();
   return (last_item);
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
  const arr = array;
  return arr.length;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   errar1 = (array);
   errar2 = [];
   for (let i = 0; i < errar1.length; i++) {
      //console.log(errar1[i] + 1);
      errar2.push(errar1[i] + 1);
}

return (errar2);
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   const errar1 = (array);
   errar1.push(elemento);
   return (errar1);z
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   const errar1 = (array);
   errar1.unshift(elemento);
   return (errar1);
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   concatenado = palabras;
  //espacio = " ";
  tmp = "";  

  for (var i = concatenado.length - 1; i >= 0; i--) {
    tmp = concatenado[i] + (" ") + tmp;
    sinEspaacio =  tmp.trimEnd();

  }

return sinEspaacio;
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar True si está, o False si no está.
   arr = array;
   item = elemento;
    
      for (i in arr){
         if  (arr[i] == item){
            return true;    
        }
      }

return false;
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   const array = arrayOfNums;
   let sum = 0;
    
   for (let i = 0; i < array.length; i++) {
      sum += array[i];
   }
    
   return sum;
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   const array = resultadosTest;
    let suma = 0;
    
    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }
    return (suma / array.length);z
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   
   const array = arrayOfNums;
   return Math.max(...array);
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   if (arguments.length < 1) {
      return 0;
    }
    
    let producto = 1;
      
      for (let i = 0; i < arguments.length; i++) {
        producto *= arguments[i];
      }
  
  return producto;
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   const arreglo = array;
   arregloT = arreglo.filter(element => element > 18);
   return (arregloT.length);
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   let matrix = {1 : "Domiingo", 2 : "Lunes", 3 : "Martes", 4 : "Miercoles", 5 : "Jueves", 6 : "Viernes", 7 : "Sabado"};

    if (numeroDeDia == 1 || numeroDeDia == 7){
        return "Es fin de semana";}
    else{
        return "Es dia laboral";
    }
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar True si el entero inicia con 9 y False en otro caso.
   let nuevoString = num.toString();

	if (nuevoString[0] == "9"){
		return true;
	}else{
		return false;
	}
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar True.
   // Caso contrario retornar False.
   resultado = true;
    arr = array;
    for(let i = 0; i < array.length - 1; i++){
        if (array[0] !== array[i + 1]){
            resultado = false;
            return resultado;
    
        }
    
    }
return resultado;
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   const arr = array;
   let new_array = [];
   
   for(let i = 0; i < arr.length - 1; i++){
       if(arr[i] === "Enero" || arr[i] === "Marzo" || arr[i] === "Noviembre"){
           new_array.push(arr[i]);
       }   
   }
 
   if (new_array.length === 3){
       return new_array;
   }else{
       return "No se encontraron los meses pedidos";
   }
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   let tabSeis = [];

   for(let i = 0; i < 11; i++){
	   let resultado = 6 * i;
	   tabSeis.push(resultado)
   }
   return tabSeis;
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   const arr = array;
   let new_array = [];
  
   for(let i = 0; i < arr.length; i++){
      if(arr[i] > 100){
          new_array.push(arr[i]);
      }   
  }

return new_array;
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   let new_array = [];
  
  for(let i = 0; i < 10; i++){
      num = num + 2
      if (num !== i){
          new_array.push(num);
      }else{
          return "Se interrumpió la ejecución";
          break;break;
      }
  
    }
    return new_array;
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   let new_array = [];

   for(let i = 0; i < 10; i++){
        
      if (i === 5){
         continue;
      }else{
         num = num + 2;
         new_array.push(num);
    }
}
return new_array;v
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
