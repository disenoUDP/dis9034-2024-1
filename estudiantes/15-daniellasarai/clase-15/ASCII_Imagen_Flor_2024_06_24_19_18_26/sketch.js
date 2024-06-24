// Imagen ASCII con caracter F
//
// Sketch basado en el video tutorial de The Coding Train  https://youtu.be/55iwMYv8tGI?si=JPM8JiAxjQ4Ufuz7


const density = 'Ñ@#W$9876543210?!abc;:+=-,._ ';

// Agregar función para cargar la imagen

let flor;

function preload() {
  flor = loadImage ("flor48.jpg");
}

// Crear canvas

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  //image(flor, 0, 0, width, height);
  
  let w = width / flor.width;
  let h = height / flor.height;
  
// Hacer mapeo de pixel por pixel para que cada uno dentro del rgb tenga un caracter asignado
// Llamar a loadPixels(); 

  flor.loadPixels();
  for (let i = 0; i < flor.width; i++) {
    for (let j = 0; j < flor.height; j++) {
      const pixelIndex = (i + j * flor.width) * 4;
      const r = flor.pixels[pixelIndex + 0];
      const g = flor.pixels[pixelIndex + 1];
      const b = flor.pixels[pixelIndex + 2];   
      
      // Hacer un promedio del brillo basandose en los valores rgb
      
      const avg = (r + g + b) / 3;
      
      noStroke();
      //fill(255);
      fill(avg);
      //square(i * w, j * h, w);
      
      //const len = density.length;
      //const charIndex = floor(map(avg,0,255,len,0));
      
      
      
      textSize(w);
      textAlign(CENTER, CENTER);
      text('F', i * w + w * 0.5, j * h + h * 0.5);
      //text(density.charAt(charIndex), i * w + w * 0.5, j * h + h * 0.5);
      
    }
  }
  
  
}