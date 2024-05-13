let fotito;

function preload() {
  fotito = loadImage("wiwi.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() { 
  background(0);

  if (mouseIsPressed === true) { 
    //https://p5js.org/reference/#/p5.Image/filter
    fotito.filter(INVERT);
  }
  // para que rote https://p5js.org/reference/#/p5/rotateZ
  rotate(millis() / 10);
  
  //ahora hare que la imagen se mueva con el cursor https://openprocessing.org/sketch/105403/
  imageMode(CORNER)
  
  image(fotito,mouseX, mouseY, -500, 200);

  
  }