// En este editor podrán observar el efecto Perlin Noise, en movimiento usando colores, solo haciendo click en el mouse  

var colorInc = 0.5;  //   velocidad de cambio de color
var sat = 100; // saturación max 100
var brt = 100; // brillo max 100
var alph = 10; // alpha max 100
var numbPart = 300; // número de particulas
var partStroke = 1; // peso de línea
var angMult = 25; // 0.1 = línea recta; 25+ = sharp curves
var angTurn = 1; // ajuste de líneas
var zOffInc = 0.0003; // velocidad de los cambios vectoriales 
var inc = 0.1;
var scl = 10;
var cols, rows;
var zoff = 0;
var fr;
var particles = [];
var flowfield;
var hu = 0;
var p = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);

  cols = floor(width / scl);// establecemos de filas y columnas en escala 
  rows = floor(height / scl);
  fr = createP('');

  flowfield = new Array(cols * rows);// campo de flujo con la formación de filas y columnas 

  for (var i = 0; i < numbPart; i++) {
    particles[i] = new Particle();// creación de partículas 
  }
  background(0);// fondo negro
}
// en este proceso de dibujo establecemos los valores de x, y para ajustar el flujo segun el ángulo del vector  
function draw() {
  if (p>0){
  var yoff = 0;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      var index = x + y * cols;
      var angle = noise(xoff, yoff, zoff)*angMult+angTurn;  
      // establecer el ángulo del vector
      var v = p5.Vector.fromAngle(angle);
      v.setMag(1);
      flowfield[index] = v;
      xoff += inc;
    }
    yoff += inc;

    zoff += zOffInc;
  }
// accionamos los sistemas de partículas definidas en particles.js
  for (var i = 0; i < particles.length; i++) {
    // el movimiento del flujo de partículas 
    particles[i].follow(flowfield);
    //actualización de partículas 
    particles[i].update();
    // bordes de partículas 
    particles[i].edges();
    // muestra de partículas 
    particles[i].show();
  }

  // fr.html(floor(frameRate()));
  hu +=colorInc; if (hu >359){hu=0}
}
}
// presionar el mouse para que se muestre el código
function mousePressed(){
  p=p*-1;
}
// pader guardar imagen en jpg.
function keyTyped() {
  if (key === "s") {
  }
}