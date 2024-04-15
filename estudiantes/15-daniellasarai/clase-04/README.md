# clase-04
explicación de la solemne
proceso de mi solemne:

let img;

function preload() {
  img = loadImage('chogiseok.jpeg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  background(250, 50, 50);
  image(img, 0, 0, 405, 503);
}

para crear un objeto de imagen utilicé la referencia en <https://p5js.org/es/reference/#/p5/loadImage>
para que la imagen aparesca debe estar dentro de setup o en function draw
cambiar tamaño de imagen lo saqué de <https://p5js.org/es/reference/#/p5/image>

ahora intentaré modificar y agregar imágenes

para generar un filtro de escalas de grises, hacerlo desde loadPixels, updatePixels y valores de [i]

para cambiar tamaño de imagen lo saqué de <https://p5js.org/es/reference/#/p5/image>
