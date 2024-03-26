// voy a definir fotito como algo que existe
let fotito;

//voy a cargar una imagen
function preload() {
//Defino la imagen que quiero subir
  fotito = loadImage("saber.jpg");
}


  
//notaciones standar
function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);

//para definir la posición de la imagen
   image(fotito, 0, 0, );
 
  
//para definir el tamaño de mi foto (aún no sé cómo arreglarlo)
  image(fotito, windowWidth, windowHeight,);
  
  //let a = (mouseX, mouseY);;
//if (a > 0) {
 // console.log('positive');
//} else {
//  console.log('negative');
  
//}
  
   
  
}