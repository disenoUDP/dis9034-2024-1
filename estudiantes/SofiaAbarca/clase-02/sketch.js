let escala = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 255, 0);
  for (let iterador = 0; iterador < 10; iterador++) {
    console.log(iterador);
  }
}

function draw() {
  
  
  //ellipse(mouseX, mouseY, 20 * escala, 20 * escala);
  for (let iterador = 0; iterador < 10; iterador++) {
    ellipse(random(0,width),
           random(0,height),
           random(5,100),
           random(5,100)
           );
  }
  // el stroke cambia grosor del trazo
  // cada constante le puse un color
  const c = color(0, 100, 100);
  const d = color(89, 0, 65);
  //
  fill(c);
  strokeWeight(10);
  console.log;
  // square es un cuadrado
  square(98, 98, 98);
  fill(d);
  // el triangulo son 6 numeros
  triangle(100, 300, 09, 87, 100, 76);
}
