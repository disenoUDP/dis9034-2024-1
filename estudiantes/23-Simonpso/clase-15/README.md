# clase-15

---

24.06.2024

---

El siguiente codigo utiliza la biblioteca p5.createloop.js encontrada en https://www.npmjs.com/package/p5.createloop?activeTab=readme el cual genera un bucle animado que produce un gift

En la pagina indica que es necesario un html para poder usarlo, asi que lo copie en el index de p5 editor.

```javascript
<script src="https://cdn.jsdelivr.net/npm/p5@1.2.0/lib/p5.js"></script>
<script src="https://unpkg.com/p5.createloop@0.3.1/dist/p5.createloop.js"></script>
```

---

Para empezar definimos las constantes dentro del programa

Semillas dentro del ruido:
```javascript
// La siguiente constante define semillas aleatorias para el ruido
const seedX = Math.random()
const seedY = Math.random()
```

Radio de los círculos:
```javascript
// Define los radios de los círculos generados por el ruido
const radX = 1
const radY = 4
```

Variable de las amplitudes de la animacion:
```javascript
// Variable para amplitudes
let ampX
let ampY
```

Configuracion del gif:
```javascript
// Esta constante define la configuracion del gif
const gif = {
    startLoop: 4,
    endLoop: 2,
    fileName: "noiseLoop4x.gif"
```

---
Seguimos estableciendo distintos parametros dentro del codigo como:

- El tamaño del lienzo.
- La configuracion del modo de color.
- La tasa de frames.
- El color del fondo.
- El contorno.
- Generar un bucle.
- Calcular las amplitudes de la animación.
```javascript
function setup() {
  // Creacion del lienzo midendo este 600 x 600
    createCanvas(600, 600)
  
  // La configuracion del modo del color 
    colorMode(HSB, 1, 1, 1)
  
  // Establecer la tasa de frames a 200
    frameRate(200)
  
  // Configurar el color del fondo a negro
    background(0)
    fill(100)
  
  // No hacer un contorno a las figuras
    noStroke()
  
  // Crear el bucle animado como e identificarlo como gif
    createLoop(9, { gif })
  
  // Calcula las amplitudes de la animación a lo largo del lienzo 
    ampX = width / 1
    ampY = height / 2
}
```

---

