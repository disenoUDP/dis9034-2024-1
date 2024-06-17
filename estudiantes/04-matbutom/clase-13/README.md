# clase-14

---

# acercamientos examen :)

mi primera idea sería poder desarrollar un código que pueda integrar la idea de tipografía experimental, que pueda editarse con ciertas caracterísiticas, como serif/no serif, grosor, contraformas, nivel de condensación, etc.

referente que encontré y que me dio la idea: <https://editor.p5js.org/wangh185/sketches/v3NT2HFU> 

---

## proceso 

### 1. cómo insertar una tipografía a p5 

para insertar un texto al editor de p5 tenemos que usar `text()`, el que nos dibuja el texto que escribamos dentro del paréntesis, además de otros parámetros.

```javascript
 text('Aa Bb', 200, 200);
```
en este ejemplo, veríamos reflejado las letras `Aa Bb` en el canvas de p5.

### 2. cómo cambiar la tipografía

para eso usamos `textFont()` en conjunto con usar el archivo ttf u otf que deberíamos tener instalados en nuestro pc. Luego de eso, deberíamos crear una carpeta llamada `assets`, donde debemos subir el archivo, en este caso usamos la tipografía `BDSupper` y `Insocolata`.

<img width="205" alt="Captura de pantalla 2024-06-16 a la(s) 20 41 10" src="https://github.com/matbutom/dis9034-2024-1/assets/163034603/32d2bcea-87a0-4fe5-bc5b-b89e9c85de44">


para cargar las tipografías debemos hacer lo siguiente:

```javascript
// definimos los nombres para las tipografías
let font;
let font2;

// usamos la función de loadFont para tenerlas cargadas
function setup() {
  font = loadFont('assets/Inconsolata.otf');
  font2 = loadFont('assets/BDSupperRegular.otf');

// en textFont() elegimos el nombre que le dimos a una de las dos
// para ocuparla y escribir lo que deseemos
function draw() {
textFont(font2)
  textSize(100);
  textAlign(CENTER)
  text('Aa Bb', 200, 200);
}
```

IMPORTANTE `USAR LA DIRECCIÓN Y NOMBRE DE LA TIPOGRAFÍA`
```javascript

// EJEMPLO
let font;

font = loadFont('assets/nombreDeLaTipografía.otf');
```

### 3. cómo cambiar los parámetros de la tipografía

encontré que en p5 existen los `Sliders` que son elementos interactivos que nos crean barras con las que podemos editar una variable, siento que es una buena opción para comenzar a experimentar los distintos elementos que pueden ser editados.

cree 3 sliders, los que pienso definir más adelante. Así lo hice:

```javascript

let slider;
let slider2;
let slider3;

function setup() {
 // crear deslizador 1
  slider = createSlider(0, 100);
  slider.position(90, 320);
  slider.size(200);                                  

  // crear deslizador 2
  slider2 = createSlider(0, 100);
  slider2.position(90, 370);
  slider2.size(200);

  // crear deslizador 3
  slider3 = createSlider(0, 100);
  slider3.position(90, 420);
  slider3.size(200);
}
```

<img width="329" alt="Captura de pantalla 2024-06-16 a la(s) 21 14 38" src="https://github.com/matbutom/dis9034-2024-1/assets/163034603/b54e433a-ebc8-4def-8c73-3372e81197de">

ahora necesito hacer que los sliders tengan una categoría y puedan, posiblemente, cambiar las variables de la letra.

---

logramos hacer y crear parámetros básicos capaces de editar las carácterísticas de la tipografía. Aquí cómo lo hice:

primero creamos los deslizadores, cambio de color y caja de texto.

```javascript
function setup() {

 // crear deslizador 1
  slider = createSlider(0, 100);
  slider.position(150, 320);
  slider.size(200);

  // crear deslizador 2
  createP("Condensado:");
  slider2 = createSlider(0, 100);
  slider2.position(150, 370);
  slider2.size(200);

  // crear deslizador 3
  slider3 = createSlider(0, 100);
  slider3.position(150, 420);
  slider3.size(200);

  // elección de color de la fuente
  slider4 = createColorPicker("#000000");
  slider4.position(150, 470);
  slider4.size(200);

  // crear caja para escribir texto personalizado
  texto = createInput("Hola, mundo!");
  texto.position(150, 520);
  texto.size(200);
}
```

luego para hacerlos funcionar, debajo de `function draw();` creamos los parámetros.

```javascript
function draw() {
  background(255, 206, 220);

  // definimos las variables de tamaño de texto
  // de color del texto
  // y el texto que quieras escribir

  let fontSize = slider3.value();
  let fontColor = slider4.color();
  let textContent = texto.value();
  
  
  // definimos el tipo de fuente
  // el tamaño
  // y el texto

  fill(fontColor);
  textFont(font2);
  textSize(fontSize);
  text(textContent, 20, 200);
```

y así se ve!

https://github.com/matbutom/dis9034-2024-1/assets/163034603/d94550c2-cf2e-49aa-8b07-6dedffba5670

hasta ahora logramos que escribir un texto, cambiar el tamaño y el color, lograran funcionar!






















---

referencias:

1. text(): <https://p5js.org/reference/#/p5/text>
2. textFont(): <https://p5js.org/reference/#/p5/textFont>
3. loadFont(): <https://p5js.org/reference/#/p5/loadFont>
4. idea: <https://editor.p5js.org/wangh185/sketches/v3NT2HFU>
5. sliders: <https://p5js.org/reference/#/p5/createSlider>
