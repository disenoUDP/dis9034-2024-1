let fotito;

function preload() {
  fotito = loadImage("wiwi.jpg");
}

function setup() {
  createCanvas(800, 800,WEBGL);
  perspective(PI/3, 1, 5*sqrt(3), 500*sqrt(3));
}

function draw() {
  background(220);
  rotateZ(millis() / 1000);
  //la imagen va rotando https://p5js.org/reference/#/p5/rotateZ quiero que rote con el mouse 
  image(fotito, mouseX, mouseY, 400, 400);
}