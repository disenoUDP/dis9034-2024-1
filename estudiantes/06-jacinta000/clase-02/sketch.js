let escala = 20;
let t = 'toi buscando a una muje'; // t significa la oracion escrita

function setup() {
  createCanvas(windowWidth, windowHeight); //espacio donde trabajamos
  noStroke(); // figuras, objt, etc., sin delineado

}
function draw() {
  background(17, 250, 80); // canvas verde
  fill(200, 30, 30); // relleno elipse
  ellipse(mouseX, mouseY, 10*frameCount/8, 20*escala); // tamaño y posicion elipse
  
  //rotate(PI / 3.0); // no pude rotar
  if (frameCount > 380) {
    textSize(40);
    textAlign(CENTER);
    fill(17, 250, 80);
    text(t, mouseX, mouseY); // si framecount tiene un valor mayor a 380, escribir referencia tiktok: toi buscando a una muje con las especificaciones de tamaño, alineamiento y color
    
  }
  
  console.log(frameCount); // cuenta frames
  print (mouseIsPressed); // consola me dice si es mouse se presiono
}