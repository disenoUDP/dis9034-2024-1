function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  pintarSquareVerde(random(width), random(height));
  
  rect(width/4, height/4, 20, 40);
  rect(width/2, height/2, 20, 40);
  rect(random(width), random(height), 50);
  
fill(0, 0, 70);
  noStroke();
  //el tercer parámetro modifica lo redondeado de las esquinas, es decir el 30
  square(width/3, height/3, 70, 30);
}
function pintarVerde(){
  noStroke();
  fill(0, 255, 0);
}
function pintarSquareVerde(x, y){
  pintarVerde();
  square(x, y, 10, 20);
}
