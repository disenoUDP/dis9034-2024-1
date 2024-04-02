// codigo rescatado de https://editor.p5js.org/epcamrecursos/sketches/INqe9vJPT
// codigo tambièn rescatado de https://p5js.org/es/examples/hello-p5-interactivity-1.html


function setup(){
  createCanvas(500, 500);
}



// variables para los valores de rojo, verde y azul (r, g, b)
let r, g, b;

function setup() {
  createCanvas(720, 400);
  // colores aleatorios
  r = random(255);
  g = random(255);
  b = random(255);
}

/* function setup() {
  createCanvas(100, 100, WEBGL);

  describe('A wavy white surface spins around on gray canvas.');
}

function draw() {
  background(200, 200);

  // Rotate around the y-axis.
  rotateY(frameCount * 0.01);

  // Draw the quad.
  quad(-30, -30, 0, 30, -30, 0, 30, 30, 20, -30, 30, -20);
} */

function draw() {
  background(127);
  // dibujar el círculo
  strokeWeight(2);
  stroke(r, g, b);
  fill(r, g, b, 127);
  ellipse(360, 200, 200, 200);
}

// cuando el usuario hace click
function keyIsPressed() {
  //intentando de introducir el keyispressed 
  }
function keyPressed(){
   r = random(255)
}

function keyReleased(){
  g = random(255)
}
