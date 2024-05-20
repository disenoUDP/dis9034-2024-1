//-Referencias de dónde me inspiré para hacer el proyecto: 
//-Investigación en librerías de sonido de processing 
//https://processing.org/reference/libraries/sound/index.html 
//-Referencia de efecto principal de círculos en la imagen sacada de "Happy coding" efecto "Setting Pixels". https://happycoding.io/tutorials/processing/images 
//-Referencia de como agregar sonido https://www.youtube.com/watch?v=_4FLlS9TzZw 
//-Investigación de imagenes en https://processing.org/reference/image_.html  

 //Dato para almacenar imágenes.
PImage image;
 // Librería de sonido de processing. Esto es para que funcione el sonido en el proyecto. 
import processing.sound.*;

 //Objeto de la librería que se llamará "sonido".
SoundFile sonido;

 //Ruido "Marrón llamado "noise", el ruido marrón se puede sacar de la
 //biblioteca de processing de Ejemplos en Java de processing: Sound- Noise-Brown
 // https://processing.org/reference/libraries/sound/BrownNoise.html 
 BrownNoise noise;

  //Área de trabajo de 1000 x 600 píxeles.
void setup() {
  size(1000, 600);
  
  //Cargué una imagen de Catedrales de Mármol sacada de internet.
  //https://www.servituroffi.com/producto/capilla-de-marmol/ 
  image = loadImage("marmol.jpg");
  
  //La imagen se encuentra en medio del área de trabajo. Permite que todos los círculos
  //que estan encima de la imagen se sumen mientras pasa el tiempo, El 0, 0 es para ajustarla 
  //en el medio del área de trabajo. 
   image(image, 0, 0, width, height);
   
   //objeto que se llama sonido que permite cargar el sonido ocean cargado de internet. 
   sonido = new SoundFile(this,"ocean.mp3");
 
  //biblioteca que se encuentra en processing que permite la reproducción de ruido marrón. 
   noise = new BrownNoise(this);
  noise.play();
  
}
  
void draw() {
  //Se obtiene el color de la posición del mouse.
  color c = image.get(mouseX, mouseY);

//Relleno (color) del círculo 30 x 30 que sigue al mouse. 
//La (c) es para que el círculo se rellene con el color de cada pixel que toca.  
  fill(c);

  // Dibujar un círculo, mide 30 x 30 píxeles. Este círculo  deja una "estela" de círculos 
  //por toda la imagen donde pasa el mouse. Esta función hace que se pueda dibujar con los círculos. 
  ellipse(mouseX, mouseY, 30, 30);

  //Variable de número donde "x" es la parte del ancho de la imagen, la "y" es 
  // la altura de la imagen y es para que funcione color.  
  int x = int(random(image.width));
  int y = int(random(image.height));
  
  // Stroke es el trazo, NoStroke significa que el círculo no tiene trazo. 
  noStroke();
  // Color del círculo de 15 x 15 explotando en un píxel de la imagen.
  color pixelColor = image.get(x, y);
  fill(pixelColor);
  
  //Elipse que aparecen y se suman en la pantalla de porte 15 x15 píxeles. 
  ellipse(x, y, 15, 15);
    
  //Se asigna el ancho del sonido. MouseX de 1 a 1.0 de izquierda a derecha. 
  noise.pan(map(mouseX, 1, width, 1, 1.0));

  //Se asigna la amplitud del sonido. MouseY de 1 a 0 para amplitud.
   noise.amp(map(mouseY, 1, height, 1, 0));
      
  //Presionar una tecla aleotoria.
  // Reproducir el sonido en loop "sound.mp3".
  if (keyPressed) { 
  sonido.loop(); 
 }
} 
