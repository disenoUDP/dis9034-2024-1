# clase-15
# Examen

# Visualizer


### En este proyecto se intentará experimentar y jugar con visualizer, utilizando p5.Sound y FFT.


## FFT

Fast Fourier Transform, la transformación rápida de Fourier representa un algoritmo que analiza la frecuencia y amplitud de una pista sonora.

La herramienta que dibuja y almacena las ondas es waveform.


### Pasos

El primer paso es añadir el sonido a utilizar e imagen, definiendo en una variable y luego utilizar la función preload.
comencé trabajando con lo básico definiendo en la función Setup mi canvas, color de onda y probando con relleno y sin relleno.

eL siguiente paso fue definir como echar a andar la canción, esta fue definida con mouseClicked para dar play y pausa, también hacer que la onda se detenga con la forma que quede en el momento.



```Javascript
function mouseClicked (){
   if(song.isPlaying()){
    song.pause()
    noLoop()
  } else {
    song.play()
    loop()
  }
} 
```


El siguiente paso es utilizar la variable fft y hacer que dibuje ondas con el comando "waveform" este comando almacena y muestra la matriz como sonido, luego de esto haremos que dibuje la onda a través del lienzo con un for que itere en un bucle desde cero hasta el radio del circulo que se pretende en donde giren las ondas, se definen también la unón del principio y final de las ondas.
La forma en que funciona es crear un semicirculo que refleja la otra mitad, es por esto que van valores de 0 a 180 y va con valores de -1 y 1.


```Javascript
var wave = fft.waveform()

  for (var t = -1; t <= 1; t +=2){
    
  beginShape()
  for (var i = 0; i <= 180; i += 0.5){
   var index = floor(map(i, 0, width,0, wave.length -1 ))

   var r = map(wave[index], -1, 1, 150, 350)
    
   var x = r * sin(i) * t
   var y = r * cos(i)
    vertex(x, y)
  }



  endShape() 
  }
```

El siguiente paso es editar las partículas que se pretenden dibujar por el contorno explotando y aumentando su velocidad con el paso del tiempo, se trabaja con valores como velocidad, posición y aceleración.
```Javascript
class particle{
  constructor(){
    this.pos = p5.Vector.random2D().mult(250)
    this.vel = createVector(0, 0)
    this.acc = this.pos.copy().mult(random(0.0001, 0.00001))
    this.w = random(3, 5)
  }
    update(){

    this.vel.add(this.acc)
    this.pos.add(this.vel)
  }
    show(){
    noStroke()
    fill(255)
    ellipse (this.pos.x, this.pos.y, this.w)
  }
}
```

Finalmente se afinan los últimos detalles como el fondo que es cargado con una imagen fijada en el centro, y definiendo el color de las ondas blancas que van sin relleno.

<img width="998" alt="Captura de pantalla 2024-06-24 a la(s) 16 54 17" src="https://github.com/Camilabrigo/dis9034-2024-1/assets/163901532/92cde390-9f06-4353-b331-a336a31cbf41">

Y termina siendo un proyecto que muestra la amplitud de ondas de una canción de Radiohead que traduce FFT a través de una forma definida, en este caso un círculo sumergido en una galaxia azul.
