let handpose;
let video;
let hands = [];
let manoAbiertaSonido;
let manoCerradaSonido;

function preload() {
  manoAbiertaSonido = loadSound('key08.mp3'); // cargar la nota!!!
  manoCerradaSonido = loadSound('key15.mp3') // cargar la segunda nota!!!
}

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO); // inicia la cámara
  video.size(width, height);

  handpose = ml5.handpose(video); // inica el modelo de manitos

  handpose.on("hand", results => {
    hands = results; // manos = resultados
  });

  video.hide();
}

function draw() {
  image(video, 0, 0, width, height);
  drawKeypoints();
  if (hands.length > 0 && manoAbierta(hands[0])) {
    if (!manoAbiertaSonido.isPlaying()) { // hacer sonar la nota DoM 
      manoAbiertaSonido.play();
    }
  }
}

function drawKeypoints() {
  for (let i = 0; i < hands.length; i += 1) {
    const hand = hands[i]; // datos de la mano actual!!
    for (let j = 0; j < hand.landmarks.length; j += 1) {
      const keypoint = hand.landmarks[j]; // se obtienen las coordenadas de cada punto de anclaje 
      fill(0, 255, 0); // verde!!!
      noStroke();
      ellipse(keypoint[0], keypoint[1], 10, 10);
    }
  }
}

function manoAbierta(hand) {
  //distancias de los dedos y la mano
  const wrist = hand.landmarks[0];
  const thumbTip = hand.landmarks[4];
  const indexFingerTip = hand.landmarks[8];
  const middleFingerTip = hand.landmarks[12];
  const ringFingerTip = hand.landmarks[16];
  const pinkyFingerTip = hand.landmarks[20];

  const threshold = 50; 
  const thumbOpen = dist(wrist[0], wrist[1], thumbTip[0], thumbTip[1]) > threshold;
  const indexFingerOpen = dist(wrist[0], wrist[1], indexFingerTip[0], indexFingerTip[1]) > threshold;
  const middleFingerOpen = dist(wrist[0], wrist[1], middleFingerTip[0], middleFingerTip[1]) > threshold;
  const ringFingerOpen = dist(wrist[0], wrist[1], ringFingerTip[0], ringFingerTip[1]) > threshold;
  const pinkyFingerOpen = dist(wrist[0], wrist[1], pinkyFingerTip[0], pinkyFingerTip[1]) > threshold;

  return thumbOpen && indexFingerOpen && middleFingerOpen && ringFingerOpen && pinkyFingerOpen;
}
