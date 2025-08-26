// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "En ese instante supe que tú eras mi destino", time: 15 },
  { text: "Tus ojos son más hermosos que mil amaneceres", time: 18 },
  { text: "Si el sol llorara, serían lágrimas de tu ausencia", time: 27 },
  { text: "Caí en tu amor como estrella en el cielo", time: 32 },
  { text: "Tus besos son gotas de vida", time: 33 },
  { text: "¿Dónde estaría yo sin ti? No quiero ni pensarlo", time: 41 },
  { text: "Eres la mariposa más hermosa en mis manos", time: 47 },
  { text: "Tu luz es más brillante que cualquier crepúsculo", time: 54 },
  { text: "Eres la flor que hace florecer mi alma", time: 59 },
  { text: "Eres mi visión más perfecta", time: 67 },
  { text: "Tu amor es tan fuerte que me vuela la mente", time: 72 },
  { text: "En tu silencio escucho la voz de mi felicidad", time: 78 },
  { text: "Solo quiero vivir en tu cielo, entre tus abrazos", time: 83 },
  { text: "¿Dónde estoy? En tu corazón, y ahí quiero quedarme", time: 91 },
  { text: "Tus manos son mi refugio, tu piel mi destino", time: 97 },
  { text: "Eres la luz que ilumina mi vida entera", time: 104 },
  { text: "En el jardín de tu amor quiero vivir siempre", time: 108 },
  { text: "El instante más bello es tenerte conmigo", time: 144 },
  { text: "Tus palabras son melodías que me enamoran", time: 148 },
  { text: "Mi soledad murió el día que llegaste tú", time: 153 },
  { text: "Eres el cielo donde siempre quiero volar", time: 158 },
  { text: "Tus lágrimas son perlas que jamás quiero ver caer", time: 164 },
  { text: "¿Dónde estoy ahora? En tus brazos, mi lugar eterno", time: 169 },
  { text: "Eres la razón de mis sonrisas y mis sueños", time: 176 },
  { text: "Tu amor brilla más que mil atardeceres", time: 183 },
  { text: "Eres mi flor, mi vida, mi todo", time: 188 },
  { text: "Amor eterno, tú y yo por siempre.", time: 140 },
];


// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
