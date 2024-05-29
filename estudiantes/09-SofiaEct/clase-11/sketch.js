//en este caso usamos el let pero puede ser definido por nosotros
let datos
let tierra
function preload() {
  datos = loadJSON("./27.json", cargado);
  tierra = loadJSON("./Earth.json", subir);
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}

function cargado() {
  //le pedimos a la consola que nos muestre la informacion dentro de la variable datos
  //agregar .tfa en este caso nos lleva a una parte especifica de la informacion dentro del json
  console.log(datos.image.file_page);
}

function subir() {
  console.log(tierra.meta.dataset_checksums); 
}
