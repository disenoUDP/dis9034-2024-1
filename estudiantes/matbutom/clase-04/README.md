# Proceso y desarrollo Solemne 

---

### Descripción e ideas para el desarrollo 

rafita es un personaje ficitio creado por mí y Daniela, siempre intentamos ocuparlo en todo lo que hacemos, programarlo no fue la excepción. Para el proyecto pensé en que podría tener distintas variables, colores random, posicionamento random, etc, me quedé con el color random y decidí agregarle la función de que pudiera hacerlo cada vez que se hace click. Existen otros elementos complementarios que tienen una función parecida a rafita.

![rafitaaa](https://github.com/matbutom/dis9034-2024-1/assets/163034603/3cb7a7d3-6e02-4b16-b166-7534f5415774)


---

### Proceso del código 

##### - definimos a la variable "rafita.jpg" como `null` 
##### - para luego crear un canvas de 500x500 pixeles
##### - le damos el valor a `rafita` como "rafita.jpg"
##### - cambiamos al *frame rate*

<img width="932" alt="Captura de pantalla 2024-04-08 a la(s) 14 48 54" src="https://github.com/matbutom/dis9034-2024-1/assets/163034603/b5a6826e-75c4-4dd8-b775-91df80904d8c">

##### - usamos la function de `draw` para cambiar el fondo del canvas
##### - insertar imagen con variable random de X e Y.
##### - editamos su tamaño para que quede proporcional con `displayWidth/8, displayHeight/4.5);`
  
<img width="937" alt="Captura de pantalla 2024-04-08 a la(s) 14 50 02" src="https://github.com/matbutom/dis9034-2024-1/assets/163034603/1cf69f87-5c28-46c3-8358-ce594ad91232">

##### - se cambia el color de la imagen con `function mousePressed()` cuando se hace un *click*

<img width="936" alt="Captura de pantalla 2024-04-08 a la(s) 14 52 03" src="https://github.com/matbutom/dis9034-2024-1/assets/163034603/ae39af83-6eeb-4992-9042-1dcba5e49b59">

##### - insertamos la imagen `asterisco.png` con variable de movimiento random  `image(asterisco, random(width-100), random(height-100), 1080/5, 1080/5);`
##### - y cambiamos su tamaño de forma proporcional 

<img width="934" alt="Captura de pantalla 2024-04-08 a la(s) 15 09 44" src="https://github.com/matbutom/dis9034-2024-1/assets/163034603/1d8cb5bc-11be-4ead-bb95-c414141542bb">

---

### Referencias del proyecto
Función de mousePressed: <https://p5js.org/reference/#/p5.Element/mousePressed>

Uso de random: <https://p5js.org/reference/#/p5/random>

frameRate: <https://p5js.org/reference/#/p5/frameRate>

rafita.studio: <www.instagram.com/rafita.studio>

---

*Link del proyecto:* <https://editor.p5js.org/matbutom/sketches/9lfTFERtn>
