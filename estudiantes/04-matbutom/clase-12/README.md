# clase-12

---

#### *03.06.2024 apuntes*

---

## links de referencia

<https://mechanic.design/> página para crear diseños con código - por Rune Madsen

<https://programmingdesignsystems.com/introduction/> libro `Programming Design Systems` diseño de sistemas

<https://programmingdesignsystems.com/shape/figure-and-ground/index.html#figure-and-ground-LxG6S7J> diseño de formas básicas y logos recreables en p5
 
<https://aframe.io/docs/1.5.0/introduction/> diseño 3d con código

---

`Math.random()` nos ayuda dándonos números random


```javascript

Math.random()
0.7715458186606452

Math.random()
0.26025673895534607

Math.random()
0.2645841560436346

Math.random()
0.9018728621208918

```

podemos usar `Math.floor(Math.random())` para que nos de un número entero en vez de decimal 

```javascript

números random entre 1 y 6 (dado)

1+Math.floor(Math.random()*6)
3

1+Math.floor(Math.random()*6)
2

```

### códigos hechos en clases

#### uso de random 

```javascript
// creamos el canvas de 500x500
function setup() {
  createCanvas(500, 500);
// disminuimos el framerate
  frameRate(5);
}
// dibujamos el color del fondo
function draw() {
  background(100, 100, 100);

// le damos las coordenadas random a x e y
  let x = random(400);
  let y = random(400);

// definimos los parámetros gráficos
// valor de línea
// color de línea
  strokeWeight(30);
  stroke(255, 0, 0);
  point(x, y);
}
```
link al editor <https://editor.p5js.org/matbutom/sketches/uQKRZw6lG>

#### uso de noise 

```javascript
// creamos el canvas de 200x200
function setup() {
  createCanvas(200, 200);

}

function draw() {
  // definimos el nivel y la escala del ruido
  let noiseLevel = 100;
  let noiseScale = 0.02;

  // escalamos el input del ruido
  let x = frameCount;
  let nx = noiseScale * x;

  // calculamos el nivel del ruido
  let y = noiseLevel * noise(nx);

  // dibujamos las líneas con los 4 parámetros
  line(x, 0, y, x);
}
```
link al editor <https://editor.p5js.org/matbutom/sketches/urCYzeR-0>

#### uso de Math.random

```javascript
// nos devuelven valores random entre 0 y 1
Math.random()
0.7715458186606452

Math.random()
0.26025673895534607

Math.random()
0.2645841560436346

Math.random()
0.9018728621208918

```
```javascript

// números random entre 1 y 6 (dado)

1+Math.floor(Math.random()*6)
3

1+Math.floor(Math.random()*6)
2

```
