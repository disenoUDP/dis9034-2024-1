//Lo que se hará en este trabajo es mostrar la amplitud de ondas reconocidas en un sonido, dando efecto al funcionamiento o a la pausa con el click del mouse, las ondas estaràn generadas dentro de una forma con partìculas en su exterior.

//Lo primero es definir las variables.
//Cargar la música o archivos a utilizar.
var song
//Definimos variable que más adelante generará la forma de onda.
var imagen
//Definimos una variable como fft (Fast Fourier Transform) que es un algoritmo que analiza la frecuencia y amplitud de pistas sonoras.
var fft
//Matriz para almacenar las partículas.
var particles = []

// Utilizamos la función preload para garantizar que se precargue la música e imagen a utilizar antes que todo, definimos ruta.
function preload(){
  song = loadSound ("Radiohead - Nude.mp3") 
  imagen= loadImage("./galac3.png")
}


function setup() {
//El canvas es de tamaño de alto y ancho de la pantalla.
  createCanvas(windowWidth, windowHeight);
  angleMode (DEGREES);
//Ubicamos la imagen de fondo al centro.
  imageMode(CENTER)
//En cada cuadro el objeto fft (Fast Fourier Transform) analizará el sonido en ese momento y devolverá una matriz de valores que dibujará en draw.
  fft = new p5.FFT()
}
//Comenzamos definiendo parámetros visuales como color, relleno, ubicación, etc.
function draw() {
  background(0);
  stroke (255);
  noFill();
//Trasladamos el circulo al centro de la pantalla
  translate (width / 2, height / 2)
  
  image(imagen, 0, 0, width, height)
//Para almacenar los datos de la forma de onda ponemos "wave" en el objeto fft.
  var wave = fft.waveform()
//Creamos un búcle que se ejecute dos veces, la primera negativa y la segunda positiva.
//Para dibujar la onda a través del lienzo podemos crear un bucle "for" que itere.
  for (var t = -1; t <= 1; t +=2){
    
  beginShape()
//Creamos un semicirculo con ondas en el cual se refleja la otra mitad, por lo tanto definimos los       grados de o a 180.
  for (var i = 0; i <= 180; i += 0.5){
   var index = floor(map(i, 0, width,0, wave.length -1 ))
//Asignamos el radio de circulo a la forma de onda, definiendo radio mínimo y máximo del circulo.
   var r = map(wave[index], -1, 1, 150, 350)
    
   var x = r * sin(i) * t
   var y = r * cos(i)
    vertex(x, y)
  }
  
  endShape() 
  }
  
//Creamos una partícula en cada cuadro.
  var p = new particle()
  particles.push(p)
  
  for (var i = 0; i< particles.length; i++){
    particles[i].update()
//Show nos muestra las partìculas.
    particles[i].show()

  }
}

//Usamos mouseClicked para controlar el inicio o pausa de la canción.
  function mouseClicked (){
   if(song.isPlaying()){
    song.pause()
    noLoop()
  } else {
    song.play()
    loop()
  }
}
//Creamos un objeto para las partículas, definimos una posición aleatoria con valor definido de 1 que multiplicamos por el promedio del radio de onda.
  class particle{
  constructor(){
    this.pos = p5.Vector.random2D().mult(250)
// Las partículas al comienzo tendrán un valor cero, que con el vector velocidad aumentarán con el tiempo.
    this.vel = createVector(0, 0)
//El vector de aceleración debe tener la misma dirección que el vector de posición por eso copiamos este último.
    this.acc = this.pos.copy().mult(random(0.0001, 0.00001))
    
    this.w = random(3, 5)
  }
  update(){
//La velocidad se agrega a la aceleración.
    this.vel.add(this.acc)
//La velocidad se agrega a la posición.
    this.pos.add(this.vel)
  }
 
  show(){
    noStroke()
    fill(255)
    ellipse (this.pos.x, this.pos.y, this.w)
  }
}