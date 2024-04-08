# clase-04
Buscar ejemplo, referencias para trabajo solemne 
efecto transparencia 
Consiste en mover el puntero hacia la izquierda y hacia la derecha a traves de la imagen para cambiar su posiciòn .
superponiendo la misma imagen cargada sobre otra, para asi modificar el valor alfa de la imagen con la funcion de tint()

¿QUÈ ES TINT?
define el valor del relleno para mostrar una imagen, puede ser teñida con colores o transparente, para hacerse transparente incluir un valor alpha.

<img width="1280" alt="Captura de pantalla 2024-04-01 a la(s) 15 10 30" src="https://github.com/isabellagutierrezm/dis9034-2024-1/assets/163045412/a090928a-3fa8-4b3b-b28b-be639bfa552b">
 nombre imagen= gus.jpeg 
 
 PARA RECORDAR COMO SUBIR UNA IMAGEN  
let fotito = null;

function setup() {
  createCanvas(400, 400);

  fotito = loadImage("./bill.jpg");
}

function draw() {
  background(220);
  image(fotito, 0, 0);

<img width="1653" alt="Captura de pantalla 2024-04-01 a la(s) 16 19 34" src="https://github.com/isabellagutierrezm/dis9034-2024-1/assets/163045412/c7920498-480b-4555-b37d-fde64c1af384">
NO OLVIDAR
(image) tiene que tener el MISMO nombre que let... image
EJEMPLO
let fotito = null
image(fotito, 0, 0);
IDEA: IMAGEN MOVIDA CON SONIDO
<img width="801" alt="Captura de pantalla 2024-04-01 a la(s) 17 28 58" src="https://github.com/isabellagutierrezm/dis9034-2024-1/assets/163045412/91cf1d02-2801-4c23-b830-b9cd068e06cc">
P5 EDITOR 
https://editor.p5js.org/isabellagutierrezm/sketches/Lihmc_PET
