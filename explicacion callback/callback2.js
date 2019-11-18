//a las 6am me despierto
//a las 9 am estoy en clase
//a las 12 tengo hambre
//a las 4pm tengo mas hambre
//a las 8pm me compre una empanada
//a las 10pm alguien encendio la luz de mi casa y vivo solo

function rutina(despierto, clase, hambre, masHambre, empanada, luz) {
  despierto();
  clase();
  hambre();
  masHambre();
  empanada();
  luz();
}

rutina(
  function() {
    console.log("me despierto a las 6am");
  },
  function() {
    console.log("a las 9am estoy en clase");
  },
  function() {
    console.log("a las 12 tengo hambre");
  },
  function() {
    console.log("a las 4pm tengo mas hambre");
  },
  function() {
    console.log("a las 8pm compro una empanada");
  },
  function() {
    console.log("a las 10pm encendieron la luz de mi casa y vivo solo");
  }
);
