

//4


/*
Callback -> Es una función que se pasa a modo de parámetro en un método

JQuery, Ajaz y los eventos de JS funcionan por medio de Callbacks

    'Llamar de vuelta'

    Por medio de stas funciones callbacks tenemos programación asíncrona ya que la callback se ejecuta en segundo plano con relación a la función principal

​
*/

    // function principal(funcionCallback){
    //     Proceso
    //     funcionCallback()
    //     booton.addEventListener('evento', funcionCallbkac)
    //     function funcionCallback(){
    //     }
    // }


// function principal(nombre){

//     console.log('Hola '+nombre);

// }

// function saludar(funcionCallback){

//     var nombre = "Stiven";

//     funcionCallback(nombre);

// }

// saludar(principal);
// function saludar(nombre){
//     console.log('Hola '+nombre);
// }


// function principal(saludar){
//     var nombre = "Andrés";
//     saludar(nombre);
// }
// principal(saludar);


//-------------------------Ejemplo1-----------------------------------

​

//1
// function principal(soyUnaCallback, parametro2){
//     console.log('Iniciaremos la instrucción, luego viene la callback');
//     soyUnaCallback('Andrés', parametro2);
// }

// principal(function(nombre, apellido){
//     console.log('me llamo '+nombre+' '+apellido);
// }, 'Villanueva');

​

//-------------------------Ejemplo2-----------------------------------

​

//2

// function funcionPrincipal(callback1, callback2, callback3){

//     //Código de la función principal

//     callback1();

//     //Más código de la función principal

//     callback2();

//     //Más código de la función principal

//     callback3();

//     //Más código si fuera necesairio

// }

​

// funcionPrincipal(

//     function(){

//         console.log('Primer callback');

//     },

//     function(){

//         console.log('Segundo callback');

//     },

//     function(){

//         console.log('Tercer callback');

//     }

// );

​

//-------------------------Ejemplo3-----------------------------------

​

// //BIT abre a las 7:40am. Los estudiantes de la jornada AM inician clase a las 08:30 AM. A las 10:00AM tienen su break. La clase termina a las 12:00 del medio día

​

function BIT(apertura, entrada, descanso, salida){

    apertura();

    entrada();

    descanso();

    salida();

}

​

BIT(

    function(){

        console.log('Apertura de puertas 7:40am')

    },

    function(){

        console.log('Inicio de clases 8:30am')

    },

    function(){

        console.log('Descanso 10:00am')

    },

    function(){

        console.log('Clase terminada 12:00 del medio día')

    }

)

​

/*Node JS -> Javascript -- Es un entorno que permite que JS sea backend

Es Asíncrono/No Bloqueante, a diferencia de PHP que es bloqueante/Síncrono

Tiene un motor V8 (propio de Google) desarrollado en C/C++

​

                NODEJS          PYTHON              PHP             RUBY

Lenguaje        Javascript      Python              PHP             RUBY

Motor           V8              CPYTHON             APACHE          LARV

Librerías       Módulos         Lib. Stand          Libre. Stand    GEMAS R

Framework       Express         DJango              Laravel         RAILS

*/

