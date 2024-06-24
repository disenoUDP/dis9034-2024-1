#### clase-15    
    
## examen programacion creativa    
# AUDIOMAPEO   

creacion de visualizers musicales en p5 a traves de FFt

**el desarrollo del examen se dedica a explorar las capacidades de la herramienta de analisis.    
el fin es encontrar la manera de relacionar los resultados del analisis    
con las caracteristicas de una forma. lo que se espera es que estas respondan a la frecuencia del   
audio introducido.**     

se ha experimentado con la libreria minum y sound en processing, utilizando el analizador fft   
decidi experimentar en p5js, ya que existe mas referencias sobre las capacidades y experimentaciones utilizando audio
[aqui las referencias](https://openprocessing.org/browse/?time=anytime&type=all&q=fft#)     
[isabella gutierrez](https://github.com/jacinta000/dis9034-2024-1/tree/main/estudiantes/12-isabellagutierrezm/clase-10)

## FFT
herramienta de analisis
* waveform: amplitud de onda
* analysis: frecuencia, altos y bajos

***
funcion map()                    
* map() funcion que transforma valores a otros     
map(tamaño, 0.0, 1.0, 0.0, 100.0);    
transformaria a tamaño entre valores 0-1 a 0-100

### pasos
<ol>
1. crear FUNCTION PRELOAD: para subir el archivo de audio    
  
  ```
   function preload() {
  sound = loadSound("./miAudio.m4a");
}
  ```
2. indicar rasgos generales en el setup

  ```
function setup() {
  createCanvas(400, 400);
  strokeWeight(1);
  ```
3. crear un elemento fft y enlazarlo al audio, de manera que analise el sonido deseado

  ```
  // nuevo elemento para el analizador FFT
  fft = new p5.FFT();
  // el input es mi sound
  fft.setInput(sound);
  //amplitud.setInput(sound);
  sound.play();
  sound.loop();
```
4. ya en FUNCTION DRAW establecer a FFT la funcion analyse

```
backround(0);
  // spectrum es la variable analyze de FFT
  let spectrum = fft.analyze();
```
5.  momento de enlazar resultados y aspectos

<ol>
  1. creacion de un for, donde i transita a lo largo del analisis
  
```  
  for (let i = 0; i < spectrum.length; i++) {
```
  2. mientras el for sea verdadero, existira x, quien presenta un nuevo rango donde i tendra un
valor entre 0 y el ancho de la composicion, por lo tanto, segun los resultados del
analisis, el ancho de la figura sera 0-ancho total

```
let x = map(i, 0, spectrum.length, 0, width);
```
3. mientras el for sea verdadero, existira h, quien representa a la altura en negativo de la composicion sumado
a un nuevo rango donde el arreglo spectrum[] tendra un valor entre la altura de la composicion y 0, numeros
de mas a menos, para que se correspondan visualmente con los resultados del analisis

```
let h = -height + map(spectrum[i], 0, 255, height, 0);
```
4. crear un elemento que tenga los resultados de x y h, ubicado en el centro del canvas

```
ellipse(width / 2, height / 2, h, x);
```
</ol>
</ol>

**Asi se logro utilizar los resultados de fft.analyse para la alteracion de caracteristicas de ua forma y crear    
un mapeo de un audio en el software p5js v1.9.4 a traves de su libreria sound y su herramienta FFT**     
[link examenJacinta000](https://editor.p5js.org/jacinta/sketches/qDernwVD5)



[docExamen](./docExamen.gif)    




