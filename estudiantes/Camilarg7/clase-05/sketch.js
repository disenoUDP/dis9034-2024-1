// La idea es que las figuras (cuadrado y círculo) cambien de forma a la vez que cambian aleatoriamente de color cuando se presiona el mouse, mientras que las figuras siguen el mouse en todo momento.
// La referencia para cambios al presionar mouse sacado de: https://p5js.org/reference/#/p5/mouseIsPressed.
// La referencia que use para los colores aleatorios y let lo perdí, pero encontré este que es muy parecido: https://editor.p5js.org/matlisa/sketches/cGAut_37Z.


// Crea una variable de colores por letra.
let r = 255, g = 255, b = 255; 

// Crea un lienzo de un tamaño de 800 por 800 píxeles
function setup() {
  createCanvas(800, 800);
}

// Permite que al presionar el mouse se le asigne un color aleatorio a las figuras.
function mousePressed() {
    r = random(255);
    g = random(255);
    b = random(255);
}

// Si se hace clic en el canvas los cuadrados cambiarán su forma a un círculo, mientras siguen el puntero del mouse.
function draw() {
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, 120);
    fill(r, g, b);  
         
// Si se deja de presionar el mouse, la forma volverá a un cuadrado, mientras siguen el puntero del mouse.
  } else {
    rect(mouseX, mouseY, 120)
    fill(r, g, b)
  }
  
// Permite que el código sea accesible a más personas al describir lo que está pasando en el lienzo.
  describe('Un lienzo de color blanco en el que al pasar el puntero del mouse aparecen cuadrados de un color aleatorio que siguen al mouse, si se hace clic el color cambiará, si se mantiene presionado clic la figura cambiará a un círculo.')

}
