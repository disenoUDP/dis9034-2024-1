function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(2, 99, 67);
  pintarRectanguloVerde(random(width), random(height));

  // rectangulo azul
  fill(0, 0, 255);
  noStroke();
  rect(width / 8, height / 3, 200, 50);

  // fill va antes de la figura
  fill(255, 0, 0);
  circle(mouseX, 80, mouseY);
}

function pintarVerde() {
  noStroke();
  fill(0, 255, 0);
}

function pintarRectanguloVerde(x, y) {
  pintarVerde();
  rect(x, y, 100, 100);
}
