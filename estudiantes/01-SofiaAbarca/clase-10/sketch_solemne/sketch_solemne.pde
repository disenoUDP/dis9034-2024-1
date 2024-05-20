// Este código permite arrastrar con el mouse, una parte de la foto de un gato.
// La foto se puede mover por todo el lienzo, y reproduce un sonido al soltar el mouse.
// Me gustan los gatos y al igual que la solemne anterior quise trabajar con uno.
// Mi inspiración fueron los puzzles y captchas.


// Importar la biblioteca de sonido de Processing
// https://processing.org/reference/libraries/sound/index.html
import processing.sound.*;

// Añadir el reproductor que permite manipular archivos de audio
// https://processing.org/reference/libraries/sound/SoundFile.html
SoundFile sonido;

// Crear las variables de las cuatro imágenes
// https://processing.org/reference/PImage.html
PImage img1;
PImage img2;
PImage img3;
PImage img4;

// Crear las variables de posción y tamaño de la caja de la imagen 
// https://processing.org/reference/floatconvert_.html
// Float almacena números con parte entera y decimal.
// Boolean tiene solo dos valores: verdadero o falso.
// https://www.youtube.com/watch?v=wsI6N9hfW7E&list=PLRqwX-V7Uu6YqykuLs00261JCqnL_NNZ_
// Int almacena valores enteros.
// http://www.sc.ehu.es/sbweb/fisica/cursoJava/fundamentos/introduccion/primero.htm#:~:text=Las%20variables%20del%20tipo%20float,parte%20entera%20y%20parte%20decimal.
// boxSize determina el área de la caja que se puede arrastrar
// overBox nos indicara si el mouse está o no sobre la foto
float bx;
float by;
int boxSize = 100;
boolean overBox = false;
boolean locked = false;
float xOffset = 0.0; 
float yOffset = 0.0; 

void setup() {
  
  // Precargar las cuatro imágenes del gato
  // https://processing.org/reference/loadImage_.html
  img1 = loadImage("11.jpg");
  img2 = loadImage("22.jpg");
  img3 = loadImage("33.jpg");
  img4 = loadImage("44.jpg");
  
  // Definir el tamaño del canvas
  size(600, 600);
  
 // Definir el tamaño de la caja de las variables bx y by
 // Divide el ancho y el largo en 2
  bx = width/2.0;
  by = height/2.0;
  
  // Define el modo de imagen para que aparezca al centro del lienzo
  // https://processing.org/reference/imageMode_.html
  // La imagen que se puede mover aparece en el centro, y las otras tres aparecen
  // arriba y al lado
  imageMode(CENTER);
  
  // Precargar el archivo de sonido desde la carpeta del sketch
  // Sonido gratuito de internet https://pixabay.com/es/sound-effects/
  sonido = new SoundFile(this, "sonido.mp3");
  
}

void draw() { 
  
  // Dibuja el fondo de color negro
  background(0);
  
  // Se averigua si el cursor está dentro de la caja de la imagen usando las variables
  // de posición bx y by.
  // Esta función signifca que si el mouse se encuentra dentro de los parámetros, 
  // La variable overBox toma el valor de true (verdadero) lo que signifca que si se
  // cumple que el mouse está sobre la foto
  // Usa las coordenadas X e Y del mouse
  // https://processing.org/reference/mouseX.html
  // https://processing.org/reference/mouseY.html

  if (mouseX > bx-boxSize && mouseX < bx+boxSize && 
      mouseY > by-boxSize && mouseY < by+boxSize) {
    overBox = true;  
    
  }
  
  // Se dibujan las cuatro imagenes en el lienzo
  // La imagen número cuatro está vinculada a las variables de posición de la caja
  // Esto significa que se detecta posición del mouse en relación a esta cuarta foto
  image(img1,100, 100, 200, 200);
  image(img2,300, 300, 200, 200);
  image(img3,300, 100, 200, 200);
  image(img4,bx, by, 200, 200);
 

}
// La función mousePressed hace que ocurra un evento si esque se presiona el mouse
// https://processing.org/reference/mousePressed_.html
// En esta función condicional, vemos que si overBox es verdadero agarra la imagen
// Utiliza las coordenadas X e Y del mouse
// https://processing.org/reference/mouseX.html
// https://processing.org/reference/mouseY.htm
void mousePressed() {
  if(overBox) { 
    locked = true; 
  } else {
    locked = false;
  }
  xOffset = mouseX-bx; 
  yOffset = mouseY-by; 

}

// La función mouseDragged hace que ocurra un evento cuando el mouse se mueve mientras
// se presiona el click
// https://processing.org/reference/mouseDragged_.html
// La condición aquí es si el mouse está dentro de las posiciones de la caja de la imagen,
// arrastra la foto según las coordenadas mouseX y mouseY
// https://processing.org/reference/mouseX.html
// https://processing.org/reference/mouseY.html
void mouseDragged() {
  if(locked) {
    bx = mouseX-xOffset; 
    by = mouseY-yOffset; 
  }
}

// La función mouseReleased hace que ocurra un evento al soltar el click del mouse
// https://processing.org/reference/mouseReleased_.html
// Suelta la imagen al soltar el click
void mouseReleased() {
  locked = false;
  
  // Reproduce el sonido precargado
  // https://processing.org/reference/libraries/sound/SoundFile_play_.html
  sonido.play();
}
