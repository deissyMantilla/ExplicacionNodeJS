const fs = require("fs");
console.log("leyendo archivo");
let contenido = fs.readFile("index.html", (error, dato) => {
  console.log(dato.toString());
  console.log(dato);
  console.log(error);
});
console.log("siguiente proceso");
