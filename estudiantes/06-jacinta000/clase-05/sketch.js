// variable foto
let foto0;
let foto1;
let cambios = false;

// funcion que permite cargar foto
function preload() {
  foto0 = loadImage("./laFoto.jpg");
}

function setup() {
  createCanvas(foto0.width, foto0.height);
  // pixel uno x uno
  pixelDensity(1);
}

function draw() {
  background(220);
  // archivo de foto con su medida de tamaño
  image(foto0, 0, 0, foto0.width, foto0.height);
  

// condicion que dicta lo que ocurra cuando cambios cambie de estado
  if (cambios === true) {
    // cargar pixeles, da comienzo a su uso
    loadPixels();
    // loop para hacer cada pixel invertido
    for (y = 0; y < height; y++) {
      for (x = 0; x < width; x++) {
        i = (x + y * width) * 4;
        r = pixels[i];
        g = pixels[i + 1];
        b = pixels[i + 2];
        
        pixels[i] = 170 - r;
        pixels[i + 1] = 255 - g;
        pixels[i + 2] = 255 - b;
        
      }
    } updatePixels();
  } // si no se cumple la condicion sucee esto
  else { 
    // info sobre pixeles extraida de https://idmnyu.github.io/p5.js-image/Filters/index.html y  
    loadPixels();
  // loop para hacer cada pixel blanco y negro
  for (y = 0; y < height; y++) {
    for (x = 0; x < width; x++) {
      i = (x + y * width) * 4;

      // promedio entre canales
      let grises = pixels[i] + pixels[i + 1] + pixels[i + 2] / 3;

      pixels[i] = grises - 70;
      pixels[i + 1] = 20;
      pixels[i + 2] = grises;
      pixels[i + 3] = 255;
    }
  }
// muestra ajustes en pixeles
  updatePixels();
  }
}

// funcion que me permite cambiar el estado de cambios con teclas 
function keyPressed() {
  if (key === "a") {
    cambios = true;
    console.log("presionado");
  } else if (key === 'b') {
    cambios = false;
  }
}

// cosas que no me funncionaron
  /* // que valores deberian restringir el valor de pasos
  const pasos = round(constrain(mouseX / 8, 15, 30));
   for(let y = 0; y < foto0.height; y = y + pasos) {
    for(let x = 0; x < foto0.width; x = x + pasos) {
      const i = y * foto0.width + x;
      const oscuro = (255 - pixels[i * 4]) / 255;
      const radio = pasos * oscuro;
      ellipse(x, y, radio, radio);
    }
  }*/

  // constante stepsize equivale al aproximado entre los valores y limites mousex 8 6 y 32
  /*  const stepSize = round(constrain(mouseX / 8, 6, 32)); 
  // y es 0, si y es menor a altura, y es igual a y + stepsice
  for (let y = 0; y < height; y += stepSize) {
  // x es 0, si x es menor a ancho, x es igual a x + stepsize
    for (let x = 0; x < width; x += stepSize) {
    // constante i equivale a y por el ancho mas x, coordenada, permite sacar el valor de y al ocupar pixeles
      const i = y * width + x;
      // lo oscuro equivale a 255 (esc grises) menos la cantidad total de los pixeles de la imagen dividido por 255. (valor entre 255 - menos algun valor entre los canales)/255 ¿BN?
       const darkness = (255 - pixels[i * 4]) / 255;
      // constante radius equivale a la multiplicacion de stepsize por darkness
      const radius = stepSize * darkness;
      // la elipse se ubica en x,y y su radio equivale a la constante radius
      ellipse(x, y, radius, radius);
    }
  } */

  // quiero crear un for que permita a cada pixel transformarse en un ellipse como en https://editor.p5js.org/p5/sketches/Dom:_Video_Pixels
