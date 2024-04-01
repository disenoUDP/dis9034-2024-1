let escala =20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let iterador = 0; iterador < 10; iterador++) {
    console.log(iterador)
  }
}

function draw() {
 /* background(80, 140, 20);
  fill(160, 0, 0);
  rect(mouseX, mouseY, 10*escala, 10*escala);
  console.log(frameCount) //serial print basicamente */
  for (let iterador = 0; iterador < 10; iterador++)
    ellipse(random(0, width),
           random (0, height),
           random(5, 100),
           random(5, 100)
           );
}