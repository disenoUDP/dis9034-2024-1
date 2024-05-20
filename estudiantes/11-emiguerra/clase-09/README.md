# clase-09

- API: Interfaz de Programación de Aplicaciones

## solemne 2 parte 1

(// quiero usar una imagen que sea 3D para intentar imitar rhino

```javascript
function setup() {
createCanvas(1000, 1000, WEBGL);
normalMaterial();
describe(
"Camera orbits around a box when mouse is hold-clicked & then moved."
);
camera(0, 0, 50 _ sqrt(3), 0, 0, 0, 0, 1, 0);
perspective(PI / 3, 1, 5 _ sqrt(3), 500 \* sqrt(3));
}
function draw() {
background(200);
orbitControl(1, 1, 1, { freeRotation: true });
// https://p5js.org/reference/#/p5/orbitControl

rotateY(0.6);
box(50, 50);
}

// intentaré agregar otra figura 3d en el codigo
function draw() {
background(200);
// permite movimiento de una figura 3D a partir del mouse o el trackpad
orbitControl(1, 1, 1, { freeRotation: true });
// uso esta linea para intentar crear un bucle en figuras repetidas
normalMaterial();
for (let i = 0; i <= 12; i++) {
for (let j = 0; j <= 12; j++) {
let a = (j / 12) _ PI;
let b = (i / 12) _ PI;
//translate(p5);
// me permite agregar traslación de las figuras
//https://p5js.org/es/reference/#/p5/translate
// quiero agregar una figura inscrita al cubo

      sin(2 * a) * RADIUS * sin(b), - (cos(b) * RADIUS) / 2, - cos(2 * a) * RADIUS * sin(b);
      translate(p5.Vector.fromAngle(millis() / 1000, 40));
     // sirve para alterar el tamaño de las figuras
      if (j % 2 === 0) {
        cone(60, 60);
      } else {
        box(30, 30, 30);
      })
    }

}
}
```

- <https://processing.org/tutorials/video>
- <img width="2048" alt="Captura de pantalla 2024-05-13 a la(s) 16 47 51" src="https://github.com/emiguerra/dis9034-2024-1/assets/128399363/9312020f-cb10-4af5-9bfd-aee4b7f38a60">
- <https://medium.com/tensorflow/real-time-human-pose-estimation-in-the-browser-with-tensorflow-js-7dd0bc881cd5?>
- <img width="2048" alt="Captura de pantalla 2024-05-13 a la(s) 16 47 51" src="https://github.com/emiguerra/dis9034-2024-1/assets/128399363/d72e9128-a34b-4136-bed4-dc96b0214aca">
