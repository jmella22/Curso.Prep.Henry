// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array [0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for(i=0;i<array.length;i++){
    array[i]=array[i]+1;
  }
  return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var aux1 = " ";
  var aux2 = palabras [0];
  for (i=1;i<palabras.length;i++){
    aux2=aux2+aux1+palabras[i];
  }
  return aux2;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for(i=0;i<array.length;i++){
    if (elemento ===array[i]){
      return true;
    }
  }
  return false;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var aux1 = numeros[0];
  for (i=1;i<numeros.length;i++){
    aux1=aux1+numeros[i];
  }
  return aux1;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var aux1 = resultadosTest[0];
  for (i=1;i<resultadosTest.length;i++){
    aux1=aux1+resultadosTest[i];
  }
  var aux2 = aux1/resultadosTest.length;
  return aux2;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var aux1 = numeros[0];
  for (i=1;i<numeros.length;i++){
    if (aux1< numeros[i]){
      aux1 = numeros[i];
    }
  }
  return aux1;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var aux1 = arguments[0];
  if(arguments.length !== 0){
    for (i=1;i<arguments.length;i++){
      aux1=aux1*arguments[i];
    }
    return aux1;
  }
  else{
    return 0;
  }
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var aux1 = 0;
  for(i=0; i< arreglo.length;i++){
    if(arreglo[i]>18){
      aux1 = aux1 + 1;
    }
  }
  return aux1;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí
  if (numeroDeDia>=1 && numeroDeDia<= 7){
    if (numeroDeDia === 1 || numeroDeDia === 7){
      return "Es fin de semana";
    }
    else{
      return "Es dia Laboral";
    }
  }
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var aux1 = 0;
  var aux2 = n;
  if ( aux2 <0){
    aux2 = -aux2;
  }
  while(aux2>=10){
    aux2 = aux2/10;
  }
  aux1 = Math.floor(aux2);
  if (aux1 ===9){
    return true;
  }
  else{
    return false;
  }
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  var aux1 = arreglo[0];
  var aux2 = 1;
  for(i=1;i<arreglo.length;i++){
    if(aux1 !== arreglo[i]){
      aux2 = aux2 + 1;
    }
  }
  if (aux2 === 1){
    return true;
  }
  else{
    return false;
  }
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var array1=[];
  var ene =0;
  var mar=0;
  var nov=0;
  for (i=0; i< array.length;i++){
    switch (array[i]){
      case "Enero":
        array1.push(array[i]);
        ene =ene +1;
        break;
      case("Marzo"):
        array1.push(array[i]);
        mar =mar +1;
        break;
      case("Noviembre"):
        array1.push(array[i]);
        nov =nov +1;
        break;
    }
  }
  if (ene !==0 && mar!==0 && nov !==0){
    return array1;
  }
  else{
  return "No se encontraron los meses pedidos";
  }
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var array1 = [];
  for (i=0;i<array.length;i++){
    if (array[i]>100){
      array1.push(array[i]);
    }
  }
  return array1;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
var array =[];
var aux1 = numero;
for(i=0;i<10;i++){
  aux1= aux1 + 2;
  if(aux1 === i+1)
    break;
  array.push(aux1);
}
if (array.length === 10){
  return array;
}
else{
  return "Se interrumpió la ejecución";
}
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var array =[];
  var aux1 = numero;
  for(i=0;i<10;i++){
    if (i+1 === 5)
      continue;
    aux1= aux1 + 2;
    array.push(aux1);
  }
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

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
  mayorACien,
  breakStatement,
  continueStatement
};
