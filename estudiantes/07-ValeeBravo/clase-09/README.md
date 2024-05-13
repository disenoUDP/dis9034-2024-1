# clase-09
Probé algunas cosas en processing 
referentes: https://happycoding.io/tutorials/processing/images/glitch-lines para decontruir una imagen y agregarle sonido mientras se decontruye la imagen 
Probé algunas ideas de imagen en processing : 
PImage img;
float offset = 0;
float easing = 0.05;

void setup() {
  size(640, 360);
  img = loadImage("balll.png");  // Load an image into the program
}

void draw() {
  image(img, 0, 0);  // Display at full opacity
  float dx = (mouseX-img.width/2) - offset;
  offset += dx * easing;
  tint(255, 127);  // Display at half opacity
  image(img, offset, 0);
}
