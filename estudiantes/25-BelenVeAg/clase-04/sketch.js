//El proyecto va a partir del ejercicio de la clase Nº3 e intenar lograr crear una imagen interactiva que cambie de colores según la posición del mouse

//voy a definir fotito como algo que existe para la imagen que pondré más adelante

let fotito;

//voy a cargar una imagen, fuente: https://p5js.org/es/reference/#/p5/loadImage

function preload() {
//Defino la imagen que quiero subir
  fotito = loadImage("saber.jpg");
  
  
  
}


  
//notaciones standar del editor
function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);

  
//voy a definir la ubicación y el tamaño de mi foto según el tamaño del lienzo, fuente: https://p5js.org/es/reference/#/p5/imageMode 
//(nombre imagen, ubicación de inicio de la imag en x/y, ubicación de inicio de la imag en x/y, ancho, alto)
  image(fotito, 0, 0, 800, 800);
//Nota: antes había puesto windowWidth, windowHeight , pero al hacer eso, cuando cambio el tamaño del lienzo se cambia el tamaño de la imágen. 

  
  
  //Quiero poner condicionales con el mouse para que la imagen cambie de color según su posición
  
  
//fuente condicionales: https://p5js.org/es/reference/#/p5/if-else  y en https://javautodidacta.es/if-else-en-java/
//fuente filtros: https://p5js.org/es/reference/#/p5/filter
let a = (mouseX, mouseY);
if (a > 200 && a < 400) {
   filter(POSTERIZE, 2);
  
} else if (a > 400 && a <600) {
   filter(POSTERIZE, 2);
    filter(THRESHOLD);
 
} else if (a > 600 && a <800) {
   filter(INVERT);
  
  }

  
  //Quiero generar una acción al presionar click
if (mouseIsPressed === true) {


}
  

  
 
  
   
  
}