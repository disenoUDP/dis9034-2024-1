# clase-11

enlaces de hoy

- <https://korg.berlin/>
- <https://100r.co/>
- <https://compudanzas.net/>
- <https://feriados.cl/>
- <https://en.wikipedia.org/wiki/JSON>
- <https://en.wikipedia.org/wiki/Comma-separated_values>
- <https://www.w3schools.com/js/js_json_intro.asp>
- <https://jsonlint.com/>
- <https://www.mediawiki.org/wiki/API:Main_page>
- <https://api.wikimedia.org/wiki/Feed_API>
- <https://api.wikimedia.org/feed/v1/wikipedia/en/featured/2024/05/27>
- <https://p5js.org/reference/#/p5/loadJSON>

ejemplo en JavaScript que usamos hoy

```javascript
let datos;

function preload() {
  datos = loadJSON("./archivo.json", cargado);
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}

function cargado() {
  console.log(datos.image.file_page);
}
```
