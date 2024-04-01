function setup() {
  createCanvas(windowWidth, windowHeight); //tamaño canvas es el espacio del preview al poner play
  frameRate(8); // relentizar transcurso de frames
}

function draw() {
  background(220);
  pintarRectanguloUno(random(width/3), random(height)); // usar funcion pque dibuja rectangulos en ubicaciones random x e y
  pintarRectDos(random(width), random(height/3));// usar funcion pque dibuja rectangulos en ubicaciones random x e y, dejan la esquina inferior derecha sin elementos
  
  if (mouseIsPressed === true) {
    pintarRojo();
    ellipse(mouseX, mouseY, 80, 80);
  }
} // si el mouse de presiona y esta presionado, se crea elipse roja

function pintarVerde() {  
  fill(0, 255, 0);
  noStroke();
  } // funcion que rellena verde sin delineado

function pintarAzul() {
  fill(30, 0, 90);
  noStroke();
} // funcion que rellena azul sin delineado

function pintarRojo () {
  fill(255, 0, 0);
  noStroke();
} // funcion que rellena rojo sin delineado

function pintarRectanguloUno(x, y) {
  pintarVerde();
  rect(x, y, 10, 90);
  pintarAzul();
  rect (x*2, y, 50, 60); 
  
} // funcion que al ser llamada pinta dos tipos de rectangulos diferentes a cierta distancia 

 function pintarRectDos(x, y) {
   pintarAzul();
   rect(x, y, 50, 10);
   pintarVerde();
   rect(x*2, y*2, 70, 20)
 } // funcion que al ser llamada pinta dos tipos de rectangulos diferentes a cierta distancia 

  
