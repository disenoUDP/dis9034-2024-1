function setup() {
  // Create a canvas element and
  // assign it to cnv.
  let cnv = createCanvas(100, 100);

  background(225, 120, 197);

  // Call randomColor() when the canvas
  // is pressed.
  cnv.mousePressed(randomColor);

  describe('A #FF8E8F square changes color when the mouse is pressed.');
}

// Paint the background either
// red, yellow, blue, or green.
function randomColor() {
  let c = random([(225, 120, 197), 'yellow', 'blue', 'green']);
  background(c);
}

/*let escala =5;
let c = randomColor(['pink', 'purple', 'white', 'black']);

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  //line(0, 0, width, height);
  cnv.mousePressed(random);

  describe('A gray square changes color when the mouse is pressed.');
}

function randomColor() {
  ;
  background(c);
}
//comentarios

function draw() {
  //background(131, 109, 86);
  //ellipse (mouseX, mouseY, 1*frameCount, 10*escala+frameCount);
  //fill (195, 183, 171)
  console.log (mouseX);
}*/