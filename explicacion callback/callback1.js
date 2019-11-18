function uno(primero) {
  primero(segundo);
}

function primero(segundo) {
  //setTimeout es un metodo que genera un metodo de tiempo de espera
  //depende de dos parametros
  //setTimeout(funcion,tiempo de espera en milisegundos)
  setTimeout(() => {
    console.log("Soy el primer mensaje");
    segundo(tercero);
  }, 2000);
}

function segundo(tercero) {
  setTimeout(() => {
    console.log("soy el segundo mensaje");
    tercero(cuarto);
  }, 2000);
}

function tercero(cuarto) {
  setTimeout(() => {
    console.log("soy el tercer mensaje");
    cuarto();
  }, 2000);
}

function cuarto() {
  setTimeout(() => {
    console.log("Soy el ultimo mensaje");
  }, 2000);
}

uno(primero);
console.log("sera que soy el ultimo");
