//Crear una caja rotativa con cambio de sentido, velocidad y color, al mantener presionado el mouse
//Crear una imagen como variable
let img
function preload() { 
//Darle un "valor" a la variable, cargando una imagen
  img = loadImage('./caritafeliz.jpg');
}

//Crear un lienzo, introduciendo la tercera dimensión: Z con WEBGL
function setup() {
  createCanvas(600, 600, WEBGL);
//Permite que el código sea accesible a más personas, describiendo lo que pasa en el lienzo
describe('Una caja con textura de una imagen de carita feliz, rota en su eje X, Y, Z; Cuando se mantiene presionado el mouse, esta cambia el sentido y velocidad en su rotación, al igual que el color de fondo');
}

function draw() {
//Fondo de color amarillo
  background(255,250, 0);
//Rotaciones en el eje X, Y, Z
//La referencia para la rotación, las tomé de https://p5js.org/es/reference/#/p5/rotateX
//La referencia para frameCount, las tomé de https://p5js.org/es/reference/#/p5/frameCount
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.00);
  rotateY(frameCount * 0.01);
  
//Condición: Cuando el mouse se mantiene preesionado, la rotacion y el color de fondo, cambia de sentido
//La referencia para mouseIsPressed, las tomé de https://p5js.org/es/reference/#/p5.Element/mousePressed
if (mouseIsPressed){
  background(255,0,255);
  rotateZ(frameCount * - 0.05);
  rotateX(frameCount * - 0.00);
  rotateY(frameCount * - 0.05);

}
//Crear una textura con la imagen seleccionada
  texture(img);
//Aumentar el borde de la figura geométrica (caja)
  box(mouseX, mouseY, 100);
  strokeWeight(2);
//Crear una caja en donde su tamaño sea definido según la posición del mouse, en el eje X e Y
  box(mouseX, mouseY, 100);

//Se recomienda hacer click rápido para mayor entretenimiento
}

