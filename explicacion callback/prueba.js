function asincrono(valor, ejecución) {
  console.log(
    `Inicia ejecución: e
l Valor es = ${valor}`
  );
  setTimeout(function() {
    ejecucion(valor, valor * valor);
  }, 0 | (Math.random() * 100));
}
var max = 10;
var cnt = 0;
for (var i = 0; i < max; i++) {
  asincrono(i, function(valor, resultado) {
    console.log(
      `Finaliza con el val
or = ${valor} y el resultado = ${resultado} `
    );
    if (++cnt === max) {
      cons;
      ole.log("Éxito");
    }
  });
}
