# Examen!!

El proyecto, trabajado en la p5js, se trata de un reproductor de audio con interacción de mouse, en el que se puede reproducir, pausar, subir y bajar volumen e interactuar con los colores de la pantalla con clic, rueda de mouse y movimiento del mismo. Se trabajan en paralelo dos versiones de un mismo proyecto. En la primera versión se utiliza la canción Hips Don't Lie se Shakira en versión Barcore/Medieval. En la segunda versión se utiliza el tema principal del anime Sailor Moon Densetsu Moonlight en versión music box. 

### Referentes
- [Cargar y reproducir sonido](https://p5js.org/es/examples/sound-load-and-play-sound.html)
- [Code an Audio Visualizer in p5js](https://www.youtube.com/watch?v=uk96O7N1Yo0&ab_channel=ColorfulCoding)
### Elementos a utilizar
- Versión 1 - Shakira
  - [Imagen de fondo](https://github.com/cielqz/dis9034-2024-1/assets/163901464/50301f10-9336-4020-a948-16fd6ad06a78)
  - [Shakira - Hips Don't Lie [Bardcore / Medieval Style Cover]](https://www.youtube.com/watch?v=WIx4srqU3BE)
  - [Marco](https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F306455949645715321%2F&psig=AOvVaw3BHwCY5Y7v5dZwfLbL2fKn&ust=1719342143744000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCOjYnd_29IYDFQAAAAAdAAAAABAE)
  - Paleta de colores

- Versión 2 - Densetsu Moonlight 
- [Imagen Fondo](https://github.com/cielqz/dis9034-2024-1/assets/163901464/bfa86924-345e-49fb-ae47-88d0a042b4bc)
- [Moonlight Densetsu/DALI [Music Box] (Anime "Sailor Moon" OP)](https://www.youtube.com/watch?v=13HfhcBddRM&pp=ygUlbW9vbmxpZ2h0IGRlbnNldHN1IGluc3RydW1lbnRhbCBjb3Zlcg%3D%3D)
- [Marco](https://gallery.yopriceville.com/Free-Clipart-Pictures/Valentine-s-Day-PNG/Round_Border_with_Hearts_Pink_PNG_Transparent_Clipart#google_vignette)
- Paleta de colores
   
### Proceso versión 2 - densetsu
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

Una vez creado el lienzo y cargado el fondo del proyecto, se crea el relleno del marco. Para que este no sea un color sólido, se integra una gradiente que cambia conforme se mueve el mouse en el lienzo siguiendo el eje X en la versión 1 y eje Y en la versión 2. [Enlace de referencia.](https://editor.p5js.org/owenroberts/sketches/HyKFHeS7Q)
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
#### Vista Previa #1 Shakira Barcore
<img width="749" alt="Captura de pantalla 2024-06-17 a la(s) 16 31 56" src="https://github.com/cielqz/dis9034-2024-1/assets/163901464/8404b5b6-91f1-4fed-81fb-f030380db0c5">

#### Vista Previa #2 Densetsu Sailor Moon
<img width="744" alt="Captura de pantalla 2024-06-17 a la(s) 16 31 50" src="https://github.com/cielqz/dis9034-2024-1/assets/163901464/8d7cd3a7-cea7-4d15-af40-bc6541f16851">

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
### Resultados pt.I
Resultados cargados en nube online (en procesoooo)
- [Video Versión #1](https://www.dropbox.com/scl/fi/vvmj8jr2dsgec4o06vjnc/Shakira_Barcore.mov?rlkey=ya82z4h8tyu0d5iq82l7kwvao&st=n3wz6bea&dl=0)
- [Video Versión #2](https://www.dropbox.com/scl/fi/z9yd469fi4zw7hzdsfpfi/Grabaci-n-de-pantalla-2024-06-17-a-la-s-16.27.08.mov)

***
### Segunda Parte
Una vez lista la base a trabajar, se añaden algunos recursos y modificaciones. Para mayor interactividad, se agrega uso de camara web en vivo dentro de ambas composiciones. Se utiliza de manera que imita la rotación de un disco LP. Para integrar un poco más la identidad de cada proyecto, se utiliza un tinte en la imagen (rosado para el cover de sailor moon y amariilo/naranja para el cover medieval). En la versión #1 del proyecto, el fondo tambiés se le incluye rotación en sentido contrario al marco al igual que ambas cámaras.
```javascript
  //tinte y rotación
  push();
  tint(232, 117, 26, 170);
  rotateZ(frameCount * -0.006);
  texture(cam);
  noStroke();
  ellipse(0, 0, 350);
  pop();
```

#### Vista Previa #1
<img width="825" alt="Captura de pantalla 2024-06-24 a la(s) 15 14 12" src="https://github.com/cielqz/dis9034-2024-1/assets/163901464/d8101860-9492-4c9c-8bf5-cb74b46ca6d6">

#### Vista Previa #2
<img width="819" alt="Captura de pantalla 2024-06-24 a la(s) 15 12 08" src="https://github.com/cielqz/dis9034-2024-1/assets/163901464/18559388-dac4-4faa-90e2-b3ec5989b52a">

### Resultados pt.II
- [Visitar Proyecto Versión #1](https://editor.p5js.org/cielqz/sketches/gLIaCJS1f)
  
https://github.com/cielqz/dis9034-2024-1/assets/163901464/d12cf5d5-449e-407b-bff1-f9a2ae3dd483

- [Visitar Proyecto Versión #2](https://editor.p5js.org/cielqz/sketches/-duCxgeM_)
  
https://github.com/cielqz/dis9034-2024-1/assets/163901464/74191250-4a20-472a-a4ec-5003d6d24ac1

#### Comentarios de cierre
Finalmente, el proyecto fue pensado para incluir acciones de interactividad con el usuario y así captar su atención con los diferentes estímulos presentes, siendo el primero el uso de la imagen en vivo y la animación (rotación) de esta y sus elementos secundarios. Luego, el usar el ratón para reproducir y pausar la imagen con un clic, que el color del fondo cambie con el movimiento del mouse y, por último, controlar el volumen con la rueda del mouse. Se siguió el uso de una misma línea visual con dos estéticas diferentes con colores marrones y verdes en uno y, colores rosados y pasteles en el segundo, esto con la intención de que sean acorde al sonido que se reproduce.
```javascript
También aprendí a poner los códigos en el readme en este formato, ya que antes no sabía y cargaba capturas de pantalla.
jeje
```




```javascript


```
