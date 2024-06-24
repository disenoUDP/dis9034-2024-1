// solemne 2
// 20 de mayo del 2024
// bienvenidx! grita para activar el filtro
// por daniela salamanca
// este proyecto se hizo con p5.js Version: 1.0.1 - 2021-05-25


// definir las variables

// mic será la variable que se utilizará para acceder al micrófono
let mic;
// valor que define el nivel de sonido necesario para activar el filtro
// un valor más alto significará que necesita un sonido más fuerte
let threshold = 0.08;


function setup() {
  
  // crear un lienzo de 650 por 500 pixeles
  createCanvas(650, 500);

  // captura la imagen de la cámara del computador
  // se utiliza "flipped" para voltear horizontalmente el video, visto en https://p5js.org/es/reference/#/p5/createCapture
  camaraWeb = createCapture(VIDEO, { flipped: true });

  // se establece el tamaño del video capturado
  camaraWeb.size(650, 500);

  // oculta la vista previa de la cámara
  camaraWeb.hide();

  // accede al micrófono del dispositivo.
  mic = new p5.AudioIn();

  // inicia la captura de audio
  mic.start();
}

function draw() {
  // se establece el color de fondo a blanco
  background(255);

  // proyecta la imagen capturada por la cámara en el canvas
  image(camaraWeb, 0, 0, width, height);

  // se obtiene el nivel de volumen actual del micrófono
  let volumen = mic.getLevel();

  // se implementa una condición para verificar si el nivel de volumen supera el umbral establecido,
  if (volumen > threshold) {
    // si el volumen es mayor al umbral se aplica el filtro threshold

    // obtiene la imagen capturada por la cámara web y la "almacena" en una variable llamada camara
    let camara = camaraWeb.get();
    // aplica el filtro THRESHOLD a la imagen almacenada en camara
    camara.filter(THRESHOLD);
    // proyecta la imagen con filtro
    image(camara, 0, 0, width, height);
  }
}

// mi referente para activar el micrófono https://www.youtube.com/watch?v=q2IDNkUws-A&t=307s
// mis referentes para activar la cámara https://www.youtube.com/watch?v=hHZcIMppkFc&t=835s
// mi referente de uso de filtros https://p5js.org/es/reference/#/p5.Image/filter
