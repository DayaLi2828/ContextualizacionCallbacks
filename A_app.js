  // Sincrónico: se ejecuta línea por línea, nada avanza hasta terminar
//function sumaSincronica(a, b) {  // Se define una función con dos parámetros.
    //return a + b; //Se retorna la suma de los parámetros de la función.
  //}
 // console.log("Resultado sincrónico:", sumaSincronica(5, 3)); // llama a la función, a toma el valor de 5 y b el valos de 3.
  
  // Asincrónico: se programa para ejecutarse después, el flujo no se detiene
console.log("Comienzo de la tarea"); // Primero se imprime comienzo de la tarea

setTimeout(() => {//se define una función flecha callback como argumento que se le pasa a setTimeout.
    // que programa la ejecución despúes de 2000 milisegundods.
  console.log("Mensaje mostrado después del tiempo de espera");//cuando ya se cumpla el tiempo indicado se imprime el callback
}, 2500);
//se imrpime enseguida el mensaje mientras quellegan los datos 
console.log("Preparando interfaz mientras llegan los datos...");
