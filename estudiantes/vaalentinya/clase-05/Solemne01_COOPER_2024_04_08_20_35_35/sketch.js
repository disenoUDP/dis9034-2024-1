let dobleFondo
let bailarina
let skater

let angle = 0 //angulo de rotación inicial!!! 

function preload() {
  dobleFondo = loadImage("./dobleFondo.png");
  skater = loadImage ("./skater.png")
  bailarina = loadImage ("./bailarina.png")
}

function setup() {
  createCanvas(600, 600);
  frameRate(30)
}

//SKATER
function coolSkater(){
  if (mouseY > height / 2){
    push();
  translate(mouseX, mouseY); // anclaje del cuadrado al centro del mouse
  rotate(angle);
  image(skater, -100, -100, 150, 150); 
  angle -= 0.2;
  pop(); 
  } 
}

//BAILARINA
function coolBailarina(){
  if (mouseY < height / 2){ // dividiendo la pantalla en dos!!
    let wiggleX = random(-5, 5); //wiggle = sacudir
    let wiggleY = random(-5, 5)
    push();
  translate(mouseX + wiggleX, mouseY + wiggleY); // anclaje del cuadrado al centro del mouse
  image(bailarina, -100, -100, 180, 180);
  angle -= 0.05;
  pop(); 
  } 
}

function draw() {
  background(220);
  image(dobleFondo, 0, 0, width, height);
  coolSkater();
  coolBailarina();
}

/* PUSH AND POP https://p5js.org/reference/#/p5/push 
   aun no lo entiendo muy bien :( (YA ENTIENDO)
   
   MOUSEX, MOUSEY https://p5js.org/reference/#/p5/mouseX
   
   WIGGLE !!! 
   
   MouseMoved https://p5js.org/reference/#/p5/mouseMoved
   */
