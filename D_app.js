// Importamos prompt-sync
const prompt = require("prompt-sync")();
//creamos una constante nombre donde se pide que ingrese el nombre
const nombre = prompt ("Ingresa tu nombre:")

function verificarUsuario(usuario) {//Creamos una funcion que recibe un parametro llamado usuario
    return new Promise((resolve, reject) => { //creamos una funcion que devuelve una nueva promesa que recibe dos funciones exito y error
      if (usuario === "Dayana") {//condicion que si el valor de usuario es estrictamente dayana
        resolve("Acceso permitido");//resolve retorna el mensaje acceso permitido como resultado de la promesa
      } else {//si no se cumple la condición reject retorna acceso denegado
        reject("Acceso denegado");
      }
    });
  }
  
  // Caso exitoso
  verificarUsuario(nombre)//Llamamos a la funcion verificar usuario pasando como argumento la constante nombre 
    .then((msg) => console.log(msg))   // manejamos then que captura el resultado de resolve con un parametro msg que recibe el valor de resolve
    .catch((err) => console.error(err));//manejamos catch que captura el resultado de reject con un parametro err que recibe el valor de reject
   