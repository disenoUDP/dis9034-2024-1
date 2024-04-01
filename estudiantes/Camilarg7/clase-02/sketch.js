//tome comandos que encontre en la pagina de referencias de p5 y fui probando que hacian

let escala =20;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(100, 150, 108);
  triangle(700, 500, 600, 600, 800, 900);
  console.log();
  stroke(255, 0, 0);
  triangle(100, 300, 200, 900, 500, 700);
  stroke(78, 12, 200)
  strokeWeight(20)

}
