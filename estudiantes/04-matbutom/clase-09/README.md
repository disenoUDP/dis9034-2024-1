# clase-09

---

13.05.2024

---

## acercamientos solemne 2

## ideas para el desarrollo

luego de que encontré la librería `p5.riso` que sirve para p5, siento que puedo transformar varias fotos o dibujos en impresiones risográficas. Las impresiones risográficas son un sistema de impresión digital de alta velocidad fabricado por Riso pewKagaku Corporation, este tipo de impresiones en Chile son escazas, existen pocos estudios de diseño que ofrecen el servicio de este tipo de impresión, por eso siento que puedo usar esta librería para crear mis propias risos y usarlas para @rafita.studio y poder sacarle el jugo.

_link del proyecto p5.riso: <https://antiboredom.github.io/p5.riso/>_

deseo explorar la interactividad con la combinación de colores que ofrece la librería en variedad de fotos y dibujos.

---

encontré la librería en p5.js llamada `p5.riso` que transforma fotos y te ayuda a generar tus sketches o dibujos en impresiones risográficas

<img width="763" alt="Captura de pantalla 2024-05-13 a la(s) 15 31 02" src="https://github.com/matbutom/dis9034-2024-1/assets/163034603/cc674424-0cb7-4b1d-aec5-040e077e4f51">

_screenshot de la web que explica la librería_

---

## procedimientos realizados clase 13.05.2024

según la página, la instalación requiere la creación de la carpeta `p5,riso.js` en el editor de p5, que contiene las siguientes 400+ líneas de código:

<img width="1105" alt="Captura de pantalla 2024-05-13 a la(s) 15 41 22" src="https://github.com/matbutom/dis9034-2024-1/assets/163034603/8a48e3f7-b522-4549-a0c9-964a78d462a5">

luego tocó insertar la siguiente línea de código en la carpeta del editor `index.html` debajo de la línea `<head>`:

```javascript
<html lang="en">
  <head>
    <script src="p5.riso.js"></script>
```

---

## ACTUALIZACIÓN 13.05.2024 17:30

acabo de descubrir que la función de la librería nos ayuda a la separación de colores para la impresión risográfica, es una función muy buena, que nos ayuda a acortar la pega de la turtuosa separación de colores. Lo que no me ayuda mucho ya que yo pensaba que esta librería nos crearía imágenes con una especie de simulación de textura de impresión risográfica, lo que no hace :(

AHORA NO SÉ QUÉ HACER VOY A SEGUIR INVESTIGANDO

## ACTUALIZACIÓN 13.05.2024 16:15

descubrí la función de `halftone` que aplica un efecto de mapa de bits a la foto que subas al editor de p5, esta función se acerca más a lo que quería realizar, la utilización e interactividad con los colores.

<img width="1317" alt="Captura de pantalla 2024-05-13 a la(s) 16 15 27" src="https://github.com/matbutom/dis9034-2024-1/assets/163034603/9e2b2f31-9af9-40a6-80da-f4e77d92fa7c">

con este código siento que puedo insertar elementos interactivos para las fotos que se usen, tales como la combinación de colores, posiciones, tipos de acabados (puntos, líneas, etc), y mucho más.

**link del editor de p5 con las pruebas de halftone: <https://editor.p5js.org/matbutom/sketches/_8f26rPs->**

**código para no perderlo:**

```javascript
let pink;
let img;

function preload() {
  img = loadImage('clobi.jpg');
}

function setup() {
  pixelDensity(1);
  createCanvas(img.width, img.height);

  pink = new Riso('fluorescentpink');
}

function draw() {
  background(220);

  clearRiso();

  let halftoned = halftoneImage(img, 'line', 3, 45, 90);

  pink.image(halftoned, 0, 0);

  drawRiso();
}
```
