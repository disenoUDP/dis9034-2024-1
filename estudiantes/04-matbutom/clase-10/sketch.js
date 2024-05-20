// solemne 2 para el ramo de Programación Creativa Multimedia
// por Mateo Arce - 20.05.2024
//creado con p5.js versión

// declaramos las variables de color que nos entrega p5.riso
let pink;
let blue;

//declaramos la imagen que va a cambiar de color
let img;

//declaramos el botón con el que vamos a cambiar el color como button
//y capaActual para poder definir el color de forma aleatoria
let button;
let capaActual;

//precargamos "clota.jpg", que es la imagen que ocuparemos para el proyecto
function preload() {
  img = loadImage("clota.jpg");
}

//definimos la densidad de pixeles
//creamos un canvas con las dimensiones de la imagen
function setup() {
  pixelDensity(1);
  createCanvas(img.width, img.height);

// crear un botón con el nombre de "presiona para cambiar el color"
// colocar el botón debajo de la imagen 'clota.jpg'
// referencias de https://p5js.org/reference/#/p5/createButton
// creamos un botón con el nombre de "presiona para cambiar el color"
// definimos la posición al centro y abajo de la imagen
  button = createButton("presiona para cambiar el color");
  button.position(100, 540);

// definir los colores 'pink' y 'blue'
// con los 2 colores que entrega la biblioteca p5.riso son "FLUORESCENTPINK" y "SKYBLUE"
//https://antiboredom.github.io/p5.riso/#halftoneImage
  pink = new Riso("FLUORESCENTPINK");
  blue = new Riso("SKYBLUE");
  
// dejamos que el primer color sea 'pink'
  capaActual = pink;

//definimos cuando el botón sea presionado, cambie el color entre 'pink' y 'blue'
  button.mousePressed(randomColor);
}

// definir el valor del botón a color random
function randomColor() {
  //let c = random([pink, blue]);

// si definimos c como random, sabemos que random nos da valores entre 0 y 1
// con esto podemos definir que cuando el valor sea menor o mayor a, el color cambia a 'pink' o 'blue'
  let c = random();

// si c es menor que 0,5 se cambia el color a 'pink'
  if (c < 0.5) {
    capaActual = pink;

// todos los demás valores cambian el color a 'blue'
  } else {
    capaActual = blue;
  }
}

// dibujamos el fondo de color 
// para luego limpiarlo con 'clearRiso'
function draw() {
  background(255);
  clearRiso();
  
// definimos el tipo de halftoned que queremos y su tamaño
// para poder cambiar el color definimos los parámetros de 'capaActual.image' 
// como los que nos entrega p5.riso, que son halftonedImage 
  let halftoned = halftoneImage(img, "line", 3, 45, 90);
  capaActual.image(halftoned, 0, 0);

// finalmente dibujamos el efecto de riso y ya podemos cambiar entre los dos colores con el botón
  drawRiso();
}
