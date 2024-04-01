//Dibujè una caja giratoria,inspirada en https://p5js.org/es/reference/#/p5/box
function setup() {
  createCanvas(400,400, WEBGL);
  camera(0, 0, 50*sqrt(1), 0, 0, 0, 0, 10, 0);
  perspective(PI/3, 1, 5*sqrt(5), 500*sqrt(5));
  describe('una caja roja rotando en un espacio 3D');
}

function draw() {
  background(255, 0, 0);
   rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(20, 35, 6);

}