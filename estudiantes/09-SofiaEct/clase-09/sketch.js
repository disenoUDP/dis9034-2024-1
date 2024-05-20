//variable de indicacion, en este caso permite definir fotito
let fotito;
//cargar archivos de audio y reproducirlos   https://p5js.org/es/reference/#/p5.SoundFile
let mySound;
let c;
let sounds = [];
//se ejecuta una sola vez, es decir no esta en loop
//para cargar imagen a p5,js  https://p5js.org/es/reference/#/p5/preload
function preload() {
  fotito = loadImage("./popcerrado.jpg");
//formatos utilizables
  soundFormats("mp3", "ogg");
  let sound1 = loadSound("./fa-78409.mp3");
  sounds.push(sound1);
  let sound2 = loadSound("la-80237.mp3")
  sounds.push(sound2);
  let sound3 = loadSound("sol-101774.mp3")
  sounds.push(sound3);
 
}
function setup() {
  let cnv = createCanvas(1000, 600);
  fotito.loadPixels();
}
function draw() {
  background(171, 210, 241);
  image(fotito, 50, 250, 100, 100);
}

function keyTyped() {
	if (key == 's') {
		sounds[0].play();
	}
	if (key == 'd') {
		sounds[1].play();
	}
	if (key == 'f') {
		sounds[2].play();
	}
}