# clase-02

lunes 18 de marzo 2024

partiremos abriendo un navegador web, Chrome, Firefox, Opera (NO Safari) y luego buscaremos la consola donde programaremos.

más adelante usaremos nuestra cuenta de GitHub para crear dibujos interactivos en p5.js en la web <editor.p5js.org>

## variables

una variable es un espacio en la memoria del computador que se utiliza para almacenar un valor.

en JavaScript hasta hace algunos años se usaba la palabra `var`, pero hoy en día, y en este curso, usaremos la nueva versión con `let`.

crear una variable se llama "declarar una variable", y para eso usaremos la palabra clave `let`, luego un espacio, y luego un nombre de la variable, que tiene que ser una palabra de corrido, sin espacios, y luego un punto y coma.

el nombre de la variable TIENE que empezar con una letra, o un signo underscore "\_",o un signo "$", y no puede ser un nombre reservado como if, const.

buenos modales: escribimos en notación camello (camelCase), donde empezamos escribiendo con minúscula, y luego cada palabra nueva empieza con mayúscula, paraQueLaPalabraTengaComoJorobasDeUnCamello.

```javascript
let x;
```

una vez creada esta variable, podemos asignarle valores con la sintaxis: nombre de la variable

```javascript
x = 10;
```

podemos siempre preguntar al computador cuál es el valor de la variable.

## arreglos (Array)

podemos crear muchas variables, pero rápidamente nos va a interesar tener muchas variables relacionadas, por ejemplo en una base de datos, las coordenadas de un punto.

podemos tener varias variables

```javascript
let x = 0;
let y = 1;
let z = -5;
```

pero también podemos crear un arreglo, para así tener solamente un nombre para esta colección de valores.

```javascript
let pos = [0, 1, -5];
```

en JavaScript un arreglo permite almacenar colecciones de objetos.

en otros lenguajes, los arreglos necesitan que cada elemento sea del mismo tipo, pero JavaScript es más mutante, podemos mezclar números enteros, float, String, chars, etc.

## bucles

para leer o actualizar valores, vamos a usar iteradores.

```javascript
for (let i == 0; i < 10; i++) {
    console.log(i)
}
```

## entrega de hoy

subir 2 cosas a la carpeta de tus apuntes en la carpeta estudiantes:

1. apuntes sobre la clase en el archivo README.md, incluyendo el enlace a tu código en el editor de p5.js
2. descargar los archivos que conforman tu código en p5.js, y subirlos también a tus apuntes de la clase-02.

## bibliografía

- <https://www.w3schools.com/js/js_arrays.asp>
- <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array>
- <https://www.youtube.com/watch?v=B-ycSR3ntik>
