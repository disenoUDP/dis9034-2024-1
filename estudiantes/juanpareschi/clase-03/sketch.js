let arte;

function preload() {
  arte = loadImage("bfngf.jpg");
}

function setup() {
  createCanvas(400,400);
}

function draw() {
background(220);
  image(arte, 0, 0, width, height);
  filter (THRESHOLD);
InvocarRect(random(width),random(height)); 
InvocarRect(random(width),random(height)); 
InvocarRect(random(width),random(height)); 
InvocarRect(random(width),random(height)); 
InvocarRect(random(width),random(height)); 
InvocarRect(random(width),random(height)); 
  
  
//  fill(125,16,125);
 // noStroke();
  // rect(width/4, height/3, 50, 80);
}

function pintarMagia(){
  noStroke();
  fill (230, 0, 0);
}

function InvocarRect (x, y) {
  pintarMagia();
  rect (x, y, 57, 68);
}

