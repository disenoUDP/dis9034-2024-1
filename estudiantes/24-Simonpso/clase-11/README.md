# clase-11
---
### Programa JSON
conociendo el programa JSON
https://jsonlint.com/#google_vignette
```javascript
{
  "name": "Jhon",
  "age": 30,
  "car": null,
}
```
---
### Wikimedia
exploramos por wikipedia y descubrimos wikimedia, ingresamos en wikimedia.api portal, nos hicimos una cuenta encontramos en feed API el siguiente link https://api.wikimedia.org/feed/v1/wikipedia/en/featured/2024/05/27. lo guadadmos y asi lo subimos a p5 Editor 
```javascript
let datos;

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
  console.log(datos)
}
```
escribimos este codigo para asi ver la informacion que nos entrega los siguientes datos 
<img width="849" alt="Captura de pantalla 2024-05-27 a la(s) 17 02 30" src="https://github.com/Simonpso/dis9034-2024-1/assets/163044785/9016404f-e04f-463b-b00c-b12172951ac9">

---
### Pruebas de JSON
si vamos a fuction y a console.log y añadiendo la informacion que nos muestra la consola dentro de los parentesis se nos mostrara los datos que tiene el link que subimos a p5 
```javascript
function cargado() {
  console.log(datos)
}
```
si agregamos mostread al codigo nos muestra la fecha
```javascript
console.log(datos.mostread)
```
<img width="849" alt="Captura de pantalla 2024-05-27 a la(s) 17 14 13" src="https://github.com/Simonpso/dis9034-2024-1/assets/163044785/9cff5834-b8fe-493b-9451-2b59b79d0faf">

