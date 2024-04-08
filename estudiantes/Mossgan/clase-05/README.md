# clase-05
El proyecto lo hice a base de la tarea de la clase 03 donde quiero que que la imagen rote y se mueva interactuando con el mouse, además, una interacción que al momento de hacer click derecho se aplique en la imagen un filtro negativo

Defino como condicional fotito para subir mas adelante el jpg  
let fotito;

Defino la imagen wiwi.jpg para cargarla en el proyecto
function preload() {
  fotito = loadImage("wiwi.jpg");
}

El canvas lo creo con el formato WEBGL para que la imagen más adelante rote en el axis Z https://p5js.org/es/reference/#/p5/rotateZ
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
} 

Hago el fondo de color blanco y que al momento de hacer click derecho se vuelve negro
function draw() { 
  background(255,255,255);
if (mouseIsPressed === true) {
    background(0,0,0)
  }

Defino la interacción del mouse donde si se hace click derecho se aplique un filtro negativo en fotito https://p5js.org/reference/#/p5.Image/filter
  if (mouseIsPressed === true) { 
    fotito.filter(INVERT);
  }
  
Además hice una constante para que rote cada 10 milisegundos en el axis Z https://p5js.org/es/reference/#/p5/rotateZ
  rotate(millis() / 10);
  
definí la posición de la imagen en el centro como punto inicial y de ahí reacciona la rotación https://p5js.org/es/reference/#/p5/imageMode
  imageMode(CORNER)
  
  La interaccion de la imagen con el mouse hace que se aleje segun donde esta el cursor, es decir, si el cursor se encuentra en el centro la imagen se aleja del centro y viceversa https://openprocessing.org/sketch/105403/ 
  image(fotito,mouseX, mouseY, -500, 200);
  }

  https://editor.p5js.org/Mossgan/full/WJnYeZBDY
