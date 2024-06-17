### clase-14
## examen jacinta000   
# visualizers, audiomapeo con codigo
se ha experimentado con la libreria minum y sound en processing, utilizando el analizador fft   
decidi experimentar en processing, ya que existe mas referencias    

[proyectos en p5js](https://openprocessing.org/browse/?time=anytime&type=all&q=fft#)

## FFT
herramienta de analisis.   
dos tipos de analisis:
* waveform: amplitud de la onda
* analyse: frecuencia, altos y bajos.

## p5.sound
amplitude: mide volumen

# la idea es crear graficas que reflejen los valores lanzados por el analizador FFT

* map() funcion que transforma valores a otros     
map(tamaño, 0.0, 1.0, 0.0, 100.0);    
transformaria a tamaño entre valores 0-1 a 0-100

```
 function preload() {
  sound = loadSound("./miAudio.m4a");
}

function setup() {
  createCanvas(400, 400);
  strokeWeight(1);
  //noFill();

  //amplitud = new p5.Amplitude();
  
  // nuevo elemento para el analizador FFT
  fft = new p5.FFT();
  // el input es mi sound
  fft.setInput(sound);
  //amplitud.setInput(sound);
  sound.play();
  sound.loop();
}

function draw() {
  background(220);
  
  // spectrum es la variable analyze de FFT
  let spectrum = fft.analyze();
  // variable i transita a lo largo del analisis 
  for (let i = 0; i < spectrum.length; i++) {
    // x es la transformacion de la ubicacion de i entre los limites 0 y spectrum
    // a 0 y width
    let x = map(i, 0, spectrum.length, 0, width);
    // h equivale a la altura en negativo sumado con el mapeo de la
    // transformacion de la ubicacion de spectrum en el nuevo rango
    // pasa de un rango de menos a mas, a uno de mas a menos, 
    // parea que visualmente se corresponda con la frecuencia del audio
    let h = -height + map(spectrum[i], 0, 255, height, 0);
    //rect(x, height, width / spectrum.length, h )
    // la elipse se ubica en el centro del canva y sus valores representan los valores de 
    // FFT entre los rangos de 0 a acnho y de alto a 0
    ellipse(width / 2, height / 2, h, x);
  }
}
```
