# clase-12
```javascript
//Referencia sacada de noise() https://p5js.org/es/reference/#/p5/noise 
//Canvas de 200x200 píxeles.
function setup() {
  createCanvas(200, 200);

}
//Color noise celeste
function draw() {
  background(100, 200, 800);
//nivel de ruido de 400. La escala es de 0.020, este se refiera a la nivel de escala que alcanza cada onda.
  let noiseLevel = 400;
  let noiseScale = 0.020;

  //manda si el movimiento es de derecha a izquierda 
  for (let x = 0; x < 300; x += 1) {

    let nx = noiseScale * x;
    let nt = noiseScale * frameCount;

//let y= es el nivel de ruido (noiseLevel)
    let y = noiseLevel * noise(nx, nt);

    // dibuja en la línea x
    line(x, 0, x, y);
  }
}
