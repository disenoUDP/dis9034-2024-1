# Examen - Primera Parte
**Explicación de idea y concepto: Quiero relacionar el examen con un área del diseño que me interesa como es la ilustración. La idea principal es hacer un oráculo interactivo, donde aparezca un personaje principal que será una clarividente, con una bola de cristal y tres cartas, además de ponerle un fondo que vaya cambiando y música que se relacione con la estética de la animación. La interacción estará dada al hacer click sobre una de las tres cartas y de acuerdo a eso, aparecerá un mensaje del oráculo en la bola de cristal de la clarividente.**

**Proyecto:** https://editor.p5js.org/MacaParrao/sketches/Tyg4ZhxX8

**Busqué una canción que tuviera relación con la temática de magia o fantasía, encontré música sin copyright en la página pixabay y la descargué, le puse de nombre "encantada". Añadí el archivo en el p5js y lo cargué al proyecto, esto lo hice con la referencia de p5js https://p5js.org/es/reference/#/p5.SoundFile.** 
```javascript
//Declarar una variable para la canción, esto lo hice con la referencia de un ejemplo de https://p5js.org/es/examples/sound-load-and-play-sound.html
let song;

// Cargar la canción sin copyright, sadada de pixabay, esto tambien lo hice con la referencia de p5js https://p5js.org/es/examples/sound-load-and-play-sound.html
song = loadSound('encantada.mp3');
```
**Creé un canvas de 360 por 640 e hice que la música se reproduzca al ingresar al proyecto** 
```javascript
function setup() {
//Creación del canvas con las medidas de 360 por 640
createCanvas(360, 640); 
```
```javascrpit
// Iniciar la reproducción de la música al ingresar al proyecto
song.play();
```
**Quiero que el fondo de la ilustración sea un fondo de color plano que va a ir cambiando entre diferentes tonalidades de rosado y morado, usé las mismas referencias de la solemne pasada de p5js, la velocidad de cambio entre un color y otro será de 2 cuadros por segundo**
```javascript
//Poner un fondo de color plano y la idea es que vaya  cambiando de color de forma aleatoria pero dentro de una paleta de color
//Use estas referencias 
//https://p5js.org/es/reference/#/p5/random
//https://editor.p5js.org/hosken/sketches/I_4VSTotf

//Declarar la variable para los colores y para el color con que la animación va a empezar 
let colors = [];
let currentColor;
}

function setup() {
  //La velocidad con que el color va a cambiar será de 2 cuadros por segundo, los colores seran diferentes tonalidades de morado y rosado
  frameRate(2);
  colors = [
    
    //lila
    color(214, 189, 251),   
    
    //rosa claro
    color(255, 169, 249),   
    
    //morado
    color(188, 146, 255),   
    
    //fucsia
    color(252, 141, 255), 
  ];
```
<img width="358" alt="Captura de pantalla 2024-06-17 a la(s) 16 00 53" src="https://github.com/MacaParrao/dis9034-2024-1/assets/163044952/4b3df8b8-3a1f-43a1-88d5-cdd50d10c3fe">

**Fui cargando las ilustraciones que estarán en la composición, por ejemplo la de decoración del fondo, la de la clarividente y la de la luz verde que sale de la bola de cristal. Además también les asigne un nombre y las ubique en el centro de la composición. Con la ilustración del brillo verde use las condicionales if para que cuando aparezca un texto dentro de la bola de cristal, la ilustración del brillo verde aparezca alrededor de la bola de cristal**
```javascript
//Cargar ilustracion del fondo
loadImage("./fondo.png");
  
//Cargar ilustracion del personaje clarividente
loadImage("./personaje.png");
  
//Cargar ilustración del brillo de la bola de cristal
loadImage("./brillo.png")
```
```javascript
//Poner la ilustracion que ira en el fondo de la composicion
  decoracion = loadImage ("fondo.png");
  
  //Poner la ilustración del personaje 
  clarividente = loadImage ("personaje.png")
  
  //Poner la ilustración del brillo de la bola de cristal
  verde = loadImage ("brillo.png")
```
```javasript
//Poner la ilustración de fondo en el medio del lienzo 
image(decoracion, 0, 0, 360, 640);
  
//Poner la ilustración de la clarividente en el centro de la composición
image(clarividente, 0, 0, 360, 640);
  
// Poner la ilustración del brillo de la bola de cristal con la condicional if, al aparecer un texto en la bola de cristal la luz verde aparece alrededor de la bola de cristal
if (showText) {
image(verde, 0, 0, 360, 640);
```
<img width="353" alt="Captura de pantalla 2024-06-17 a la(s) 16 13 29" src="https://github.com/MacaParrao/dis9034-2024-1/assets/163044952/a1a7d8af-6f8c-461e-a73d-bdd927e03187">

**Cargué y ubiqué cada una de las tres cartas, la tipografía spooky sacada de la pagina dafont, una viñeta que tendrá dentro la instrucción para la interacción y una ilustración pequeña de una estrella que servirá para el cursor.**
```javascript
//Cargar ilustracion de la carta morada con blanca
cartauno = loadImage("./cartablanca.png");
  
//Cargar ilustracion de la carta morada con fucsia
cartados = loadImage("./cartafucsia.png");
  
//Cargar ilustracion de la carta morada con lila
cartatres = loadImage("./cartalila.png");

// Cargar la tipografía sacada de la pagina dafont, de uso gratuito, esto lo hice con la referencia de p5js https://p5js.org/es/reference/#/p5/loadFont
spookyFont = loadFont('spooky.otf');

//Cargar imagen de titulo
blanco = loadImage('./titulo.png');

//Cargar ilustracion para el cursor
star = loadImage('./estrella.png');
```

**Posicioné las ilustraciones en el proyecto, las tres cartas en la parte inferior del canvas, la viñeta para las instrucciones en la parte superior y la estrella blanca para que siga el cursor. Además pusé el texto que estará dentro de la viñeta, especificando sus características.**
```javascript
// Poner la ilustración de la carta morada con blanca hacia la izquierda
image(cartauno, 50, 480, 95, 122);

// Poner la ilustración de la carta morada con fucsia al medio
image(cartados, 145, 470, 65, 115);

// Poner la ilustración de la carta morada con lila hacia la derecha
image(cartatres, 210, 480, 100, 122);

//Poner la viñeta blanca para el título en la parte superior
image(blanco,-40, -20, 440, 720 );

//Poner la ilustración de la estrella blanca para que siga el movimiento del mouse, le puse -30 para que quedara exactamente bajo el cursor
image(star, mouseX-30, mouseY-30, 71, 69);

//Aquí puse el titulo del proyecto que indica como funciona la animación, puse el código en RGB, la tipografía, el tamaño, alineación y el texto que aparecerá en el canvas, para esto use la referencia de un video de youtube https://www.youtube.com/watch?v=Vz-bEwmvzSw
fill(12, 57, 35); 
textFont(spookyFont); 
textSize(19); 
textAlign(CENTER, TOP); 
text("elige una carta y descubre tu destino", 172, 58);
```
![Captura de Pantalla 2024-06-22 a la(s) 15 21 01](https://github.com/MacaParrao/dis9034-2024-1/assets/163044952/5dc72f43-4056-4c5b-afc3-161bb8c8b287)

**Después empecé a trabajar en la interacción donde al hacer click en una de las tres cartas, aparezca un texto o mensaje sobre la bola de cristal. Para esto use varias referencias para mostrar el texto y la duración de tiempo que sea visible donde lo ajuste a 10 segundos. Primero declaré las variables.**

https://editor.p5js.org/EliLevy/sketches/Fw8dzqRIh 
https://editor.p5js.org/amcc/sketches/WQbTQWFyL//www.youtube.com/watch?v=Ei6AGGRsT_E 
http://learn.digitalharbor.org/courses/creative-programming/lessons/using-timers-in-p5-js/ 
https://editor.p5js.org/sobers/sketches/3xphNU7l_

```javascript
//Declarar una variable para la canción, esto lo hice con la referencia de un ejemplo de https://p5js.org/es/examples/sound-load-and-play-sound.html
let song;

//Declarar la variable que indica si se muestra o no el texto, esto lo hice con la referencia de unos ejercicios en p5js https://editor.p5js.org/EliLevy/sketches/Fw8dzqRIh
let showText = false;

//Declarar la variable que tiene el texto a mostrar, estos textos los puse más abajo en el código, use una referencia de un ejercicio en p5js https://editor.p5js.org/amcc/sketches/WQbTQWFyL
let textToShow = "";

//Declarar la variable para el tiempo que quiero que aparezcan los textos visibles en la pantalla, para esto use como referencia algunos tutoriales https://www.youtube.com/watch?v=Ei6AGGRsT_E http://learn.digitalharbor.org/courses/creative-programming/lessons/using-timers-in-p5-js/ https://editor.p5js.org/sobers/sketches/3xphNU7l_
let textTimer; 
let startTime;
```
**Para hacer que los textos que aparezcan en la pantalla duren solo 10 segundos y despues desaparezcan use nuevamente las condicionales if, si se pasa de los 10 segundos o 10000 milisegundos el texto desaparece. Para esto use una referencia de un ejercicio de p5js.** https://editor.p5js.org/chjno/sketches/Syhfo5Bq-

```javascript
// Aquí cada texto aparece durante 10 segundos, osea 10000 milisegundos  visible y despues desaparece, para esto usé una referencia de un ejercicio en p5js https://editor.p5js.org/chjno/sketches/Syhfo5Bq-
if (millis() - startTime >= 10000) {
showText = false;
}
```
**Después use la función mousePressed con la condicional if, para que al hacer click sobre una de las tres cartas aparezca el texto dentro de la bola de cristal y que este texto dure visible por 10 segundos. Para esto tuve que poner las coordenadas de cada imagen para que al hacer click dentro de estas coordenadas apareciera el texto. Hice lo mismo con cada carta y el texto que le corresponde lo puse entre comillas. Use esta referencia** https://stackoverflow.com/questions/70059507/trying-to-make-an-image-trigger-a-function-on-click-p5-js

```javascript
if (mouseX > 50 && mouseX < 50 + 95 && mouseY > 480 && mouseY < 480 + 122) {
//Al hacer click sobre la primer carta se muestra el texto nuevos desafios 
mostrarTexto("nuevos desafios", 10);
}
  
//Al hacer click sobre la segunda carta se muestra el texto fortuna en camino
if (mouseX > 145 && mouseX < 145 + 65 && mouseY > 470 && mouseY < 470 + 115) {
mostrarTexto("fortuna en camino", 10); 
}
  
//Al hacer click sobre la tercera carta se muestra el texto cambios inminentes
if (mouseX > 210 && mouseX < 210 + 100 && mouseY > 480 && mouseY < 480 + 122) {
mostrarTexto("cambios inminentes", 10);
}
}
```
**Finalmente puse como función mostrarTextos, donde va el texto en si y el tiempo que durará visible, de esta forma funciona al hacer click en las imagenes de las cartas, junto con esto puse lo que declaré en las variables al principio del código como el texto a mostrar y el inicio del tiempo de duración. Use de referencia** https://editor.p5js.org/EliLevy/sketches/Fw8dzqRIh

```javascript
// Función para mostrar los textos con la tipografía spooky.otf durante el tiempo especificado en 10 segundos cuando se hace click sobre las cartas. Use referencias de https://editor.p5js.org/EliLevy/sketches/Fw8dzqRIh
function mostrarTexto(texto, segundos) {
    textToShow = texto;
    showText = true; 
    startTime = millis(); 
}
```
![Captura de Pantalla 2024-06-22 a la(s) 18 38 25](https://github.com/MacaParrao/dis9034-2024-1/assets/163044952/d0b07ea5-7787-4648-91bf-601de84f4a24)




