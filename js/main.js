var secuencia = Array.from({ length: 3 }, () => Math.floor(Math.random() * 4));
console.log(secuencia);

function gameOver() {
  alert("Giorgio es un paquete");
}

function createSecuencia() {
  var counter = 0;
  var steps = [];
  for (i = 0; i < secuencia.length; i++) {
    for (j = 0; j < i; j++) {}
    steps.push(secuencia[i]);
    console.log(steps);
    var sign = prompt("inserta" + steps);
    if (sign == steps) {
      alert("Pasas de nivel");
      counter++;
      console.log("Contador" + counter);
    } else {
      gameOver();
      return false;
    }
  }
}

createSecuencia();
