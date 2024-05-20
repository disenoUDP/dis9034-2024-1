# clase-10

Solemne II: Pieza audiovisual interactiva con el mouse


https://youtube.com/playlist?list=PLRqwX-V7Uu6aFcVjlDAkkGIixw70s7jpW&si=7t8-qVAV7vnM_f12 Tutorial de sonido

https://youtu.be/vwwRWCErx_Q?si=gwjWauGi_y4dZbub Tutorial de como agregar sonido a p5.js

<img width="1089" alt="330189405-f22f22f8-9792-4fe5-b63b-0f026155b1cc" src="https://github.com/Mosswhosmoss/dis9034-2024-1/assets/168484044/11ae7490-42fe-4831-a209-a3f2f612f4cc"> ahí se logra escuchar el sonido ahora

voy a empezar con la interactividad del mouse https://p5js.org/reference/#/p5/soundFormats Primera posible interacción con el mouse

https://github.com/Mosswhosmoss/dis9034-2024-1/assets/168484044/92efd7d9-e6ff-4ff5-8467-1cc1b04d586f

Cambie el sonido por el boom vine sound effect

Ahora voy a empezar a agregar imágenes y que aparezcan dependiendo de la posición de donde el cursor se encuentra al hacer click

Tutorial de la variable random (https://youtu.be/POn4cZ0jL-o?feature=shared)

El código actualmente 
<img width="1574" alt="Captura de pantalla 2024-05-20 a la(s) 16 11 59" src="https://github.com/Mosswhosmoss/dis9034-2024-1/assets/168484044/40144787-68e2-4746-9309-e2866ec157f3">

<img width="1638" alt="Captura de pantalla 2024-05-20 a la(s) 16 19 07" src="https://github.com/Mosswhosmoss/dis9034-2024-1/assets/168484044/653eccfb-df6b-40cc-aaf4-c1d3a2cdb080">

Video sin audio  
https://github.com/Mosswhosmoss/dis9034-2024-1/assets/168484044/08e7d9c9-baf8-4b5c-a4ec-bcba3627f388

El código 
https://youtu.be/Pn1g1wjxl_0?si=rlBi-2c8hl32GL-B referente de como agregar el sonido a p5.js

https://p5js.org/reference/#/p5.Image voy a poner una imagen de fondo que explique al usuario que debe hacer click

Let https://p5js.org/reference/#/p5/let

Array https://www.w3schools.com/js/js_arrays.asp

let rocasNombres = ["rock2.jpg", "rock3.jpg", "rock4.jpg"];

let rocas = [];

let song;

variable para la foto de fondo
let fotito;

https://editor.p5js.org/awade5/sketches/Bye6-04fEreferente que no pude ver si funcionaba de las imagenes

cargo el sonido de explosión de vine
function preload() {
  song = loadSound("BoomSound.mp3");
  fotito = loadImage("Clickme.png");
}

interacción mouse sonido https://p5js.org/reference/#/p5/soundFormats
function setup() {
  createCanvas(400, 400);

  for (let i = 0; i < rocasNombres.length; i++) {
    agrega una nueva imagen al final del arreglo
    let nueva = rocasNombres[i];
    console.log(nueva);
    rocas[i] = loadImage(nueva);
  }

  cargo imagen para el fondo
  image(fotito, 0, 0);
}

function mousePressed() {
  song.play();
  let nuevoNumeroAleatorio = Math.floor(random(rocasNombres.length));

  image(rocas[nuevoNumeroAleatorio], mouseX, mouseY, 320, 353);
}

editable https://editor.p5js.org/Mosswhosmoss/sketches/xPje3xkGN

