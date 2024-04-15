/*
 basado en el código Follow1 de P5
*/


function preload() {
  img = loadImage('/gatitos_2014.jpg');
}
  
let x = 100,
  y = 100,
  angle1 = 0.0,
  segLength = 0;

function setup() {
  createCanvas(800, 800);
  strokeWeight(20.0);
 // stroke(255, 100);
}

function draw() {
  background(0);
  translate(width / 3, height / 3);
  rotate(frameCount / 10); // velocidad de giro
  image(img, mouseX, mouseY, 20, 35); // que siga en mouse +  tamaño de la img
  //filter(INVERT) // filtro de la img

  dx = mouseX - x;
  dy = mouseY - y;
  angle1 = atan2(dy, dx);
  x = mouseX - cos(angle1) * segLength;
  y = mouseY - sin(angle1) * segLength;

  segment(x, y, angle1);
 image(img, x, y, 200, 200);
}

function segment(x, y, a) {
  push();
  translate(x, y);
  rotate(a);
  line(0, 0, segLength, 0);
  pop();
}
