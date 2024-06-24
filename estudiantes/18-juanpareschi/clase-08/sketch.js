var videoinput = document.getElementById("inputVideo");

var ctracker = new clm.tracker();
ctracker.init();
ctracjer.start(videoInput)

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  let posiciones = ctracker.getCurrentPosicion();
  console.log(posiciones);
}