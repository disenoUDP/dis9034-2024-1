var t;

function setup() {
  createCanvas(400, 400); 
  t = 0;
}

function draw() {
    background(5);
  var x1 = width * noise(t + 5);
  var x2 = width * noise(t + 10);
  var x3 = width * noise(t + 15);
  var x4 = width * noise(t + 20);
  var r = width * noise(t + 25);
  var g = width * noise(t + 30);
  var b = width * noise(t + 35);

  bezier(x1, r, x2, g, x3, b, x4, x4);

  t += 1;
  
  noStroke();
  fill(r, g, b);


  if (frameCount % 0 * width== 0) {
  background(255)
  }
}