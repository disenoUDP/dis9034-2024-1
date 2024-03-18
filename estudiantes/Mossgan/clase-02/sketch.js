let escale = 20;


function setup() {
  createCanvas(windowWidth, windowHeight,WEBGL);
  camera(0, 0, 50*sqrt(3), 0, 0, 0, 0, 1, 0);
  perspective(PI/3, 1, 5*sqrt(3), 500*sqrt(3));
}

function draw() {
  background(090, 130, 230);
  // un cubo magenta rotando
  fill(207, 052, 118)
  noStroke();
  //describe('A magenta square without outline in on a lightblue canvas.');
  rotateX(millis() / 1000);
  box();
  console.log(frameCount);
}