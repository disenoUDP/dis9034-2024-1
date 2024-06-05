//codigo de The Coding Train, canal de youtube
let inc = 5.01;
let start = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);
  stroke(255);
  noFill();
  beginShape();
  let xoff = start;
  for (let x = 20; x < width; x++) {
    stroke(250, 80, 40);
    // let y = random(height);
    let y = noise(xoff) * height;
    vertex(x, y);
    
    xoff += inc;
  }
  endShape();
  
  start += inc;
  
  //noLoop();
  
}