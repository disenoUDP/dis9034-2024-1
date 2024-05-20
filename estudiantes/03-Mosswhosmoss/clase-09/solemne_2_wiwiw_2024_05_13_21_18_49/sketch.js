//https://youtu.be/Pn1g1wjxl_0?si=rlBi-2c8hl32GL-B referente de como agregar el sonido a p5.js

var song;

//cargo el sonido de un pikmin
function preload(){
  song = loadSound("Boom Sound.mp3");
}

//interacción mouse sonido https://p5js.org/reference/#/p5/soundFormats
function setup() {
     let cnv = createCanvas(400, 400);
     background(255);
     cnv.mousePressed(function() {
       song.play();
     });
   }

