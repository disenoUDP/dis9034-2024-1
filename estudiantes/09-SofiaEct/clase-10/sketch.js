//advertencia, la secuencia rápida de las teclas puedes generar luces intermitentes que pueden afectarte.
//variable de indicación, en este caso permite definir fotito.
//los corchetes [] me permiten definir más de una variable en una sola línea de código.
let fotito = [];
//cargar archivos de audio y reproducirlos   https://p5js.org/es/reference/#/p5.SoundFile
let mySound;
let c;
let sounds = [];
//se ejecuta una sola vez, es decir no está en loop.
//para cargar imagen a p5,js  https://p5js.org/es/reference/#/p5/preload
function preload() {
  // agregué números a cada código de imagen.
  fotito = loadImage("./popcerrado.jpg");
  fotito1 = loadImage("./popabierto.jpg");
  fotito2 = loadImage("./kitto.jpg");
  fotito3 = loadImage("./sideeye.jpg");
  fotito4 = loadImage("./meperdonas.jpeg");
  fotito5 = loadImage("./noteperdono.jpg");
  fotito6 = loadImage("./bup.jpeg");
  fotito7 = loadImage("./explosion.jpeg");
  fotito8 = loadImage("./mow.jpeg");
  fotito9 = loadImage("./caballero.jpeg");
  fotito10 = loadImage("./omaga.jpeg");
  fotito11 = loadImage("./nohacenada.jpeg");
  fotito12 = loadImage("./nose.jpeg");
  fotito13 = loadImage("./soldado.jpeg");
  //formatos de audio utilizables.
  soundFormats("mp3", "ogg");
  //asignar variable de sonido para poder ejecutar con teclas.
  let sound1 = loadSound("donote.mp3");
  sounds.push(sound1);
  let sound2 = loadSound("re-78500.mp3");
  sounds.push(sound2);
  let sound3 = loadSound("mi-80239.mp3");
  sounds.push(sound3);
  let sound4 = loadSound("fa-78409.mp3");
  sounds.push(sound4);
  let sound5 = loadSound("sol-101774.mp3");
  sounds.push(sound5);
  let sound6 = loadSound("la-80237.mp3");
  sounds.push(sound6);
  let sound7 = loadSound("si-80238.mp3");
  sounds.push(sound7);
}
function setup() {
  createCanvas(1000, 600);
}
function draw() {
  background(255, 255, 255);
  //texto para indicar las teclas que se deben presionar.  https://p5js.org/reference/#/p5/text
  //tamaño de texto.
  textSize(50);
  //relleno de texto.
  fill(255);
  //opacidad del contorno.
  stroke(0);
  //densidad del contorno.
  strokeWeight(4);
  text("S", 85, 425);
  text("D", 215, 425);
  text("F", 335, 425);
  text("G", 455, 425);
  text("J", 585, 425);
  text("k", 710, 425);
  text("L", 845, 425);
  //imagenes que son vistas ANTES de presionar las teclas.
  image(fotito, 50, 250, 100, 100);
  image(fotito2, 175, 250, 100, 100);
  image(fotito4, 300, 250, 100, 100);
  image(fotito6, 425, 250, 100, 100);
  image(fotito8, 550, 250, 100, 100);
  image(fotito10, 675, 250, 100, 100);
  image(fotito12, 800, 250, 100, 100);
  //usando if hice que cada imagen corresponda a una tecla/sonido, por lo que quiero que cuando presione una tecla solo se vea una foto no todas. https://p5js.org/reference/#/p5/if
  // para que la condicional sea verdad, si doy la instrucción de que si se presiona 'x' tecla para lo que diga el código de idea una foto no todas.
  if (keyIsPressed === true) {
    if (key == "s") {
      background(255, 255, 57);
      //imagenes que son mostradas DESPUES de umplir con la condicional de if.
      image(fotito1, 50, 250, 100, 100);
    }
  }
  if (keyIsPressed === true) {
    if (key == "d") {
      background(236, 64, 122);
      image(fotito3, 175, 250, 100, 100);
    }
    if (keyIsPressed === true) {
      if (key == "f") {
        background(255, 235, 59);
        image(fotito5, 300, 250, 100, 100);
      }
      if (keyIsPressed === true) {
        if (key == "g") {
          background(92, 107, 192);
          image(fotito7, 425, 250, 100, 100);
        }
        if (keyIsPressed === true) {
          if (key == "j") {
            background(128, 222, 234);
            image(fotito9, 550, 250, 100, 100);
          }
          if (keyIsPressed === true) {
            if (key == "k") {
              background(144, 202, 249);
              image(fotito11, 675, 250, 100, 100);
            }
            if (keyIsPressed === true) {
              if (key == "l") {
                background(255, 213, 79);
                image(fotito13, 800, 250, 100, 100);
              }
            }
          }
        }
      }
    }
  }
}
function keyTyped() {
  if (key == "s") {
    // este da el pie para que se reproduzca el audio.
    sounds[0].play();
  }
  if (key == "d") {
    sounds[1].play();
  }
  if (key == "f") {
    sounds[2].play();
  }
  if (key == "g") {
    sounds[3].play();
  }
  if (key == "j") {
    sounds[4].play();
  }
  if (key == "k") {
    sounds[5].play();
  }
  if (key == "l") {
    sounds[6].play();
  }
}
