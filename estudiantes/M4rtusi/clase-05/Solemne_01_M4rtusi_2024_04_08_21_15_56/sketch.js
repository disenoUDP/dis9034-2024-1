let fiestaButton;
let confetiButton;
let resetButton;
let fiestaPressed = false;
let confetiPressed = false;
let img;

// Carga la imagen 'felis.jpeg'. Tomado de: https://p5js.org/es/reference/#/p5/loadImage
function preload() {
  img = loadImage('felis.jpeg');
}

function setup() {
  // Crea un lienzo de 800 x 800 pixeles.
  createCanvas(800, 800);
  iniciarPantalla();
}

function iniciarPantalla() {
  // Pone el fondo del canvas de color negro.
  background('#222222');
  fill('51, 0.4');
  // Crea un texto de color blanco en tamaño 24.
  textSize(24);
  // Asegura que el texto se alinee correctamente
  textAlign(LEFT, BASELINE);
  text("Presiona el botón 'Fiesta' para continuar ⬇", 50, height / 2);
  
  // Información botones y mousePressed tomada de: https://p5js.org/es/reference/#/p5/createButton y https://p5js.org/es/reference/#/p5/mousePressed
  
  // Reinicia o crea los botones.
  if (fiestaButton) {
    // Eliminamos el botón anterior si existe.
    fiestaButton.remove();
  }
  // Crea el botón "Fiesta".
  fiestaButton = createButton('Fiesta');
  // Asigna la posición del botón.
  fiestaButton.position(50, height / 2 + 50);
  fiestaButton.mousePressed(fiesta);

  if (confetiButton) {
    confetiButton.remove();
  }
  confetiButton = createButton('Confeti');
  confetiButton.position(50, height / 2 + 100);
  confetiButton.mousePressed(confeti);
  // Ocultamos el botón hasta que se presione "Fiesta".
  confetiButton.hide();

  if (resetButton) {
    resetButton.remove();
  }
  resetButton = createButton('Reset');
  resetButton.position(50, height / 2 + 150);
  resetButton.mousePressed(resetear);
  resetButton.hide();
}

function fiesta() {
  fiestaPressed = true;
  fiestaButton.hide();
  // Muestra la imagen ajustada al tamaño del canvas.
  image(img, 0, 0, width, height);
  confetiButton.show();
  resetButton.show();
}

function draw() {
  
  // Regula la cantidad de frames en la que se generan los colores. Tomado de: https://p5js.org/es/reference/#/p5/frameCount
  
  //Cuenta los frames para cambiar los colores cada 6 frames.
  if (fiestaPressed && frameCount % 6 == 0) {
   // Asigna un color aleatorio.
    let r = random(255);
    let g = random(255);
    let b = random(255);
    // Se aplica un color con opacidad. Tomado de: https://p5js.org/es/reference/#/p5/tint
    tint(r, g, b, 127);
    image(img, 0, 0, width, height);
  }

  if (confetiPressed) {
    
    // Información de generación random y elipses tomada de: https://p5js.org/es/reference/#/p5/random y https://p5js.org/es/reference/#/p5/ellipse
    
    // Aumenta la cantidad de círculos generados.
    for (let i = 0; i < 50; i++) {
      let x = random(width);
      let y = random(height);
      let size = random(5, 10);
      let r = random(255);
      let g = random(255);
      let b = random(255);
      noStroke();
      fill(r, g, b);
      ellipse(x, y, 10, 10);
    }
  }
}

function confeti() {
  confetiPressed = true;
}

function resetear() {
  fiestaPressed = false;
  confetiPressed = false;
  
  // Muestra el mensaje de fin de fiesta.
  background('#222222');
  fill('51, 0.4');
  textSize(32);
  textAlign(CENTER, CENTER);
  text("Se acabó la fiesta BUUU!!!", width / 2, height / 2);
  
  // Esperamos 5 segundos antes de reiniciar el código y volver a la pantalla inicial
  setTimeout(iniciarPantalla, 5000);
}
