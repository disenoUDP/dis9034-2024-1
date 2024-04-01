let escala = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 255, 0);
  for (let iterador = 0; iterador < 10; iterador++) {
    console.log(iterador);
  }
}

function draw() {
  
  //ellipse(mouseX, mouseY, 10 * frameCount, 20 * escala);
for (let iterador = 0; iterador < 100; iterador++) {
    ellipse(random(0, width),
           random(0, height),
           random(5, 100),
           random(5, 100)
           );
  }
  // console.log(frameCount);
}
