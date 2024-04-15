let video;
let fuente;
let showText = true;

//Carga de archivos, en este caso fuentes. Recuperado de: https://p5js.org/reference/#/p5/text (ejemplo 7)
function preload(){
  fuente= loadFont('./RobotoMono-Bold.otf');
}

function setup() {
  
//Codigo para hacer funcionar la camara. Recuperado de: https://www.youtube.com/watch?v=G3WxVV7aN4I  
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(640,480);
  //La linea de abajo oculta que se muestre otra camara en la pantalla.
  video.hide();
  
//Modificaciones de texto. Recuperado de: https://p5js.org/reference/#/p5/text
  textFont(fuente);
  textSize (28);
  textAlign (CENTER,CENTER);
}

function draw() {
  background (220);
  
//Voltear la cámara. Recuperado de: https://editor.p5js.org/enickles/sketches/rJ9j1sx0M  
  push();
  translate(width,0);
  scale(-1, 1);
  image(video, 0, 0, 640, 480);
  pop();
  
//Cambio de filtros presionando las teclas 1, 2 y 3. Recuperado de: https://editor.p5js.org/cs105/sketches/dMZbJ2JBa 
  if (key === "1") { 
    filter(GRAY);
  } else if (key === "2") { 
    filter(POSTERIZE, 3);
  } else if (key === "3") { 
    filter(BLUR,5);
  }

//Evento de cambio al momento de apretar el mouse. Recuperado de: https://p5js.org/reference/#/p5.Element/mousePressed , https://editor.p5js.org/amcc/sketches/WQbTQWFyL , https://p5js.org/learn/interactivity.html
  if (showText){
  text("It's You", mouseX,mouseY);
  fill (0);
  } else {
  fill (255);
  text("Or Not?", mouseX,mouseY);
  
  }
}

function mousePressed() {
  showText = false;
}