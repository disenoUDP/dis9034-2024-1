let datos;


function preload() {
  datos = loadJSON("./api-result.json", cargado);
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}

function cargado() {
  console.log(datos)
  
}