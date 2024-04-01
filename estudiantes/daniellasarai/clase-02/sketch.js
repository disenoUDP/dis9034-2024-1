let escala =8;


function setup() {
  createCanvas(windowWidth, windowHeight);
}
// esto es para dibujar un ellipsoid() 
//https://p5js.org/es/reference/#/p5/ellipsoid
let detailY;
function setup() {
  createCanvas(1000, 1000, WEBGL);
  detailY = createSlider(2, 24, 6);
  detailY.position(10, height + 5);
  detailY.style('width', '80px');
  describe('a rotating white ellipsoid with limited Y detail, with a slider that adjusts detailY');
}

function draw() {

  background(150, 10, 250); 
  fill(255, 255, 255)
  rotateY(millis() / 1000);
  ellipsoid(30*escala, 40*escala, 40*escala, detailY.value());
}
  
 /* ellipse(mouseX,mouseY, 10*frameCount, 12*escala);
console.log(frameCount);
} */

