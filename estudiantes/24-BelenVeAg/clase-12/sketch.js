var t;

function setup() {
  createCanvas(400, 400);
  background(0);
  t = 0;
}

function draw() {
  // fade the background by giving it a low opacity
  background(0, 5);

  var x = width * noise(t);
  var y = height * noise(t+10);
  var r = 255 * noise(t+20);
  var g = 255 * noise(t+30);
  var b = 255 * noise(t+70);
  var h = 255 * noise(t+90);
  var d = 255 * noise(t+120);
  
  noStroke();
  fill(r, g, b);
  triangle(x, y, g, b, h, d);
 

  t = t + 0.01;
}
