function draw() {
  background("black");
}

function setup() {
  new Canvas(800, 800);

  //codigo que aplica gravedad al juego
 world.gravity.y = 10;

  //codigo que genera el sprite 
  sprite = new Sprite();
  sprite.width = 50;
  sprite.height = 50;
  sprite.color = "black";
  sprite.stroke = "white";

//codigo que genera el piso
  floor = new Sprite();
  floor.y = 600;
  floor.w = 900;
  floor.h = 200;
  floor.collider = "static";
}
//movimiento del sprite de izquierda a derecha precionando las teclas de izquierda y derecha del teclado  
function keyPressed() {
  if (kb.pressing("left"))  {
    sprite.vel.x = -5;
  } else if (kb.pressing("right")) {
    sprite.vel.x = 5;
  } else {
    sprite.vel.x = 0;
  }
}
