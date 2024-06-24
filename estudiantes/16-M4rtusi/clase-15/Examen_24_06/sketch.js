// Examen Programación Creativa Multimedia
// por Martín Núñez @M4rtusi
// Proyecto realizado en p5.js: v1.4.0, Web Editor: v2.13.2

// Declaración de variables globales
// Variables para la canción y el analizador de amplitud
// Variable para la imagen de inicio
// Variable de estado de reproducción de la canción

let song, analyzer; 
let img; 
let play_state = false; 

// Definición de la paleta de colores

let palette = ['#00fef7', '#000c73', '#fafff6', '#4d5cb1', '#77f5ff', '#060537'];

// Precarga de la imagen y la canción antes de iniciar
// Cargar la imagen de fondo

function preload() {
  img = loadImage('portadainicio.jpeg'); 
  song = loadSound('4ngelNumb3rzzz Tropical Gatekeeping Remix.mp3'); 
}

// Ancho del lienzo
// Alto del lienzo
// Crear el lienzo
// Establecer imagen de fondo

function setup() {
  let w = 750;
  let h = 500; 
  createCanvas(w, h);
  fill(w, h);
  background(w, h); 
  
// Cambiar al modo RGB para los colores hexadecimales
  
  colorMode(RGB); 

  // Crear un nuevo analizador de amplitud
  // Asociar la canción al analizador de amplitud
  // Configurar análisis de FFT para la canción
  
  analyzer = new p5.Amplitude();
  analyzer.setInput(song);
  fft = new p5.FFT();
  fft.setInput(song);

  // Mostrar la imagen de fondo
  
  image(img, 0, 0);
  background(img);
}

// Función que se activa al hacer click en el lienzo
// Si la canción está reproduciéndose, detenerla al hacer click
// Restaurar imagen de fondo al hacer click
// Si la canción no está reproduciéndose, reproducirla

function mousePressed() {
  if (song.isPlaying()) {
    song.stop();
    background(img); 
  } else {
    song.play();
    background(img); 
  }
}

// Obtener nivel de amplitud RMS de la canción
// Ajustar la opacidad basada en el nivel de amplitud (rms)
// Opacidad entre 50 (baja) y 255 (alta)

function draw() {
  let rms = analyzer.getLevel(); 
  let alpha = map(rms, 0, 1, 50, 255); 

  // Seleccionar color basado en el nivel de amplitud (rms)
  // Establecer la opacidad del color
  
  let colorIndex = int(map(rms, 0, 1, 0, palette.length));
  let selectedColor = color(palette[colorIndex]);
  selectedColor.setAlpha(alpha); 
  
  // Establecer color de relleno
  // Eliminar el borde de las figuras
  
  fill(selectedColor); 
  noStroke(); 

 // Aplicar filtro de desenfoque a la imagen de fondo con el color seleccionado
  
  img.filter(BLUR, selectedColor); 

  // Si la canción está reproduciéndose
  // Iterar a través del ancho del lienzo y alcular valor para ajuste de trayectoria
  // Calcular posición x de la elipse
  // Calcular posición y de la elipse
  
  if (song.isPlaying()) {
    for (let e = -width; e < width; e += width / 8) { 
      let n = (rms * PI) / 180; 
      let t = (n * abs(sin(0.005 * frameCount + e))) / n; 
      let i = bezierPoint(width, e, width, e, t); 
      let o = bezierPoint(e, e, width, width, t); 
      
      // Ajustar tamaño de la elipse según la amplitud del sonido
      // Tamaño mínimo deseado
      // Tamaño máximo deseado
      // Mapear tamaño entre mínimo y máximo
      
      let minSize = 30; 
      let maxSize = 200; 
      let size = map(rms, 0, 1, minSize, maxSize); 
      
      // Dibujar elipse en posición calculada con tamaño ajustado
      
      ellipse(i, o, size); 
    }
  } else {
    
    // Reiniciar contador de frames si la canción no está reproduciéndose
    
    frameCount == 0; 
  }
}
