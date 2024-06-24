//Examen Programación/ Macarena Parrao / 24-06-2024

//Declarar una variable para la canción, esto lo hice con la referencia de un ejemplo de https://p5js.org/es/examples/sound-load-and-play-sound.html
let song;

//Declarar la variable que indica si se muestra o no el texto, esto lo hice con la referencia de unos ejercicios en p5js https://editor.p5js.org/EliLevy/sketches/Fw8dzqRIh
let showText = false;

//Declarar la variable que tiene el texto a mostrar, estos textos los puse más abajo en el código, use una referencia de un ejercicio en p5js https://editor.p5js.org/amcc/sketches/WQbTQWFyL
let textToShow = "";

//Declarar la variable para el tiempo que quiero que aparezcan los textos visibles en la pantalla, para esto use como referencia algunos tutoriales https://www.youtube.com/watch?v=Ei6AGGRsT_E http://learn.digitalharbor.org/courses/creative-programming/lessons/using-timers-in-p5-js/ https://editor.p5js.org/sobers/sketches/3xphNU7l_
let textTimer; 
let startTime; 

function preload() {
// Cargar ilustracion del fondo
decoracion = loadImage("./fondo.png");
  
// Cargar ilustracion de la clarividente
clarividente = loadImage("./personaje.png");
  
//Cargar ilustracion del resplandor verde 
verde = loadImage("./brillo.png");
  
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

// Cargar la canción sin copyright, sadada de pixabay, esto tambien lo hice con la referencia de p5js https://p5js.org/es/examples/sound-load-and-play-sound.html
song = loadSound('encantada.mp3');
  
// Declarar la variable para los colores y para el color con que la animación va a empezar, esto lo hice reutilizando lo aprendido en la solemne pasada. Use estas referencias 
//https://p5js.org/es/reference/#/p5/random
//https://editor.p5js.org/hosken/sketches/I_4VSTotf
let colors = [];
let currentColor;
}

function setup() {
//Creación del canvas con las medidas de 360 por 640
createCanvas(360, 640); 
// La velocidad con que el color va a cambiar será de 2 cuadros por segundo, los colores serán diferentes tonalidades de morado y rosado
frameRate(2);
  
//Puse los colores que quiero con sus códigos RGB dentro de los corchetes
colors = [
//Código RGB para el color lila 
color(214, 189, 251),
//Código RGB para el color rosa claro
color(255, 169, 249), 
//Código RGB para el color morado
color(188, 146, 255), 
//Código RGB para el color fucsia
color(252, 141, 255),
];

// Seleccionar un color random para empezar
currentColor = random(colors);
  
// Iniciar la reproducción de la música al ingresar al proyecto
song.play();
}

function draw() {
// Poner un fondo plano del tamaño del canvas, con los colores que cambian de forma random 
currentColor = random(colors);
fill(currentColor);
rectMode(CENTER);
rect(width / 2, height / 2, 360, 640);

// Poner la ilustración de fondo en el medio del lienzo 
image(decoracion, 0, 0, 360, 640);

// Poner la ilustración de la clarividente en el centro de la composición
image(clarividente, 0, 0, 360, 640);

// Poner la ilustración del brillo de la bola de cristal con la condicional if, al aparecer un texto en la bola de cristal la luz verde aparece alrededor de la bola de cristal
if (showText) {
image(verde, 0, 0, 360, 640);
}

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


//Aqui volví a ocupar las condicionales if, al mostrar un texto, este tiene que tener ciertas caracteristicas, como el código de color morado, la tipografía, el tamaño, la alineación y la ubicación en el lienzo  
if (showText) {
fill(94, 54, 255); 
textFont(spookyFont);
textSize(30);
textAlign(CENTER, CENTER);
text(textToShow, 180,360);

// Aquí cada texto aparece durante 10 segundos, osea 10000 milisegundos  visible y despues desaparece, para esto usé una referencia de un ejercicio en p5js https://editor.p5js.org/chjno/sketches/Syhfo5Bq-
if (millis() - startTime >= 10000) {
showText = false;
}
  }
}

function mousePressed() {
// Ocupé la condicionales if, para que al hacer click sobre una imagen en especifico , en este caso en las tres cartas, aparece un texto dentro de la bola de cristal y que cada texto durara visible 10 segundos en pantalla, tuve que poner las coordenadas de las imagenes. Para esto usé las referencias de https://stackoverflow.com/questions/70059507/trying-to-make-an-image-trigger-a-function-on-click-p5-js              https://www.youtube.com/watch?v=_n7o-_Z1ne0
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

// Función para mostrar los textos con la tipografía spooky.otf durante el tiempo especificado en 10 segundos cuando se hace click sobre las cartas. Use referencias de https://editor.p5js.org/EliLevy/sketches/Fw8dzqRIh
function mostrarTexto(texto, segundos) {
    textToShow = texto;
    showText = true; 
    startTime = millis(); 
}
