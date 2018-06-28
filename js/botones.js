document.getElementById("start-button").onclick = function() {
    nuevaPartida(game);
  };
  
  document.getElementById("reset-button").onclick = function() {
    limpiarPartida(game);
    nuevaPartida(game);
  };
  
  document.getElementById("try-again").onclick = function() {
    limpiarPartida(game);
    nuevaPartida(game);
  };