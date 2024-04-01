// Box con WebGl 
function setup() {
  createCanvas(600, 600, WEBGL);
  camera(0, 0, 50*sqrt(3), 0, 0, 0, 0, 1, 0);
  perspective(PI/3, 1, 5*sqrt(3), 500*sqrt(3));
  describe('a #F2F4F5 box rotating in 3D space');
}

// referencia sacada de https://p5js.org/es/reference/#/p5/box

function draw() {
  background(200);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(50);
  fill('#fae');

  describe('A pink square with a black outline.');
}
