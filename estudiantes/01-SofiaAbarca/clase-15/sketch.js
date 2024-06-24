// Examen para el ramo de programación creativa multimedia
// Usar el concepto de prueba y error para crear texturas a partir
// de una imagen "corrompida"
// Se puede mantener el click pulsado para modificar pixeles

// crear 4 variables de posición que usaremos mas adelante
let x = 200;
let y = 200;
let a = 400;
let b = 400;
let c = 30;
let d = 30;

// precargar las imágenes: la faad y tres módulos distintos
// https://p5js.org/es/reference/#/p5/preload
function preload() {
  faad = loadImage("faad.jpg");
  grafico = loadImage("./grafico.jpg");
  industrial = loadImage("./industrial.jpg");
  moda = loadImage("./moda.jpg");
}

function setup() {
  // crear el lienzo de 600x600 pixeles
  createCanvas(600, 600);

  // Decide cuantos fotogramas vemos en un segundo
  // https://p5js.org/es/reference/#/p5/frameRate
  frameRate(10);

  // Dibuja la foto como el fondo del lienzo, del mismo tamaño de este
  // https://p5js.org/es/reference/#/p5/background
  background(faad, 0, 0, width, height);
}

function draw() {
  // Push y Pop permiten hacer "grupos" de estilo, donde puedo hacer tranformaciones y luego volver a lo que tenía
  // https://p5js.org/es/reference/#/p5/push
  push();

  // blendMode combina los pixeles de la imagen según el modo que se elige, en este caso, EXCLUSION resta la diferencia entre capas por cada canal, invirtiendo los valores positivos y negativos resultantes.
  // https://p5js.org/es/reference/#/p5/blendMode
  // https://helpx.adobe.com/cl/photoshop/using/blending-modes.html
  blendMode(EXCLUSION);
  // la posición x de la foto cambia de manera aleatoria entre -30 y 30 pixeles
  // https://p5js.org/es/reference/#/p5/random
  x += random(-30, 30);

  // la posición y de la foto cambia de manera aleatoria entre -30 y 30 pixeles
  // https://p5js.org/es/reference/#/p5/random
  y += random(-30, 30);

  // se dibuja la imagen en lugares aleatorios con tamaño 50x50 pixeles
  image(grafico, x, y, 50, 50);
  pop();

  push();
  // el modo de fusión SOFT LIGHT
  blendMode(SOFT_LIGHT);
  a += random(-30, 30);
  b += random(-30, 30);
  image(industrial, a, b, 80, 80);
  pop();

  push();
  // el modo overlay
  blendMode(OVERLAY);
  c += random(-30, 30);
  d += random(-30, 30);
  image(moda, c, d, 40, 40);
  pop();

  // si se mantiene el click pulsado ocurre una acción
  // https://p5js.org/es/reference/#/p5/mouseIsPressed
  if (mouseIsPressed) {
    // define el ancho aleatorio entre 40 y 50 pixeles que selecciona el mouse
    const randWidth = int(random(40, 50));

    // define la altura aleatoria entre 30 y 80 pixeles que selecciona el mouse
    const randHeight = int(random(30, 80));

    // copia los pixeles debajo del mouse usando las primeras coordenadas, y luego los dibuja siguiendo las segundas coordenadas
    // https://p5js.org/es/reference/#/p5.Image/copy
    // https://p5js.org/es/reference/#/p5/mouseX
    // https://p5js.org/es/reference/#/p5/mouseY
    copy(faad, mouseX, mouseY, 1, randHeight, mouseX, mouseY, randWidth, randHeight);
  }
}
