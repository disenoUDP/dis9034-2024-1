# clase-14

---

## 17. jun. 2024

---

Mi examen consiste en generar un Noise loop, basado en los conocimientos que entrega la pagina de p5.createloop.

<https://www.npmjs.com/package/p5.createloop?activeTab=readme>

En la pagina indica que es necesario un html para poder usarlo, asi que lo copiop en el index de p5 editor.

```javascript
<script src="https://cdn.jsdelivr.net/npm/p5@1.2.0/lib/p5.js"></script>
<script src="https://unpkg.com/p5.createloop@0.3.1/dist/p5.createloop.js"></script>
```

---

usé de referencia Noise Loop 2x que de encuentra de ntro de la misma pagina, en ella encuentro, el codigo que me ayudara a realizaer el proyecto.

---
Empezamos estableciendo lo que sera constante dentro del codigo que permita generar el loop

```javascript
const seedX = Math.random()
const seedY = Math.random()
// la siguiente consante determinata con cuanta frecuencia el loop se movera en radio de x y en radio de y
const radX = 0.3
const radY = 1
let ampX
let ampY
```

---
Se establece la constante gif y desde donde empieza y termina este

```javascript
const gif = {
    startLoop: 4,
    endLoop: 2,
    fileName: "noiseLoop2x.gif"
}
```

---

```javascript
function setup() {
    createCanvas(600, 600)
    colorMode(HSB, 1, 1, 1)
    frameRate(50)
    background(0)
    fill(100)
    noStroke()
    createLoop(4, { gif })
    ampX = width / 1.3
    ampY = height / 2.3
```

---

```javascript
function draw() {
    // background(0)
    fill(animLoop.progress, 0.5, 1)
    translate(width / 2, height / 2)
    const x = animLoop.noise({ radius: radX, seed: seedX }) * ampX
    const y = animLoop.noise({ radius: radY, seed: seedY }) * ampY
    ellipse(x, y, 60, 60)
}
```

link: <https://editor.p5js.org/Simonpso/sketches/KGohbtrTe>
