//ADVERTENCIA uso de efectos de luz, flashes fuertes y repetitivos
let fotito;

//Cargar imagen a elección / https://p5js.org/reference/#group-Image
function preload() {
  fotito = loadImage("./hanako.jpg"); 
}

// Define tamaño de la figura, la dirección y la velocidad. McCarthy, L., Reas, C., & Fry, B. (2015). Getting Started with p5.js: Making Interactive Graphics in JavaScript and Processing. Maker Media, Inc. (pag 124, 126)
let radius = 10;
let x = 100;
let speed = 10;
let direction = 1;


function setup() {
  createCanvas(870, 1200);
  background(220);
// Relleno de la figura / https://p5js.org/reference/#/p5/fill
  fill(0, 50, 100)
// Cambia dónde se dibujan elipses, círculos y arcos / https://p5js.org/reference/#/p5/ellipseMode
  ellipseMode(RADIUS);
  // Definir dimensión de la imagen / https://p5js.org/reference/#/p5/image
  image(fotito, 0, 0, 870, 1200);
}

function draw() {
//Condición de mouse, mantener apretado para que cambie la figura de la escala( de círculo a rectángulo) / https://p5js.org/reference/#/p5/mouseIsPressed
  if (mouseIsPressed === true) {
    
// Este código permite crear una línea de escala de la figura o elemneto seleccioinado, en este caso se toma la fotografía. McCarthy, L., Reas, C., & Fry, B. (2015). Getting Started with p5.js: Making Interactive Graphics in JavaScript and Processing. Maker Media, Inc. (pág 97)
  translate(mouseX, mouseY);
  scale(mouseX / 90.0);
  rect(-15, -15, 10, 5);
  } else {
  translate(mouseX, mouseY);
  scale(mouseX / 90.0);
  circle(-15, -15, 10, 5);
}

// Condición de mouse, para cambiar el filtro, dependiendo de la ubicación del mouse en la pantalla / https://p5js.org/reference/#/p5/if-else
  let a = (mouseX, mouseY);
  if (a > 700)
  
// Aplicación de filtro de saturación y negativo https://p5js.org/reference/#/p5/filter
  filter(INVERT);
  filter(POSTERIZE,3);
  
  
// Código para dar dirección de la figura. McCarthy, L., Reas, C., & Fry, B. (2015). Getting Started with p5.js: Making Interactive Graphics in JavaScript and Processing. Maker Media, Inc. (pag 124, 126)
// Aumenta el valor de x
  x += speed * direction;
  
// Si la figura esta fuera de la pantalla
  if ((x > width-radius) || (x < radius)) { 
    
//Voltear dirección
  direction = -direction;
}
  if (direction == 1) {
  //Cara derecha
  arc(x, (random(width), random(height)), radius, radius, 0.52, 5.76); 
} else {
  //Cara izquierda
  arc(x, (random(width), random(height)), radius, radius, 3.67, 8.9); 
}
 }
