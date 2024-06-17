import processing.sound.*;


// crear visualizer a traves de la libreria sound de processing

SoundFile song;
int spacing = 16; // espacio entre lineas
int border = spacing*2; // margenes
int amplification = 3; // amplificador
float y = spacing;
float ySteps; // numero de lineas en eje y

void setup() {
  size(800, 800);
  background(255);
  strokeWeight(1);
  stroke(0);
  noFill();

  song = new SoundFile(this, "AUDIOMIO.aif");
  song.play();
}

void draw() {
  // screenSize tiene el valor de su ancho menos el margen, al igual que e alto 
  // tiene las divisiones en el eje y
  int screenSize = int((width-2*border)*(height-1.5*border)/spacing);
  // mapear frame actual de la cancion, en su duracion en el tamaño de screen
  // no se que significan los 0
  float x = map(song.position(), 0, song.duration(), 0, screenSize);

  // ySteps equivale a x dividido el ancho menos su margen, determina cantidad lineas
  ySteps = x/(width-2*border);
  // x equivale a al ancho menos el margen multiplicado por ySteps, lo que ubica 
  // nuevas posiciones de x
  x -= (width-2*border)*ySteps; // set new x position for each line

   // Convertir la posición de reproducción en segundos a muestras de audio
  int positionInSamples = int(song.position() * song.sampleRate());

  // Obtener la muestra de audio en la posición calculada
  float[] samples = song.get(positionInSamples, 1);
  
  // Calcular el tamaño de la elipse basado en la muestra de audio
  float frequency = samples[0] * spacing * amplification; // Use get() to get sample
  
  // Dibujar la elipse
  ellipse(x + border, y * ySteps + border, frequency, frequency);

}

void stop() {
  song.stop();
}


/*import processing.sound.*;
 
 
 SoundFile file;
 FFT fft;
 int bands = 512;
 float[] spectrum = new float[bands];
 int spacing = 10; // space between lines in pixels
 int border = spacing*2; // top, left, right, bottom border
 int amplification = 3; // frequency amplification factor
 int y = spacing;
 float ySteps; // number of lines in y direction
 
 void setup() {
 size(800, 800);
 background(255);
 strokeWeight(1);
 stroke(0);
 noFill();
 
 // Load a soundfile from the /data folder of the sketch and play it back
 file = new SoundFile(this, "AUDIOMIO.aif");
 fft = new FFT(this, bands);
 file.play();
 fft.input(file);
 }
 
 void draw() {
 int size = int((width-2*border)*(height-1.5*border)/spacing);
 int x = int(map(file.position(), 0, file.duration(), 0, width * height / size));
 ySteps = x/(width-2*border); // calculate amount of lines
 x -= (width-2*border)*ySteps; // set new x position for each line
 
 
 
  /*background(255);
 fft.analyze(spectrum);
 
 for (int i = 0; i < bands; i++) {
 // The result of the FFT is normalized
 // draw the line for frequency band i scaling it up by 5 to get more amplitude.
 line( i, height, i, height - spectrum[i]*height*5 );
 }*/
