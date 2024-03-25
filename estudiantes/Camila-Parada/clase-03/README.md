# ⋆₊˚⊹♡ Clase 03 Apuntes ♡⊹˚₊⋆
Lunes 25/03/2024

## Observaciones

Torpedo para programar "md": https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet 

### Algunos codigos de Javascript

#### ¿Que es "if"?
Una condición a cumplir. 
#### ¿Que es "else"?
Una variante opcional a cumplir, suele estar debajo de un if.
#### ¿Que es "if else"?
Una variante con una condición. Si una de las variantes se cumple el resto se descarta y no funciona.

#### Ejemplo base

*Recuperado de:* https://www.w3schools.com/js/js_if_else.asp

if (condition1) {
  //  block of code to be executed if condition1 is true
} else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} else {
  //  block of code to be executed if the condition1 is false and condition2 is false
}

### ¿Que es un bit?, ¿Cómo se traduce en color?
Análisis del color Cyan: #00FFFF (0,255,255)

*Calculadora y enciclopedia:* https://www.wolframalpha.com/

Se usan "24 bits" (pow{2,24}) para poder definir los colores que el ojo humano permite ver mediante una pantalla.
Dado que el ojo humano percibe el color rojo, azul y verde (la base del rgb), se ideo que se dividieran en 3 canales de 8 bits cada uno.
En este caso cada canal (color que se percibe que el ojo) tiene 255 posibilidades (2 elevado a 8). En el computador traduce el valor 255 en FF que es el máximo monto (full color).

*Web curiosa de Bill Murray:* https://web.archive.org/web/20221119042133/https://www.fillmurray.com/

Tras esta revisión se trabajó en https://editor.p5js.org/

#### Muestra personal en: https://editor.p5js.org/Camila-Parada/sketches/1YSVugMfu

Al trabajar con una imagen "JPG" de Bill Murray, se aprendió a subir el archivo y mostrarlo con una variante "if".
La base para usar "image()" se encuentra en : https://p5js.org/reference/#/p5/image
Una vez subida la imagen (preload y loadImage) se exploró como adaptarla y modificarla usando el canvas.
Tras eso se comenzó a explorar con los filtros "https://p5js.org/reference/#/p5/filter".

## Break
 A la vuelta (llegada algo tardía) se estaba revisando las funciones "loadPixels": https://p5js.org/reference/#/p5/loadPixels
 Tras eso buscamos modificar la imagen usando configuraciones de pixeles: https://p5js.org/reference/#/p5/pixels

 El ejercicio resultante se encuentra acá: https://editor.p5js.org/Camila-Parada/sketches/sUGxk7q0q
 
 ## *La idea es realizar proyectos parametricos y no estáticos °˖✧◝(⁰▿⁰)◜✧˖°*
 
