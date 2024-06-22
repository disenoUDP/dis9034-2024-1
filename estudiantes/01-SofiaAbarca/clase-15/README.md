# clase-15
Para este examen quiero hacer algo que pueda usar para el Taller de Branding. En el taller estamos trabajando en una identidad visual basada en el concepto de "prueba y error", por lo que estoy pensando en crear algunas texturas usando los módulos que diseñamos y que pueda usar en las gráficas más adelante. 

Primero traje los módulos al sketch de p5, para darle a cada uno un movimiento distinto en el lienzo y que distorsionen una imagen de la faad.
Precargué las imágenes con la función preload

``` javascript

function preload() {
  
  faad = loadImage("faad.jpg");
  grafico = loadImage("./grafico.jpg");
  industrial = loadImage("./industrial.jpg");
  moda = loadImage("./moda.jpg");
}
```
Cada modulo tiene el nombre de una mención de diseño, para no confundirlos. Después hice el lienzo y puse de fondo la imagen de la faad, del mismo tamaño que el lienzo.
``` javascript
function setup() {
createCanvas(600, 600);
background(faad, 0, 0, width, height);
  
}
```
Encima de la foto de la faad quería que se fuera repitiendo el modulo llamado "gráfico". Pensé en usar lo que aprendimos sobre la aleatoriedad y el random() que tiene P5. Así que visité la referencia https://p5js.org/es/reference/#/p5/random y traté de replicar el tercer ejemplo, pero en vez de usar un punto, usar la imagen del módulo "gráfico". 

Para esto primero creé dos variables de posción x e y al principio del sketch.
``` javascript
let x = 200
let y = 200
```
Después dentro de draw() usé estas variables de posición junto con random(), para cambiar la posición de la foto. En este caso puse que la foto se dibujara entre -30 y 30 pixeles de distancia desde la posición original cada vez.
``` javascript
function draw() {
x += random(-30, 30);
y += random(-30, 30);
image(grafico, x, y, 50, 50);
```
Con esto logré que el modulo "gráfico" se dibujara de forma random encima de la foto de la faad, pero era muy rápido. Así que entré en la referencia de frameRate https://p5js.org/es/reference/#/p5/frameRate. Para hacerlo más lento tenía que darle un frame rate menor, así que lo dejé en 10 fotogramas por segundo.
``` javascript
function setup() {
frameRate(10)
}
```

Tras esto pensé que quedaría bien ponerle algún filtro a la imagen para que se mezclara mejor con el fondo, y aplicar lo que vimos con los filtros https://p5js.org/es/reference/#/p5.Image/filter.  Los probé y ninguno me convenció, pero investigando las referencias encontré blendMode() https://p5js.org/es/reference/#/p5/blendMode y me gustaron más los efectos. Decidí ponerle a la imagen el modo exclusión.
``` javascript
blendMode(EXCLUSION)
```
Investigué en esta página que era lo que hacía exactamente los modos de fusión. //www.dzoom.org.es/modos-de-fusion-photoshop/ , ya que los conocía de photshop pero nunca lo había investigado más en profundidad.

Ahora quise hacer lo mismo con el módulo llamado "industrial" pero dandole un modo de fusión distinto. Hice otras dos variables de posición al principio del sketch y repetí el random() para darle aleatoriedad.
``` javascript
let a = 400
let b = 400
```
``` javascript
a += random(-30, 30);
  b += random(-30, 30);
      image(industrial, a, b, 80, 80);
```
Hasta aquí todo funcionaba bien, pero cuando le quise dar el modo de fusión blendMode(SOFT_LIGHT) no se aplicaba. Al parecer el primer modo de fusión afectaba a todo el sketch. Tuve que investigar si era posible tener 







 
