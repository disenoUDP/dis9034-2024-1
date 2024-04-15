# clase-05

## continuar con solemne 1 y terminar

teniendo en cuenta que cada proyecto que yo comience en la universidad es una oportunidad de hacer crecer mi portafolio tomaré un cambio de rumbo hacia algo mas estetico en lo experimental del ramo.

## pixeles

- loadPixeles --> comienzo de ejecucion accion con pixeles
- pixelDensity --> densidad, escala, de pixeles segun monitor
- for --> loop para una seccion de la programacion, tiene estados: inicial, condicion y ¿resultado?
- updatePixels --> mostrar ejecucion accion con pixeles

para comenzar en la edicion de fotos, me inspiré en el trabajo de daniellasarai, tratando de entender el trabajo con pixeles

- primero estudie el uso de pixeles
- luego escogi mi imagen y comence a editarla con uso de pixeles
  <img width="1240" alt="Captura de pantalla 2024-04-08 a la(s) 14 27 28" src="https://github.com/jacinta000/dis9034-2024-1/assets/163039247/057d89a9-2bf8-4cf8-a5f9-f4ebd5682c29">

- estpy estudiando este referente, para transformar la imagen a ellipses

```js
const stepSize = round(constrain(mouseX / 8, 6, 32));
for (let y = 0; y < height; y += stepSize) {
for (let x = 0; x < width; x += stepSize) {
const i = y _ width + x;
const darkness = (255 - fingers.pixels[i _ 4]) / 255;
const radius = stepSize \* darkness;
ellipse(x, y, radius, radius);
```

- no logre hacerlo y decidi tomar caminos mas simples

<img width="1260" alt="Captura de pantalla 2024-04-08 a la(s) 16 52 07" src="https://github.com/jacinta000/dis9034-2024-1/assets/163039247/a6c0ecf3-b8d7-4f27-a8a7-9f8d3804dc39">

<img width="1258" alt="Captura de pantalla 2024-04-08 a la(s) 16 49 02" src="https://github.com/jacinta000/dis9034-2024-1/assets/163039247/fb045930-c06d-4452-bcc4-e4cc790c6d92">

- aproveche el tiempo y desde <https://idmnyu.github.io/p5.js-image/Filters/index.html> aplique logica para crear imagen en negativo
- se pasa de un estado a otro a traves de teclas
  <img width="1260" alt="Captura de pantalla 2024-04-08 a la(s) 17 00 07" src="https://github.com/jacinta000/dis9034-2024-1/assets/163039247/037a0bd4-c7b8-4e97-9874-67fd6b4fb5e3">
- revise los comentarios y termine

<https://editor.p5js.org/jacinta/sketches/jPbEUcjZJ>
