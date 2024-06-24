//Este examen trata de un proyecto prints en risografia sobre mí.

//Cargo la biblioteca de risografía

//Creo las variables de los colores, imágenes y gráficos que usaré
let infancia;
let adolescencia;
let pink;
let blue;
let yellow;
let img1;
let img2;
let img3;

//Cargo los collages que hice con fotos de todas mis etapas de vida
function preload() {
  img1 = loadImage("composicionInfacia.png");
  img2 = loadImage("composicionAdolescencia.png");
  img3 = loadImage("composicionActualidad.png");
}

function setup() {
  //Para tener distintas animaciones y canvas para dibujar sobre este, use la función createGraphics, la cual descubrí gracias a la solemne I de mi compañero juan.pareschi
  //Creo el gráfico infancia
  infancia = createGraphics(500, 700);
  //Creo el fondo del gráfico
  infancia.background(220);

  //Creo el gráfico Adolescencia
  adolescencia = createGraphics(500, 700);
  //Creo el fondo
  adolescencia.background(220);

  //Genero la densidad del pixel
  pixelDensity(1);

  //Defino y creo el tamaño del canvas
  createCanvas(500, 700);

  //Se crea una capa rosada
  pink = new Riso("fluorescentorange");
  //Se crea una capa azul
  blue = new Riso("seablue");
  //Se crea una capa amarilla
  purple = new Riso("grape");
}

function draw() {
  // Interacción con el botón rescatada de: https://p5js.org/es/learn/interactivity.html
  // Al mantener presionada la tecla 'a', dibuja la pantalla 'infancia'
  if (keyIsPressed == true && key == "a") {
    image(infancia, 0, 0);

    clearRiso();

    //La imagen se pasa a semitono lineal con una frecuencia de 3, un ángulo de 45° y una intensidad de 140
    let halftoned = halftoneImage(img1, "line", 3, 90, 140);

    //Se genera la imagen en semitono
    pink.image(halftoned, 0, 0);

    drawRiso();
  }

  // Al mantener presionada la tecla 's', dibuja la pantalla 'adolescencia'
  else if (keyIsPressed == true && key == "s") {
    image(adolescencia, 0, 0);

    clearRiso();

    //La imagen se pasa a semitono lineal con una frecuencia de 3, un ángulo de 45° y una intensidad de 140
    let halftoned = halftoneImage(img2, "line", 3, 90, 140);

    //Se genera la imagen en semitono
    blue.image(halftoned, 0, 0);

    drawRiso();
  }

  // Al mantener presionada la tecla 'd', dibuja la pantalla 'actualidad'
  else if (keyIsPressed == true && key == "d") {
    background(220);

    clearRiso();

    //La imagen se pasa a semitono lineal con una frecuencia de 3, un ángulo de 45° y una intensidad de 140
    let halftoned = halftoneImage(img3, "line", 3, 90, 140);

    //Se genera la imagen en semitono
    purple.image(halftoned, 0, 0);

    drawRiso();
  }
  // Si no se presiona ninguna tecla, dibuja la pantalla de explicación.
  else {
    // Cuadros de texto y sus respectivas modificaciones, en donde se explica la página.
    background(0, 131, 138);
    fill("white");
    textStyle(NORMAL);
    textFont("Helvetica");
    textSize(20);
    text(
      "En la siguiente página encontrarán una representación gráfica de distintas etapas de mi vida.",
      10,
      50,
      350
    );
    // Cuadros de texto y sus respectivas modificaciones, en donde se indican las instrucciones de las teclas y sus respectivas pantallas.
    fill("white");
    textFont("Helvetica");
    textSize(20);
    text("a = Infancia", 10, 600);
    text("s = Adolescencia", 10, 625);
    text("d = Actualidad", 10, 650);
  }
}

