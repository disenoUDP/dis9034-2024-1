# Examen - Primera Parte
**Explicación de idea y concepto: Quiero relacionar el examen con un área del diseño que me interesa como es la ilustración. La idea principal es hacer un oráculo interactivo, donde aparezca un personaje principal que será una clarividente, con una bola de cristal y tres cartas, además de ponerle un fondo que vaya cambiando y música que se relacione con la estética de la animación. La interacción estará dada al hacer click sobre una de las tres cartas y de acuerdo a eso, aparecerá un mensaje del oráculo en la bola de cristal de la clarividente.**

**Proyecto:** https://editor.p5js.org/MacaParrao/sketches/2D1Xb2-cZ

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








