let foto = null;
let luna = null;
let moon = null;
let lu = null;
let mitad = null;
let star = null;

function preload() {
  //Imagen de saturno rosada sacada de internet
  foto = loadImage('saturno.png');

  //imagen de luna llena blanca sacada de internet
  luna = loadImage('luna.png');

  //imagen de luna a la mitad sacada de internet
  moon = loadImage('creciente.png');

  //imagen de luna llena gris oscura sacada de internet
  lu = loadImage('llena.png');

  //imagen de luna mitad oscuro sacada de int.
  mitad = loadImage('mitad.png');

  //imagen de estrellas del fondo sacada de internet
  star = loadImage('star.png');

  //foto de una bola de disco color celeste estatica
  cielo = loadImage('bol.png');
}

function setup() {
  //Fondo azul es de 1000 por 700 , La WEBGL permitió que todos los objetos pudieran rotar
  createCanvas(1000, 700, WEBGL);
}

let value = 0;

function draw() {
  //Color del fondo azul
  background(0, 0, 70);

  //imagen de saturno de porte 200x200 reemplazando la flecha de mouse, puse -585  en mouseX para que este centrado el eje X y -440 mouseY para que este centrado en el eje Y. Referencia sacado en clase n.3
  image(foto, mouseX - 585, mouseY - 440, 200, 200);

  //estrellas de fondo al presionar boton izquierdo del mouse aparecen. https://p5js.org/es/reference/#/p5/mouseButton
  if (mouseIsPressed === true)
    if (mouseButton === LEFT) image(star, -500, -400, 1200, 800);

  //bola de disco celeste de porte 200x200 en el medio del area de trabajo
  image(cielo, -100, -110, 200, 200);

  //el cuadrado principal morado, que los objetos rotan entorno.
  fill(100, 30, 100);

  //Rotación en Z sacado del ejemplo de la referencia https://p5js.org/es/reference/#/p5/rotateZ el numero 2000 es la rápidez de la rotación
  rotateZ(millis() / 2000);

  //Cuadrado morado de al medio es de porte 5x5 y esta en la medida 500x500 en el area de trabajo
  box(5, 5, 500, 500);

  //imagen de la luna creciente en rotacion, 30 y 60 es la ubicación y 180-180 es el porte de la imagen
  image(moon, 30, 60, 180, 180);

  //Luna llena de porte 300 por 300 y la posición es de 190x190. La luna aparece cuando se apreta el botón izquierdo del ratón if mouseIsPressed y mouseButton. Referencia sacada de https://p5js.org/es/reference/#/p5/mouseButton
  if (mouseIsPressed === true)
    if (mouseButton === LEFT) image(luna, 30, 60, 190, 190);

  //Imagen mitad es la luna esta mitad luna y mitad negro esta rotando entorno a la bola de disco
  image(mitad, -390, 80, 110, 110);

  //lu imagen de luna llena mas oscura casi negra tiene un porte de 160x160, esta en el ejeX-400 y ejeY 70. Esta imagen aparece cuando se presiona la tecla izquierda del mouse gracias a if mousebutton left.
  if (mouseIsPressed === true)
    if (mouseButton === LEFT) image(lu, -400, 70, 160, 160);
}
// Filtro de bola de disco para que cambie el color a blanco y negro como el disco lcd soundsystem album (referencia de profe) Referencia de: https://p5js.org/es/reference/#/p5.Image/filter
function mouseClicked() {
  if (value === 0) {
    value = cielo;
  } else {
    value = cielo.filter(THRESHOLD);
  }
}
