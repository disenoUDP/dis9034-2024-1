let fotito;


function preload() {
  fotito = loadImage("./bill.jpg");
}


function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);
  image(fotito, 0, 0, 400, 400);
  // filter(POSTERIZE, 2);
  
  
 // loadPixels();
  // console.log(pixels.length);
 // for(let i = 0; i < pixels.length; i++) {
   // pixels[i] = 0;
   // pixels[i + 1] = 0;
   // pixels[i + 2] = 0;
   // pixels[i + 3] = 255;
    
  //}
 //updatePixels();
  
  loadPixels();

  // Set the dot's coordinates.
  let x = 50;
  let y = 50;

  // Get the pixel density.
  let d = pixelDensity();

  // Set the pixel(s) at the center of the canvas black.
  for (let i = 0; i < d; i += 1) {
    for (let j = 0; j < d; j += 1) {
      let index = 4 * ((y * d + j) * width * d + (x * d + i));
      // Red.
      pixels[index] = 0;
      // Green.
      pixels[index + 1] = 0;
      // Blue.
      pixels[index + 2] = 0;
      // Alpha.
      pixels[index + 3] = 255;
    }
  }

  // Update the canvas.
  updatePixels();
}