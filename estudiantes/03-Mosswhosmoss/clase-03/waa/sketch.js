let fotito;



function preload() {
  fotito = loadImage("ohhhhhmaigad.jpg");
}


function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);
  image(fotito, mouseX, mouseY, 400, 500);
  // filter(THRESHOLD);
  loadPixels();
  //console.log(pixels.length)
 // for(let i = 0; i < pixels.lenght; i++) {
    //pixels[index] = 0;
    //pixels[index + 1] = 0;
    //pixels[index + 2] = 0;
    //pixels[index + 3] = 255;
    
 // }
  updatePixels();
}