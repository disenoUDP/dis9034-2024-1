import processing.video.*;

Capture video;

void setup()  {
  size(600, 400);
  video = new Capture(this, 640, 480, 30);
  video.start();
}

void draw() {
  video.read();
  background(0);
  tint(255, mouseY, mouseY);
  image(video, 0, 0, mouseX, mouseY);  
}
