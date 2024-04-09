//para esta primera solenme se quiere lograr que suene una melodia de fondo mientras se puedan presionar las teclas numericas y las imagenes vayan cambiando. Las imagenes tienen filtros de color
//El trabajo original era lograr hacer un piano de imagenes y sonido.

// variables para las imágenes
let img1, img2, img3, img4, img5, img6, img7, img8, img9;
// loop
let synth, soundLoop;
//partitura
let notePattern = [70, 62, 64, 67, 69, 72];

// img rescado de https://p5js.org/es/examples/image-load-and-display-image.html
//importante colocarle el nombre al lado
function preload() {
  // cargar las imágenes
  img1 = loadImage("gato1.jpg");
  img2 = loadImage("gato2.jpg");
  img3 = loadImage("gato3.jpg");
  img4 = loadImage("gato4.jpg");
  img5 = loadImage("gato5.jpg");
  img6 = loadImage("gato6.jpg");
  img7 = loadImage("gato7.jpg");
  img8 = loadImage("gato8.jpg");
  img9 = loadImage("gato9.jpg");
}

function setup() {
  createCanvas(720, 400);
}

function draw() {
  background(255); // Fondo blanco

  // KeyIsPressed rescado de https://editor.p5js.org/ehagan/sketches/dlcBuy7NC
  //KeyIsPressed es presionar alguna tecla que por ahora esta determinado por las teclas numericas del 1 al 9
  if (keyIsPressed) {
    if (key === "1") {
      image(img1, 0, 0, width, height);
      filter(GRAY);
    } else if (key === "2") {
      image(img2, 0, 0, width, height);
      //los filtros "filter" funcionan para poder darle diferentes aspectos a las imagenes
      filter(THRESHOLD);
    } else if (key === "3") {
      image(img3, 0, 0, width, height);
      filter(OPAQUE);
    } else if (key === "4") {
      image(img4, 0, 0, width, height);
      filter(POSTERIZE, 3);
    } else if (key === "5") {
      image(img5, 0, 0, width, height);
      filter(BLUR, 3);
    } else if (key === "6") {
      image(img6, 0, 0, width, height);
      filter(ERODE);
    } else if (key === "7") {
      image(img7, 0, 0, width, height);
      filter(DILATE, 3);
    } else if (key === "8") {
      image(img8, 0, 0, width, height);
    } else if (key === "9") {
      image(img9, 0, 0, width, height);
      //importante colocar el numero de img y la tecla que hay que presionar
      //presionar del 1-9 en las teclas
    }
  }
}

//toda la funcion posterior que es sonido en loop esta rescatado de https://p5js.org/reference/#/p5.SoundLoop
function setup() {
  let cnv = createCanvas(500, 500);
  // presionar el mouse para que comience la musica
  cnv.mousePressed(canvasPressed);

  //tempo en el que suena, la variable puede cambiar segùn que tan rapido quiere sonar
  let intervalInSeconds = 0.5;
  soundLoop = new p5.SoundLoop(onSoundLoop, intervalInSeconds);
  //bibloteca de sonido
  synth = new p5.MonoSynth();
}

//comienza cuando se presiona el con un click en el canvas
function canvasPressed() {
  if (soundLoop.isPlaying) {
    soundLoop.stop();
  } else {
    //comienza en loop
    soundLoop.start();
  }
}

//funciòn que hace que comience a sonar en forma de loop
function onSoundLoop(timeFromNow) {
  let noteIndex = (soundLoop.iterations - 1) % notePattern.length;
  let note = midiToFreq(notePattern[noteIndex]);
  // la variable 0.5 es el volumen predeterminado que comienza sonando, se puede cambiar
  synth.play(note, 0.5, timeFromNow);
  background((noteIndex * 360) / notePattern.length, 50, 100);
}
