// en este editor va a poder ver las ondas de sonido, dado por la figura, al a dar click a la pantalla
// función que da permiso a la canción para ser reproducida
let song;
// algoritmo que analiza las frecuencias de audio para captar las ondas de audio
let fft;
// pre cargamos la canción para que suene
function preload() {
  song = loadSound("teparatres.mp3"); // cargamos la canción en skech
}

function setup() {
  // establecemos el tamaño del lienzo
  createCanvas(windowWidth, windowHeight);
  // hacemos que la linea de círculo sea solo una, y capte mejor las ondas
  angleMode(DEGREES);
  fft = new p5.FFT();
}

function draw() {
  //  agregamosfondo negro
  background(0);
  // color de la forma será magenta rgb
  stroke(207, 52, 107);
  // línea sin relleno
  noFill();

  //esta configuración nos ayuda a poner la figura en el centro
  translate(width / 2, height / 2);

  // calcula valores de amplitud a lo largo del dominio de la frecuencia
  let wave = fft.waveform();

  // comienza el primer lado del circulo
  beginShape();
  for (let i = 0; i <= 180; i++) {
    let index = floor(map(i, 0, 180, 0, wave.length - 1));

    let r = map(wave[index], -1, 1, 150, 350);

    // genera el movimiento de la onda segun la magnitud con los dos ejes de coordenadas en el lienzo
    let x = r * sin(i);
    let y = r * cos(i);
    vertex(x, y); // establece las coordenadas, de los vértices dibujados, entre beginShape () y endShape()
  }
  // finaliza la forma de la figura
  endShape();
  // comienza el lado izquierdo de la figura
  beginShape();
  for (let i = 0; i <= 180; i++) {
    // index es una funcion que establece el índice de posicion de la figura que funciona con valores de seno y coseno
    let index = floor(map(i, 0, 180, 0, wave.length - 1));

    let r = map(wave[index], -1, 1, 150, 350);

    let x = r * -sin(i);
    let y = r * cos(i);
    vertex(x, y);
  }
  // finaliza el segundo lado de la figura
  endShape();
}

// programamos la función del mouse para que la música suene con un click
function mouseClicked() {
  // usamos condicional
  if (song.isPlaying()) {
    // cuando hace un segundo click a la pantalla, la música y forma se detienen
    // esta función lo que hace es que al pausar la canción la forma se queda estàtica, no se reinicia, solo se ejecuta una vez
    song.pause();
    noLoop();
    // pero cuando
  } else {
    // cuando la cancion esta sonando
    song.play();
    // la figura sigue su movimiento original
    loop();
  }
}
