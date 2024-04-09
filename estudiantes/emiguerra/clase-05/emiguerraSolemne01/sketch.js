// quiero usar una imagen que sea 3D para intentar imitar rhino
function setup() {
  createCanvas(1000, 1000, WEBGL);
  normalMaterial();
  describe(
    "Camera orbits around a box when mouse is hold-clicked & then moved."
  );
  camera(0, 0, 50 * sqrt(3), 0, 0, 0, 0, 1, 0);
  perspective(PI / 3, 1, 5 * sqrt(3), 500 * sqrt(3));
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
      let a = (j / 12) * PI;
      let b = (i / 12) * PI;
      //translate(p5);
      // me permite agregar traslación de las figuras
      //https://p5js.org/es/reference/#/p5/translate
      // quiero agregar una figura inscrita al cubo
      translate(p5.Vector.fromAngle(millis() / 1000, 40));
     // sirve para alterar el tamaño de las figuras
      if (j % 2 === 0) {
        cone(60, 60);
      } else {
        box(30, 30, 30);
      }
    }
  }
}
