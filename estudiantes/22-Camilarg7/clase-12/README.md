# clase-12
---
Al inicio de la clase vimos:
- Mechanic design
- sistematizar, programar y automatizar herramientas propias
- pentagram, ver proyectos que nos interesan 
- logotipos con codigo
- Aframe = programar contenido 3d
- ARCore = software para crear experiencias
- codigo para generar numeros aleatorios y configurarlos 
- funcion random codigo

---

tenemos que crear un codigo que use ruido y aleatoridad

---
para crear mi codigo revise los ejemplos de la siguiente pagina: https://genekogan.com/code/p5js-perlin-noise/
saque dos ejemplos, los combine y cambie cosas para generar algo propio:

```javascript
var t;

function setup() {
  createCanvas(400, 400); 
  t = 0;
}

function draw() {
    background(5);
  var x1 = width * noise(t + 5);
  var x2 = width * noise(t + 10);
  var x3 = width * noise(t + 15);
  var x4 = width * noise(t + 20);
  var r = width * noise(t + 25);
  var g = width * noise(t + 30);
  var b = width * noise(t + 35);

  bezier(x1, r, x2, g, x3, b, x4, x4);

  t += 1;
  
  noStroke();
  fill(r, g, b);


  if (frameCount % 0 * width== 0) {
  background(255)
  }
}
```
