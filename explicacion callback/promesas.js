new Promise((resolve, reject) => {
  var msg = "Soy el primer mensaje";
  setTimeout(() => {
    if (msg != undefined) {
      return resolve(msg);
    } else {
      return reject(new Error("No existe primer menjase"));
    }
  }, 2000);
})
  .then(msg => {
    console.log(msg);
    var msg1 = "Soy el segundo mensaje";
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (msg1 != undefined) {
          return resolve(msg1);
        } else {
          return reject(new Error(" no existe segundo mensaje"));
        }
      }, 2000);
    });
  })
  .then(msg1 => {
    console.log(msg1);
    var msg2 = "soy el tercer mensaje";
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (msg2 != undefined) {
          return resolve(msg2);
        } else {
          return reject(new Error(" No existe el tercer mensaje"));
        }
      }, 2000);
    });
  })
  .then(msg2 => {
    console.log(msg2);
    var msg3 = "soy el cuarto mensaje y me aburri";
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (msg3 != undefined) {
          return resolve(msg3);
        } else {
          return reject(new Error(" No moleste"));
        }
      }, 2000);
    });
  })
  .then(msg3 => {
    console.log(msg3);
  })
  .catch(err => {
    console.log(err.message);
  });
