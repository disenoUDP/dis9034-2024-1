# clase-15

finalización de examen! 24.06.2024

![RTC](https://github.com/matbutom/dis9034-2024-1/assets/163034603/7600e778-0293-499f-b1dd-2e9b3a6ae684)

---

## [•·.·' RAFITA TYPE CREATOR '·.·•](https://editor.p5js.org/matbutom/full/yAIz-rD9f)

en este proyecto podrás cambiar las propiedades de una tipografía y jugar con sus características! puedes escribir el mensaje que desees, cambiar su tamaño, su estilo y color! 

la tipografía base con la que puedes jugar se llama BD Supper, que fue creada por el estudio de diseño gráfico, Büro Destruct, como mencionan ellos:

*"es una tipografía grotesca geométrica-orgánica humana, amigable y humorística. Un buen amigo, siempre al lado de un editor y un diseñador."*

ahora veremos cómo fue programado y el proceso que se llevó a cabo. Disfruta!

nuestro instagram para más cositas [rafita.studio](https://www.instagram.com/rafita.studio/)

---

## proceso creativo y código

mi primera idea sería poder desarrollar un código que pueda integrar la idea de tipografía experimental, que pueda editarse con ciertas caracterísiticas, como serif/no serif, grosor, contraformas, nivel de condensación, etc.

---

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

encontré que en p5 existen los `sliders` que son elementos interactivos que nos crean barras con las que podemos editar una variable, siento que es una buena opción para comenzar a experimentar los distintos elementos que pueden ser editados.

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

### 4. dándoles valores a los slider y editando la tipografía

logramos crear 3 sliders: uno para cambio de color y una caja de texto para que puedas escribir y experimentar con el texto que desees.

#### 4.1 valores de los sliders

en esta parte del código definimos los nombres de los sliders, los creamos con `create.slider`, les dimos sus parámetros gráficos y finalmente logramos hacer que puedan ser funcionales y puedan editar la tipografía.

```javascript

// declaramos los sliders que vamos a ocupar, en este caso 4
// declaramos el uso de texto
// declaramos el uso del grosor del texto
// declaramos img para usar una imagen

let font;
let font2;
let font3;
let slider;
let slider2;
let slider3;
let cambioDeColor;

function setup() {

  // crear deslizador de grosor de texto
  grosorTexto = createSlider(0, 100);
  grosorTexto.position(150, 320);
  grosorTexto.size(200);

  // crear deslizador 
  slider2 = createSlider(0, 100);
  slider2.position(150, 370);
  slider2.size(200);

  // crear deslizador de tamaño del texto
  slider3 = createSlider(0, 100);
  slider3.position(150, 420);
  slider3.size(200);

  // crear elección de color de la fuente
  cambioDeColor = createColorPicker("#000000");
  cambioDeColor.position(150, 470);
  cambioDeColor.size(200);

  // crear caja para escribir texto personalizado
  texto = createInput("RAFITA TYPE CREATOR V1 hecho por mateo arce");
  texto.position(150, 520);
  texto.size(200);
}

```

```javascript

function draw() {
  background(255, 206, 220);
  // definimos las variables de tamaño de texto
  // de color del texto
  // y el texto que quieras escribir
  let fontSize = slider3.value();
  let fontColor = cambioDeColor.color();
  let textContent = texto.value();
  fill(fontColor);

  // condición de cómo va a cambiar la tipografía
  // dependiendo del valor del slider
  if (grosorTexto.value() <= 50) {
    textFont(font2);
  } else {
    textFont(font3);
  }

  // definimos el tamaño del texto al tamaño del valor del slider
  textSize(fontSize);
  
  // definimos cómo queremos que las letras se escriban hacia abajo
  // con WORD hacemos que la frase se separe EN PALABRAS 
  // si llega al final del canvas
  // definimos los parámetros x e y, y cómo queremos que el wrap afecte
  // width - 40 hace que deje un margen de 40 pixeles al costado del canvas
  textWrap(WORD); 
  text(textContent, 20, 100, width - 40, height);
  
  // definimos la función del slider 2 como el interlineado
  // hacemos que cambie dependiendo del valor del slider
  textLeading(slider2.value());
}

```

para finalizar y darle un orden al canvas, dibujamos distintos títulos que indican para qué sirve cada uno de los sliders, así el proyecto se puede hacer más intuitivo. 

```javascript
function draw() {

 // escribimos los títulos de cada uno de
  // los parámetros
  // Grosor, interlineado, tamaño, color y lo que quieras escribir
  textFont(font);
  textSize(20);
  text("Grosor", 20, 336);

  // título "interletrado"
  textFont(font);
  textSize(20);
  text("Interlineado", 20, 385);

  // título "tamaño"
  textFont(font);
  textSize(20);
  text("Tamaño", 20, 435);

  // título "color"
  textFont(font);
  textSize(20);
  text("Color", 20, 485);

  // título "escribe!"
  textFont(font);
  textSize(20);
  text("Escribe!", 20, 535);

}

```

---

así es como finalmente pudimos terminar el proyecto, decidí ponerle Rafita Type Creator, para que la persona que lo use pueda tener acceso a una creación de letras simple, pero que al mismo tiempo puede ayudarle a generar ideas de distintas cosas, logos, posters, etc.

https://github.com/matbutom/dis9034-2024-1/assets/163034603/5cbd5265-e876-4b24-b15c-1a54b37cb1a1

---

link al proyecto: <https://editor.p5js.org/matbutom/sketches/yAIz-rD9f>

referencias:
1. text(): <https://p5js.org/reference/#/p5/text>
2. textFont(): <https://p5js.org/reference/#/p5/textFont>
3. loadFont(): <https://p5js.org/reference/#/p5/loadFont>
4. idea: <https://editor.p5js.org/wangh185/sketches/v3NT2HFU>
5. sliders: <https://p5js.org/reference/#/p5/createSlider>
6. textWrap(): <https://p5js.org/reference/#/p5/textWrap>
7. textLeading(): <https://p5js.org/reference/#/p5/textLeading>
8. createColorPicker(): <https://p5js.org/reference/#/p5/createColorPicker>

