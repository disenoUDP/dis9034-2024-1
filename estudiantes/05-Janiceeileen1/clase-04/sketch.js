let img
function preload(){
  img = loadImage('./caritafeliz.jpg');
}
function setup() {
  createCanvas(600, 600, WEBGL);
}

function draw() {
  background(255,250, 0);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.00);
  rotateY(frameCount * 0.01);
  
  texture(img);
  strokeWeight(2);
  box(mouseX, mouseY, 100);
}