//Macarena Parrao 08/04/2024

let fotito = null;
function preload () {
  //cargar imagen de una estrella
  loadImage("./estrella.png");
  
  //cargar imagen de astronauta
  astro = loadImage("./astroonauta.png");
  
  //cargar imagen de la luna
  moon = loadImage("./lunaa.png");
  
  //cargar imagen de galaxia
  galaxy = loadImage("./galaxia.png");
  
  //cargar imagen nave espacial
  ship = loadImage("./nave.png");
  
  //cargar imagen del sol
  sun = loadImage("./sol.png");
  
  //cargar imagen planeta
  planet = loadImage("./planeta.png");
  
  //cargar imagen de sol con rayos
  rayos = loadImage ("./sol-rayos.png");
}
function setup() {
  //cree un lienzo de 600 por 600 pixeles
  createCanvas(600, 600);
  
  //poner la imagen de una estrella
  fotito = loadImage("estrella.png");
  
    //poner imagen de astronauta
  astro = loadImage ("astroonauta.png");
  
  //poner imagen de luna
  moon = loadImage ("lunaa.png");
  
  //poner imagen de galaxia
  galaxy = loadImage ("galaxia.png");
  
  //poner imagen de nave
  ship = loadImage ("nave.png");
  
  //poner imagen planeta
  planet = loadImage ("planeta.png");
  
  //poner imagen sol
  sun = loadImage ("sol.png");
  
 //poner imagen sol rayos
  rayos = loadImage ("sol-rayos.png");
}
let value = 0;
function draw() {
  //poner un fondo color cobalto con código RGB
  background(9, 35, 67);
  
  //poner imagen de una estrella que aparezca random por el fondo, como si fueran varias estrellas parpadeando en el espacio
  image(fotito,random(width), random(height), 100, 100);
  
  //sol en el medio del fondo
  image (sun, 200, 200, 200, 200);
  
  //poner imagen de la luna
  image(moon, 350, 350, 500, 500);
  
  //poner imagen de galaxia
  image(galaxy, 0, 0, 900, 500);
  
  //poner imagen de nave espacial sobre la luna
  image(ship,450, 300, 200,200);
  
  //poner imagen del astronauta que siga el mouse
   //le puse-50 para que quedara justo debajo del mouse
 image(astro, mouseX-50, mouseY-50, 150, 150);
  
  //al presionar cualquier tecla aparecen los rayos del sol, sino se presiona una tecla se mantiene la imagen del sol, aquí use las condicionales if y else
  if (keyIsPressed === true) {
    image(rayos, -100, 0, 800, 600);
  } else {
   image(sun, 200, 200, 200, 200);
   }
  
    //la imagen de un planeta que se mueva alrededor del sol con la función de translate de p5js
  //use la referencia de https://in.pinterest.com/pin/566749934377447177/ para la animación
  //referencia de https://p5js.org/reference/#/p5/translate
  rectMode(CENTER);
  translate(width / 3, height / 3);
  translate(p5.Vector.fromAngle(millis() / 1500, 250));
  image(planet, 0, 0, 150, 150);
  }

//al hacer click cambia el filtro de la foto, sino se hace click se mantiene la imagen del planeta sin filtro, aquí tambien use las condicionales de if y else
//referencia del filtro de https://p5js.org/reference/#/p5.Image/filter
function mouseClicked() {
  if (value === 0) {
    value = planet;
  } else {
    value = planet.filter(INVERT, 3);
  }
  


  
}
