// Función para saber la elección aleatoria de la computadora
function computadoraElije() {
  let opciones = ["piedra", "papel", "tijeras"];
  let aleatorio = Math.floor(Math.random() * 3);
  return opciones[aleatorio];
}

// Función para saber al ganador
function ganador(jugador, computadora) {
  if (jugador === computadora) {
    return alert("Empate");
  } else if (
    (jugador === "piedra" && computadora === "tijeras") ||
    (jugador === "papel" && computadora === "piedra") ||
    (jugador === "tijeras" && computadora === "papel")
  ) {
    return alert("Ganaste");
  } else {
    return alert("Perdiste");
  }
}

// ciclo para que el juego se repita hasta que el usuario quiera slir
while (true) {
  let jugador = prompt(
    "Escribe (piedra, papel o tijeras) o escribe 'salir' para terminar:"
  );

  if (jugador === "salir") {
    alert("¡Gracias por jugar!");
    break;
  }

  if (jugador !== "piedra" && jugador !== "papel" && jugador !== "tijeras") {
    alert("Opción no válida, intenta nuevamente.");
    continue;
  }

  let computadora = computadoraElije();

  alert(` La computadora eligió: ${computadora}`);

  let resultado = ganador(jugador, computadora);
console.log(`Resultado: ${resultado}`)
}
