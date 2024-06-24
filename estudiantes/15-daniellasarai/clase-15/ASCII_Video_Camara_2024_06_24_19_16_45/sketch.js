// Video Cámara ASCII
//
// Sketch basado en el video tutorial de The Coding Train  https://youtu.be/55iwMYv8tGI?si=JPM8JiAxjQ4Ufuz7

//Densidad a través de caracteres

const density = "Ñ@#W$9876543210?!abc;:+=-,._  ";

let video;
let asciiDiv;

// Agregar función para utilizar video cámara

function setup() {
  asciiDiv = createDiv();
  noCanvas();
  video = createCapture(VIDEO);
  video.size(64, 48);
}

function draw() {
 
// Hacer mapeo de pixel por pixel para que cada uno dentro del rgb tenga un caracter asignado
// Llamar a loadPixels(); 

  video.loadPixels();
  let asciiImage = "";
  for (let j = 0; j < video.height; j++) {
    for (let i = 0; i < video.width; i++) {
      const pixelIndex = (i + j * video.width) * 4;
      const r = video.pixels[pixelIndex + 0];
      const g = video.pixels[pixelIndex + 1];
      const b = video.pixels[pixelIndex + 2];   
      
      // Hacer un promedio del brillo basandose en los valores rgb
      
      const avg = (r + g + b) / 3;
      
// Mapear el valor de brillo para pasarlo a los caracteres dentro del rango
// Agregar la función floor para que los números no sean intermedios decimales, para que sean enteros
      
      const len = density.length;
      const charIndex = floor(map(avg, 0, 255, 0, len));
      
      const c = density.charAt(charIndex);
      if (c == " ") asciiImage += "&nbsp;";
      else asciiImage += c;
      
      //textSize(w);
      //textAlign(CENTER, CENTER);
      //text(density.charAt(charIndex), i * w + w * 0.5, j * h + h * 0.5);
      
    }
    asciiImage += '<br/>';
  }
  asciiDiv.html(asciiImage);
}