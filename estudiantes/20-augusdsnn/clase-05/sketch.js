// IDEA PRINCIPAL: Un círculo que tenga un destello para que parezca 
// iluminado, intentar lograr que despues de cada click con el mouse este 
// cambie de color aleatoriamente dentro de un grupo especifico de colores.
// Agregar animación de circulos que varían en su tamaño con los colores de la paleta elegida, estos igualmente tendrán el efecto de "glow".
let shadowColor;
let positions = [];
//paleta de colores
const colorGroup = ["#fff871", "#ffcd71", "#71ffaa", "#ff7171", "#9c71ff", "#ff71fa", "#71b8ff", "#fff871"]; 

let circles = []; // Array para guardar info de los circulos
let minInterval = 120; // intervalo minimo de 30 frames entre cada circulo
let maxInterval = 200; // intervalo maximo de 60 frames entre cada circulo

function setup() {
  createCanvas(windowHeight, windowWidth);
  // color con el que comienza el shadowColor
  shadowColor = color(200, 250, 200);
  frameRate(30);
  // primer grupo de circulos aleatorios
  setTimeout(createBurst, random(minInterval, maxInterval));
}

function draw() {
  background(0);
  
  // actualizar y mostrar círculos
  for (let i = circles.length - 1; i >= 0; i--) {
    circles[i].update(); 
    circles[i].display();
    
    // eliminar círculo si es muy pequeño
    if (circles[i].diameter <= 0) {
      circles.splice(i, 1);
    }
  }
  
  // actualizar y mostrar el efecto de resplandor de los elipses
  positions.push({x: mouseX, y: mouseY});
  
  if (positions.length > 100) positions.shift();
  
  for (let i = 0; i < positions.length; i++) {
    let x = positions[i].x;
    let y = positions[i].y;
    strokeWeight(0);
    fill(250, 250, 250);
    drawingContext.shadowBlur = 60;
    drawingContext.shadowColor = shadowColor; //efecto de "glow" aprendido de Kazuki Umeda  https://www.youtube.com/watch?v=iIWH3IUYHzM
    ellipse(x, y, i / 2, i / 2);
  }
}

function mouseClicked() {
  // Cambiar shadowColor aleatoriamente con cada click
  shadowColor = color(random(colorGroup));
}

// codigo del Burst fue realizado con la ayuda de OpenAI
// Function para crear Burst de círculos aleatorios
function createBurst() {
  let numCircles = floor(random(5, 15)); // número aleatorio de círculos entre 5 y 10 para cada burst 
  for (let i = 0; i < numCircles; i++) {
    let x = random(width);
    let y = random(height);
    let diameter = random(10, 50);
    let fillColor = color(random(colorGroup));
    circles.push(new Circle(x, y, diameter, fillColor));
  }
  // organizar siguiente grupo de círculos
  setTimeout(createBurst, random(minInterval, maxInterval));
}

// clasificar círculo
class Circle {
  constructor(x, y, diameter, fillColor) {
    this.x = x;
    this.y = y;
    this.diameter = diameter;
    this.fillColor = fillColor;
  }

  // actualizar el metodo para reducir el tamaño del círculo con el tiempo
  update() {
    this.diameter -= 0.5; // disminuir diametro en cada frame
  }

  // metodo de display del circulo
  display() {
    fill(this.fillColor);
    noStroke();
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}
