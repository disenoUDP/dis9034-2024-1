let escala = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() { 
  background(243, 116, 174);
  ellipse(mouseX, mouseY, 10*frameCount, 20*escala);
  console.log(frameCount);
  strokeWeight(0.5);
  line(50, 0, 50, 100);
  textSize(16);
  textAlign(CENTER);
  text("all we", 50, 30);
  textAlign(CENTER);
  text("need is", 50, 50);
  textAlign(CENTER);
  text("love", 50, 70);
}