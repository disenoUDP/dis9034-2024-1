# clase-09

api: application progaming interfaces, manera de interactuar con el programa.

## _solemne_02_

_las referencias utilizadas fueron sacdas del canal del youtube_ **_"the coding train"_**

- 10.1: intro to images processing tutorial → <https://youtu.be/-f0WEitGmiw?si=unU45Y5vxbqkgBQ6>
- 11.1: capture and live video → <https://youtu.be/WH31daSj4nc?si=3VI0VUCymvq0QYxr>
- 11.2: uso del objeto de película para mostrar vídeos grabados tutorial de processing → <https://www.youtube.com/watch?v=nJWV7X7df9w>

**idea**: reproduccion de video en _processing/p5.js_, al hacer click el video se pone en reverse y viceversa.

para familiarizarme con _processing_ antes que todo queria aprender como subir un archivo.jpg/jpeg y editarlo desde ahi, fue muy complicado para mi, pero fue todo un exito, copie el codigo de _"the coding train"_ para generar una prueba de movimiento y color con la imagen.

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

segun el video que vi el codigo para acceder a la grabacion de video es el siguiente:

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

pero tuve errores debido al computador en el que estoy trabajando, por lo que no me permitio la grabacion.

<img width="594" alt="Captura de pantalla 2024-05-13 a la(s) 16 18 44" src="https://github.com/SofiaEct/dis9034-2024-1/assets/163043878/b04803be-858e-4136-b6f6-4c1712c20c07">

el _"Internal data stream error"_ es un error del sistema de computador que no permite ejecutar los archivos, en este caso los que estoy trabajando, por lo que decidi continuar con otras pruebas.

probe lo que seria la exportacion de un video a _processing_ y fue ¡todo un exito! no es muy diferente a la exportacion de imagenes.

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

despues de procesar mejor lo que queria hacer para esta solemne, lo que se me ocurrio fue hacer un tipo de instrumento utilizando el codigo + el teclado, seguire intentado en _processing_.
