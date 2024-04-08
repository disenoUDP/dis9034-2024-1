// objetivo: Lograr que con el mouse se muevan ambas figuras, hacia la derecha e izquierda, tomando como referente a https://editor.p5js.org/p5/sketches/Input:_Mouse2D. Pero con un cambio, reemplazar los cuadros planos por un box (caja 3d) y si es posible poder cargar imágenes en cada cara de la figura.
// referente https://www.youtube.com/watch?v=5ekLWvqgGUg

// variable para almacenar la imágen
let img1;
let img2;

// variable que controla la velocidad de rotación de cada cubo
let velocidad = 0.01;

function preload() {
// cargar la imágen
  img1 = loadImage("imagen1.jpg");
  img2 = loadImage("imagen2.jpg");
}

function setup() {
// WEBGL permite crear el cubo en 3d
  createCanvas(720, 400, WEBGL);

// variable noStroke se usa para eliminar el borde de una figura
  noStroke();
}

function draw() {
  background(230);

// cambiar el tamaño según el movimiento del mouse
  let cubeSize = map(mouseY, 0, height, 10, 200);

// caja 1
  push();
  translate(-200, 0, 0);
// función que permite que las cajas roten en el eje x
  rotateX(frameCount * velocidad);
// función que permite que las cajas roten en el eje y
  rotateY(frameCount * velocidad);
  texture(img2);
  box(cubeSize);
  pop();

// caja 2
  push();
  translate(200, 0, 0);
  rotateX(frameCount * velocidad);
  rotateY(frameCount * velocidad);
  texture(img1);

// aplicar la textura a la siguiente caja
  box(cubeSize);
  pop();
}
