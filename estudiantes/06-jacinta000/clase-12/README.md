# clase-12

# aleatoriedad 

[programming design system](https://programmingdesignsystems.com/what-is-a-design-system/index.html#what-is-a-design-system-OQAaTNQ)   
[the coding train](https://thecodingtrain.com/)

numeros random [random en js](https://www.w3schools.com/js/js_random.asp)   
ken perlin -> perlin noise: texturas parecidas a la realidad: funcion matematica.   
[noise()](https://p5js.org/reference/#/p5/noise)   
drunk:    
tarea: mover un punto con   
* random
* noise

``` javascript
/* codigo usando math.random
referencias:
https://genekogan.com/code/p5js-perlin-noise/
https://www.w3schools.com/js/js_random.asp
 */

let x;
let y;

//let posActualX [];
//let posActualY [];

function setup() {
  createCanvas(400, 400);
  frameRate(40);
}

function draw() {
  background(0, 15);

  fill(0, 255, 0);
  noStroke();

  x = Math.random() * width;
  y = Math.random() * height;

  ellipse(x, y, 15, 30);

  fill(0, 0, 255);

  x = Math.floor(Math.random() * width/2);
  y = Math.floor(Math.random() * height);

  ellipse(x, y, 15, 30);

  fill(255, 0, 0);

  x = Math.floor(Math.random() * width*3);
  y = Math.floor(Math.random() * height);

  ellipse(x, y, 15, 30);
}

/*function aleatorio(x, y) {
  return Math.floor(Math.random() * (x - y) ) + x;  
} */

```
