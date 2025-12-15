// Simulación de operación bloqueante: un bucle pesado
function operacionBloqueante() {//SE define una funcion llamada operacion bloqueante
    for (let i = 0; i < 1e9; i++) {//Se crea un bucle for que inicia de 0 hasta que i llegue a mil millones
      // mientras que el buclwe corre ninguna otra instruccion puede ejecutarse porque se bloquea
    }
    return "Terminado";
  }
  
  console.log("Inicio operación bloqueante...");
  console.log(operacionBloqueante());//se llama la funcion y se devuelve el valor que pasa como argumento y se imrpime en consola

  