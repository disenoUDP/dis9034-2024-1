function preload() {
  sound = loadSound("./miAudio.mp3");
}

function setup() {
  createCanvas(800, 800);
  strokeWeight(0.5);
  stroke(0, 255, 0);
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
  background(0);
  
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
    ellipse(width / 2, height / 2, h, x/ 1.5);
  }
  save
}
