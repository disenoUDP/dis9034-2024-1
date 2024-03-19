let escala = 7;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);
  ellipse(mouseX, mouseY, 5*10, 5*10);
  fill(202, 196, 236, 0);

  //5mentarios
  console.log(frameCount);
}


let value = 0;
function draw() {
  fill(value);
  rect(200, 200, 200, 200);
  // black rect center. turns white when key pressed and black when released
}
function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    value = (200);
  } else {
    value = 0;
  }
}