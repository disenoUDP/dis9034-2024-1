let x = 400;
let y = 400;
let pixel
let grafico
let moda

function setup() {
  createCanvas(600, 600);
  pixel = loadImage("./pixel.jpg");
  grafico = loadImage("./grafico.jpg");
moda = loadImage ("./moda.jpg")
  
background(0);
  
}

function draw() {
 

  
 
  imageMode (CENTER);
  image(grafico, mouseX, mouseY, 20, 20)
  
  x += random(-25, 25);
  y += random(-25, 25);

  
 

  
 push();
blendMode(EXCLUSION); 
  image(pixel, x, y, 40, 40);
  
  frameRate (40);
  
  pop();
  
  
  
  
  
  // https://p5js.org/es/reference/#/p5/blendMode
  // https://p5js.org/es/reference/#/p5/pop
}