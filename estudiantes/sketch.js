function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  pintarRectanguloVerde(random(width),random(height));

  fill(0, 0, 255);
  noStroke();
  rect(width / 3, height / 3, 20, 10);
}

function pintarVerde() {
  noStroke();
  fill(0, 255, 0);
}

function pintarRectanguloVerde(x, y) {
  pintarVerde();
  rect(x, y, 10, 20);
}