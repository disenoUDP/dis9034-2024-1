// inspirado en el trabajo de @Tezumine en p5play y siguiendo los pasos de @Barney Codes en youtube

let player;
// aplicar []; es un arreglo que permite poner/subir más archivos dentro del mismo let.
let fotitos = [];
// variable para usar las teclas
let pressedKeys = {};
// parte del arreglo []; que permite hacer el cambio de escenarios.
let fotitoActual = 0;

function preload() {
  // fotito.push es donde ya está aplicado el arreglo de la variable.
  fotitos.push(loadImage("fondo_3.jpg"));
  fotitos.push(loadImage("fondo_2.jpg"));
  fotitos.push(loadImage("fondo_1.png"));
}

function setup() {
  createCanvas(1434, 860);
  // definir el jugador y disponerlo en el lienzo (ubicación).
  player = new Player(width / 12, height / 2);
}

function draw() {
  // aquí van los fondos.
  background(0);
  image(fotitos[fotitoActual], 0, 0);

  player.update();
  player.draw();
  // condicional if para poder cambiar los escenarios cuando el personaje pase los límites del lienzo en forma horizontal.
  // pasar de 0 a 1.
  // https://p5js.org/es/reference/#/p5/if
  if (player.x > 1.0 * width && fotitoActual == 0) {
    // y aqui se indica el fondo
    fotitoActual = 1;
    player.x = 0;
  }
  // pasar de 1 a 2.
  else if (player.x > 1.0 * width && fotitoActual == 1) {
    // y aqui se indica el fondo.
    fotitoActual = 2;
    player.x = 0;
  }
  // pasar de 1 a 0.
  else if (player.x < 0.0 * width && fotitoActual == 1) {
    // y aqui se indica el fondo.
    fotitoActual = 0;
    player.x = width;
  }
  // pasar de 2 a 1.
  else if (player.x < 0.0 * width && fotitoActual == 2) {
    // y aqui se indica el fondo.
    fotitoActual = 1;
    player.x = width;
  }
}

function keyPressed() {
  // definiendo si se presiona una tecla esta hará una acción.
  pressedKeys[key] = true;
}

function keyReleased() {
  // y esto detiene la acción de la tecla, así que la hace momentánea.
  delete pressedKeys[key];
}

class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    this.speed = 8;
  }

  update() {
    // movimiento del personaje.
    let mvmt = createVector(0, 0);
    //condicional if, si se presiona 'a' el movimiento será en la línea x (horizontal). https://p5js.org/es/reference/#/p5/if
    if (pressedKeys.a) {
      mvmt.x -= 1;
    }
    if (pressedKeys.d) {
      mvmt.x += 1;
    }
    if (pressedKeys.w) {
      mvmt.y -= 1;
    }
    if (pressedKeys.s) {
      mvmt.y += 1;
    }

    mvmt.setMag(this.speed);

    this.x += mvmt.x;
    this.y += mvmt.y;
  }

  draw() {
    // acá definí al personaje que es el cuadrado de color rosa.
    fill(234, 134, 157);
    square(this.x, this.y, 60);
    noStroke();
  }
}