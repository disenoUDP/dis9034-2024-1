# clase-12
```javascript

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
```
```javascript
function setup() {
  createCanvas(500, 500);

}

function draw() {
  background(255);


  let noiseLevel = 400;
  let noiseScale = 0.1;

  
  let nt = noiseScale * frameCount;

  // posición x e y del punto
  let x = noiseLevel * noise(nt);
  let y = noiseLevel * noise(nt + 10000);

 
  strokeWeight(40);
  point(x, y);
}
```
