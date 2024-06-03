# clase-12
´´´javascript

//variables de los valores RGB de cada color
let r;
let g;
let b;

function setup() { 
  createCanvas(400, 400);

} 

function draw() { 
  
  background(0);
  fill(r, g, b);
  ellipse(200, 200, 200);
  

  
  r = random(255); 
  g = random(255); 
  b = random(255); 
  
  
}
´´´
