# clase-12

# aleatoriedad 

[programming design system](https://programmingdesignsystems.com/what-is-a-design-system/index.html#what-is-a-design-system-OQAaTNQ)   
[the coding train](https://thecodingtrain.com/)   
[brian eno](https://www.google.com/search?q=brian+eno+works&sca_esv=f1a846ccc6d720d5&sca_upv=1&udm=2&biw=1200&bih=937&ei=LDNeZsvKMf3d5OUPsaKfqAo&ved=0ahUKEwjLkPqCrsCGAxX9LrkGHTHRB6UQ4dUDCBA&uact=5&oq=brian+eno+works&gs_lp=Egxnd3Mtd2l6LXNlcnAiD2JyaWFuIGVubyB3b3Jrc0jMDVCBAliZDHABeACQAQCYASagAcIBqgEBNrgBA8gBAPgBAZgCBaACkgHCAgoQABiABBhDGIoFwgIFEAAYgATCAgQQABgewgIGEAAYBRgewgIGEAAYCBgemAMAiAYBkgcBNaAHgxE&sclient=gws-wiz-serp)

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
