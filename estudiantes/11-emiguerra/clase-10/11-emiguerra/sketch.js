var video;
var scaler = 7;
var preFrame;
let song; 
function preload() {
song = loadSound ("boings_jews-harp-7153.mp3");}
function setup() {
  createCanvas(640, 480);
  // nos permite calcular la calidad del video//
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width / scaler, height / scaler);
  video.hide();
  preFrame = createImage(video.width, video.height);
}

function draw() {
  video.loadPixels();
  preFrame.loadPixels();
  //condicionales que alteran el aspeco del video//
  for (let y = 0; y < video.height; y++) {
    for (let x = 0; x < video.width; x++) {
      var index = (x + y * video.width) * 4;
      let pr = preFrame.pixels[index + 0];
      let pg = preFrame.pixels[index + 1];
      let pb = preFrame.pixels[index + 2];
      let pbright = (pr + pg + pb) / 3;

      let r = video.pixels[index + 0];
      let g = video.pixels[index + 1];
      let b = video.pixels[index + 2];
      let bright = (r + g + b) / 5;

      var diff = dist(r, g, b, pr, pg, pb);
      if (diff < 16) {
        fill(bright);
      } else {
        //alterar color que detecta el movimiento//
        fill(255, 255, 0);
      }
      noStroke();
      rect(x * scaler, y * scaler, scaler, scaler);
    }
  }

  preFrame.copy(
    video,
    0,
    0,
    video.width,
    video.height,
    0,
    0,
    video.width,
    video.height
  );
}
