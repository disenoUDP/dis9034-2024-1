# clase-11

#### ES IMPORTANTE HACER LAS COSAS QUE NOS IMPORTAN :)

## REFERENTES

- tatsuya takhashi: diseñador energía e industrial, para trabajar con música, trabajos con valor, las cosas tienen que valer la pena.   https://korg.berlin/  

- 100R: bitácora de cosas cotidianas.  https://100r.co/site/home.html

- compudanzas: crean bailes en servicios de sistema operativo que no depende o es más grande que un computador.  https://compudanzas.net/

## __JSON__ y __CSV__

- algo muy complejo y raro, j=javascript, o:object, n=notation; maneras de guardar datos, leerlas, guardarlas y compartirlas.

- json.lint: biblioteca de json, parámetros, valores del parámetro.

```
{
"name": "John",
"age": 30,
"car": null
}
```
↪ podemos validar el json con json.lint

(ojo con las cosas que diseñamos, no excluir gente)

todo es muy importante.

## API

- como preguntarle a la wikipedia "cual es la página mas popular de hoy" (hacer una wikiudp)
- wikimedia: software libre y abierto.
- hacer un artículo de wikipedia, es de alto valor, producible para el exámen.

## API de wikipedia

- api catalog: catálogo de wikimedia api.
- feed api: alimentar de información.
- preguntas y obtienes respuestas de las páginas mas leídas.
- dir: ltr es dirección de lectura de izquierda a derecha.
- automatización de datos.

el echivo que editamos hoy es de json en p5.js

console log escribe algo en el computador.

### subir archivo JSON a P5.JS y cargarlo

```
//en este caso usamos el let pero puede ser definido por nosotros
let datos

function preload() {
  datos = loadJSON("./27.json", cargado);
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}

function cargado() {
  //le pedimos a la consola que nos muestre la informacion dentro de la variable datos
  //agregar .tfa en este caso nos lleva a una parte especifica de la informacion dentro del json
  console.log(datos.image.file_page);
}
```

https://editor.p5js.org/SofiaEct/sketches/l1xUPCHeZ
