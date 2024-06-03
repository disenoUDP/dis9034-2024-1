function setup() {
  createCanvas(100, 100);
  
 
  describe('A calm sea drawn in #00BCD4 against a #FFC107 sky.');
}

function draw() {
  background(0, 0, 255);

  
  // Set the noise level and scale.
  let noiseLevel = 100;
  let noiseScale = 0.02;

  // Iterate from left to right.
  for (let x = 0; x < 100; x += 1) {
    // Scale the input coordinates.
    let nx = noiseScale * x;
    let nt = noiseScale * frameCount;

  
    // Compute the noise value.
    let y = noiseLevel * noise(nx, nt);

    // Draw the line.
    line(x, 0, x, y);
  }
}