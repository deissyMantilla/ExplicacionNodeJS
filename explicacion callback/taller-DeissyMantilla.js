//1
// new Promise((resolve, reject) => {
//   const valor = 2;
//   console.log(`Inicia ejecución: el Valor es = ${valor} `);
//   if (valor != undefined) {
//     setTimeout(() => {
//       return resolve({ valornumero: valor, resultado: valor * valor });
//     }, 2000);
//   } else {
//     return reject(new Error("El valor no es valido"));
//   }
// })
//   .then(resultado => {
//     console.log(
//       `Finaliza con el valor =${resultado.valornumero}  y el resultado es= ${resultado.resultado} `
//     );
//   })
//   .catch(erro => {
//     console.log(erro.message);
//   });
// console.log("Procesando");

//2
// var max = 10;
// var cnt = 0;
// for (let i = 0; i < max; i++) {
//   new Promise((resolve, reject) => {
//     console.log(`Inicia ejecución: el Valor es = ${i}`);
//     setTimeout(function() {
//       return resolve({ valor: i, resultado: i * i });
//     }, 0 | (Math.random() * 1000));
//   })
//     .then(resultado => {
//       console.log(
//         `Finaliza con el valor = ${resultado.valor} y el resultado = ${resultado.resultado}`
//       );
//       return resultado.valor;
//     })
//     .then(resultado => {
//       if (++cnt == max) {
//         console.log("Exito");
//       }
//     });
// }

//3
// new Promise((resolve, reject) => {
//   let pepito = "06:00am  se despierta";
//   setTimeout(() => {
//     if (pepito != undefined) {
//       return resolve(pepito);
//     } else {
//       return reject(new Error("No Suene el Despertador"));
//     }
//   }, 2000);
// })
//   .then(repuestaPepito => {
//     console.log(repuestaPepito);
//     let pepito = "07:00am se alista y sale a coger Transmilenio ";
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (pepito != undefined) {
//           return resolve(pepito);
//         } else {
//           return reject(
//             new Error("paro en el portal y no puede coger transporte")
//           );
//         }
//       }, 2000);
//     });
//   })
//   .then(repuestaPepito => {
//     console.log(repuestaPepito);
//     let pepito = "08:15  am entra a estudiar ";
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (pepito != undefined) {
//           return resolve(pepito);
//         } else {
//           return reject(new Error("llega tarde y no puede entrar a clases"));
//         }
//       }, 2000);
//     });
//   })
//   .then(repuestaPepito => {
//     console.log(repuestaPepito);
//     let pepito = "12:00  sale del estudio y almuerza ";
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (pepito != undefined) {
//           return resolve(pepito);
//         } else {
//           return reject(
//             new Error("no puede almorzar porque le sale un pelo en la sopa")
//           );
//         }
//       }, 2000);
//     });
//   })
//   .then(repuestaPepito => {
//     console.log(repuestaPepito);
//     let pepito = "01:00pm va a trabajar en Bellatrix ";
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (pepito != undefined) {
//           return resolve(pepito);
//         } else {
//           return reject(
//             new Error("Se olvida del carnet y no lo dejan ingresar")
//           );
//         }
//       }, 2000);
//     });
//   })
//   .then(repuestaPepito => {
//     console.log(repuestaPepito);
//     let pepito =
//       "08:00pm sale del trabajo a relajarse con sus compañeros de trabajo";
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (pepito != undefined) {
//           return resolve(pepito);
//         } else {
//           return reject(new Error("Lo roban"));
//         }
//       }, 2000);
//     });
//   })
//   .then(repuestaPepito => {
//     console.log(repuestaPepito);
//     let pepito = "11:00pm vuelve a casa ";
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (pepito != undefined) {
//           return resolve(pepito);
//         } else {
//           return reject(
//             new Error(
//               "Ha perdido las llaves de su casa y le toca dormir en el parque"
//             )
//           );
//         }
//       }, 2000);
//     });
//   })
//   .then(repuestaPepito => {
//     console.log(repuestaPepito);
//     let pepito = "01:00am se acuesta para ver Netflix. ";
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (pepito != undefined) {
//           return resolve(pepito);
//         } else {
//           return reject(
//             new Error(
//               "Olvido pagar la mensualidad de Netflix... se desbarata la cama y no tiene donde dormir"
//             )
//           );
//         }
//       }, 2000);
//     });
//   })
//   .then(repuestaPepito => {
//     console.log(repuestaPepito);
//   })
//   .catch(error => {
//     console.log(error.message);
//   });
