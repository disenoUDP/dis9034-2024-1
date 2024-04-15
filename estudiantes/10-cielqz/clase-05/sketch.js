//carga imagen personaje y fondo y se crea canvas
let frog;
let bg;
let sun;

function preload() {
  frog = loadImage('frogtoad.png'); 
  bg = loadImage('pradera.jpg');
  sun = loadImage('sol.png');
}


//se añade movimiento al personaje en eje X
  function draw() {
  createCanvas(800, 500);
  image(bg, 0, 0, width, height);
  //background(229, 255, 204); //color reservado
    
  //recuperado de https://p5js.org/reference/#/p5/applyMatrix
  let step = frameCount % 700;
  applyMatrix(1, 0, 0, 1, 40 + step, 100);
  image(frog, 0, 100, 300, 190);
  
  //la idea es que el sol rote mientras avanzana
  image(sun, 50, 50, 50, 50);
  fill(255, 255, 204);
  noStroke();
    
    
  }








/* Apuntes

-----fondo gradiente: no funcionó :
let  c1, c2;
  c1 = color(204, 229, 255);
  c2 = color(229, 255, 204);
  setGradient(c1, c2);

*/

