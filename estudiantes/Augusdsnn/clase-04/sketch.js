// IDEA PRINCIPAL: Un círculo que tenga un destello para que parezca 
// iluminado, intentar lograr que despues de cada click con el mouse este 
// cambie de color aleatoriamente dentro de un grupo especifico de colores.
// agregar animación de circulos que también emitan luz individualmente de manera aleatoria en el fondo 
let shadowColor;
let positions = [];
const colorGroup = ["#fff871", "#ffcd71", "#71ffaa", "#ff7171", "#9c71ff", "#ff71fa", "#71b8ff", "#fff871"]; 
//paleta de colores

function setup() {
  createCanvas(windowHeight, windowWidth);
  shadowColor = color(200, 250, 200); // color con el que se comienza
  frameRate = 60
}
function draw (){
  circle 
}
function draw() {
  background(0);
  positions.push({x: mouseX, y: mouseY});
  // posición del elipse
  
  if (positions.length > 100) positions.shift();
  
  for (let i = 0; i < positions.length; i++) {
    let x = positions[i].x;
    let y = positions[i].y;
    strokeWeight(0);
    fill(250, 250, 250);
    drawingContext.shadowBlur = 60;
    drawingContext.shadowColor = shadowColor;
      // Efecto de Glow aprendido de Kazuki Umeda  https://www.youtube.com/watch?v=iIWH3IUYHzM
    ellipse(x, y, i / 2, i / 2);
  }
}

function mouseClicked() {
  // Cambiar shadowColor aleatoriamente con cada click
  shadowColor = color(random(colorGroup));
}