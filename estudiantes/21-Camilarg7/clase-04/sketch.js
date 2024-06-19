//La idea es que cambie de un cuadrado rojo a un circulo verde cuando se haga click, mientras que las figuras siguen el mouse en todo momento

function setup() {
  createCanvas(800, 800, WEBGL);
}

function draw() {
  background(220);
  
}
function draw() {
  if (mouseIsPressed) {
    ellipsoid(mouseX, mouseY, 4);
    fill(10, 200, 7)
    //si se hace click en el canvas los cuadrados rojos se convertiran en circulos verdes
         
 // } else if {
    //rect(mouseX, mouseY, 93);
    //fill(200, 10, 7)
    //al soltar el click los circulos verdes vuelven a ser cuadrados rojos
    //se podra agregar una terder variable si es que se usa else if? 
    
  } else {
    box(mouseX, mouseY, 2)
    fill(10, 7, 200)
    
  }

}
