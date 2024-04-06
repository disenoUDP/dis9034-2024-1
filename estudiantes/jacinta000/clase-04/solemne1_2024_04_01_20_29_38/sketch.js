//ingresar variable fotito
let fotito; 
// booleano que indica estado falso
let presionado = false;

// funcion que permite subir la foto sin complicaciones como en setup
function preload() {
  fotito = loadImage('./ninomosca.jpg');
}

function setup() {
// lienzo de cierto tamaño
  createCanvas(514, 500); 
  
}

function draw() {
  background(220);
  
// condicion que cuando presionado es falso, las imagenes estan repartidas en el lienzo y cuando es falso, estan encima de cada una
  
    numeroUno();
    numeroDos();
    numeroTres();
  

 /* tint(255, 0, 0, 100); //https://p5js.org/reference/#/p5/tint agregar un tono especifico a la imagen
  image(fotito, 0, 0); // imagen en cierta ubicacion  
  tint(0, 255, 0, 100);
  image(fotito, 171, 0);
  
  tint(0, 0, 255, 100);
  image(fotito, 342, fotito.height/2);
  
  
  console.log(key === 'a'); // muestra el conteo de frames en la consola
*/
}

// funcion que coloque a todas las imagenes puestas desde la misma coordenada al presionar 'a' y convirtiendo en verdadero el booleano de presionado. vuelve a ser falso al presionar 'b'
function keyTyped() {
  if (key === 'a') {
    console.log('presion');
    presionado = true; 
  }
    else if (key === 'd') {
      presionado = false;
    }
  
}
  
// funciones que especifican posicion y tinte de imagen y que tienen una condicion, la cual si se cumple tienen una posicion y sino, otra
function numeroUno() {
  // funcion titn aprendida en https://p5js.org/reference/#/p5/tint
  tint(255, 0, 0, 100)
  if (presionado == false) {
  image(fotito, 0, 0);} else {
    image(fotito, 0, 0);
  }
}

function numeroDos() {
  tint(0, 255, 0, 100);
  if (presionado == false) {
  image(fotito, 171, 0); } else {
    image(fotito, 0, 0);
  }
}
function numeroTres() {
  tint(0, 0, 255, 100);
  if (presionado == false) {
  image(fotito, 342, 0);} else {
    image(fotito, 0, 0);
  }
}
