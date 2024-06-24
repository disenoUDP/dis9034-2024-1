let escala =20;


function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let iterador = 0; iterador < 10; iterador++) {
    console.log(iterador)
}
}

function draw() {
  background(250, 250, 0);
  //console.log(frameCount);
  //fill para llenar el color de elipse y cuadrado
 square(0, 0, 250);
  ellipse(mouseX, mouseY, 10*10, 20*10);
  const c = color('magenta');
fill(c);
noStroke();
square(20, 20, 60);
describe('A magenta square on a gray canvas.');
  
  
  
  
  
}