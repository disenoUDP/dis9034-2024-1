let fotito;


function preload() {
  fotito=loadImage("bola.jpeg");
}

function setup() {
  createCanvas(600, 550);
  frameRate(2);
}

function draw() {
  background(255, 255, 255);
  image(fotito, random(width), random(height), 736/5, 596/5);
  (random(width),random(height));
}