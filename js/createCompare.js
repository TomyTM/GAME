var j = 0;

function muestraMovimiento() {
  var i = 0;
  var moves = setInterval(function() {
    playGame(game.partida[i]);
    i++;
    j++;
    if (i >= game.partida.length) {
      clearInterval(moves);
    }
  }, 500);
  j = 0;

  limpiarJugador();
}

var h = 0;
function addJugador(id) {
  var categoria = "#" + id;
  //if (h = 0;  h < j; h++) console.log(h);
  //game.melodia[h].play();
  game.melodia[categoria.replace("#", "")].play();
  game.jugador.push(categoria);

  turnoJugador(categoria);
}

function nuevoMovimiento() {
  game.partida.push(game.botones[Math.floor(Math.random() * 4)]);
  //alert(game.partida.length);
  muestraMovimiento();
}

function turnoJugador(x) {
  if (
    game.jugador[game.jugador.length - 1] !==
    game.partida[game.jugador.length - 1]
  ) {
    {
      $("#game").hide();
      $("#gameOver").show();
      $("#counterNumberGameOver").html(contadorGameOver);

      limpiarPartida(game);
    }
  } else {
    var check = game.jugador.length === game.partida.length;
    h++;
    if (check) {
      //alert("Pasas de nivel");
      sumaNivel();
      h = 0;
    }
  }
}
