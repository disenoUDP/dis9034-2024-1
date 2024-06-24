### clase-13
# openSimplexNoise y minim

Objetivo: crear animaciones a través de codigo, que representen audio    
usando graficas creadas a través de openSimplexNoise

Referencias    
* [drawing from noise](https://necessarydisorder.wordpress.com/2017/11/15/drawing-from-noise-and-then-making-animated-loopy-gifs-from-there/)    
* [the coding train](https://www.youtube.com/watch?v=Lv9gyZZJPE0)    
* [processing for music visualization](https://www.generativehut.com/post/using-processing-for-music-visualization)
* ver trabajo de [macarena parrao](https://editor.p5js.org/MacaParrao/sketches/xYmDkVLFS)
* [isabella gutierrez](https://editor.p5js.org/isabellagutierrezm/sketches/2wt78sLuA)
* [sound mapping](http://responsivedesign.de/wp-content/uploads/2016/05/tutorial-06_processing-soundmapping2.pdf)
* [frequency analysis](https://www.youtube.com/watch?v=2O3nm0Nvbi4)

## musica como input   
sonido como una coleccion de potencia de ruido y su amplitud

* smoothingFactor: que tan rapido reacciona la grafica al input
* smooth()
* FFT class: analisis de sonido
* bufferSize: tiempo que el computador procesa el audio
* sampleRate: para capturar la cantidad de frecuencias que escucha el humano

## FFT y creacion de graficas

# ayuda con este codigo por fis

[link de la referencia](http://responsivedesign.de/wp-content/uploads/2016/05/tutorial-06_processing-soundmapping2.pdf)

lo que se busca hacer es dibujar distintos circulos con un tamaño que lo define el moemnto actual de la cancion
``` java  
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
````
# en los archivos está el zip
