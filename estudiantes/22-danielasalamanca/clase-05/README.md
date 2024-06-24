# clase-05

## solemne 1

### idea del proyecto
mi idea es hacer que rafita (la imagen), se mueva constantemente de izquierda a derecha y que "salte" al presionar la barra espaciadora
***
#### ¿quién es **rafita**?
rafita es un perro que nace en 2022 dentro de distintos dibujos que me encontraba haciendo por aburrimiento en clases. A mis amigos les gustó y lo bautizan como **rafita**.

en 2023 rafita trasciende ya que con mi pareja @matbutom decidimos crear @rafita.studio 

***
### proceso del código

1. declaramos las variables: g, jump, ground y size

```javascript
// gravedad
let g = 1;
// salto
let jump = 18;
// linea del piso
let ground = 200;
// tamaño de la imagen
let size = 250;
```

2. también declaramos las variables: x, y, vy y la variable rafita; que definiremos más adelante

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
  
  // crear un lienzo de 650 por 550 pixeles
  createCanvas(650, 550);

  // definir las variables x e y respecto al ancho y alto del lienzo
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
// velocidad a la que avanza hacia adelante
x = x + 2;
// hacer que se repita al llegar al final
if (x > 700) {
// donde comienza nuevamente la imagen
x = - 100;
```

10. definimos las condicionales que definan el salto

```javascript
if(y < height - ground - size / 2){ 
    vy += g;
  }
  else{
    vy = 0;
    y = height - ground - size / 2;
  }
```

11. definimos la función que hará que la imagen "salte" al oprimir la barra espaciadora (keyCode === 32)

```javascript
function keyPressed() {
  
  if (keyCode === 32) {
    vy =  -jump;
  }
}  
```

***

#### referentes
- mi referente para lograr el salto fue sacado de <https://editor.p5js.org/tnishida/sketches/Wv_-BBBaA> así supe cuales eran las variables y la condicionales que necesitaba para el código.

- mi referente para hacer que la imagen se mueva de izquierda a derecha constantemente fue sacado de  <https://p5js.org/es/reference/#/p5/noLoop> especificamente esta parte:
  
```javascript
x = x + 0.1;
  if (x > width) {
    x = 0;
```

- @rafita.studio <https://www.instagram.com/rafita.studio?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==>

### link de acceso

<https://editor.p5js.org/danielasalamanca/sketches/pSo5Uor-k>
