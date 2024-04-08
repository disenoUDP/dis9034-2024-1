// definir rafita.

let rafita = null;

function setup() {
  
  // crear un canvas.
  
  createCanvas(500, 500);
  
  // cargar la imagen.
  
  rafita = loadImage("rafita.jpg");
  
  // disminuir frame rate.
  
  frameRate(3);
  
}

function draw() {
  
  // fondo del canvas.
  
  background(255, 220, 255);
  
  // insertar imagen con variable X e Y random.
  
  image(rafita, random(height), random(width), displayWidth/8, displayHeight/5);
  
}

// cambiar a un color random la imagen
// cuando se apreta el click.

function mousePressed() {
  tint(random(255), random(255), random(255));
  image(rafita, mouseX, mouseY, 5, 5);
  return false;
}

