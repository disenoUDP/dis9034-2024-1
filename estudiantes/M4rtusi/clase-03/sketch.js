// Almacenar los círculos y sus propiedades en una "lista"
let circles = [];

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);
  
  // Añade un nuevo círculo a la lista cada 1 frames
  if (frameCount % 1 == 0) {
    // Crea un objeto con las propiedades indicadas y lo añade a la lista
    circles.push({
      //push: graba la configuración actual de draw
      x: random(width), // Posición x aleatoria dentro del lienzo
      y: random(height), // Posición y aleatoria dentro del lienzo
      color: color(random(255), random(255), random(255)) // Color aleatorio
    });
  }
  
  // Recorre la "lista" de círculos y los dibuja en el lienzo
  for (let circle of circles) {
    fill(circle.color); // Establece el color del círculo
    noStroke(); // Elimina el borde del círculo
    ellipse(circle.x, circle.y, 40, 40); // Dibuja el círculo con las propiedades especificadas
  }
}