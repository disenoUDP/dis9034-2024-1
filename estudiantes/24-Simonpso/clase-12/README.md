# clase-12

--- 

https://mechanic.design/ pagina para diseñar a travez de codigos

https://designsystems.international/ 

http://runemadsen.github.io/rune.js/ libreria de JavaScript

https://www.pentagram.com/

https://programmingdesignsystems.com/introduction/index.html#introduction-AlRYsdq libro de diseño y programación

https://aframe.io/docs/1.5.0/introduction/ Diseño 3d

---
### Prueba de Javascript

option + command + i
```javascript
//es la forma como en la cual JavaScript tiene para generar numeros random.
Math.random()
0.793834818990989
Math.random() 
0.07217330866834004
Math.random() 
0.5759426700854477
```
```javascript
//para generar numeros aleatorios, que el resultado se multiplique por 6
//viene con decimales
1+6*Math.random() 
5.7288495538442215
1+6*Math.random() 
2.2987443288539
1+6*Math.random() 
5.2659570816801775
```
```javascript
//para generar numeros aleatorios que no trengan decimales y que su resultado sea un multiplo de 6
1+Math.floor(Math.random()*6)
3
1+Math.floor(Math.random()*6)
5
1+Math.floor(Math.random()*6)
4
```
---
### Perlin noise
Prueba de perlin noise 

link a p5 editor https://editor.p5js.org/Simonpso/sketches/T1k65XWkr

```javascript
//codigo de The Coding Train, canal de youtube
let inc = 5.01;
let start = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);
  stroke(255);
  noFill();
  beginShape();
  let xoff = start;
  for (let x = 20; x < width; x++) {
    stroke(250, 80, 40);
    // let y = random(height);
    let y = noise(xoff) * height;
    vertex(x, y);
    
    xoff += inc;
  }
  endShape();
  
  start += inc;
  
  //noLoop();

}
```
