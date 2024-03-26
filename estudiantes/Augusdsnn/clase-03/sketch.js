let foto;

function preload(){
  img = loadImage("otter.png");
}


function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);
  image(img, random(width), random(height), 0, 0);
   img.resize(50, 100);
  image(img, 0, 0);
  image(img, 0, 500);
  image(img, 600, 0);
  image(img, 600, 500);

  function preload(){
    img2 = loadImage("otter.png");
  }
  function draw() {
    img2.filter(INVERT);
    img2.resize(200, 200);
    image(img2, mouseX, mouseY);
  }
  // Display the resized image.
  
  // filter(POSTERIZE, 3);
  //loadPixels();
  //console.log(pixels.length);
 // for(let i = 0; i < pixels.length; i++) {
   //pixels[index] = 0;
    //pixels[index + 1] = 0;
    //pixels[index + 2] = 0;
    //pixels[index + 3] = 255;
  }


