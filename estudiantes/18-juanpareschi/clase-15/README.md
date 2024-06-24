# clase-15

## Documentación del examen de Juan Pareschi

### Voy a hacer una animación o visualización al ritmo de una canción.

> En este caso usaré LEMONADE de SOPHIE, quien consideró que fue una de las artistas más importantes de la pasada década y alguien a quien admiro profundamente. La idea es que el estilo de esta mantenga nociones del pixel art / ASCII, manteniendo un poco la línea visual con mi entrega anterior.

Trabajo hecho en Processing 4.3

### Referentes

- [Jake Teton-Landis](https://github.com/justjake/music-visualizer-processing)
- [Patrik Hübner](https://www.patrik-huebner.com/creative-coding/piano//)
- [SOPHIE](https://www.youtube.com/watch?v=xXPSe57pOss)

### Referencias de investigación

- [Art Now Coding](https://www.youtube.com/watch?v=52Xdi1tZnOI)
- [Minim](https://code.compartmental.net/minim/)
- [Three.js](https://threejs.org/)

### Referencias usadas en el trabajo final

- [Biblioteca FIP](https://github.com/prontopablo/FIP)
- [Curso sobre imagenes y pixeles de Tim Rodenbröker](https://timrodenbroeker.de/courses/images/)
- [Referencias de Processing](https://processing.org/reference/)


### Proceso de código - Animación/pantalla principal.

- Creó un fondo de 720 por 720 píxeles, y defino que se genere en un espacio 3D.
```processing
void setup() {
  size(720, 720, P3D);
```

- Para generar el efecto mosaico, vamos a generar las primeras variables que van a ayudar definiendo el número de cuadros de este en el eje X e Y.
- También pre-cargaremos archivos y bibliotecas que forman parte de la animación, incluyendo un filtro de procesado de imagen y de audio, el cual permitirá reproducir música y analizar su amplitud.
```processing
import processing.sound.*;
import fip.*;

PShader glitch;
PImage her;
PFont LYU;
PFont LYJ;
PFont SLI;
SoundFile lemon;
Amplitude amp;
```

- Respecto a la imagen, haremos que esta tenga la altura de los parámetros de los píxeles.
- Respecto al sonido, reproduzca la canción y también la ponga en loop, mientras que tome los datos de amplitud de esta durante su reproducción. 
```processing
void setup() {
  size(720, 720, P3D);
  her = loadImage("sophie.jpg");
  her.resize(pixelX, pixelY);
  
  LYU = createFont("LynoUlys.otf", 100);
  LYJ = createFont("LynoJean.otf", 100);
  SLI = createFont("SligoilMicro.otf", 100);
  
  lemon = new SoundFile(this, "soph.mp3");
  lemon.play();
  lemon.loop();
  
  amp = new Amplitude(this);
  amp.input(lemon);
```

- Partiremos definiendo los primeros aspectos de la animación, definiendo los colores de los rellenos y el fondo, mientras también definimos un texto para informar al usuario de la pantalla de créditos.
- También haremos que el tamaño del píxel sea del tamaño del canvas dividido por el número de píxeles, y estos (que serán dibujados como rectángulos) se dibujan desde el centro.  
```processing
void draw(){
  background(0);
  fill(#713D57);
  noStroke();
  textFont(SLI);
  textSize(18);
  text("MANTEN EL CLICK PARA VER CREDITOS", 185, 675);
  float pixelW = width / pixelX;
  float pixelH = height / pixelY;
  rectMode(CENTER);
```

- Definiremos donde se va reposicionar la imagen y su escala.
- Continuando el proceso para crear la animación, primero haciendo que se asigne un valor en base a la amplitud actual del audio.
- Después haremos un loop para las variables X e Y, en donde se tomará los colores de todos los píxeles de la imagen, se calculará el valor de brillo de cada pixel para que en base a eso, se defina el escalar de los pixeles y su posición en el axis Z, y finalmente, definir la magnitud de estos.

```processing
  push();
  translate(525, 500);
  scale(1.4);
  float bump = amp.analyze()*620; 
  //Inicia un loop para la variable "X", que aumenta su valor en 1 desde 0, hasta llegar al valor de pixel_x.
  for (int x = 0; x < pixelX; x++) {
    //Inicia un loop para la variable "Y", que aumenta su valor en 1 desde 0, hasta llegar al valor de pixel_y.  
    for (int y = 0; y < pixelY; y++) {

      // Toma los colores de todos los pixeles de la imagen.
      color c = her.get(x, y);
      // Calcula el valor de brillo cada pixel.
      float b = brightness(c);
      // Define el escalar de los píxeles en base a la informacion de brillo.
      float s = map(b, 0, 255, 1, 0);
      //Definimos la posición en el axis z de cada pixel, en base del brillo de este.
      float z = map(b, 0, 255, -1, 1);
      //Definimos la magnitud de los pixeles en el axis z.
      float mag = 200;
```

- Definimos donde se va a dibujar cada píxel, también haciendo que la posición en z de estos cambie en base a la amplitud del audio, finalmente creando la visualización.
- Finalmente aplicaremos el filtro de glitch sobre el canvas.
```processing
      push();
      translate(x * pixelW - width/2, y * pixelH - height/2, (z * mag)+bump);
      rect(0, 0, pixelW * s * 1.5, pixelH * s * 1.5);
      pop();
    }
  }
  pop();
  filter(glitch);
}
```

- Resultado final del codigo.

![resultadoexamen_animacion](https://github.com/juanpareschi/dis9034-2024-1/assets/163045421/b273c343-8909-46f9-beb7-2a9935838f48)

### Proceso de código - Pantalla de créditos.

- Parto haciendo un boceto de como quiero que sea la apariencia de la página y lo que quiero que se dibuje, en este caso tomaré de referencia la estética usada por la artista en sus diferentes obras, portadas y trabajos gráficos.

![LEMONNN](https://github.com/juanpareschi/dis9034-2024-1/assets/163045421/1c9c4696-297f-4046-91af-d571dead32e9)

- Definiremos que los créditos aparezcan cuando se presione algún botón del mouse, y al mismo tiempo, detenga el loop de animación que ocurre en el canvas.
- También los colores a usarse dentro de este, y un rectángulo que es parte de este.
```processing
void mousePressed() {
    noLoop();
    background (0);
    fill(#b93479);
    rect(172, 639, 246, 16);
```

- Dibujaremos los contenidos en base a lo diseñado en el boceto que hice previamente, tratando de lograr coordenadas similares.
```processing
    push();
    textFont(LYJ);
    textSize(240);
    text("LEMO", 52, 259);
    pop();
    
    push();
    textFont(LYJ);
    textSize(250);
    text("NADE", 52, 459);
    pop();

    push();
    textFont(LYU);
    textSize(64);
    text("MSMSMSM", 313, 650);
    pop();

    push();
    textFont(SLI);
    textSize(24);
    text("UN PROYECTO DE JUAN PARESCHI - INSPIRADO POR", 50, 533);
    text("LEMONADE DE SOPHIE. - MUCHAS GRACIAS DARRAGH", 50, 560);
    text("NOLAN, TIM RODENBRÖKER, AARÓN MONTOYA-MORAGA", 50, 588);
    text("Y JANIS SEPÚLVEDA.", 50, 617);
    pop();
  }
```

- Haremos que cuando se suelte el botón del mouse presionado, se reactive el loop de animación que se encuentra en el canvas.
```processing
void mouseReleased() {  
    loop();
  }
```

- Resultado final de los créditos.

![LEMONFINAL](https://github.com/juanpareschi/dis9034-2024-1/assets/163045421/86a8b456-c40a-44f7-8ba2-fc5a347a91c7)

  
