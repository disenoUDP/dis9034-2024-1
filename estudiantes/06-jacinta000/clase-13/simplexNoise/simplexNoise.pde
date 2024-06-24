import processing.sound.*;
SoundFile song;
OpenSimplexNoise noise;
FFT fft;
 
int bands = 512;
float[] spectrum = new float[bands];
int numFrames = 150;
float radius = 3.5;
int spacing = 16; // espacio entre lineas
int border = spacing*2; // margenes
void setup(){
  //fullScreen();
  size(500,500);
  background(0);
  stroke(255);
  noFill();
  
  
  song = new SoundFile(this, "AUDIO MIO.aif");
  fft = new FFT(this, bands);
  song.play();
  noise = new OpenSimplexNoise();
  fft.input(song);
}


void draw(){
  float t = 1.0*frameCount/numFrames;
 
  background(0);
  fft.analyze(spectrum);
  
  float scale = 0.2;
  float z = map(bands, 0, song.duration(), 0, width);
  
  beginShape();
  for(int x = 0; x<bands;x++){
    float ns = (float)noise.eval(scale/radius, height, z, height - spectrum[x]*height);
    float y = map(ns,-1,1,0,height/2);
    vertex(x,y);
  }
  endShape();
 
  println(t);
 
  if(frameCount<=numFrames){
    //saveFrame("tuto2###.jpg");
  }
  /*if(frameCount == numFrames){
    println("finished");
    stop();
  }*/
}
