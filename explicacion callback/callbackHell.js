function uno() {
  setTimeout(function() {
    console.log("soy el primer mensaje");
    setTimeout(function() {
      console.log("son el segundo mensaje");
      setTimeout(function() {
        console.log("soy el tercer mensaje");
        setTimeout(function() {
          console.log("soy el cuarto mensaje");
          setTimeout(function() {
            console.log("soy el quinte mensaje y me aburri");
          }, 1000);
        }, 2000);
      }, 3000);
    }, 4000);
  }, 5000);
}

uno();
