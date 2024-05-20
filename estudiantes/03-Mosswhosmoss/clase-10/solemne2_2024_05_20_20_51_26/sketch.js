//https://youtu.be/Pn1g1wjxl_0?si=rlBi-2c8hl32GL-B referente de como agregar el sonido a p5.js

//https://p5js.org/reference/#/p5.Image voy a poner una imagen de fondo que explique al usuario que debe hacer click

//Let https://p5js.org/reference/#/p5/let
//Array https://www.w3schools.com/js/js_arrays.asp

let rocasNombres = ["rock2.jpg", "rock3.jpg", "rock4.jpg"];

let rocas = [];

let song;

//variable para la foto de fondo
let fotito;

//https://editor.p5js.org/awade5/sketches/Bye6-04fEreferente que no pude ver si funcionaba de las imagenes

//cargo el sonido de explosión de vine
function preload() {
  song = loadSound("BoomSound.mp3");
  fotito = loadImage("Clickme.png");
}

//interacción mouse sonido https://p5js.org/reference/#/p5/soundFormats
function setup() {
  createCanvas(400, 400);

  for (let i = 0; i < rocasNombres.length; i++) {
    //agrega una nueva imagen al final del arreglo
    let nueva = rocasNombres[i];
    console.log(nueva);
    rocas[i] = loadImage(nueva);
  }

  //cargo imagen para el fondo
  image(fotito, 0, 0);
}

function mousePressed() {
  song.play();
  let nuevoNumeroAleatorio = Math.floor(random(rocasNombres.length));

  image(rocas[nuevoNumeroAleatorio], mouseX, mouseY, 320, 353);
}

