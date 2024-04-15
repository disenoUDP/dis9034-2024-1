// Queria hacer un circulo que pareciera que rebota.


let escala = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(12);
}


function draw() {
  background(203, 33, 33);
  fill (231,219,129);
  ellipse (mouseX, mouseY, pmouseX, pmouseY, 10, 10);
}