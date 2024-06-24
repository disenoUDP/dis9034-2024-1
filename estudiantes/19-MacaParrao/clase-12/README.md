# clase-12
**Uso de Perlin noise**
``` Javascript
//Lienzo de 100 por 100 
function setup() {
  createCanvas(100, 100);
}
function draw() {
  //Color de fondo azul
  background(0, 0, 255);
   // Nivel de ruido y escala, cambie el nivel de ruido y la escala 
  let noiseLevel = 200;
  let noiseScale = 0.7;
//referencia sacada de p5js https://p5js.org/reference/#/p5/noise
  for (let y = 0; y < 100; y += 1) {
    for (let x = 0; x < width; x += 1) {
      // Coordenadas por la escala del ruido 
      let nx = noiseScale * x;
      let ny = noiseScale * y;
      let nt = noiseScale * frameCount;

      // Darle un valor al ruido 
      let c = noiseLevel * noise(nx, ny, nt);

      // Dibujar el punto
      stroke(c);
      point(x, y);
    }
  }
}
