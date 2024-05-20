// 20 de mayo del 2024
// bienvenidx! grita para activar el filtro
// por daniela salamanca
// este proyecto se hizo con p5.js Version: 1.0.1 - 2021-05-25

// definir las variables

// acceso al micrófono
let mic;
// valor que define el nivel de sonido necesario para activar el filtro
let threshold = 0.1;

function setup() {
  // crear un lienzo de 650 por 500 pixeles
  createCanvas(650, 500);

  // captura la imagen de la cámara del computador
  captura = createCapture(VIDEO);

  // se establece el tamaño del video capturado
  captura.size(650, 500);

  // MMM NO SE TODAVIA
  captura.hide();

  // accede al micrófono del dispositivo.
  mic = new p5.AudioIn();

  // inicia la captura de audio
  mic.start();
}

function draw() {
  // se establece el color de fondo a blanco
  background(255);

  // proyecta la imagen capturada por la cámara en el canvas
  image(captura, 0, 0, width, height);

  // se obtiene el nivel de volumen actual del micrófono usando
  let vol = mic.getLevel();

  // se implementa una condición para verificar si el nivel de volumen supera el umbral establecido,
  if (vol > threshold) {
    // si el volumen es mayor al umbral se aplica el filtro threshold
    let camara = captura.get();
    camara.filter(THRESHOLD);
    image(camara, 0, 0, width, height);
  }
}
