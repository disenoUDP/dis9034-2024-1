# clase-05
El proyecto lo hice a base de la tarea de la clase 03 donde quiero que que la imagen rote y se mueva interactuando con el mouse, además, una interacción que al momento de hacer click se aplique en la imagen un filtro negativo

Voy a definir como condicional fotito para subir mas adelante el jpg  
let fotito;

Defino la imagen wiwi.jpg para cargarla en el proyecto
function preload() {
  fotito = loadImage("wiwi.jpg");
}

El canvas lo creo con el formato WEBGL para que la imagen más adelante rote en el axis Z https://p5js.org/es/reference/#/p5/rotateZ
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

Hago el fondo de color blanco
function draw() { 
  background(255,255,255);

Aqui hice que cuando se haga click el fondo se vuelva negro 
if (mouseIsPressed === true) {
    background(0,0,0)
  }
  
Defino la interacción del mouse donde si se hace click se aplique un filtro negativo en fotito https://p5js.org/reference/#/p5.Image/filter
  if (mouseIsPressed === true) { 
    fotito.filter(INVERT);
  }
  
Además hice una constante o loop para que rote cada 10 milisegundos en el axis Z https://p5js.org/es/reference/#/p5/rotateZ
  rotate(millis() / 10);
  
Definí la posición de la imagen en el centro como punto inicial y de ahí reacciona la rotación https://p5js.org/es/reference/#/p5/imageMode
  imageMode(CORNER)
  
La interaccion de la imagen con el mouse hace que se aleje segun donde esta el cursor, es decir, si el cursor se encuentra en el centro la imagen se aleja del centro y viceversa https://openprocessing.org/sketch/105403/ 
  image(fotito,mouseX, mouseY, -500, 200);
  
Le agregue un círculo que sigue la misma lógica de la imagen la referencia la saqué del libro "Make: Getting Started with p5,js" por McCarthy, Reas, Fry. Pág 12.
  if (mouseIsPressed){
    fill(255);
  } else {
    fill(0);
  }
  ellipse(mouseX, mouseY, 80, 80);
  }

 https://editor.p5js.org/Mossgan/full/WJnYeZBDY Pantalla completa
 https://editor.p5js.org/Mossgan/sketches/WJnYeZBDY Editor
