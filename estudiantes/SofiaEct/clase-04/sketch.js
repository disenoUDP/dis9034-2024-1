let fotito;
 //cargar imagen a eleccion https://p5js.org/reference/#group-Image
function preload() {
  fotito = loadImage("./hanako.jpg");
  
}

function setup() {
  createCanvas( 870, 1200,);
  //crear gotero para seleccionar color y ver el codigo
  myPicker = createColorPicker('cyan');
  myPicker.position(0, 100);
   
}

function draw() {
  background(220)
  //rotateZ(millis() / 500);

  //dimension de la imagen https://p5js.org/reference/#/p5/image

  image(fotito, 0, 0, 870, 1200);
 //condicion de mouse, si se pone el mouse en la parte superior de la pantalla cambia el filtro https://p5js.org/reference/#/p5/if-else
  let a = (mouseX, mouseY);
if (a > 400)
    //aplicacioin de filtro de saturacion y negativo https://p5js.org/reference/#/p5/filter
  filter(INVERT);
  filter(POSTERIZE,2);
  
}
