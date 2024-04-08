let fotito;
let x = 0;
let y = 1;
let s = 0;

// cargar la imagen
function preload () {
fotito=loadImage("rafita.png");
}


function setup() {
  createCanvas(600, 500);
}

// hacer que salte
function keyPressed(){ 
  if (key == ' '){
    s = 60;
  }
}
function draw() {
  
  // color de fondo del canva
  
  background(255,220,255);
  
  // acá quería que el personaje pretenda que se mueve constantemente
  // https://p5js.org/es/reference/#/p5/noLoop
  
  x = x + 2; //velocidad a la que avanza hacia adelante
  if (x > 600) {
    x = 0;
  }
    image(fotito, x - 200, y, 512/2, 512/2);




  
  if (key == ' ') {
   s = 3;
  }
  
// línea para simular que el personaje va andando por ahí
  line(0, 300, 600, 300);
  
  
  y -= s;
  s -= 60;
  if (y > 120 || y < 30){
    y = 122; //por donde va la imagen
  }
  
}
