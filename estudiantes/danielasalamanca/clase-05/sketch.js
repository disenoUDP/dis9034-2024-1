// 08 de abril del 2024
// bienvenidx! haz que rafita salte al presionar la barra espaciadora
// por daniela salamanca
// este proyecto se hizo con p5.js Version: 1.0.1 - 2021-05-25


//definir las variables

// gravedad
let g = 1;
// salto
let jump = 18;
// linea del piso
let ground = 200;
// tamaño de la imagen
let size = 250;

let x, y, vy;
let rafita;

// cargar la imagen
function preload() {
  rafita = loadImage("rafita.png");
}

function setup() {
  
  // crear un lienzo de 650 por 550 pixeles
  createCanvas(650, 550);

  // definir las variables x e y respecto al ancho y alto del lienzo
  x = width;
  y = height;
}

function draw() {
  
  // definir el color de fondo del lienzo
  background(255, 220, 255);

  // definir la variable gy que demarcará la altura de la linea que utilizaremos de "piso"
  let gy = height - ground;

  // crear la linea que simularará el piso
  line(0, gy, width, gy);

  // definir la posición de la imagen que estamos utilizando
  image(rafita, x - 120, y - 47, size, size);
  y += vy;

  // definir la velocidad a la que avanza hacia adelante
  x = x + 3;

  //  asignar la condicional que defina hasta donde llegará la imagen y donde volverá a comenzar
  if (x > 700) {
    x = -100;
  }

  // asignamos la condicional que defina el salto
  if (y < height - ground - size / 2) {
    vy += g;
  } else {
    vy = 0;
    y = height - ground - size / 2;
  }
}

//definimos la función que hará que la imagen "salte" solo al oprimir la barra espaciadora (keyCode === 32)
function keyPressed() {
  
  if (keyCode === 32) {
    vy =  -jump;
  }
}


// mi referente para lograr el salto <https://editor.p5js.org/tnishida/sketches/Wv_-BBBaA>
// mi referente para que la imagen se mueva de izquierda a derecha <https://p5js.org/es/reference/#/p5/noLoop>
