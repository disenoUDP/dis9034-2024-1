// código adaptado de itsjakeke, maxremfort y p5
//imágenes extraidas de google

let x = 1,
    y = 1;
    
function preload() { //presubir las imágenes
  img = loadImage('/fondito.jpg'); //imagen de fondo como archivo
  let img2 = loadImage('/cat.png'); //fotitos de gatos en formato png
  let img3 = loadImage('/cat4.png');
  imgs = [img2, img3,] //"carpetita" para seleccionar la cantidad de imágenes en específico (2)
}

function setup() {
  createCanvas(800, 600); //tamaño de pantallita de simulación
  background(img); //imagen de fondo
}

function draw() {
mouseClicked(); //función de click
  randomImg = random(imgs) //que aparezcan gatitos random
}

function drawGatitos(x,y){ //si hago click con el mouse aparece un gatito random
 if(x&&y){
    image(randomImg, pmouseX, pmouseY, 100, 100); //que los gatitos sigan el mouse y su tamaño
 } 
  }
function mouseClicked(){

 if(mouseIsPressed){ 
     drawGatitos(true,true);   
 }
}  
  //fin!!   