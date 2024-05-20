// Comenzamos definiendo variables.

let video;
let button;
let snapshots = [];
let counter = 0;
// el total de imagenes que calzan en el canvas son 67, es por esto que definimos esta variable como un total.
let total = 67;

//Creamos el canvas definiendo sus medidas.
function setup() {
  createCanvas(800, 240);
  background(51);
  video = createCapture(VIDEO, ready);
  video.size(400, 240);
}


let go = false; 
function ready(){
  go = true;
}

//Lo que me mostrará
function draw() {
  //va a dibujar si la función es verdadera
  if (go){
  }
  //Los snapshots se irán contando y sumando hasta llegar al total definido en la variable "total".
  snapshots[counter] = (video.get());
  counter++;
  if (counter == total){
    counter = 0;
  }
  //defininimos variables de coordenadas y sus valores.
  let w = 50;
  let h = 60;
  let x = 0;
  let y = 0;
  //Definimos un bucle para las iteraciones
  for (var i = 0; i < snapshots.length ; i++){
    tint(300, 0);
    let index = (i + frameCount) %snapshots.length;
    tint (255, 80);
    image(snapshots[index], x, y, w, h);
    x = x + w;
    if (x > width){
      x = 0;
      y = y + h;
    }
  }

}