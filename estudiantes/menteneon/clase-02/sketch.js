//Primer modelo hecho en 3d MUY impotante 

//draw a spinning teapot
let teapot;

function preload() {
  // Load model with normalise parameter set to true
  teapot = loadModel('https://raw.githubusercontent.com/kevinroast/phoria.js/master/teapot.obj', true); 
  //Se tuvo que cambiar la manera de subir el objeto, hay que colocar directamente el link que fue sacado de github "https://github.com/kevinroast/phoria.js/blob/master/teapot.obj"
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL); 
  //tamaño de canvas (lo que esta entre parentesis) en este caso se dejo en el maximo de ambos lados 
  
  //WebGL es una especificación estándar que define una API implementada en JavaScript para la renderización de gráficos en 3D dentro de cualquier navegador web. No precisa del uso de plug-ins​ adicionales en cualquier plataforma que soporte OpenGL 2.0 u OpenGL ES 2.0. (sacado de wikipedia, creo que es el tamaño de la tetera)
  
  describe('Vertically rotating 3-d teapot with red, green and blue gradient.');
}

function draw() {
  background(0, 0, 0); // color de fondo 
  scale(0.4); // Scaled to make model fit into canvas
  rotateX(frameCount * 0.1); // que tan rapido va a girar 
  rotateY(frameCount * 0.1);
  normalMaterial(); // For effect
  model(teapot);
}