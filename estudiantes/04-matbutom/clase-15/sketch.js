// EXAMEN DE PROGRAMACIÓN CREATIVA MULTIMEDIA
// por Mateo Arce
// programado en p5.js v.1.9.4

// declaramos las variales de las fuentes:
// Kanit-Medium, BDSupper Regular y Bold
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
let texto;
let grosorTexto;
let img;

// definimos a img como el logo del proyecto
function preload() {
  img = loadImage("type.png");
}

// cargamos las 3 fuentes que ocuparemos
// y creamos el canvas de 400x700 px
// Kanit medium para los parámetros
// BD Supper Regular y Bold para la tipografía base y editable
// y creamos el canvas de 400x700 px
function setup() {
  font = loadFont("assets/Kanit-Medium.ttf");
  font2 = loadFont("assets/BDSupperRegular.otf");
  font3 = loadFont("assets/BDSupperBold.otf");
  createCanvas(400, 700);

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

function draw() {
  background(255, 206, 220);

  // dibujamos la imagen del logo
  // y cambiamos su tamaño
  image(img, 120, 590);
  img.resize(164, 61.28);
  
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
