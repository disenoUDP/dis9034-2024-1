function setup() {
  createCanvas(400, 400);

}

function draw() {
  background(220); 
  // sacado de color background() https://p5js.org/reference/#/p5/background
 background('rgba(0, 255, 0, 0.25)');
  pintarRectanguloVerde(random(width),random(height));
  
  noStroke()
  rect(width/2, height/2, 10, 200)
  fill(204, 300, 0);
  noStroke();
  //elipse color amarillo en movimiento del mouse
  ellipse(100, mouseX, mouseY);
  //elipse color amarillo estatico 
ellipse(200, 200, 200, 200);  
}

function pintarVerde() {
   noStroke();
  fill(0, 180, 200)
}
function pintarRectanguloVerde(x, y) {
  pintarVerde();
  rect(x, y, 200, 100);  
  }