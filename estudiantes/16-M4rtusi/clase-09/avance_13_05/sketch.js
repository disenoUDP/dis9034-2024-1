// Objetivo: Lograr crear una grilla en la que se puedan generar patrones mediante la modificación de un módulo geométrico.

// Paso 1: Crear una cuadrícula de 10x10 cuadrados en blanco de 50x50 píxeles cada uno, en los que se pueda insertar la imagen llamada 'patron.jpg' al hacer clic en cada uno de ellos.

// Paso 2: Hacer que la imagen 'patron.jpg' se pueda rotar en sentido horario al hacer clic sobre ella.

// Paso 3: Hacer que se emita un sonido al rotar los modulos.

 // Variable para la grilla de 10x10
let grid; 
 // Número de columnas de la grilla
let cols = 10;
 // Número de filas de la grilla
let rows = 10;
 // Tamaño de cada cuadrado en la grilla
let squareSize = 50;
 // Variable para almacenar la imagen
let img; 
 // Arreglo para almacenar los ángulos de rotación de cada cuadrado
let rotationAngles = [];

function preload() {
  // Carga la imagen antes de iniciar
  img = loadImage('patron.jpeg');
}

function setup() {
  // Crea un lienzo del tamaño de la grilla
  createCanvas(cols * squareSize, rows * squareSize); 
  grid = createGrid(cols, rows); 
}

function draw() {
  // Establece el fondo blanco
  background(255); 
  // Muestra la cuadrícula en el lienzo
  displayGrid(); 
}

function createGrid(cols, rows) {
  // Arreglo de la cuadrícula
  let grid = []; 
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      let square = {
        // Posición x del cuadrado
        x: x * squareSize, 
        // Posición y del cuadrado
        y: y * squareSize, 
        // Tamaño del cuadrado
        size: squareSize, 
        // Inicialmente no hay imagen en el cuadrado
        image: null 
      };
      // Agrega el cuadrado al arreglo de la cuadrícula
      grid.push(square); 
      // Inicializa el ángulo de rotación del cuadrado en 0
      rotationAngles.push(0); 
    }
  }
  // Retorna la cuadrícula creada
  return grid; 
}

function displayGrid() {
  for (let i = 0; i < grid.length; i++) {
    // Obtiene el cuadrado actual
    let square = grid[i]; 
    // Obtiene el ángulo de rotación del cuadrado actual
    let angle = rotationAngles[i]; 
    // Establece el color de relleno en blanco
    fill(255); 
    // Dibuja el cuadrado
    rect(square.x, square.y, square.size, square.size); 
    imageMode(CENTER); 
    push(); 
    translate(square.x + square.size / 2, square.y + square.size / 2); 
    // Rota el cuadrado según el ángulo de rotación
    rotate(angle); 
    if (square.image) { 
      // Dibuja la imagen en el centro del cuadrado
      image(square.image, 0, 0, square.size, square.size); 
    }
    // Restaura la configuracióna nterior
    pop(); 
  }
}

function mouseClicked() {
  for (let i = 0; i < grid.length; i++) {
    // Obtiene el cuadrado actual
    let square = grid[i]; 
    if (mouseX > square.x && mouseX < square.x + square.size &&
        mouseY > square.y && mouseY < square.y + square.size) {
      // Si no hay una imagen en el cuadrado
      if (!square.image) { 
        // Asigna la imagen al cuadrado
        square.image = img; 
      } else {
        // Incrementa el ángulo de rotación en 90 grados
        rotationAngles[i] += PI / 2; 
        // Limita el ángulo de rotación a 0, 90, 180 y 270 grados
        rotationAngles[i] %= TWO_PI; 
        // Si se completa una vuelta en sentido horario
        if (rotationAngles[i] === 0) { 
          // Elimina la imagen del cuadrado
          square.image = null; 
        }
      }
    }
  }
}

