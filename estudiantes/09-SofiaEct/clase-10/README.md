# clase-10

# _solemne_02_

_las referencias utilizadas fueron sacadas del canal del youtube_ **_"the coding train"_** y ___reference de p5.js___
(cada vez que quiero que una cosa pase una sola vez, debo ponerlo en setup, y si quiero que sea constante, debo ponerlo en draw)
- 10.1: intro to images processing tutorial → <https://youtu.be/-f0WEitGmiw?si=unU45Y5vxbqkgBQ6>
- 11.1: capture and live video → <https://youtu.be/WH31daSj4nc?si=3VI0VUCymvq0QYxr>
- 11.2: uso del objeto de película para mostrar vídeos grabados tutorial de processing → <https://www.youtube.com/watch?v=nJWV7X7df9w>
- if reference  →  https://p5js.org/reference/#/p5/if
- loadSound  →  https://p5js.org/reference/#/p5/loadSound
- text  →  https://p5js.org/reference/#/p5/text
- 

**idea**: reproducción de video en _processing/p5.js_, al hacer click el video se pone en reversa y viceversa.

para familiarizarme con _processing_ antes que todo quería aprender como subir un archivo.jpg/jpeg y editarlo desde ahí, fue muy complicado para mí, pero fue todo un éxito, copie el código de _"the coding train"_ para generar una prueba de movimiento y color con la imagen.

```java
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
```

(_"mwah"_ es el nombre de mi imagen)

<https://github.com/SofiaEct/dis9034-2024-1/assets/163043878/16c76891-e0cc-4069-a31d-cdd06838a2c0>

primero busque como poder subir un video y reproducirlo en _processing_, e instale una biblioteca del programa llamada _video_ que es de **processing foundation**.

<img width="730" alt="Captura de pantalla 2024-05-13 a la(s) 15 05 25" src="https://github.com/SofiaEct/dis9034-2024-1/assets/163043878/b97c9002-79c7-4b0f-bc26-6854f25aaea7">

según el video que vi el código para acceder a la grabación de video es el siguiente:

```java
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
```

pero tuve errores debido al computador en el que estoy trabajando, por lo que no me permitió la grabación.

<img width="594" alt="Captura de pantalla 2024-05-13 a la(s) 16 18 44" src="https://github.com/SofiaEct/dis9034-2024-1/assets/163043878/b04803be-858e-4136-b6f6-4c1712c20c07">

el _"Internal data stream error"_ es un error del sistema de computador que no permite ejecutar los archivos, en este caso los que estoy trabajando, por lo que decidí continuar con otras pruebas.

probé lo que sería la exportación de un video a _processing_ y fue ¡todo un éxito!, no es muy diferente a la exportación de imágenes.

```java
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
```

después de procesar mejor lo que quería hacer para esta solemne, lo que se me ocurrió fue hacer un tipo de instrumento utilizando el código + el teclado, seguiré intentado en _processing_.

# p5.js

después de intentos fallidos en processing, no quise quedarme estancada en eso así que me pase directamente a trabajar en p5.js (tenía captura de las fallas de processing, pero se eliminó cuando sincronice el fork), principalmente en esta ocasión decidí a hacer una interacción con las teclas que reproduce una nota musical (en este caso decidí que fueran de piano)

primero comencé subiendo imágenes, en eso descubrí que hay un arreglo de [] que permite tener más de una variable dentro del mismo let.

(aun que aquí esta sin el arreglo)

<img width="594" alt="Captura de pantalla 2024-05-20 a la(s) 16 13 39" src="https://github.com/SofiaEct/dis9034-2024-1/assets/163043878/375ef6c2-d881-4bae-b3ac-cac5de5f8a43">

```javascript
let fotito = [];
```
después empece a introducir audio, fue bastante entretenido, a partir del código.

```javascript
let mySound;
function preload() {
  soundFormats('mp3', 'ogg');
  mySound = loadSound('assets/doorbell');
}

function setup() {
  let cnv = createCanvas(100, 100);
  cnv.mousePressed(canvasPressed);
  background(220);
  text('tap here to play', 10, 20);
}

function canvasPressed() {
  // este da el pie para que se reproduzca el audio
  mySound.play();
}
```
para hacer que según la tecla cambiara la imagen tanto como el fondo de cada una, el if fue mi salvador, aunque claro tuve problemas, ya que personalmente ver ta tantas letras en pantalla me es un poco abrumador, pero me divertí mucho ordenándolos.

<img width="693" alt="Captura de pantalla 2024-05-20 a la(s) 16 23 32" src="https://github.com/SofiaEct/dis9034-2024-1/assets/163043878/1d1760b5-88a3-456a-8f6c-fdd6515b3628">

e aquí el resultado de esta maravilla me gusta mucho como se ve el código de if.

https://github.com/SofiaEct/dis9034-2024-1/assets/163043878/0a1f4549-20ad-41f2-9a1b-62474daf86c0

esto es una 'documentación' de mi código, para no perderlo.

```javascript
//advertencia, la secuencia rapida de las teclas puedes generar luces intermitentes que pueden afectarte.
//variable de indicacion, en este caso permite definir fotito
//los corchetes [] me permiten definir mas de una variable en una sola linea de codigo
let fotito = [];
//cargar archivos de audio y reproducirlos   https://p5js.org/es/reference/#/p5.SoundFile
let mySound;
let c;
let sounds = [];
//se ejecuta una sola vez, es decir no esta en loop
//para cargar imagen a p5,js  https://p5js.org/es/reference/#/p5/preload
function preload() {
  //agregue numeros a cada codigo de imagen
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
  //formatos de audio utilizables
  soundFormats("mp3", "ogg");
  //asignar variablre de sonido para poder ejecutar con teclas
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
  //tamaño de texto
  textSize(50);
  //relleno de texto
  fill(255);
  //opacidad del contorno
  stroke(0);
  //densidad del contorno
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
  // para que la condicional sea verdad, si doy la instruccin de que si se presiona 'x' tecla para lo que diga el codigo de if
  if (keyIsPressed === true) {
    if (key == "s") {
      background(255, 255, 57);
      //imagenes que son mostradas DESPUES de umplir con la condicional de if
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
    // este da el pie para que se reproduzca el audio
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
```

https://editor.p5js.org/SofiaEct/sketches/S7keAZ73Jo
