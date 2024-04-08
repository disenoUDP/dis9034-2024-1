//El proyecto va a partir del ejercicio de la clase Nº3 e intentar lograr crear una imagen interactiva que cambie de colores según la posición del mouse.
//Voy a definir fotito como algo que existe para la imagen que pondré más adelante.
let fotito;

//Voy a subir una imagen de mi escritorio como un elemento del proyecto.Para eso hay que ir al menú de la barra izquierda llamado "Sketch Files" y apretar el botón "+", luego "upload files" y ahí arrastrar la imagen de mi escritorio.
//Para incluir la imagen que subí al proyecto hay que usar como referencia el código en: https://p5js.org/es/reference/#/p5/loadImage
function preload() {
  fotito = loadImage("saber.jpg");
}

function setup() {
  //Voy a crear un lienzo con un tamaño proporcional al de mi imagen, esas medidas van a ser de 800x800.
  createCanvas(800, 800);
}

function draw() {
  //Voy a definir el punto de origen y el tamaño de mi imagen según las coordenadas del lienzo, fuente: https://p5js.org/es/reference/#/p5/imageMode
  //La notación del código funciona de la siguiente manera: (nombre imagen, ubicación del inicio de la imag en eje x, ubicación de inicio de la imag en eje y, ancho imagen, alto imagen)
  image(fotito, 0, 0, 800, 800);

  //Observación: antes había puesto windowWidth, windowHeight , pero al hacer eso el tamaño de la imágen cambia con el tamañano del lienzo.

  //Voy a establecer condicionales según el movimiento del mouse para que la imagen cambie de color según su posición en el lienzo.Fuente de uso básico de condicionales: 1) https://p5js.org/es/reference/#/p5/if-else
  //2) https://javautodidacta.es/if-else-en-java/
  //Para que cambie de color la imagen voy a ponerle filtros, fuente de código de filtros: https://p5js.org/es/reference/#/p5/filter

  //Primero se define la condicional:
  let a = (mouseX, mouseY);
  if (a > 100 && a < 200) {
    //Después se define el filtro:
    filter(POSTERIZE, 2);
  } else if (a > 200 && a < 300) {
    filter(POSTERIZE, 2);
    filter(THRESHOLD);
  } else if (a > 300 && a < 400) {
    filter(INVERT);
  } else if (a > 500 && a < 600) {
    filter(POSTERIZE, 2);
  } else if (a > 700 && a < 800) {
    filter(INVERT);
  }

  //Voy a generar partículas de colores según mi imagen al mantener presionado el click.
  //Código principal de eferencia para lograr el efecto de puntillismo: https://editor.p5js.org/p5/sketches/Image:_Pointillism

  //Primero hay que escribir el código para establecer una condición al mantener el click apretado. Referencia para generar una acción al mantener apretado click: https://p5js.org/es/reference/#/p5/mouseIsPressed
  if (mouseIsPressed === true) {
    //Definir "smallPoint", "mediumPoint" y "largePoint" como variables que voy a utilizar para las partículas.
    let smallPoint, mediumPoint, largePoint;
    smallPoint = 30;
    mediumPoint = 60;
    largePoint = 80;
    //Se usa este código para cargar los datos de píxeles de "fotito". Referencia: https://p5js.org/es/reference/#/p5.Image/loadPixels
    fotito.loadPixels();

    //Establecer "pointillize" como un "map" que escala de un rango a otro rango utilizando las variables antes mencionadas. Esta parte del código es lo que permite ejecutar el comportamiento aleatorio de las particulas. Revisar el ejemplo 2 de la fuente: https://p5js.org/es/reference/#/p5/map
    let pointillize = map(mouseX, 0, width, smallPoint, largePoint);
    let x = floor(random(fotito.width));
    let y = floor(random(fotito.height));
    let pix = fotito.get(x, y);
    //Aquí se establece la forma de la partícula, que es una elipse.
    ellipse(x, y, pointillize, pointillize);
  }
}
