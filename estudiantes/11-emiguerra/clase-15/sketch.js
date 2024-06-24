//
let g;
let grid;
let particles = [];
let capture;

let rojo;
let magenta;

let numeroParticulas = 10500;

let cualColor = 0;

let Particle = function () {
  // Mediante esta función se permite construir el sistema de particulas //
  this.x = Math.random() * 400;
  this.y = Math.random() * 400;
  this.angle = 0;
  this.speed = 3;

  // crea un vector de ubicación con valores random //
  this.loc = new p5.Vector(Math.random() * 600, Math.random() * 400);
  // esto sirve para el vector de posición//
  this.dir = new p5.Vector(Math.cos(0), Math.sin(0));
};

function setup() {
  createCanvas(600, 600);
  g = createGraphics(600, 600);
  // inicia la captura de video desde la cámara //
  capture = createCapture(VIDEO);
  capture.size(600, 400);
  capture.hide();

  // establece el color de relleno //
  rojo = color(255, 0, 0);
  magenta = color(246, 83, 166);

  // elimina los bordes de las figuras dibujadas //
  noStroke();
  let url2 =
    "https://images.radio-canada.ca/q_auto,w_960/v1/ici-premiere/16x9/greco-juliette-1950s.jpg";
  loadImage(url2, (img) => {
    g.image(img, 0, 0);
    redraw();
  });

  for (let i = 0; i < numeroParticulas; i++) {
    // con esto se define la cantidad de partículas //
    particles.push(new Particle());
  }
  // color de fondo //
  background(0);
}

function draw() {
  if (cualColor == 0) {
    fill(rojo);
  } else if (cualColor == 1) {
    fill(magenta);
  }

  background(0, 255);
  g.image(capture, 0, 0, 600, 600);
  g.loadPixels();
  // Densidad de pixeles //
  // let den = pixelDensity();
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    let x = Math.floor(p.loc.x);
    let y = Math.floor(p.loc.y);
    // verifica que las coordenadas estén dentro del límite del lienzo.
    let oneD = (x * 2 + y * g.width * 4) * 4;
    let angle = g.pixels[oneD];

    p.dir.x = Math.cos(angle);
    p.dir.y = Math.sin(angle);
    let vel = p.dir.copy();
    let d = 1;
    // let d = new p5.Vector(1, 0, 0);
    // cambio de dirección //
    p.speed = 4 / (angle * 0.002);
    p.speed = p.speed * d;
    let multiplicador = new p5.Vector(p.speed, 0);
    vel.mult(multiplicador);
    p.loc.add(vel);
    // si la partícula se sale del lienzo, la reubica en una posición aleatoria dentro del lienzo //
    ellipse(p.loc.x, p.loc.y, 3);
    if (p.loc.x < 0 || p.loc.x > width || p.loc.y < 0 || p.loc.y > height) {
      p.loc.x = random(width);
      p.loc.y = random(height);
    }
  }
}

function keyPressed() {
  if (key === "0") {
    cualColor = 0;
  } else if (key === "1") {
    cualColor = 1;
  }
}
