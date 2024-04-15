let freddiemercury = null;

function preload() {
  freddiemercury = loadImage("freddiemercury.png");
}

function setup() {
  createCanvas(600, 500);
}

function draw() {
  //color del fondo
  background(255, 204, 0);
  
//https://p5js.org/reference/#/p5/color referencia para los rectangulos que aparencen en el fondo donde copie el codigo y lo ajuste para que quedara como queria   
  
  //color del rectangulo de la izquierda
  let c1 = color(200, 0, 0);

  //rectangulo y sus medidas.
  fill(c1);
  rect(0, 0, 250, 500);

  //color del rectangulo de la derecha
  let c2 = color(0, 0, 250);

  //rectangulo y sus medidas.
  fill(c2);
  rect(350, 0, 250, 500);

  describe('Dos rectangulos. Uno pocicionado al borde izquierdo del backgroud y el otro posicionado a la derecha de este.');
  
  //medidas y color del rectangulo del ferente 
  rect(50, 450, 500, 100);
  fill(200, 40, 200);
  
  
  //https://p5js.org/reference/#/p5/mouseButton referencia para que aparesca una elipse cuando se presioe el mouse
  
  //un cilculo purpura aparece al centro cada vez que el mouse es presionado
  if (mouseIsPressed === true) {
    if (mouseButton === LEFT) {
      ellipse(300, 250, 300, 300);
    }  
  }
  print(mouseButton);
  describe("una elipse aparece cuando el boton del mouse es presionado")
  
  //imagen de freddie mercury que se mueve donde el mouse se este moviendo
  image(freddiemercury, mouseX, mouseY, 200, 300)
}


