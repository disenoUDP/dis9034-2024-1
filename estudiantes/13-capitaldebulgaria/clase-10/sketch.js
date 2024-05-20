//selector de colores básicos que indican en dónde está posicionado el cursor cuando es presionado, indica el color y la valorización en rgb, está basado en "cv-examples: Color Detection de kylemcdonald"

//que aparezca el video
let video;

function setup() {
  //creación del canvas y su tamaño
  createCanvas(640, 480);
  //que aparezca el video en el canvas
  video = createCapture(VIDEO);
  //tamaño del video
  video.size(640, 480);
  //esconde el video para usar solo el espacio del canvas
  video.hide(); 
}

function draw() {
  //permite que la cámara pueda estar en modo espejo
  translate(width, 0);
  //invierte la cámara en un eje horizontal
  scale(-1, 1); 
  //que aparezca la imagen
  image(video, 0, 0);
}
//si hago click toma el pixel exacto donde está el mouse
function mousePressed() {
  video.loadPixels();
  let x = mouseX;
  let y = mouseY;

  //que la posición del mouse funcione como "x" e "y" en la cámara invertida/espejo
  let invertedX = width - x;

  if (invertedX >= 0 && invertedX < video.width && y >= 0 && y < video.height) {
    let index = (invertedX + y * video.width) * 4;
    //que tome los colores en rgb
    let r = video.pixels[index];
    let g = video.pixels[index + 1];
    let b = video.pixels[index + 2];

    //que aparezca en la consola que color estoy seleccionando al hacer click, con las cordenadas y los valores de rgb
    let colorName = getColorName(r, g, b);
    console.log(`Color en (${x}, ${y}): ${colorName} (R: ${r}, G: ${g}, B: ${b})`);
  }
}

function getColorName(r, g, b) {
  //umbral de qué tan especíco es en la detección de color
  let umbral = 100;
  //agrega colores que se dan mezclando valores de rgb
  let sum = r + g + b;
  
    //que tome rojo
   if (r > 255 - umbral && g < umbral && b < umbral) {
    return 'Rojo';
     
    //que tome verde
  } else if (r < umbral && g > 255 - umbral && b < umbral) {
    return 'Verde';
    
    //que tome azul
  } else if (r < umbral && g < umbral && b > 255 - umbral) {
    return 'Azul';
    
    //que tome amarillo
  } else if (r > 255 - umbral && g > 255 - umbral && b < umbral) {
    return 'Amarillo';
    
    //que tome cian
  } else if (r < umbral && g > 255 - umbral && b > 255 - umbral) {
    return 'Cian';
    
    //que tome magenta
  } else if (r > 255 - umbral && g < umbral && b > 255 - umbral) {
    return 'Magenta';
    
    //que tome naranjo
  } else if (r > 200 && g > 100 && g < 200 && b < 100) {
    return 'Naranjo';
    
    //que tome beige
  } else if (r > 200 && g > 180 && b > 150 && r < 240 && g < 230 && b < 200) {
    return 'Beige';
    
    //que tome café
  } else if (r > 100 && r < 150 && g < 100 && b < 50) {
    return 'Café';
    
    //que tome morado
  } else if (r > 150 && r < 200 && g < 100 && b > 150 && b < 200) {
    return 'Morado';
    
    //que tome rosado
  } else if (r > 200 && g < 150 && b > 150 && b < 200) {
    return 'Rosado';
    
    //que tome negro
  } else if (sum < 150) {
    return 'Negro';
    
    //que tome blanco
  } else if (sum > 400) {
    return 'Blanco';
    
    //que diga "Desconocido :(" cuando no sea un color de los antes mencionados
  } else {
    return 'Desconocido :(';
  }
  // fin!!
} 