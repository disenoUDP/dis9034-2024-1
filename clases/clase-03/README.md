# clase-03

lunes 25 de marzo 2024

condicionales, funciones y pixeles

## condicionales

para las condicionales usamos un if(condicion){}.

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

un pixel es la unidad mínima de color en una imagen digital.

lo más simple posible que podemos expresarla es con 0 y 1, apagado y prendido.

como reconocemos 10 millones de colores, y como nuestros sensores de colores son tres, se tiende a usar el modelo RGB.

el modelo RGB cuenta con 3 canales de color, rojo, verde y azul.

se usan 8 bits por canal de color, lo que implica que cada canal puede tener valores entre 0 y 255.

si lo escribimos en hexadecimal, entre 00 y FF.

con pixeles podemos usar el modelo RGB aditivo, también está el modelo de impresión CMYK.

## sintaxis de funciones en JavaSCript

```javascript
function () {

}
```

parámetros de una función

## bibliografía

- <https://www.w3schools.com/js/js_if_else.asp>
- <https://www.w3schools.com/js/js_switch.asp>
- <https://www.w3schools.com/js/js_functions.asp>
