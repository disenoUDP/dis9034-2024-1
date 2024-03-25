# clase-03

lunes 25 de marzo 2024

condicionales, funciones y pixeles

## condicionales

para las condicionales usamos un `if(condicion){}`.

esto permite que si la condicion es verdadera, corre el código dentro de los murciélagos {}, y si no es verdadera, no la corre.

adicionalmente, podemos usar `else{}` a continuación del para correr otro bloque de código si la condición de if no es verdadera. `else{}` es opcional y no necesita una condición, ya que es la misma que la de if().

entre `if(condicion){}` y `else{}` podemos usar el constructo `else if(){}`,
que solamente corre si la condición del if que lo antecede no es verdadera, y si la condición de `else if(){}` es verdadera.

```js
if (llegue < 230pm) {
  console.log('llegué a la hora');
} else if (llegue == 230pm) {
    console.log('llegué justo a tiempo');
} else {
    console.log('llegué tarde');
}
```

hay más maneras de hacer condicionales en JavaScript, como el operador `switch`.

## pixeles

lo más simple posible que podemos expresar en un computadr es un bit, que tiene 2 valores posibles: 0 y 1, apagado y prendido, y otras metáforas.

a nivel de imagen digital, la partícula fundamental es un pixel.

la definición de pixel más popular es como un punto en una cuadrícula (x, y), con un color.

ese color se puede definir de muchas maneras, la más común y que usaremos en clase es la RGB, donde R = rojo, G = verde, B = azul, por su inicial en inglés.

este modelo de pixel tiene 3 canales de color, cada uno de 8 bits, lo que implica que cada canal puede tener valores entre 0 y 255, y si lo escribimos en hexadecimal entre 00 y FF.

esto no es casual, ocurre porque reconocemos 10 millones de colores, y con este modelo RGB, tenemos que cada pixel puede tener `2^24= 16,777,216` colores, lo que supera la capacidad de nuestro ojo de distinguir colores.

como estamos trabajando con colores en un pantalla y con luz, usamos el modelo aditivo RGB, pero hay otros métodos de definir color, por ejemplo tinta en papel, donde se usa el modelo sustractivo CMYK.

## imágenes externas en p5.js

para cargar una imagen externa en p5.js, usamos la función `loadImage()`, que recibe como parámetro la ubicación de la imagen, que puede ser local o remota.

tras usar `loadImage()` la función está cargada, pero todavía no aparece en la pantalla, para eso necesitamos usar la función `image()`, cuyos parámetros son la imagen y las coordenadas donde aparecerá, opcionalmente también podemos definir su tamaño.

## sintaxis de funciones en JavaScript

en JavaScript las funciones se definen con la palabra clave `function`.

las funciones tienen un nombre de fantasía, usaremos notación camello para nombrarlas.

si vemos paréntesis, es una función, por ejemplo `setup()`.

dentro de los paréntesis van los parámetros de la función, que son variables que se pueden usar dentro de la función.

```javascript
function nombreFuncion(param0, param1, etc) {}
// código de la función
```

## arreglo de pixeles en p5.js

con la función `loadPixels()` podemos cargar los pixeles de una imagen en un arreglo, que podemos modificar y luego mostrar en la pantalla con la función `updatePixels()`.

## ejercicio en clase

hacer un sketch en p5.js que utilice:

- condicionales según el tamaño de la ventana o el mouse
- funciones definidas por ti
- bucle para modificar la imagen

## bibliografía

- <https://www.w3schools.com/js/js_if_else.asp>
- <https://www.w3schools.com/js/js_switch.asp>
- <https://www.w3schools.com/js/js_functions.asp>
- <https://p5js.org/reference/#/p5/color>
- <https://p5js.org/reference/#/p5/loadImage>
- <https://p5js.org/reference/#/p5/loadPixels>
