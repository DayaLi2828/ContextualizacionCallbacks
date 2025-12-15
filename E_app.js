function promesaLenta() {//Declaramos una funcion 
    return new Promise((resolve) => {//creamos una funcioon que devuelve una nueva promesa que recibe una funcion resolve
      setTimeout(() => resolve("Resultado después de 2 segundos")//declaramos un temporizador asincronico que cuando se cumpla 
      //el tiempo de ejecucion se llama a la funcion resolve donde se ejecuta el mensaje resultado
      ,2000);
    });
  }
  
  async function ejecutar() {//Se define una funcion asincronica llamada ejecutar
    console.log("Inicio función async");//Luego imprimimos el mensaje inicio funcio async
    const resultado = await promesaLenta(); //creamos una constante resultado que guarda el valor que devuelve la promesa
    //luego llamamos a lal funcion promesa lenta que devuelve una promesa, el operador awairt hace que espere a que se resuelva la promesa
    console.log("Resultado recibido:", resultado);//se imrpime en consola resultado recibido seguido del valor que devolvió la promesa
    console.log("Fin función async");//se imrpime el mensaje de fin
  }
  
  ejecutar();//por ultimo llamamos a la funcion ejecutar para que todo el proceso comienze
  
  // Explicación: la asincronía ocurre en el `await`, el programa espera la promesa
  // sin bloquear el resto del sistema, y continúa cuando la promesa se resuelve.
  