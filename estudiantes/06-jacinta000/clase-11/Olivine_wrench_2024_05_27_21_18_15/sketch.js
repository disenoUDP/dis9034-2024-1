/* experimentacion con formato JSON
proposito: 
mostrar en el canvas una imagen a traves del contenido del archivo JSON */

// fuente de datos formato json
let datos;
// link imagen de los datos
let urlImagen = null;
// iamgen cargada a traves de preload
let miImagen = null;

function preload() {
  datos = loadJSON("./27.json", cargado);
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  if (miImagen != null) {
    loadImage(urlImagen, subida);
  }
  if (urlImagen != null) {
    urlImagen = miImagen;
  }

  background(220);
  //textAlign(LEFT, CENTER);
  //textSize(15);
  //text(datos.image.file_page, 5, 80, 100);
}

function cargado() {
  urlImagen = datos.mostread.articles[10].originalimage.source;
}

function subida(img) {
  //console.log(urlImagen);
  image(img, 0, 0);
}
