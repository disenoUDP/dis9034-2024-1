let escala = 20;

//Busqué en las referencias de P5 figuras 3d y elegí el cilindro.
// visto aquí https://p5js.org/es/reference/#/p5/cylinder

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  //Modifiqué los valores del canvas para que se ajustara al tamaño de la ventana
  describe("a rotating white cylinder");
}

function draw() {
  background(200, 1, 100);
  //Al cambiar los valores cambia el color del fondo
  // La variable "y" determina la saturación del color
  rotateX(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  cylinder(mouseX, mouseY);
  //En vez de poner valores establecidos puse los comandos señalados en la clase para la interacción con el mouse, lo que resultó en una variación de las dimensiones del cilindro según el movimiento del mouse
  
  //Intenté cambiar el color del cilindro usando la variable fill
  //Visto en https://p5js.org/es/reference/#/p5/fill
  // Grayscale integer value.
fill(51);

}
