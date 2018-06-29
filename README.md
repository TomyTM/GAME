# IronMemory

Juego de memoria basado en secuencias de colores

![Problem](/img/IRONMEMORY.png)

## How to play

Repite la secuencia que te arroja la maquina y consigue la maxima puntuacion

https://leismale.github.io/chicken-smash/



## ¿Cuál ha sido el mayor problema técnico al que me he enfrentado?
Generar los movimientos de la maquina y comprobarlos con los del usuario.
También la configuración responsive.


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


![Problem](/img/biggestProblem.png)

## ¿Cual es el mayor reto por solucionar en nuestro código?
Vincularlo a la base de datos para guardar registros, y generar pantallas aleatorias.
![To solve](/img/toSolve.png)

## Si empezara de cero ¿Cómo organizaría el proyecto?
Fundamental, una buena maquetación inicial.
LA lógica del juego no es compleja.
![Start again](/img/startAgain.png)

## ¡Enseña tu código!: Un detalle técnico interesante sobre mi proyecto


![Problem](/img/biggestProblem.png)