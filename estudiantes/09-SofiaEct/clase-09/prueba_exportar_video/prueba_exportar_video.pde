//importar videos hacia processing, canal the coding train https://www.youtube.com/watch?v=nJWV7X7df9w
import processing.video.*;

Movie video;

void setup() {
  size(600, 400);
  video = new Movie(this, "evilcat.mp4");
  video.loop();
}

void movieEvent(Movie video) {
  video.read();
}

void draw() {
  image(video, 0, 0);
}
  
