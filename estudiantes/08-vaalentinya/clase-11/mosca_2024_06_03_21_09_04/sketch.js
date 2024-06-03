function setup() {
  createCanvas(600, 800);
}

console.log('mosquito en mi sopa');

function draw() {
  background(180, 190, 90);

  // Calculate the coordinates.
  let x = 600 * noise(0.005 * frameCount);
  let y = 700 * noise(0.005 * frameCount + 10000);

  // Draw the point.
  strokeWeight(5);
  point(x, y);
}