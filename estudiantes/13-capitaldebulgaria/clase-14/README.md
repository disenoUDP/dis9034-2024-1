# clase-14
*Continuación de examen*

---

### Referencias usadas:
- **Solemne 2** de _vaalentinya_ <https://editor.p5js.org/vaalentinya/sketches/0LNUVHekw>
- **Hand detection** de _fffiloni_ <https://editor.p5js.org/fffiloni/sketches/CP_ONAcl_>
- **Documentación** de _ml5js_ <https://docs.ml5js.org/#/>
  
---


Partí definiendo las variables

```javascript
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
```
Luego definí el _setup_ para el uso del _canvas_

```javascript
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
```
Identifiqué los puntos/vértices de las articulaciones principales de la mano

```javascript
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
```

Empieza la detección de manos, identificando si la mano está abierta o cerrada e identificando cada dedo

```javascript
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
```
Aquí se dibuja el dado y sus puntos

```javascript
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
```
#### *Cabe recalcar que al momento de hacer el código la función ml5.js pasó por una actualización en la versión, por lo que a mi referente _fffiloni_ dejó de funcionarle el código, igual como me pasó a mi, pero yendo a buscar en el repositorio _ml5js_ en github pude obtener la nueva versión
<p id="latest-version">

* You can use the latest version (0.12.2) by adding it to the head section of your HTML document:

**v0.12.2**

    <script src="https://unpkg.com/ml5@0.12.2/dist/ml5.min.js" type="text/javascript"></script>

</p data-id="latest-version">

- <https://github.com/ml5js/ml5-library>

## Resultado

<https://editor.p5js.org/capitaldebulgaria/sketches/Sn7Cd3Yw1>



https://github.com/capitaldebulgaria/dis9034-2024-1/assets/163035824/d3f6d2ff-c10d-4710-94f2-7cc1d22c3760


