const fs = require("fs");
console.log("Leyendo archivo");
let contenido = fs.readFileSync("index.html");
console.log(contenido);
console.log("Siguiente proceso");
