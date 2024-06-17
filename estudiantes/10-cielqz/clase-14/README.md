# Preparación de examen

El proyecto se trata de un reproductor de audio con interacción de mouse, en el que se puede reproducir, paurar, subir y bajar volumen e interactuar con los colores de la pantalla con clic, rueda de mouse y movimiento del mismo. Se trabajan dos versiones de un mismo proyecto. En la primera versión se utiliza la canción Hips Don't Lie se Shakira en versión Barcore/Medieval. En la segunda versión se utiliza el tema principal del anime Sailor Moon en versión piano.
### Elementos a utilizar
- Versión 1
  - Imágenes de fondo
     - [Fondo #1](https://github.com/cielqz/dis9034-2024-1/assets/163901464/50301f10-9336-4020-a948-16fd6ad06a78)

  - Audios
  - Marcos
  - Paleta de colores

- Versión 2
  - Imagen de Fondo
    - [Fondo #2](https://github.com/cielqz/dis9034-2024-1/assets/163901464/bfa86924-345e-49fb-ae47-88d0a042b4bc)
   
### Proceso
Se cargan elementos multimedia a utilizar, marco, audio e imagen de fondo. 
```javascript
let img;
let audio;
let bgd;

function preload() {
  audio = loadSound("Densetsu.mp3");
  img = loadImage("corazon.png");
  bgd = loadImage("bgd.jpg");
}
```

Una vez creado el lienzo y cargado el fondo del proyecto, se crea el relleno del marco. Para que este no sea un color sólido, se integra una gradiente que cambia conforme se mueve el mouse en el lienzo siguiendo el eje Y.
 ```javascript
  push();
  r = map(mouseY, 0, 800, 208, 255);
  g = map(mouseY, 0, 800, 191, 248);
  b = map(mouseY, 0, 800, 255, 201);
  fill(r, g ,b);
  noStroke();
  ellipse(0, 0, 720);
  pop();

//se carga la imagen del marco y se añade la función rotate siguiendo el eje Z.
  push();
  rotateZ(frameCount * 0.004);
  image(img, -400, -400, 800, 800);
  pop();
```

El audio se reproduce y se pausa cuando se hace un click en computadores y al tacto en dispositivos móviles (en tablet funciona, en celulares el sonido no carga :c) con la función touchStarted() . Se intenta hacer que el fondo también cambie al hacer click, pero al hacerlo el marco deja un camino sobre el fondo nuevo mientras rota ya que la función no está en draw, por lo que no se reinicia. Aún se está intentando. :c 
```javascript
function touchStarted() {
  if (audio.isPlaying()) {
    audio.pause();
    background(198, 235, 197);
  } else {
    audio.play();
    // background(188, 90, 148); cambia de color con clic, se está resolviendo
  }
}
```

Una vez listo el audio, se configura la rueda del mouse para que esté a cargo del volumen desde 0, siendo lo mínimo, hasta el 1, siendo lo máximo.
```javascript
function mouseWheel(rueda) {
  let currentVolume = audio.getVolume();
  if (rueda.delta > 0) {
    currentVolume = max(0, currentVolume - 0.02);
  } else {
    currentVolume = min(1, currentVolume + 0.02);
  }
  audio.setVolume(currentVolume);
}
```
#### comentarios
```javascript
También aprendí a poner los códigos en el readme en este formato, ya que antes no sabía y cargaba capturas de pantalla. jeje
```




```javascript


```
