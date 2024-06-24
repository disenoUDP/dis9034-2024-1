# clase-12

##Referentes / no podemos aprender hoy :( 
https://mechanic.design/  
- https://www.runemadsen.com/ el creador de mechanic.design
- https://programmingdesignsystems.com/shape/procedural-shapes/index.html
- Brian Eno obra 

AR, no lo podemos ver pq es muy dificil verlo hoy en día

##Clase waoss
random.org 
- el computador no es capas de ser aleatorio, https://en.wikipedia.org/wiki/Pseudorandomness, recurre a pseudorandomness para generar un numero random, https://www.w3schools.com/python/ref_random_seed.asp, permite que la aleatoriedad funciona.

https://www.w3schools.com/js/js_random.asp

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects

otro sabor de aletoriedad https://docs.cycling74.com/max5/refpages/max-ref/drunk.html

Noise
https://es.wikipedia.org/wiki/Ruido_Perlin

(ver tron del 82)

agregar textura aleatoria al codigo waossssss

https://genekogan.com/code/p5js-perlin-noise/ referencia

```javascript
let t;

function setup() {
  createCanvas(400, 400);
  background(131, 106, 171);
    fill(0, 200, 140, 30, 119);
  noStroke();
  t = 10;
}

function draw() {
  var x1 = width * noise(t + 7);
  var x2 = width * noise(t + 14);
  var x3 = width * noise(t + 21);
  var x4 = width * noise(t + 28);
  var y1 = height * noise(t + 7);
  var r = height * noise(t + 14);
  var g = height * noise(t + 21);
  var b = height * noise(t + 14);

  bezier(x1, y1, x2, r, x3, g, x4, b);

  t += 0.5;

  // limpiar para que no explote el compu
  if (frameCount % 1500 == 0) {
	background(131, 106, 171);
  }
}

