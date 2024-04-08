# clase-05
SOLEMNE 1

Código creado en base a referencias de p5.js reference y el libro Making Interactive Graphics in JavaScript and Processing. Maker Media, Inc.

Primero se carga una imagen en p5.js la cual es intervenida con distintos filtros y efectos.

Con el código:
~~~
function preload() {
  fotito = loadImage("./hanako.jpg");
~~~

Luego de eso tenemos un bloque del código __let__, el cual está ocupado para definir tamaño, velocidad y dirección de traslado de la figura que le escogió (los dígitos pueden variar al gusto) __arc__ en este caso nos sirve para definir mas detalladamente la dirección de las caras de nuestra figura y el código __random__ define donde se ubicarà nuestra figura, lo cual es aleatorio.
~~~
let radius = 10;
let x = 100;
let speed = 10;
let direction = 1;
~~~
Para __function draw__:
~~~
  if ((x > width-radius) || (x < radius)) { 
    
//Voltear dirección
  direction = -direction;
}
  if (direction == 1) {
  //Cara derecha
  arc(x, (random(width), random(height)), radius, radius, 0.52, 5.76); 
} else {
  //Cara izquierda
  arc(x, (random(width), random(height)), radius, radius, 3.67, 8.9); 
}
 }
~~~

Luego en __function draw__ nos encontramos con una condicional __if__, la cual en este caso nos indica que si se mantiene presionado él el click derecho del mouse, la figura cambia de forma. Y en caso de que sea apretada se cambiara a la figura que hayamos puesto en la variable __else__.
~~~
 if (mouseIsPressed === true) {
} else {
}
~~~

Nos volvemos a encontrar con una variable __let__ junto con la condición __if__, donde se nos permite generan interacción con el mouse en nuestro código, que en este caso sería si el mouse está a más de 700 px la imagen cambiará de filtro.
~~~
  let a = (mouseX, mouseY);
  if (a > 700)
~~~

Los filtros agregados a la imagen son los siguientes, y se encuentran en __function draw__.
~~~
  filter(INVERT);
  filter(POSTERIZE,3);
~~

Para cerrar este documento textual, quiero mencionar el gusto que tuve con este trabajo, definitivamente estare mas atenta al codigo de ahora en adelante.
