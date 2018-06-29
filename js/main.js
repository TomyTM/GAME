$(document).ready(function() {
  //$(".green-pepper").hide();
  //$(".mushroom").hide();
  //$(".pep").hide();
  $("#game").show();
  $("#gameOver").hide();
  $("#counterNumber").removeClass("colorText");

  //$("#counterNumber").toggleClass("colorText");
});

var contadorGameOver = 0;

var game = {
  contador: 0,
  botones: ["#grey", "#blue", "#red", "#yellow"],
  partida: [],
  jugador: [],
  melodia: {
    grey: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"),
    blue: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"),
    red: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"),
    yellow: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3")
  }
};

function limpiarPartida(game) {
  game.partida = [];
  game.contador = 0;
  contadorGameOver = 0;
  addCount();
}

function nuevaPartida(game) {
  limpiarPartida(game);
  $("#game").show();
  $("#gameOver").hide();
}

function playGame(categoria) {
  $(categoria).addClass(categoria.replace("#", "") + "_active");

  //game.melodia[j].play();
  console.log(j);
  game.melodia[categoria.replace("#", "")].play();
  setTimeout(function() {
    $(categoria).removeClass(categoria.replace("#", "") + "_active");
  }, 100);
}

function limpiarJugador() {
  game.jugador = [];
}

function sumaNivel() {
  addCount();
}

function addCount() {
  $("#counterNumber").toggleClass("colorText");
  game.contador++;
  contadorGameOver++;

  setTimeout(function() {
    $("#counterNumber").toggleClass("colorText");
    $("#counterNumber").html(game.contador);
  }, 200);

  nuevoMovimiento();
}
