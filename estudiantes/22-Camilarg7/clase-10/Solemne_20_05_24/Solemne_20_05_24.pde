//Referencias: seguí los siguientes videos de The Coding Train en Youtube: https://www.youtube.com/watch?v=_NJqfZUQ3i4&t=142s , https://www.youtube.com/watch?v=4JzDttgdILQ&t=1773s
//Declara nombre de boolean para poder usarlo mas adelante. recuperado de: https://processing.org/reference/booleanconvert_.html
boolean seguir = true;
//Declara e inicia las variable que permiten que las imagenes se muevan en eje x. recuperado de: https://processing.org/reference/floatconvert_.html
float x = 0;
//Declara el uso de imagenes. recuperado de: https://processing.org/reference/PImage.html
PImage rata, boca, nariz, queso, ojos;

void setup() {
//tamaño del lienzo
  size(700, 700);
//sube las imagenes al archivo
  rata = loadImage("RatatouilleS.png");
  boca = loadImage("boca.png");
  nariz = loadImage("nariz.png");
  queso = loadImage("queso.png");
  ojos = loadImage("ojos.png");
//inicia el bucle. recuperado de: https://processing.org/reference/loop_.html
  loop();
}

void draw() {
//imagen de fondo
  image(rata, 0, 0);
//objetos que Pasan por la imagen y se mueven en eje x, determinado anteriormente por float
  image(boca, x, 0);
  image(nariz, x, 0);
  image(queso, x, 0);
  image(ojos, x, 0);
//variable que determina cuando empieza el bucle 
  if (x < -380) {
    x = width;
  }
//Determina la velocidad
  if (seguir) {
    x = x - 7;
  }
}

void mouseReleased() {
  //Uso de Boolean que indica que cuando el mouse es presionado se convierte en falsa por lo que las imagenes paran
  seguir = !seguir;
}
