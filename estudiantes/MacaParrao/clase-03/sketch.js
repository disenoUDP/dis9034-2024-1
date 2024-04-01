function setup() {
  createCanvas(400, 400); 
}

function draw() {
  background(220);
  // Sacado el color de fondo de https://p5js.org/reference/#/p5/background
     background('rgba(0, 255, 0, 0.25)');
  pintarRectanguloVerde(random(width), random(height));
  
  fill(0,0,255);
  noStroke();
  rect(width/3, height/3, 20, 10);
  
  //Inverti X por Y para que el circulo se agrande con el mouse
  fill(0, 180, 200);
  noStroke ();
  circle(200, mouseY, mouseX)
}

function pintarVerde() {
    noStroke();
  fill(0, 255, 0);
}

function pintarRectanguloVerde(x, y) {
  pintarVerde();
  rect(x, y, 10, 20); 
}