//Inspirado en el trabajo de John Provecher, decidí intentar hacer una animación de estilo ASCII, dentro de Processing como primer acercamiento a un ámbito que me genera mucha curiosidad desde hace tiempo.
//Parte del codigo esta basado en material que se encuentra dentro de una clase de Tim Rodenbröke sobre bases de programacion creativa en ASCII: https://timrodenbroeker.de/courses/ascii/

//Importa la biblioteca FIP de Darragh Nolan, la cual permite crear procesamiento de imágenes en tiempo real para Processing: https://github.com/prontopablo/FIP
import fip.*;

//Precarga e importa el filtro "crt" de la biblioteca FIP
PShader crt;
PGraphics pg;
PImage pull;
PImage push;

//Generamos las variables que van a convertir lo que sucede dentro del gráfico "pg" a un mosaico, primero definiendo el número de cuadros que tendra el mosaico para el alto y el ancho de este.
int TILES_X = 80;
int TILES_Y = 70;
//Generamos las variables que definirán el tamaño de cada cuadro del mosaico, los cuales llamaré pixeles por conveniencia.
float PIXEL_W, PIXEL_H;
//Creación de las distintas fuentes del archivo.
PFont ASC;
PFont PF;
PFont SFPT;
PFont SFPB;
//Creamos una cadena, la cual guardará los caracteres ASCII que se usarán dentro de la animación.
String CHARS = " ._▂▃▄▅▆▇░░▒▓█░";

void setup() {
  size(720, 720, P2D);
  crt = loadShader(FIP.crt);
  //Definimos cuantos cuadros por segundos se dibujaran dentro en el canvas, en este caso definidos por la fluidez que queria darle a la animacion.
  frameRate(40);

  //Configura los parámetros para el filtro "ctr", para lograr el aspecto deseado.
  crt.set("thresholdLow", 0.4);
  crt.set("thresholdHigh", 0.5);
  crt.set("scanlineWeight", 1000);
  crt.set("brightness", 3);
  crt.set("distortion", 0.35);

  //Definimos que el gráfico creado sea renderizado en 3D, que la altura y el ancho de este sea definido por el número de píxeles que nosotros decidimos.
  pg = createGraphics(TILES_X, TILES_Y, P3D);
  pull = loadImage("pull.jpg");
  push = loadImage("push.jpg");

  //Precarga de las distintas fuentes del archivo.
  ASC = createFont("DejaVuSansMono-Bold.ttf", 125);
  PF = createFont("PlayfairDisplayItalic.ttf", 100);
  SFPT = createFont("SFProDisplayThin.otf", 100);
  SFPB = createFont("SFProDisplayBlack.ttf", 100);

  //Definimos el tamaño del pixel, que será el tamaño del canvas dividido por el número de cuadros que se mostrará en pantalla.
  PIXEL_W = width / TILES_X;
  PIXEL_H = height / TILES_Y;

  //Definimos el tamaño y uso de fuente de los caracteres ASCII a usar.
  textFont(ASC);
  textAlign(CENTER, CENTER);
  textSize(20);
}

void draw() {
  background(0);
  noStroke();
  //Empezamos a dibujar dentro del gráfico creado.
  pg.beginDraw();
  pg.noStroke();
  pg.background(0);
  //Definimos cómo va a incidir la luz en los distintos objetos 3D a dibujar.
  pg.directionalLight(255, 255, 255, 1, 0, -1);

  //Abrimos un matrix, el cual me permite definir configuraciones solo para este grupo.
  pg.pushMatrix();
  //Movemos el objeto a cierta posición en el gráfico.
  pg.translate(15, 12);
  // Permite que el objeto rote en el eje X.
  pg.rotateX(radians(frameCount * 3));
  // Permite que el objeto rote en el eje Y.
  pg.rotateY(radians(frameCount * 3));
  //Creamos una caja dentro del gráfico.
  pg.box(10);
  //Cerramos el matrix, por lo que definido dentro de este solo afecta a este grupo.
  pg.popMatrix();

  pg.pushMatrix();
  pg.translate(15, 32);
  //Permite que el objeto rote en el eje Z .
  pg.rotateZ(radians(frameCount * 3));
  pg.rotateY(radians(frameCount * 3));
  pg.box(10);
  pg.popMatrix();

  pg.pushMatrix();
  pg.translate(15, 53);
  pg.rotateX(radians(frameCount * 3));
  pg.rotateZ(radians(frameCount * 3));
  pg.box(10);
  pg.popMatrix();

  pg.pushMatrix();
  pg.translate(pg.width/2, 12);
  pg.rotateX(radians(-frameCount * 3));
  pg.rotateY(radians(frameCount * 3));
  pg.box(10);
  pg.popMatrix();

  pg.pushMatrix();
  pg.translate(pg.width/2, 32);
  pg.rotateZ(radians(-frameCount * 10));
  pg.rotateY(radians(-frameCount * 10));
  pg.box(10, 8, 40);
  pg.popMatrix();

  pg.pushMatrix();
  //Repetimos la posición para generar encima otro objeto para hacer la visualización más llamativa.
  pg.translate(pg.width/2, 32);
  pg.rotateX(radians(-frameCount * 10));
  pg.rotateY(radians(-frameCount * 10));
  pg.box(10, 8, 40);
  pg.popMatrix();

  pg.pushMatrix();
  pg.translate(pg.width/2, 32);
  pg.rotateX(radians(-frameCount * 10));
  pg.rotateZ(radians(-frameCount * 10));
  pg.box(10, 8, 40);
  pg.popMatrix();

  pg.pushMatrix();
  pg.translate(pg.width/2, 53);
  pg.rotateX(radians(-frameCount * 3));
  pg.rotateZ(radians(-frameCount * 3));
  pg.box(10);
  pg.popMatrix();

  pg.pushMatrix();
  pg.translate(66, 12);
  pg.rotateX(radians(-frameCount * 3));
  pg.rotateY(radians(-frameCount * 3));
  pg.box(10);
  pg.popMatrix();

  pg.pushMatrix();
  pg.translate(66, 32);
  pg.rotateZ(radians(-frameCount * 3));
  pg.rotateY(radians(frameCount * 3));
  pg.box(10);
  pg.popMatrix();

  pg.pushMatrix();
  pg.translate(66, 53);
  pg.rotateX(radians(-frameCount * 3));
  pg.rotateY(radians(frameCount * 3));
  pg.box(10);
  pg.popMatrix();
  //Terminamos de dibujar dentro del gráfico.
  pg.endDraw();

  push();
  textSize(20);
  text("mantén el clic izquierdo para ver créditos", 355, 705);
  pop();
  //Activamos el filtro.
  filter(crt);

  // Creamos una imagen, la cual se basa en el gráfico "pg". Con esto, se creará un especie de filtro dando el aspecto ASCII al gráfico sin afectar a este.
  PImage buffer = pg.get();
  //Inicia un loop para la variable "X", que aumenta su valor en 1 desde 0, hasta llegar al valor de TILES_X.
  for (int x = 0; x < TILES_X; x++) {
    //Inicia un loop para la variable "Y", que aumenta su valor en 1 desde 0, hasta llegar al valor de TILES_Y.
    for (int y = 0; y < TILES_Y; y++) {

      //Toma la informacion de color de todos los pixeles de la imagen "buffer".
      color c = buffer.get(x, y);
      //Calcula el brillo del color de c, dandole un valor entre 0 y 255.
      float b = brightness(c);

      //Mapeamos el valor de brillo al rango de la cadena de caracteres ASCII, de manera que valores más brillantes corresponden a índices más altos en la cadena.
      int selector = int( map(b, 0, 255, 0, CHARS.length()-1 ) );

      push();
      fill(255, 255, 0);
      //Multiplicamos el valor de la variable por el tamaño de cada pixel, para así reposicionarlo y reposicionarlo en la imagen.
      translate(x * PIXEL_W, y * PIXEL_H);
      //Dibuja cada carácter ASCII correspondiente al valor del índice selector de la cadena.
      text(CHARS.charAt(selector), 0, 0);
      pop();
    }
  }
}

//Al mantener presionado , se muestra la pantalla de titulo

void mousePressed() {
    // Detiene el loop de dibujo, permitiendo visualizar lo siguiente.
    noLoop();
    background(255, 255, 0);

    push();
    textFont(PF);
    textSize(30);
    fill(0);
    text("Al menos estoy intentando algo que quiero hacer", 355, 48);
    image(pull, 50, 120);
    image(push, 375, 120);
    pop();

    push();
    textFont(SFPB);
    textSize(30);
    fill(0);
    text("JUAN PARESCHI", 338, 470);
    pop();

    push();
    textFont(SFPB);
    textSize(115);
    fill(0);
    text("SOLEMNE2", 350, 530);
    pop();

    push();
    textFont(PF);
    textSize(20);
    fill(0);
    text("Docentes del ramo:", 120, 618);
    text("Hecho con la ayuda del código de:", 250, 649);
    text("y el uso de la librería de:", 255, 684);
    pop();

    push();
    textFont(SFPT);
    textSize(20);
    fill(0);
    text("AARÓN MONTOYA-MORAGA  +  JANIS SEPÚLVEDA", 440, 620);
    text("TIM RODENBRÖKER", 490, 651);
    text("DARRAGH NOLAN", 450, 686);
    pop();

    filter(crt);
  }
  
void mouseReleased() {  
    // Reactive el loop de dibujo, permitiendo visualizar nuevamente la animación.
    loop();
  }
