// Declarar variables globales
let img;
let overlayColor;

function preload() {
  // Cargar la imagen
  img = loadImage('gatito_felis.jpeg');
}

function setup() {
  createCanvas(800, 765);
  // Mostrar la imagen en su tamaño original en la posición (0,0)
  image(img, 0, 0);
}

function mousePressed() {
  // Generar un color translúcido aleatorio
  overlayColor = color(random(255), random(255), random(255), 100);
  redraw();
}

function draw() {
  // Mostrar la imagen
  image(img, 0, 0);
  // Si overlayColor no es nulo, dibujar el color translúcido
  if (overlayColor) {
    fill(overlayColor);
    rect(0, 0, width, height);
  }
}