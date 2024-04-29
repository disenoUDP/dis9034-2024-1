var videoInput = document.getElementById('inputVideo');
  
  var ctracker = new clm.tracker();
  ctracker.init();
  ctracker.start(videoInput);

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  let posiciones= ctracker.getCurrentPosition();
  console.log(posiciones);
}