# clase-12

## Apuntes clase 12 

Tip: pentagram; estudio de diseño más grande del mundo

Referentes clase:

- A- Frame : Es una pag web para crear experiencias 3D/AR/VR (explorar más esta herramienta, está muy interesante)
https://aframe.io/examples/showcase/handtracking/  

- Programming design systems: 
https://programmingdesignsystems.com/shape/basic-shapes/index.html 

- mdn web docs: Math random 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random 

- Max msp drunk: 
https://docs.cycling74.com/max5/refpages/max-ref/drunk.html 

- Comando; option +  command + i : para acceder a la consola y fuimos probando con random math

- Ken Perlin: es un profesor de Computer Science en la NYU. Creó las animaciones generadas por computadora de la compañía Mathematical Applications Group, y también trabajó en la película Tron.

Math random: Esta función devuelve un número de coma flotante pseudo-aleatorio, comprendido en el rango de 0 a menor que 1 (incluido el 0 pero no el 1), con una distribución aproximadamente uniforme en este rango. Dicho rango puede ser ampliado hasta los valores que uno quiera.

Ej: 
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

console.log(getRandomInt(3));
// Expected output: 0, 1 or 2

console.log(getRandomInt(1));
// Expected output: 0

console.log(Math.random());
// Expected output: a number from 0 to <1

console.log(Math.random());
// Expected output: a number from 0 to <

fuente: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/random 


Perlin noise: “tipo de ruido de gradiente desarrollado por Ken Perlin en 1983. Tiene muchos usos, que incluyen, entre otros: generar terreno de forma procesal , aplicar cambios pseudoaleatorios a una variable y ayudar en la creación de texturas de imágenes.

Ejercicio en clase: 
function setup() {
  createCanvas(300, 300);

  describe('A #000000 dot moves randomly on a green square.');
}

function draw() {
  background(211, 255, 117);

  // Calculate the coordinates.
  let x = 150 * noise(0.005 * frameCount);
  let y = 250 * noise(0.020 * frameCount + 10000);
// Punto
  strokeWeight(20);
  point(x, y);
}

link p5: https://editor.p5js.org/ignaojeda/full/5jPnm5LRa 
img 

