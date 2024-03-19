function setup() {
  createCanvas(windowWidth, windowHeight);
  background(20, 200, 0);
  for (let iterador = 0; iterador < 10; iterador++) {
    console.log(iterador)
}
}
//carita feliz de lado
function draw() {
  ellipse(100, 100, 50, 50);
  ellipse(100, 300, 50, 50);
  arc(300, 200, 100, 200, 100, PI + QUARTER_PI, OPEN);
}
//
function draw() {
   for (let iterador = 0; iterador < 100; iterador++) {
    ellipse(random(0, width),
            random(0, height),
            random(0, 100),
            random(5, 100),
            );}
}