function setup() {
  //https://p5js.org/reference/#/p5/rotateZ
  createCanvas(800, 800, WEBGL);
  background(0, 0, 0);
  perspective(PI/3, 1, 5*sqrt(3), 500*sqrt(3));
}

function draw() {
  //https://p5js.org/reference/#/p5/rotateZ
  rotateZ(millis() / 1000);
  pintarRectanguloVerde(random(width), random(height));
  pintarRectanguloAzul(random(width), random(height));

  //color azul
  fill(108, 052, 250);
  noStroke();
  //rect(width/3, height/3, 20, 10);

}

function pintarVerde() {
  noStroke();
  //color verde
  fill(0, 255, 0);
}

function pintarRectanguloVerde(x, y) {
  pintarVerde();
  rect(x, y, 10, 20);
}
 
function pintarAzul() {
  noStroke();
  //color azul
  fill(108, 052, 250);
}
  
function pintarRectanguloAzul(x, y) {
  pintarAzul();
  rect(x, y, 20, 10);
}
