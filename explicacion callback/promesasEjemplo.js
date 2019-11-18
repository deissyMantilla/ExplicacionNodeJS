// rutina de Juanito
// 6am se despierta  != llega tarde
// 9am desayuna != se muere de hambre
// 12 almorzar != funeral de Juanito
// 3pm trabajar != despiden
// 6pm regresa a casa != esta con la novia (no oficial)
// 11pm duerme != se trasnocha
// 2am va al baño != se orina en la cama

new Promise((resolve, reject) => {
  var paso1 = "Juanito se despierta";
  setTimeout(() => {
    if (paso1 != undefined) {
      return resolve(paso1);
    } else {
      return reject(new Error("Juanito llega tarde"));
    }
  }, 2000);
})
  .then(paso1 => {
    console.log(paso1);
    let paso2 = "Juanito desayuna";
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (paso2 != undefined) {
          return resolve(paso2);
        } else {
          return reject(new Error("Juanito se muere de hambre"));
        }
      }, 2000);
    });
  })
  .then(paso2 => {
    console.log(paso1);
    let paso3 = "Juanito Almuerza";
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (paso3 != undefined) {
          return resolve(paso3);
        } else {
          return reject(new Error("funeral de Juanito"));
        }
      }, 2000);
    });
  })
  .then(paso3 => {
    console.log(paso3);
    let paso4 = "Juanito esta trabajando";
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (paso4 != undefined) {
          return resolve(paso4);
        } else {
          return reject(new Error("Despidieron a Juanito"));
        }
      }, 2000);
    });
  })
  .then(paso4 => {
    console.log(paso4);
    let paso5 = "Juanito regresa a la casa";
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (paso5 != undefined) {
          return resolve(paso5);
        } else {
          return reject(new Error("Juanito esta con la novia no oficial"));
        }
      }, 2000);
    });
  })
  .then(paso5 => {
    console.log(paso5);
    let paso6 = "Juanito esta dormido";
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (paso6 != undefined) {
          return resolve(paso6);
        } else {
          return reject(new Error("Juanito se trasnocho"));
        }
      }, 2000);
    });
  })
  .then(paso6 => {
    console.log(paso6);
    let paso7 = "Juanito va al baño";
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (paso7 != undefined) {
          return resolve(paso7);
        } else {
          return reject(new Error("Juanito se orino en la cama"));
        }
      }, 2000);
    });
  })
  .then(paso7 => {
    console.log(paso7);
  })
  .catch(err => {
    console.log(err.message);
  });
