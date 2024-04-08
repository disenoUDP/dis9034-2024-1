# clase-05

![newsletter](https://github.com/matbutom/dis9034-2024-1/assets/163034603/b24475f1-85d7-41e8-bdec-ac1d031cbbfc)

---

### Descripción e ideas para el desarrollo 

rafita es un personaje ficitio creado por mí y Daniela, siempre intentamos ocuparlo en todo lo que hacemos, programarlo no fue la excepción. Para el proyecto pensé en que podría tener distintas variables, colores random, posicionamento random, etc, me quedé con el color random y decidí agregarle la función de que pudiera hacerlo cada vez que se hace click. Existen otros elementos complementarios que tienen una función parecida a rafita.

---

### Proceso del código 

##### - definimos a la variable "rafita.jpg" como `null` 
##### - para luego crear un canvas de 500x500 pixeles
##### - le damos el valor a `rafita` como "rafita.jpg"
##### - cambiamos al *frame rate*

<img width="932" alt="Captura de pantalla 2024-04-08 a la(s) 14 48 54" src="https://github.com/matbutom/dis9034-2024-1/assets/163034603/b5a6826e-75c4-4dd8-b775-91df80904d8c">

##### - usamos la function de `draw` para cambiar el fondo del canvas
##### - insertar imagen con variable random de X e Y.
##### - editamos su tamaño para que quede proporcional con 

a esta altura del código logramos hacer que rafita pueda moverse con respecto al cursor

```javascript
displayWidth/8, displayHeight/4.5);
```

<img width="937" alt="Captura de pantalla 2024-04-08 a la(s) 14 50 02" src="https://github.com/matbutom/dis9034-2024-1/assets/163034603/1cf69f87-5c28-46c3-8358-ce594ad91232">

##### - se cambia el color de la imagen con `function mousePressed()` cuando se hace un *click*

hemos hecho que cada vez que hacemos click derecho, el color de rafita pueda cambiar de manera random con `tint(random(255), random(255), random(255));`

<img width="936" alt="Captura de pantalla 2024-04-08 a la(s) 14 52 03" src="https://github.com/matbutom/dis9034-2024-1/assets/163034603/ae39af83-6eeb-4992-9042-1dcba5e49b59">

##### - insertamos la imagen `asterisco.png` con variable de movimiento random  

luego de insertar la nueva ilustración del asterisco, puede apreciarse su movimiento de manera aleatoria con respecto al canvas

```javascript
image(asterisco, random(width-100), random(height-100), 1080/5, 1080/5);
```

##### - y cambiamos su tamaño de forma proporcional 

<img width="934" alt="Captura de pantalla 2024-04-08 a la(s) 15 09 44" src="https://github.com/matbutom/dis9034-2024-1/assets/163034603/1d8cb5bc-11be-4ead-bb95-c414141542bb">

---

#### LO LOGRAMOS!

##### rafita logra moverse con el cursor y cada vez que hacemos click cambia su color!

<img width="502" alt="Captura de pantalla 2024-04-08 a la(s) 15 50 55" src="https://github.com/matbutom/dis9034-2024-1/assets/163034603/fef9bdf6-24cb-46da-81a1-1a57f6b0691d"> <img width="500" alt="Captura de pantalla 2024-04-08 a la(s) 15 52 13" src="https://github.com/matbutom/dis9034-2024-1/assets/163034603/72dfe642-2bbe-42c2-b89a-45a2446021a8">
*screenshots del proyecto en p5.js*


---

### Referencias del proyecto
Función de mousePressed: <https://p5js.org/reference/#/p5.Element/mousePressed>

Uso de random: <https://p5js.org/reference/#/p5/random>

frameRate: <https://p5js.org/reference/#/p5/frameRate>

rafita.studio: www.instagram.com/rafita.studio

---

*Link del proyecto:* <https://editor.p5js.org/matbutom/sketches/9lfTFERtn>
