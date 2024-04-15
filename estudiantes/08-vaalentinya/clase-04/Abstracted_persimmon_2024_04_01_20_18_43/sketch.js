function setup() {
  createCanvas(600, 600);
} 

function draw() {
  background(200);
  girarConEstilo();
  rectMode(CENTER);
  translate(20, 0);
  translate(p5.Vector.fromAngle(millis() / 1000, 40));
  rect(0, 0, 200, 200);
  // aquí se crea otro rectángulo q sigue al mouse, pero aún no consigo q rote en el mismo mouse grrrr
  rect(mouseX, mouseY, 100, 100)
  
}

// quiero que el cuadrado rote en su propio eje

function girarConEstilo(){
  fill(220, 10, 80, 230);
  rotate(frameCount / 30.0);
}

// NO LOGRO QUE SE PONGA AL MEDIO

// function inspo by https://editor.p5js.org/p5/sketches/Form:_Star




// ayuda : ( 
