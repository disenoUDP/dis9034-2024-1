// definir rafita y asterisco
// 2024
// soy esta persona
// p5.js version

let rafita = null;
let asterisco = null;

function setup() {
  // crear un canvas.
  createCanvas(500, 500);

  // cargar la imagen.
  rafita = loadImage('rafita.png');
  asterisco = loadImage('asterisco.png');

  // cambiar frame rate.
  // https://p5js.org/reference/#/p5/frameRate
  frameRate(1000);
}

function draw() {
  // fondo del color del canvas.
  background(255, 220, 255);

  // insertar imagen con variable random de X e Y
  // con un cambio en su tamaño proporcional
  image(
    rafita,
    mouseX - 100,
    mouseY - 100,
    displayWidth / 8,
    displayHeight / 4.5,
  );

  // insertar asterisco.png y darle una variable de movimiento random
  // con un cambio en su tamaño proporcional.
  // https://p5js.org/reference/#/p5/random
  image(
    asterisco,
    random(width - 100),
    random(height - 100),
    1080 / 5,
    1080 / 5,
  );
}

// cambiar a un color random la imagen
// cuando se apreta el click.
// https://p5js.org/reference/#/p5.Element/mousePressed

// explicar la interactividad
function mousePressed() {
  tint(random(255), random(255), random(255));
  image(rafita, mouseX, mouseY, 5, 5);
  return false;
}
