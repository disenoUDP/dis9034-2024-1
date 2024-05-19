/**
 * Mouse Functions. 
 * 
 * Click on the box and drag it across the screen. 
 */
 
PImage img1;
PImage img2;
PImage img3;
PImage img4;
float bx;
float by;
int boxSize = 100;
boolean overBox = false;
boolean locked = false;
float xOffset = 0.0; 
float yOffset = 0.0; 

void setup() {
  img1 = loadImage("11.jpg");
  img2 = loadImage("22.jpg");
  img3 = loadImage("33.jpg");
  img4 = loadImage("44.jpg");
  size(600, 600);
  bx = width/2.0;
  by = height/2.0;
  imageMode(CENTER);
  
}

void draw() { 
  background(0);
  
  // Test if the cursor is over the box 
  if (mouseX > bx-boxSize && mouseX < bx+boxSize && 
      mouseY > by-boxSize && mouseY < by+boxSize) {
    overBox = true;  
    if(!locked) { 
      stroke(255); 
      fill(153);
    } 
  } else {
    stroke(153);
    fill(153);
    overBox = false;
  }
  
  // Draw the box
  image(img1,100, 100, 200, 200);
  image(img2,300, 300, 200, 200);
  image(img3,300, 100, 200, 200);
  image(img4,bx, by, 200, 200);
 

}

void mousePressed() {
  if(overBox) { 
    locked = true; 
    fill(255, 255, 255);
  } else {
    locked = false;
  }
  xOffset = mouseX-bx; 
  yOffset = mouseY-by; 

}

void mouseDragged() {
  if(locked) {
    bx = mouseX-xOffset; 
    by = mouseY-yOffset; 
  }
}

void mouseReleased() {
  locked = false;
}
