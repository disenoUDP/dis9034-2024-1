/*
paleta de colores:
https://colorhunt.co/palette/ffc5c5ffebd8c7dca789b9ad
https://colorhunt.co/palette/ffde95add899bc5a94f075aa
*/

//PROYECTO FUNCIONA CON MOVIMIENTO, CLIC Y RUEDA DE MOUSE

//se añaden elementos a utilizar, imagen y sonido. se cargan con función preload.
let shakira;
let marco;
let fondo;
let cam;

function preload() {
  //shakira shakira
  shakira = loadSound("medieval.mp3");
  marco = loadImage("frame.png");
  fondo = loadImage("bg.jpg");
  cam = createCapture(VIDEO);
  cam.hide();
}

//lienzo en formato web para trabajar con movimiento de elementos.
function setup() {
  createCanvas(800, 800, WEBGL);
  //image(fondo, -400, -400, width, height);
}

//Se añade rotación a la imagen y se colorea su interior con elipse.
function draw() {
  push();
  imageMode(CENTER);
  rotateZ(frameCount * -0.004);
  image(fondo, 0, 0, width * 1.5, height * 1.5);
  pop();

  /*relleno del marco circular y se colorea con gradiente que sigue el mouse en eje X. 
  Códigos utilizados: rgb(255, 209, 227) rgb(138, 205, 215) */
  push();
  //fill(88, 9, 48);
  r = map(mouseX, 0, 800, 255, 138);
  g = map(mouseX, 0, 800, 209, 205);
  b = map(mouseX, 0, 800, 227, 215);
  fill(r, g, b);
  noStroke();
  ellipse(0, 0, 650);
  pop();

  //se inserta marco y se le asigna una rotación en eje Z.
  rotateZ(frameCount * 0.004);
  image(marco, -400, -400, width, height);

  push();
  tint(232, 117, 26, 170);
  rotateZ(frameCount * -0.006);
  texture(cam);
  noStroke();
  ellipse(0, 0, 350);
  pop();
}

//Función permite que el audio se reproduzca y se pause con cada click.
function touchStarted() {
  if (shakira.isPlaying()) {
    shakira.pause();
    //background(255, 222, 149);
  } else {
    shakira.play();
    //background(188, 90, 148); antes de poner imagen de fondo, el color del fondo cambiaba cada vez que se hacía clic.
  }
}

//función que permite controlar el volumen del proyecto con la rueda del mouse desde 0 siendo lo mínimo a 1 siendo lo máximo.
function mouseWheel(rueda) {
  let currentVolume = shakira.getVolume();
  if (rueda.delta > 0) {
    currentVolume = max(0, currentVolume - 0.05);
  } else {
    currentVolume = min(1, currentVolume + 0.05);
  }
  shakira.setVolume(currentVolume);
}