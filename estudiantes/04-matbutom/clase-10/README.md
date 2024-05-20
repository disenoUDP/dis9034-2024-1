# clase-10

---

continuación y finalización de solemne 2 - 20.05.2024

---

![halftoned](https://github.com/matbutom/dis9034-2024-1/assets/163034603/eff09ea2-78f6-4aa4-8042-0f3fd0040bbd)


---

### descripción del proyecto ฅ՞•ﻌ•՞ฅ

con este rafita proyect podrás conocer a la clota, la imagen que se muestra en el editor, ella es la mascota de [@rafita.studio](https://www.instagram.com/rafita.studio/?igsh=MXFnbjI3Yzg2Nm10bw%3D%3D), podrás cambiarle el color de la foto con un efecto muy contemporáneo de halftone con sólo presionar el botón! que se encuentra en la parte inferior de la foto. Vuélvete loco viendo cómo la clota cambia de colorsito. DISFRUTA!

---

### creación del botón

para crear el botón usamos `'createButton()`, en este caso lo programamos de esta forma:

```javascript
//declaramos el botón con el que vamos a cambiar el color como button
let button;

// creamos un botón con el nombre de "presiona para cambiar el color"
// definimos la posición al centro y abajo de la imagen
function setup() {
  button = createButton("presiona para cambiar el color");
  button.position(100, 540);

//definimos cuando el botón sea presionado, cambie el color entre 'pink' y 'blue'
  button.mousePressed(randomColor);
}
```

referencia buttonPressed: <https://p5js.org/reference/#/p5/createButton>

---

### hacer que la imagen cambie de color

utilicé los colores y el efecto `halftoned` que entrega la biblioteca de p5.riso. A continuación cómo se programó:

```javascript
//declaramos el botón con el que vamos a cambiar el color como button
//y capaActual para poder definir el color de forma aleatoria
let button;
let capaActual;

function setup() {
// definir los colores 'pink' y 'blue'
// con los 2 colores que entrega la biblioteca p5.riso son "FLUORESCENTPINK" y "SKYBLUE"
//https://antiboredom.github.io/p5.riso/#halftoneImage
  pink = new Riso("FLUORESCENTPINK");
  blue = new Riso("SKYBLUE");
  
// dejamos que el primer color sea 'pink'
  capaActual = pink;

//definimos cuando el botón sea presionado, cambie el color entre 'pink' y 'blue'
  button.mousePressed(randomColor);
// definir el valor del botón a color random
function randomColor() {
  //let c = random([pink, blue]);

// si definimos c como random, sabemos que random nos da valores entre 0 y 1
// con esto podemos definir que cuando el valor sea menor o mayor a, el color cambia a 'pink' o 'blue'
  let c = random();

// si c es menor que 0,5 se cambia el color a 'pink'
  if (c < 0.5) {
    capaActual = pink;

// todos los demás valores cambian el color a 'blue'
  } else {
    capaActual = blue;
  }
}

// dibujamos el fondo de color 
// para luego limpiarlo con 'clearRiso'
function draw() {
  background(255);
  clearRiso();
  
// definimos el tipo de halftoned que queremos y su tamaño
// para poder cambiar el color definimos los parámetros de 'capaActual.image' 
// como los que nos entrega p5.riso, que son halftonedImage 
  let halftoned = halftoneImage(img, "line", 3, 45, 90);
  capaActual.image(halftoned, 0, 0);

// finalmente dibujamos el efecto de riso y ya podemos cambiar entre los dos colores con el botón
  drawRiso();
}
```

en resumen, en este parte del código programamos lo siguiente:

1. definimos `capaActual` para poder usarlo para cambiar de color la imagen más adelante
2. definimos los colores que vamos a utilizar ("FLUORESCENTPINK" y "SKYBLUE")
3. definimos la función de `mousePressed`, que es `randomColor` 
4. definimos los valores que existirán en `randomColor` (pink, blue)
5. definimos cuándo el color cambiaría a pink y a blue, utilizando if y else, con los valores que nos entrega `let c = random();` (valores entre 0 y 1)

---

### ajustes finales

en las últimas líneas de código definimos los valores del efecto `halftoned` y cómo actúa en la imagen. Definimos `capaActual` con los efectos de p5.riso para poder cambiarlo de color

```javascript

// dibujamos el fondo de color 
// para luego limpiarlo con 'clearRiso'
function draw() {
  background(255);
  clearRiso();
  
// definimos el tipo de halftoned que queremos y su tamaño
// para poder cambiar el color definimos los parámetros de 'capaActual.image' 
// como los que nos entrega p5.riso, que son halftonedImage 
  let halftoned = halftoneImage(img, "line", 3, 45, 90);
  capaActual.image(halftoned, 0, 0);

// finalmente dibujamos el efecto de riso y ya podemos cambiar entre los dos colores con el botón
  drawRiso();
}
```

### link del proyecto: <https://editor.p5js.org/matbutom/sketches/bQ8mW54_V>


referencias p5.riso: 
1. halftone image <https://antiboredom.github.io/p5.riso/#halftoneImage>
2. install <https://antiboredom.github.io/p5.riso/#get>
3. new riso <https://antiboredom.github.io/p5.riso/#riso>
   

