# clase-15
## Examen
Cambie la propuesta ahora va a ser una serie de 3 prints de mis tres etapas de la vida.

## Proyecto
Las imágenes con las que voy a trabajar son collages 

![composicion Infacia](https://github.com/Mosswhosmoss/dis9034-2024-1/assets/168484044/8bc2bff7-2595-4241-a3d0-06a1c8556586)
![composicion Adolescencia](https://github.com/Mosswhosmoss/dis9034-2024-1/assets/168484044/701ac556-0a94-4182-9ca4-ab460d995c10)
![composicion Actualidad](https://github.com/Mosswhosmoss/dis9034-2024-1/assets/168484044/50caa6c6-1078-4372-91a1-add2ea0a98ec)

- Luego de hacer las imágenes y cargar la biblioteca empiezo a trabajar con las variables del proyecto.
```javascript
//Creo las variables de los colores, imágenes y gráficos que usaré
let infancia
let adolescencia
let pink;
let blue;
let yellow;
let img1;
let img2;
let img3;
```
- En setup empiezo a utilizar createGraphics para generar 2 canvas distintos para las dos primeras prints.
```javascript
 //Creo el gráfico infancia
  infancia = createGraphics(500, 700);
  //Creo el fondo del gráfico
  infancia.background(220);

  //Creo el gráfico Adolescencia
  adolescencia = createGraphics(500, 700);
  //Creo el fondo
  adolescencia.background(220);
```
Y más adelante comienzo a trabajar con pixelDensity, que funciona para bajar el rendimiento de píxeles en computadores que por defecto la alta densidad de píxeles tiene que calzar con la densidad del monitor, para trabajar con la biblioteca de Riso.

Creo las capas con los colores que usaré de la biblioteca.
```javascript
//Se crea una capa rosada
  pink = new Riso("fluorescentorange");
  //Se crea una capa azul
  blue = new Riso("seablue");
  //Se crea una capa amarilla
  purple = new Riso("grape");
```
- En draw empiezo a trabajar con la interacción con las teclas, poner en función createGraphics para halftoneImage llegar a la intensidad que requería estuve experimentando, aumentándole o restándole. 
```javascript
  // Al mantener presionada la tecla 'a', dibuja la pantalla 'infancia'
  if (keyIsPressed == true && key == "a") {
    image(infancia, 0, 0);

    clearRiso();

    //La imagen se pasa a semitono lineal con una frecuencia de 3, un ángulo de 45° y una intensidad de 140
    let halftoned = halftoneImage(img1, "line", 3, 90, 140);

    //Se genera la imagen en semitono
    pink.image(halftoned, 0, 0);

    drawRiso();
  }

  // Al mantener presionada la tecla 's', dibuja la pantalla 'adolescencia'
  else if (keyIsPressed == true && key == "s") {
    image(adolescencia, 0, 0);

    clearRiso();

    //La imagen se pasa a semitono lineal con una frecuencia de 3, un ángulo de 45° y una intensidad de 140
    let halftoned = halftoneImage(img2, "line", 3, 90, 140);

    //Se genera la imagen en semitono
    blue.image(halftoned, 0, 0);

    drawRiso();
  }
// Al mantener presionada la tecla 'd', dibuja la pantalla 'actualidad'
  else if (keyIsPressed == true && key == "d") {
    background(220);

    clearRiso();

    //La imagen se pasa a semitono lineal con una frecuencia de 3, un ángulo de 45° y una intensidad de 140, 
    let halftoned = halftoneImage(img3, "line", 3, 90, 140);

    //Se genera la imagen en semitono
    purple.image(halftoned, 0, 0);

    drawRiso();
```
Donde clearRiso() significa que borra completamente todas las capas riso, drawRiso() significa que se genera la imagen en risografía y halftoneImage pone el efecto de semitono de una risografía en la imagen.

Y ya como el último punto se hizo la página de "carga" o introducción al proyecto.
```javascript
 // Si no se presiona ninguna tecla, dibuja la pantalla de explicación.
  else {
    // Cuadros de texto y sus respectivas modificaciones, en donde se explica la página.
    background(0, 131, 138);
    fill("white");
    textStyle(NORMAL);
    textFont("Helvetica");
    textSize(20);
    text(
      "En la siguiente página encontrarán una representación gráfica de distintas etapas de mi vida.",
      10,
      50,
      350
    );
    // Cuadros de texto y sus respectivas modificaciones, en donde se indican las instrucciones de las teclas y sus respectivas pantallas.
    fill("white");
    textFont("Helvetica");
    textSize(20);
    text("a = Infancia", 10, 600);
    text("s = Adolescencia", 10, 625);
    text("d = Actualidad", 10, 650);
  }
```
## Visualización del proyecto

https://github.com/Mosswhosmoss/dis9034-2024-1/assets/168484044/fdddc56d-70d7-4349-8647-e36ff1f1cb4b


## p5.js
[Editor](https://editor.p5js.org/Mosswhosmoss/sketches/OBxD-Xc5I)

## Referencias
- La presentación formal del proyecto: [solemne I juan.parschi](https://editor.p5js.org/juan.pareschi_g/sketches/B-cufMCbO) aun que ahora no voy a usar createGraphics
- createGraphics: [function](https://www.youtube.com/watch?v=TaluaAD9MKA) 
- Riso: [Biblioteca](https://antiboredom.github.io/p5.riso/#get)
        [halftone](https://github.com/antiboredom/p5.riso/tree/master/examples/Halftone)

