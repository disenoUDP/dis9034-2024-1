let scale = 20;


function setup() {
  createCanvas(windowWidth, windowHeight);
   background(0 ,0 ,255);
  for (let iterador = 0; iterador < 10; iterador++) {
    console.log(iterador);
  }
}

function draw() {

  //quad(mouseY, 10, mouseX, mouseX, mouseY, mouseY, mouseX, mouseY)
//describe('A rgb(0,0,0) rhombus with a rgb(0,0,0) outline drawn on a gray canvas.');
  for (let iterador = 0; iterador < 1; iterador++) {
    ellipse(random (0, width), 
           random (0, height), 
           random(5,100), 
           random(5, 100)
           );
  }
}
