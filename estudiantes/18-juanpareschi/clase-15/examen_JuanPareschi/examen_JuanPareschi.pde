//Basado e inspirado en el trabajo de SOPHIE, MSMSMSM FOREVER.
//Parte del codigo esta basado en material que se encuentra dentro de la clase de Tim Rodenbröke sobre bases de programacion creativa sobre pixeles e imagen: https://timrodenbroeker.de/courses/images/

//Importa la biblioteca de sonido de Processing
import processing.sound.*;
//Importa la biblioteca FIP de Darragh Nolan, la cual permite crear procesamiento de imágenes en tiempo real para Processing: https://github.com/prontopablo/FIP
import fip.*;

//Precarga de archivos y variables.
//Precarga e importa el filtro "crt" de la biblioteca FIP.
PShader glitch;
PImage her;
PFont LYU;
PFont LYJ;
PFont SLI;
SoundFile lemon;
Amplitude amp;

//Generamos las variables que van a convertir la imagen a un mosaico, definiendo el número de cuadros de este.
int pixelX = 250;
int pixelY = 250;

void setup() {
  size(720, 720, P3D);
  her = loadImage("sophie.jpg");
//Definimos que la imagen va a tener la altura de los parámetros de los pixeles.
  her.resize(pixelX, pixelY);
  
  LYU = createFont("LynoUlys.otf", 100);
  LYJ = createFont("LynoJean.otf", 100);
  SLI = createFont("SligoilMicro.otf", 100);
  
//Definimos que reproduzca automáticamente y en loop la canción puesta en el archivo  
  lemon = new SoundFile(this, "soph.mp3");
  lemon.play();
  lemon.loop();
  
//Definimos que lea la amplitud de la canción puesta en el archivo.  
  amp = new Amplitude(this);
  amp.input(lemon);
  
  glitch = loadShader(FIP.glitch);
}

void draw(){
  background(0);
  fill(#713D57);
  noStroke();
  textFont(SLI);
  textSize(18);
  text("MANTEN EL CLICK PARA VER CREDITOS", 185, 675);
//Definimos el tamaño del píxel, que será el tamaño del canvas dividido por el número de píxeles.
  float pixelW = width / pixelX;
  float pixelH = height / pixelY;
//Definimos que la ubicación desde la cual se dibujan los rectángulos sea desde el centro.  
  rectMode(CENTER);

  push();
  translate(525, 500);
  //Definimos la escala de la imagen.
  scale(1.4);
  //Asigna un valor en base a la amplitud actual del audio.
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

      push();
      //Definimos donde se va a dibujar cada píxel, también definiendo que la posición en z de estos cambie en base a la amplitud del audio.
      translate(x * pixelW - width/2, y * pixelH - height/2, (z * mag)+bump);
      rect(0, 0, pixelW * s * 1.5, pixelH * s * 1.5);
      pop();
    }
  }
  pop();
  //Activamos el filtro.
  filter(glitch);
}

void mousePressed() {
    // Detiene el loop de dibujo, permitiendo dibujar y visualizar la pantalla de creditos.
    noLoop();
    background (0);
    fill(#b93479);
    rect(172, 639, 246, 16);
    
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
  
void mouseReleased() {  
    // Reactive el loop de dibujo, permitiendo visualizar nuevamente la animación.
    loop();
  }
