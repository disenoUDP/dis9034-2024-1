//para crear un objeto de imagen utilicé la referencia en https://p5js.org/es/reference/#/p5/loadImage
//imagen fondo azul, cara cables
let img0;
//imagen fondo negro, mano cables
let img1;
//imagen flores y serpiente
let img2;

//para que la imagen aparezca debe estar dentro de setup o en function draw

function preload() {
  img0 = loadImage('chogiseok.jpeg');
  img1 = loadImage('chogiseok1.jpeg');
  img2 = loadImage('chogiseok2.jpeg');
}

//crear un lienzo del tamaño de la pantalla
function setup() {
  createCanvas(windowWidth, windowHeight);
}

//cambiar tamaño de imagen lo saqué de https://p5js.org/es/reference/#/p5/image
//las primeras dos unidades son de ubicación y las siguientes dos son de tamaño

//quiero que la img0 tenga un filtro THRESHOLD

function draw() {
  //hacer que el fondo sea una imagen
  background(img2);

  //https://p5js.org/es/reference/#/p5/push es para investigar

  loadPixels();
  // obtener la densidad de pixeles
  let d = pixelDensity();
  //calcular la cantidad de pixeles en la imagen
  console.log(pixels.length);
  //para que i tenga la
  for (let i = 0; i < pixels.length; i = i + 4) {
    // escala de grises que RGB valgan lo mismo
    // y ese valor sea el promedio del RGB original

    let valorGris = (pixels[i] + pixels[i + 1] + pixels[i + 2]) / 3;

    pixels[i] = valorGris;
    pixels[i + 1] = valorGris;
    pixels[i + 2] = valorGris;
    pixels[i + 3] = 255;
  }
  updatePixels();

  //quiero combinar las imagenes de background e img0, utilizaré la referencia de blend https://p5js.org/es/reference/#/p5/blend o averiguar como agregar el valor alfa para quitarle opacidad. al final no lo hice
  image(img0, 0, 0, 405, 503);
  //aquí quiero que img0 tenga un filtro de color diferente a la img2 pero me cambia ambas imagenes
  //la imagen estará donde se ubique el mouse
  image(img1, mouseX, mouseY, 405, 503);
}
