//Macarena Parrao 20-05-2024

//investigación: encontré un tutorial para hacer la visualizacióna con onda de una canción, usé esta idea como base para la animación https://www.youtube.com/watch?v=uk96O7N1Yo0

//declarar la variable para las imagenes
let ilustracion = null;

//cargar la canción Lucy in the sky with diamonds de The Beatles con la referencia de p5js https://p5js.org/es/reference/#/p5.SoundFile
function preload(){
  sound = loadSound('thebeatles.mp3');

//cargar ilustracion del personaje principal 
loadImage("./ella.png");
  
  //cargar ilustracion del tercer ojo
  loadImage("./ojo.png");
  
  //cargar ilustracion de estrella 
  loadImage("./laestrella.png");
  
  //cargar ilustracion de planetas
  loadImage("./planetas.png");
  
  //cargar ilustracion de flor
  loadImage("./flor.png");
}

//puse un fondo plano que va cambiando de color de forma aleatoria pero dentro de una paleta de color acotada
//Use estas referencias 
//https://p5js.org/es/reference/#/p5/random
//https://editor.p5js.org/hosken/sketches/I_4VSTotf

//declarar la variable para los colores y para el color con que la animación va a empezar 
let colors = [];
let currentColor;
function setup(){
  
  //La velocidad del cambio de color es de 6 cuadros por segundo y los colores que elegí son el celeste, rosado, fucsia y naranja.
  frameRate(6);
  colors = [
    
    //celeste
    color(128, 215, 218),   
    
    //rosado
    color(255, 175, 227),   
    
    //fucsia
    color(217, 107, 184),   
    
    //naranja
    color(254, 170, 70), 
  ];
  
  //se selecciona un color aleatorio para empezar
  currentColor = random(colors);
  
  //poner ilustracion del personjae principal
  ilustracion = loadImage ("ella.png");
  
  //poner ilustracion del tercer ojo
  tercer = loadImage ("ojo.png");
  
  //poner ilustracion de estrella
  star = loadImage ("laestrella.png");
  
  //poner ilustracion de flor
  flower = loadImage ("flor.png");
  
  //poner ilustracion de los planetas
  planeta = loadImage("planetas.png");
  
  
  //aquí use la función FFT de p5js, use esta referencia
  //https://p5js.org/es/reference/#/p5.FFT
  let cnv = createCanvas(540,680);
  
  //se reproduce al hacer click en el lienzo
  cnv.mouseClicked(togglePlay);
  fft = new p5.FFT();
  
  //usé la amplitud de la onda de 0.8 
  sound.amp(0.8);
  angleMode (DEGREES);
}

let value = 0
function draw(){
  //puse un fondo plano del tamaño del canva, con los colores que cambian de forma random 
  currentColor = random(colors);
  fill(currentColor);
  rectMode(CENTER);
  rect(width / 2, height / 2, 540, 680);
  
  //poner la ilustració del personaje principal en el medio del canva
  image(ilustracion, 0, 0, 540, 680);
  
  //poner dos ilustraciones de la estrella y que aparezca de forma random 
   image(star, random(width), random(height), 136, 137);
   image(star, random(width), random(height), 136, 137);
  
  //poner la ilustración de los planetas 
  image(planeta, 0, 0, 540, 680);
  
  //poner la ilustración de la flor y que siga el mouse, le puse -40 para que quedara en el centro 
  image(flower, mouseX-40, mouseY-40, 80, 80);
  
  //poner la ilustración del tercer ojo con la condicional if, para que al presionar cualquier tecla esta ilustracion aparezca
   if (keyIsPressed) {
    image (tercer, 0, 0, 540, 680);
      }
  
  //aqui use de referencia la funcion FFT de p5js y el video de visualización con onda
  //https://p5js.org/es/reference/#/p5.FFT
  //https://www.youtube.com/watch?v=uk96O7N1Yo0
  let onda = fft.waveform();
  noFill();
  stroke(253, 203, 20)
  strokeWeight (4);
  
  //aqui hice la primera mitad de la onda, que es una semicircunferencia en el centro del lienzo 
  beginShape();
  translate(width / 2, height / 2)
  for (let i = 0; i <= 180; i++){
    let index = floor(map(i, 0, 180, 0, onda.length - 1))
    let r = map(onda[index], -1, 1, 150, 280)
     let x = r * sin(i)
     let y = r * cos(i)
    vertex(x,y);
    }
  
  //aqui se repite la semicircunferencia pero para el lado opuesto para asi completar un circulo completo 
    for (let i = 0; i <= 180; i++){
    let index = floor(map(i, 0, 180, 0, onda.length - 1))
    let r = map(onda[index], -1, 1, 150, 280)
     let x = r * -sin(i)
     let y = r * -cos(i)
    vertex(x,y);
  }
  endShape();
  
//este es el texto que puse en la esquina inferior derecha donde indica que hay que hacer click en el lienzo para reproducir la animación
 strokeWeight (1);
  stroke(255, 255, 255);
  fill (255, 255, 255);
  text ('Haz click para reproducir',90, 320);
  textSize (15);
}

//aqui use la condicional if y else para que al hacer click en el canva se reproduzca y si vuelvo a hacer click se pause la animación y musica
function togglePlay() {
  if (sound.isPlaying()) {
    sound.pause();
  } else {
    sound.loop();
  }
}