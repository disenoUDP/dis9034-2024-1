// codigo de referencia de p5.createloop - Noise Loop 2x

// La siguiente constante define semillas aleatorias para el ruido
const seedX = Math.random()
const seedY = Math.random()

// Define los radios de los círculos generados por el ruido
const radX = 1
const radY = 4

// Variable para amplitudes
let ampX
let ampY

// Esta constante define la configuración del gif
const gif = {
    startLoop: 4,
    endLoop: 2,
    fileName: "noiseLoop4x.gif"
}

function setup() {
  // Creación del lienzo midendo este 600 x 600
    createCanvas(600, 600)
  
  // La configuración del modo del color 
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

function draw() {
    // background(0)
  
  // El color del relleno basado en el progreso del bucle 
    fill(animLoop.progress, 6, 8)
    const density = 0.05
    
  // Traslada el punto de origen al centro del lienzo  
    translate(width / 3, height / 2)
  
  // Creación de coordenadas x e y usando ruido
    const x = animLoop.noise({ radius: radX, seed: seedX }) * ampX
    const y = animLoop.noise({ radius: radY, seed: seedY }) * ampY
    
  // Dibujar un círculo acorde a las coordenadas establecidas
    ellipse(x, y, 50, 30)
}