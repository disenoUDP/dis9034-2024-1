//cita: https://p5js.org/es/reference/#/p5/box

function setup() {
  createCanvas (1000, 1000, WEBGL); //tamaño de pantalla en pixeles
  camera (0, 0, 50*sqrt(3), 0, 0, 0, 0, 1, 0); //seguimiento de la cámara
  perspective(PI/3, 1, 5*sqrt(3), 500*sqrt(3)); //perspectiva!!
}

function draw() {
  background(0, 0, 0); //color de fondo en rgb 
  rotateX(mouseX * 0.001); //que rote en el movimeinto del mouse + velocidad 
  rotateY(mouseY * 0.001);
  torus(30); //tamaño de la figura (box, cone, cylinder, torus(dona))
  fill(200, 160, 255); //color cuadrado en rgb
}
