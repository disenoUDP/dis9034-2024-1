# clase-14 
# Penúltima clase
- seguí investigando el mundo del "perlin noise", pero esta vez inclinado hacia un sistema de particulas que espero me permita llegar al resultado que busco:

![Animais](https://github.com/emiguerra/dis9034-2024-1/assets/128399363/62c95d11-bfef-45bf-8463-ce3c7e3b7522)


- Referente: Radiohead video musical "House of Cards"
- <img width="1320" alt="Captura de pantalla 2024-06-17 a la(s) 4 09 03 p  m" src="https://github.com/emiguerra/dis9034-2024-1/assets/128399363/7be85f88-dd82-4ab2-b829-960c4c66a5e2">
- Repositorio en Github sobre el desarrollo del proyecto musical de Radiohead
- *https://github.com/dataarts/radiohead?tab=readme-ov-file*

<img width="1193" alt="Captura de pantalla 2024-06-17 a la(s) 4 36 36 p  m" src="https://github.com/emiguerra/dis9034-2024-1/assets/128399363/67f783c9-3295-4f11-b389-df1b9ac404b5">
- el uso del repositorio base es dificil de comprender, por ello este paso a paso del repositorio de tnguyenh intentaré seguir el proceso de manera mas fácil

- https://github.com/agrignard/r_adiohead_10kandOK
- https://github.com/derouinw/house-of-cards
- https://github.com/dataarts/radiohead/releases

- luego de revisar el repositorio anterior no fue posible enlazar los archivos ya que algunos de estos no se encontraban en las descargas zip.
- Decidí seguir trabajando con los sistemas de partículas, pero esta vez haciéndolo responsivo a la webcam y no en forma de datos
``` javascript
let Particle = function () {
  // Mediante esta función se permite construir el sistema de particulas //
  this.x = Math.random() * 400;
  this.y = Math.random() * 400;
  this.angle = 0;
  this.speed = 3;
  // crea un vector de ubicación con valores random //
  this.loc = new p5.Vector(Math.random() * 600, Math.random() * 400);
  // esto sirve para el vector de posición//
  this.dir = new p5.Vector(Math.cos(0), Math.sin(0));
};
```
<img width="605" alt="Captura de pantalla 2024-06-24 a la(s) 13 59 34" src="https://github.com/emiguerra/dis9034-2024-1/assets/128399363/0799f4e6-306d-47f4-8537-20ca016f8d23">

- quiero experimentar con el color para hacer un mayor contraste respecto a la imagen que captura la webcam y el sistema de particulas
  ```javascript
  function setup() {
  createCanvas(600, 600);
  g = createGraphics(600, 600);
  // inicia la captura de video desde la cámara //
  capture = createCapture(VIDEO);
  capture.size(600, 400);
  capture.hide();
  // establece el color de relleno //
  fill(246, 83, 166);
  // elimina los bordes de las figuras dibujadas //
  noStroke();
  let url2 =
    "https://images.radio-canada.ca/q_auto,w_960/v1/ici-premiere/16x9/greco-juliette-1950s.jpg";
  loadImage(url2, (img) => {
    g.image(img, 0, 0);
    redraw();
  });

  ```
