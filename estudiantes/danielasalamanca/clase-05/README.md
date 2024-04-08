# clase-05

## solemne 1

###### 01/04 

hola, mi idea para esta solemne es hacer que la imágen (rafita.png) vaya avanzando y salte al presionar la barra espaciadora 

1. declaramos las variables: g, jump, ground y size

```javascript
let g = 1; // gravedad
let jump = 18; // salto
let ground = 200; // linea del piso
let size = 250; // tamaño de la imagen
```

2. también declaramos las variables: x, y, vy que definiremos más adelante

```javascript
let x, y, vy;
let rafita;
```

3. cargamos la imagen `rafita.png`

```javascript
function preload () {
rafita=loadImage("rafita.png");
}
```
4. creamos el canvas de (650, 550) pixeles y definimos que las variables **x** e **y** correspondan al ancho y altura del canvas

```javascript
function setup() {
  createCanvas(650, 550);
  x = width;
  y = height;
}
```

5. cambiamos el color del fondo `background(255,220,255);`

6. definimos la variable **gy** que definirá la altura de la linea que utilizaremos de "piso"

```javascript
let gy = height - ground;
```

7. creamos la linea que simularará el piso

```javascript
line(0, gy, width, gy);
```

8. definimos la posición de la imagen

```javascript
image(rafita, x - 120, y - 47, size, size);
  y += vy;
```

9. definimos la velocidad a la que avanzará la imagen y asignamos la condicional que defina hasta donde llegará la imagen y desde donde volverá a comenzar

```javascript
x = x + 2; // velocidad a la que avanza hacia adelante
  if (x > 700) { // hacer que se repita al llegar al final
    x = - 100; // donde comienza nuevamente la imagen
```

10. definimos las condicionales

```javascript
if(y < height - ground - size / 2){ 
    vy += g;
  }
  else{
    vy = 0;
    y = height - ground - size / 2;
  }
```

11. definimos la función que hará que la imagen "salte" solo al oprimir la barra espaciadora (keyCode === 32)

```javascript
function keyPressed(){
  if(keyCode === 32){
    vy = -jump;     
```






***

#### referentes
- mi referente para lograr el salto fue sacado de <https://editor.p5js.org/tnishida/sketches/Wv_-BBBaA>

- mi referente para hacer que la imagen se mueva de izquiera a derecha constantemente fue sacado de  <https://p5js.org/es/reference/#/p5/noLoop>
  
```javascript
x = x + 0.1;
  if (x > width) {
    x = 0;
```

***
###### avances 01/04

<https://editor.p5js.org/danielasalamanca/sketches/W2YPVwljA>

###### avances 04/04 hice una actualización de mi entrega 

<https://editor.p5js.org/danielasalamanca/sketches/S6BW7zyzu>

###### entrega 08/04

<https://editor.p5js.org/danielasalamanca/sketches/pSo5Uor-k>

```javascript
```
