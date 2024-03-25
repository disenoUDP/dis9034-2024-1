let fotito;


function preload() {
 fotito = loadImage("./yor.jpg");
}
  
function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);
  image(fotito, 0, 0, 300, 200);
  //filter(POSTERIZE, 2);
  loadPixels();
  // console.log(pixels.length);
  for(let i = 0; i < pixels.lenght; i++) {
  pixels[index] = 0;
      // Green.
      pixels[index + 1] = 0;
      pixels[index + 2] = 0;
      pixels[index + 3] = 255;
    }
  updatePixels();
 }