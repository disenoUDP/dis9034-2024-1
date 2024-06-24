# Clase-15

EXAMEN

Link examen https://editor.p5js.org/ValeeBravo/sketches/tI2Hapzul 

Explicación de mi examen


Mi proyecto consiste en desarrollar un puzzle interactivo en bucle, con una ilustración inspirada en gatos creada por mí. La idea surgió mientras interactuaba con mi sobrina y observé su interés por los rompecabezas. Dado que también disfruta usando el ordenador y mostrando interés en mi trabajo en él, decidí crear este rompecabezas interactivo en bucle que requiere coordinación de movimientos y el uso de las teclas del teclado. La imagen está diseñada digitalmente, con una composición inspirada en el estilo de Tsuguharu Foujita, un artista conocido por dedicar sus ilustraciones a sus gatos. 
Instrucciones para jugar: En un principio hay un loop de 6 imágenes y al apretar la tecla de espacio el loop para y se pueden acomodar las imagenes como un puzzle. Tiene varias posibilidades de crear una imagen.

Referentes
•Mi inspiración para hacer las imágenes en loop y que vayan cambiando de posición fue Kevin Workman dónde usa ilustraciones en forma de patrón para crear distintas figuras. En el siguiente link sw puede ver su trabajo: https://editor.p5js.org/KevinWorkman/sketches/7PvZ_jOrO

• Para el puzzle  
https://p5js.org/es/reference/#/p5/push 
https://editor.p5js.org/justin.e.stillions/sketches/Xq5kXRMhy


•Para usar el click y teclado  
https://p5js.org/es/reference/#/p5/mouseClicked

•Para usar el término Push
https://p5js.org/es/reference/#/p5/push 

Variables para que funcione las variables a continuación. 
```javascript
//variable para cargar imágenes.
let images = [];
//Tamaño de las imágenes en 200 pixeles cada una. 
const squareSize = 200;
let paused = false;

// Offset es para el arrastre de la imagen.
let offsetX = 0; 
let offsetY = 0;
// Variable para saber si se está arrastrando una imagen
let dragging = false; // Variable para saber si se está arrastrando una imagen
``` 


Carga de la ilustración repartida en 6 imágenes png.
```javascript
//Carga de 6 imágenes en png llamadas "cat-01.png", "cat-02.png", etc.  La imagen principal mide 600x400 píxeles y está cortada en 6 partes iguales. Push es una variante para que se usa para mover la imagen.
//Referencia para images.push: https://editor.p5js.org/KevinWorkman/sketches/7PvZ_jOrO 
function preload() {
  images.push(loadImage("cat-01.png"));
  images.push(loadImage("cat-02.png"));
  images.push(loadImage("cat-03.png"));
  images.push(loadImage("cat-04.png")); 
  images.push(loadImage("cat-05.png"));
  images.push(loadImage("cat-06.png"));  
}
```

Tamaño de canvas.
```javascript
//Tamaño de canvas de 600x400 píxeles
function setup() {
  createCanvas(600, 400);
  //Establece el modo de imagen para que se creen desde su centro.
  imageMode(CENTER);
  ```
Ordena las imagenes en el canvas.
```javascript
 //Ordena cada imagen en el tamalo squareSize.
//Asigna posiciones aleatorias (x e y) a cada imagen dentro del lienzo.

  for (const img of images) {
    img.resize(squareSize, squareSize);
    // Añadir propiedades x e y a cada imagen.
    img.x = random(width); 
    img.y = random(height);
  }
  //Rápidez del movimiento de la imagen.
  frameRate(10);
}
```
Color de fondo del canvas
```javascript
function draw() {
  //Color de fondo negro.
  background(20);
  
  
 // Si no está pausado, dibuja imágenes rotadas aleatoriamente.
  //Si está pausado,  dibuja imágenes estáticas en sus posiciones actuales.
  // Referecia de if paused: https://www.geeksforgeeks.org/p5-js-ispaused-function/

  if (!paused) {
    for (let img of images) {
      // Dibujar imágenes en posiciones aleatorias si no está pausado
      const x = img.x;
      const y = img.y;
      
      translate(x, y);
      
      const r = (PI / 2) * random([0, 1, 2, 3]);
      rotate(r);
       image(random(images), 0, 0);
      
      resetMatrix(); 
    }
  } else {
    // Dibujar imágenes en sus posiciones actuales si está pausado
    for (let img of images) {
      image(img, img.x, img.y);
    }
  }
}
```
Funcion para presionar el mouse, para que logre mover las imágenes.
```javascript
//Referencia de mouse pressed: https://p5js.org/es/reference/#/p5/mousePressed. //https://www.geeksforgeeks.org/p5-js-mousepressed-function/
function mousePressed() {
  if (paused) {
    // Verifica si se hizo click sobre alguna imagen en ancho y alto.
    for (let img of images) {
      let imgWidth = img.width;
      let imgHeight = img.height;
    
      //Verifica si se hizo click en una imagen en eje x y eje y. 
      let imgX = img.x - imgWidth / 2;
      let imgY = img.y - imgHeight / 2;
      
      if (mouseX > imgX && mouseX < imgX + imgWidth &&
          mouseY > imgY && mouseY < imgY + imgHeight) {
        
        // Calcula el  mouse respecto al centro de la imagen
        offsetX = mouseX - img.x;
        offsetY = mouseY - img.y;
        
        // Comienza a arrastrar la imagen. Referencia para arrastrar una imagen      https://editor.p5js.org/coloringchaos/sketches/SJkE4CHtz 
        dragging = true;  
        break;
      }
    }
  }
}
```


```javascript
//Cada vez que se presiona el mouse se mueve la imagen en eje x y en eje y. 
function mouseDragged() {
  if (dragging) {
    // Actualiza la imagen mientras se arrastran. 
    let img = images.find(img => {
      
      //Let Imagen en ancho y alto
      let imgWidth = img.width;
      let imgHeight = img.height;
      
      //Se mueve la imagen en eje x y en eje y
      let imgX = img.x - imgWidth / 2;
      let imgY = img.y - imgHeight / 2;
```
Let es para que cuando se apreta el click en una pantalla.
```javascript
   //Se mueve la imagen en eje x y en eje y
      let imgX = img.x - imgWidth / 2;
      let imgY = img.y - imgHeight / 2;
      
      //Deja mover la imagenes con el click del mouse.
      return (mouseX > imgX && mouseX < imgX + imgWidth &&
              mouseY > imgY && mouseY < imgY + imgHeight);
    });
    
    if (img) {
      img.x = mouseX - offsetX;
      img.y = mouseY - offsetY;
    }
  }
}     
```
Esta función permite que pueda soltar la imagen con el click 
```javascript
// Esta función deja arrastrar la imagen al soltar el click del mouse.
function mouseReleased() {
  dragging = false;  
}

// Barra espaciadora para que pause o avance el loop.
function keyPressed() {
  if (keyCode === 32) { 
    // Cambia el estado pausa al presionar la tecla espaciadora.
    paused = !paused;  
  } 
}
```


