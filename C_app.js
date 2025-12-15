function tareaConCallback(callback) {//SE define una funcion que recibe un parámetro llamado callback
    setTimeout(() => { //Se define una función flecha callback y declaramos un temporizador asincronico 
      const resultado = "Datos procesados";//Creamos una costante resultado que se le asigna datos procesados, este valor que pasaremos al callback
      //que se ejecutará cuando se cumplan los 1500 milisegundos.
      callback(resultado); // llamamos a la funcion callback y se pasa el valor resultado como argumento 
    }, 1500);
  }
  
  tareaConCallback((resul) => {//llamamos a la funcion, junto ocn un parámetro que recibe el valor de callback resultado
    // y lo imprime en consola 
    console.log("Callback recibió:", resul);
  });
  