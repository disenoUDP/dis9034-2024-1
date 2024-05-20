//crear una caja que vaya en un giro constante, con textura de un video, hasta el punto del toque del mouse, de textura(video).
//crear una variable de video
let vid1;
let vid2;
//cargar un archivo de video para usarlo como textura
function preload() {
  vid1 = createVideo("perritonadador.mp4");
  vid2 = createVideo("galaxia.mp4");
}
//crear un lienzo introduciendo la tercera dimensión: Z con WEBGL
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  //fondo de color blanco
  background(255);
  //rotación en el eje y, z.
  //la referencia de rotación la tomé de https://p5js.org/reference/#/p5/rotateY 
  //la referencia de frameCount la tomé de https://p5js.org/reference/#/p5/frameCount 
  rotateY(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  box(100, 150, 100, width/2, height/2);
  texture(vid1);
  vid1.loop();
//Condición: Cuando el mouse se mantiene presionado, la textura cambia, es decir, el video cambia.
  if (mouseIsPressed)
 texture(vid2);
  vid2.loop();
}
