# clase-03
#### javaScript if, else, and else if
usar **if** si lo que está entre parentesis es verdad el código será ejecutado, ej. si el mouse está en la parte izq. de la pantalla.

**else** es opcional, no requiere una condicion en parentesis, si la condición es falsa

*ejemplo:*
```js
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
```

**else if** usar otra condición antes de decir todas las demás. Puedo tener tantos "else if" como quiera dependiendo de que tan específico quiera ser.

*ejemplo:*
```js
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
```

<https://www.wolframalpha.com/>
<https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet>

pixel = 24 bits

8rojo - 8verde - 8azul

**usar minúsculas y sin espacios!!**

#### ver imágenes en p5

flecha bajo botón **play**

sketch files - hay que estra logeado

upload files

#### cargar la imagen

```js
function preload() {
  loadImage("bill2.jpeg");
}
```

hasta el momento la imagen no sabe donde vive

let fotito;

```js
function preload() {
  fotito=loadImage("bill3.jpeg");
}
function setup() {
  createCanvas(640, 336);
}
function draw() {
  background(220);
  image(fotito, mouseX, mouseY, width, height);
}
```
```js
image(imagen, coordenadaX, coordenadaY, widht, height);
```





