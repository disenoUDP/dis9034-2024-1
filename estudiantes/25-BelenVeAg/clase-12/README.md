# clase-12

**<https://mechanic.design>**

Mechanic.design: se debe instalar en el compu. Diseño con código. 

rune madsen: estudio que sistematiza y programa para hacer cosas de diseño. <https://www.runemadsen.com> También tienen un libro que enseña sobre estas herramientas.

**Libro** <https://programmingdesignsystems.com/introduction/index.html>

Oentagram: https://www.pentagram.com

Recomendaciones: Cuando buscas práctica es mejor ir de lo mejor a lo peor(?. Buscar lo que más me interesa.

Ejercicio: Buscar un proyecto que me guste en pentagram. 

Diseño es de todo, es aprender e implementar herramientas.

Paul Rand: Creo el logo de EBM. Hizo un poster que se puede recrear con código:

<img width="824" alt="Captura de pantalla 2024-06-03 a la(s) 14 53 13" src="https://github.com/BelenVeAg/dis9034-2024-1/assets/163448892/bfb756a5-3a64-46da-ad07-c3780652fb74">

Con código:
<img width="1142" alt="Captura de pantalla 2024-06-03 a la(s) 14 55 30" src="https://github.com/BelenVeAg/dis9034-2024-1/assets/163448892/23b31485-8733-4dea-9735-b637fee8b3cc">

Para android, herramienta para detectar elementos en la realidad: Arhl

<https://developers.google.com/ar?hl=es-419>

Lo mismo para apple: Arkit
<https://developer.apple.com/augmented-reality/arkit/>

Los computadores no pueden hacer realmente una acción "random"/valor aleatorio, por lo que tienen que hacer es una pseudo-aelatoriedad (semi aleatorio, el rsultado sale de una fórmula matemática). Por lo que es un problema la aleatoriedad, si ocupas <https://www.random.org> sí funciona, pero por lo general se utiliza el pseudo-random con: <https://www.w3schools.com/python/ref_random_seed.asp>

Lo aleatorio de verdad tiene un cable que está conectado al clima. 

¿Cómo hacer un pseudo aleatorio? Con la appi de random.  Para ver su código hay que apretar (option + comand + i). Luego entras a la consola y en el lenguaje javascript hay que poner: **Math.random()** (pseudo random).

Si quiero que mi número random sea entre 0-4 pongo: 4*Math.random()

Si quiero que nunca me de 0, pongo +1: 1+4*Math.random()

Para simular un dado de 6 caras: 1+6*Math.random()

Para que no tenga decimales: 1+Math.floor(Math.random()*6)

¿Por qué se usa la normal en estadísticas? Por que siempre se da una tendencia (distribuviones de probabilidad).

Por lo que no es recomendable usar **Math.random()** para motivos de seguridad.

<https://developer.mozilla.org/es/docs/Learn>

Un clásico en arte generativo:
<https://docs.cycling74.com/max5/refpages/max-ref/drunk.html>
Se llama así porque recoge el comportamiento de cómo/dónde se movería alaeatoriamente un borracho.

ken perlin: Ganó un öscar por su función randomness. También usó una función matemática para utilizar el ruido para generar texturas. Si buscas p5 perlin:

## Noise Perlin

<https://p5js.org/es/reference/#/p5/noise>

Pelícua Tron 1982: Muchos avances de este tipo.

El ruido gráfico es un sonido que no se escucha, pero se ve.

## Investsigación perlin noise

<https://www.youtube.com/watch?v=Qf4dIN99e2w>
<https://genekogan.com/code/p5js-perlin-noise/>
<https://p5js.org/es/reference/#/p5.Noise>

stroke(nº): Define el color usado para dibujar l%C3%ADneas y bordes de figuras. Este color especificado en t%C3%A9rminos de color RGB o HSB. O stroke (x,x,x)

fill(nº): Define el color usado para rellenar las figuras. O fill(x,x,x)

Ejemplos de código para p5 con explicaciones

```
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(150);
  //noFill: para que las lineas no generen figuras con relleno.
  noFill();
  stroke(255);

  //beginShape():sin esta función aparece una linea que señala el camino entre el primer punto y el último de la forma 
  
  beginShape();
  //Aquí utilizamos las variables para generar mi pseudo random
  for (var x = 0; x < width; x++) {
	var nx = map(x, 0, width, 0, 10);
	var y = height * noise(nx);
	vertex(x, y);
  }
  endShape();
}
```javascript

```

Para hacer diseño paramétrico es mejor definir el comportamiento de los elementos con variables (no con un número exacto) porque así lo podemos modificar de fomar más fácil en el tiempo.

Al lograr aleatoriedad nos acercamos a lo análogo. Agregar ruido a sus obras de forma controlada para que tenga un uso estético.

John Cage: Música aleatoria. 

Brian Eno: Incorpora mucha aleatoriedad y elementos no 
