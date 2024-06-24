// que tome la mano
let handpose;
// que pueda detectar
let detections = [];
// que aparezca el canvas
let canvas;
// que aparezca el video
let video;
// que aparezca el dado y que al inicio muestre el valor 1
let valorDado = 1; 

function setup() {
  // creación del canvas y su tamaño
  canvas = createCanvas(640, 480);
  canvas.id("canvas");
  // creación del video
  video = createCapture(VIDEO);
  video.id("video");
  // tamaño del video
  video.size(width, height);

  const options = {};

  // identificación de la mano con los puntos (modelo)
  handpose = ml5.handpose(video, options, modelReady);
  // color de los (puntitos) vértices de la mano
  colorMode(HSB);
}

// que avise la consola cuando el modelo identificador de la mano haya cargado
function modelReady() {
  console.log("lista para la identificación de la mano");
  handpose.on('predict', results => {
    detections = results;
  });
// que muestre el estado del modelo cargado desde html
  select('#status').html('Model Loaded');
}

function draw() {
  clear();
  image(video, 0, 0, width, height);

  // inicia la detección de manos
  if (detections.length > 0) {
    let hand = detections[0];

    // dibuja puntos de referencia de la mano
    drawLandmarks([0, 21], 0);

    // verifica si la mano está abierta o cerrada
    if (isHandClosed(hand)) {
      // mantiene el valor del dado si la mano está cerrada
    } else {
      // cambia el valor del dado aleatoriamente si la mano está abierta, con valores del 1 al 6 * sin decimales  
      valorDado = 1 + Math.floor(Math.random() * 6);
    }
  }

  // dibuja el dado con el valor actual
  drawDado(50, 50, valorDado);
}

// detecta si la mano está cerrada
function isHandClosed(hand) {
  // dedo pulgar
  let thumbTip = hand.annotations.thumb[3];
  // dedo índice
  let indexTip = hand.annotations.indexFinger[3];
  // dedo medio
  let middleTip = hand.annotations.middleFinger[3];
  // dedo anular
  let ringTip = hand.annotations.ringFinger[3];
  // dedo meñique
  let pinkyTip = hand.annotations.pinky[3];

  // detecta si la mano se considera cerrada 
  return thumbTip[1] > indexTip[1] && thumbTip[1] > middleTip[1] && thumbTip[1] > ringTip[1] && thumbTip[1] > pinkyTip[1];
}
// crea la visualización del dado
function drawLandmarks(indexArray, hue) {
  noFill();
  strokeWeight(10);
  for (let i = 0; i < detections.length; i++) {
    for (let j = indexArray[0]; j < indexArray[1]; j++) {
      let x = detections[i].landmarks[j][0];
      let y = detections[i].landmarks[j][1];
      let z = detections[i].landmarks[j][2];
      stroke(hue, 40, 255);
      point(x, y);
    }
  }
}
// dibuja el dado
function drawDado(x, y, value) {
  // fondito blanco del dado
  fill(255);
  // borde negro del dado
  stroke(0);
  // grosor del borde
  strokeWeight(2);
  // forma y posición del borde
  rect(x, y, 50, 50, 5);
  // permite que los puntos puedan estar sobre el cuadrado
  fill(0);
  noStroke();

  // dibuja los puntos del dado según el valor
  let dots = [
    // 1
    [[25, 25]],
    // 2
    [[10, 10], [40, 40]],
    // 3
    [[10, 10], [25, 25], [40, 40]],
    // 4
    [[10, 10], [10, 40], [40, 10], [40, 40]],
    // 5
    [[10, 10], [10, 40], [25, 25], [40, 10], [40, 40]],
    // 6
    [[10, 10], [10, 25], [10, 40], [40, 10], [40, 25], [40, 40]]
  ];

  for (let i = 0; i < dots[value - 1].length; i++) {
    
    let [dx, dy] = dots[value - 1][i];
     // dibuja los puntos en las coordenadas ajustadas
    ellipse(x + dx, y + dy, 10, 10);
  }
}
