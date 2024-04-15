

// pre-cargue 3 imágenes png de internet
// https://p5js.org/es/reference/#/p5/preload
function preload() {
  
  // imagen de un confeti
  fotito = loadImage("./confeti.png");
  
  // imagen de un ovillo de lana
  lana = loadImage("./lana.png");
  
  // imagen de un gato
  gatito = loadImage("./gatito.png");
  
  // imagen de una casa
  casita = loadImage("./casita.png");
}

// crear el tamaño del canvas x, y
function setup() {
  createCanvas(800, 400);
}

function draw() {
  // le di un color celeste al fondo en RGB
  background(212, 230, 241);
  
  //poner imagen de una casa en el lienzo
  image(casita, 50, 200, 200, 200);
  
  // poner imagen de una lana en el lienzo
  image(lana, 600, 260, 100, 100);


  // noStroke()
 // fill(235, 152, 78)
  
  // el gato se mueve con el mouse al reemplazar los valores de posición por mouseX y mouseY
  // le puse -100 al mouseX y mouseY para que el cursor quede encima del gato
  // https://p5js.org/es/reference/#/p5/cursor
  image(gatito, mouseX-100, mouseY-100, 200, 200);
  
  // referencia del filtro https://p5js.org/es/reference/#/p5.Image/filter
  // key is pressed para que al pulsar una tecla se active el filtro
  // https://p5js.org/es/reference/#/p5/keyIsPressed
  if (keyIsPressed == true) {
    casita.filter(INVERT, 200); 
  }
  
  // mouse is pressed para que cuando haga click aparezca la imagen del confeti
  // valores negativos para ajustar al canvas
  // https://p5js.org/es/reference/#/p5.Element/mousePressed
  if (mouseIsPressed == true){
 image(fotito, -80, -40, 900, 500);

  }
  
}
  
  