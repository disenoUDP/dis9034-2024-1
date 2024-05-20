PImage mwah;

void setup()  {
  size(600, 400);
  mwah = loadImage("mwah.jpeg");
}

void draw() {
  background(0);
  tint(255, mouseY, mouseX);
  image(mwah, 0, 0, mouseX, mouseY);  
}
  
