# clase-10: Entrega Solemne 2; hacer una melodía en strudel REPL

https://strudel.cc/

# Primera parte: Hacer un estudio/acercamiento sobre lo que es Strudel y cómo funciona

Strudel es un entorno de programación musical en vivo para el navegador que traslada el lenguaje de patrones de Tidal Cycles a JavaScript.

Básicamente puedes programar la duración, tipo de sonido.

En Tydal cicle buscar referentes de estilo, y también códigos. Entre los referentes: flor de fuega y error 404.cl (Crhistian Oyarzu)

Fuentes en donde estoy buscando información sobre el programa y referentes: 

En Tydal más abajo en la ección seleccionada https://tidalcycles.org/docs/showcase

Error 404: https://www.error404.cl/coyarzun.htm

https://soundcloud.com/imavoodoochild/groove_rudiments_demo

https://www.youtube.com/watch?v=3QdTgtWpRWw

Proyecto sobre clima https://www.error404.cl/cimatica/

Sobre strudel https://strudel.cc/learn/samples/

Workshop de strudel: https://www.youtube.com/watch?v=oqyAJ4WeKoU

# Vocabulario/herramientas de strudel
Información recopilada de: 

https://strudel.cc/learn/samples/

https://strudel.cc/workshop/recap/

Workshop de strudel: https://www.youtube.com/watch?v=oqyAJ4WeKoU

La "s" que vemos al anteponer en el código es de "sonido", es una función para definir un sonido y reproducirlo: s function to play back different default samples (bd, sd, hh and misc) to get a drum beat.

Por lo tanto, para poner un sonido usar la sintaxis: 
~~~
s("nombre sonido").n(número de la biblioteca)
~~~

Otra forma de sintaxis para poner 1 o más sonidos: 
~~~
s("nombre sonido1:nº biblioteca nombre sonido2:nº bib")
~~~

<img width="786" alt="Captura de pantalla 2024-05-13 a la(s) 16 14 35" src="https://github.com/BelenVeAg/dis9034-2024-1/assets/163448892/a7582de8-94f8-4c55-8cab-d3b0f622f523">
<img width="786" alt="Captura de pantalla 2024-05-13 a la(s) 16 15 14" src="https://github.com/BelenVeAg/dis9034-2024-1/assets/163448892/e3bdcb90-9ab0-414c-bdc4-6a8a1f704ca9">


Para **intercalar un sonido en la serie** hay que poner los dos sonidos dentro de la sintaxis anterior en la parte que desees, pero ambos elemnteos deben estar encerrados en un **< sonido1 sonido2 sonido3 >**

Varias herramientas (resumen) en: https://strudel.cc/workshop/recap/
<img width="816" alt="Captura de Pantalla 2024-05-19 a la(s) 21 42 44" src="https://github.com/BelenVeAg/dis9034-2024-1/assets/163448892/6e32075b-cc84-4120-acbe-8467cdd3f588">

stack: es para hacer polirritmias. Llamamos polirritmia a la utilización simultánea de dos o más ritmos que no se perciben como simples derivados el uno del otro, definición de: https://recursos.march.es/web/musica/jovenes/africa-inspira-a-occidente/html/polirritmias.html

# Bibliotecas de sonido
<img width="563" alt="Captura de pantalla 2024-05-13 a la(s) 16 28 24" src="https://github.com/BelenVeAg/dis9034-2024-1/assets/163448892/3aae9f0d-70e8-4c2a-8810-2b08c125585f">

Biblioteca de VCL, confirmado que se puede: https://github.com/sgossner/VCSL

Otra https://github.com/geikha/tidal-drum-machines


# Cómo moverme en el programa

Primero en https://strudel.cc/ ir al menú derecho-> patterns-> user-> new (para crear un nuevo código)

En la barra izquierda de strudel click en sounds-> samples y hay una gran biblioteca de sonidos que no son instrumentos

También existen sonidos que tienen su propia biblioteca, por lo que hay diferentes versiones del mismo sonido:
<img width="784" alt="Captura de pantalla 2024-05-13 a la(s) 16 49 27" src="https://github.com/BelenVeAg/dis9034-2024-1/assets/163448892/b39cb9da-d2d5-4fac-907a-3488e50949d7">

En el mismo menú puedo importar audios en "import sounds" y seleccionar del ordenador. Para agregarlo se tiene que usar la función: 

~~~
samples({
~~~

<img width="776" alt="Captura de pantalla 2024-05-13 a la(s) 16 54 24" src="https://github.com/BelenVeAg/dis9034-2024-1/assets/163448892/f5b7263c-7e64-4ac2-8de0-948a7fdc31d8">

Si se desaparece la barra de herramientas, va a aparecer en la parte de abajo y al apretar vuelve a estar donde antes.

# Problemas 

**1: Poner más de un sonido:** Era muy fácil y expliqué cómo se hace arriba, pero estube una hora intentando llegar a eso y al intentarlo me metí en un segundo problema:

**2: Hacer stacks**: Por algun motivo que desconosco el programa dice que tengo un problema de notación al hacer esta función:

https://github.com/BelenVeAg/dis9034-2024-1/assets/163448892/f0c83bc4-8ca9-4120-86e6-4b28df8733b5



https://github.com/BelenVeAg/dis9034-2024-1/assets/163448892/ddc5f44f-f998-44ae-add7-043c9c424d63

Pero al intentar con el segundo método que también menciona el video sí me funcionó, es el de la notación:
~~~
stack (
s(xxx),
s(xxx)
)
~~~
**3: Subir un sonido/contenido de mi biblioteca:** No especifica en qué formato es el que me permite subir, intente con wav y mp3 y ninguno me funcionó. 

**4: Descargar un link con mi código:** Me descargué como 3 links según iba avanzando y en mi computador sí abría mi código, PERO al abrirlo ahora en el compu de la u me abrieron diferentes códigos predeterminados de strudel. En un minuto dado me dio este link que es un link dentro de un link?: https://strudel.cc/?EuJ49HwytEp_)[https://strudel.cc/?Wam4Rj4DbY-r](https://strudel.cc/?EuJ49HwytEp_

Observación importante, uno de los links que eestaban dentro de ese gran link sí funcionaba, a diferencia de otro que intenté antes, pero que me mandaba a cualquier lado. El que es válido es: https://strudel.cc/?EuJ49HwytEp_

# Cómo se hace mi melodía
Link: https://strudel.cc/?EuJ49HwytEp_)[https://strudel.cc/?Wam4Rj4DbY-r](https://strudel.cc/?EuJ49HwytEp_

Código: https://strudel.cc/?EuJ49HwytEp_
~~~
//Nota: Cuando haces muchas composiciones solo sonará la última que hiciste. Por lo que para escuchar los que vienen antes, hay que poner las últimas en notación de comentario.
//Es por esto que para ir leyendo el paso a paso de mejor manera habrá que 1. Sacar los // que anteponen cada código y luego poner play (es una sugerencia de cómo leer esto pero no estoy segura si le gusta?)


//Quiero insertar el sonido del cuervo de la biblioteca, por lo que con s lo defino y con n defino cuál de la biblioteca quiero utilizar (el 0)
s("crow").n(1)

//Otra forma de hacer exactamente lo mismo pero abreviado es:
s("crow:1" )
//Fuente: https://www.youtube.com/watch?v=oqyAJ4WeKoU

//Quiero agregar otro sonido. Para esto
s("crow:1 fingercymbal:0")

//Para agregar sonidos intercalados, usamos <>:
//Fuente: https://www.youtube.com/watch?v=oqyAJ4WeKoU
s("crow:1 clap:1 fingercymbal:0 <bd bd jazz:1 hh:1>")

//Para agregar una sub secuencia usamos []
// Fuente: https://strudel.cc/workshop/recap/
s("crow:1 clap:1 fingercymbal:0 <[bd bd] [bd bd jazz:1] hh:1>")

//Para agregar una sub-sub secuencia usamos dentro del [] otro []:
// Fuente: https://strudel.cc/workshop/recap/
s ("crow:1 clap:1 fingercymbal:0 <[bd bd] [bd bd jazz:1] [[bd bd] jazz:1] hh:1>")

//Para repetir un sonido un n número de veces, poner *n:
// Fuente: https://strudel.cc/workshop/recap/
s("crow:1 clap:1 fingercymbal:0 <[bd bd] [bd bd jazz:1] [[bd bd] jazz:1] hh:1*2>")


//Voy a hacer un stack/polirritmia:
//Fuente: https://www.youtube.com/watch?v=oqyAJ4WeKoU
stack (

s("crow:1 clap:1 fingercymbal:0 <[bd bd] [bd bd jazz:1] [[bd bd] jazz:1] hh:1*2>"),

s("dantranh_tremolo:16")
)

//El sonido del tremolo está muy fuerte, vamos a modificarlo según la frecuencia con la función lpf:
//Fuente: https://strudel.cc/learn/effects/#lpf
//El original:
s("dantranh_tremolo:16")
//El nuevo con lpf:
s("dantranh_tremolo:16").lpf("500")

//Ahora integrado a la melodía:
stack (

s("crow:1 clap:1 fingercymbal:0 <[bd bd] [bd bd jazz:1] [[bd bd] jazz:1] hh:1*2>"),

s("dantranh_tremolo:16").lpf("500")
)

//Si queremos que la frecuencia varie, hay que agregar la sintaxis .lpf(saw.range(n1,n2))
//Fuente: https://strudel.cc/workshop/recap/
stack (

s("crow:1 clap:1 fingercymbal:0 <[bd bd] [bd bd jazz:1] [[bd bd] jazz:1] hh:1*2>"),

s("dantranh_tremolo:16").lpf(saw.range(200,500))
)

//Vamos a agregar silencio con ~:
//Fuente: https://strudel.cc/workshop/recap/
stack (

s("crow:1 clap:1 fingercymbal:0 <[bd bd] [bd bd jazz:1] [[bd bd] jazz:1] hh:1*2>"),

s("~ ~ ~ ~ ~ dantranh_tremolo:16 ~ ~ ~ ~ ~ ~ ~ ~ ~").lpf(saw.range(200,500)),

s("~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ siren:1*4")
)

//Vamos a ver que pasa si aceleramos el tremolo:
stack (

s("crow:1 clap:1 fingercymbal:0 <[bd bd] [bd bd jazz:1] [[bd bd] jazz:1] hh:1*2>"),

s("~ ~ ~ ~ ~ dantranh_tremolo:16*8 ~ ~ ~ ~ ~ ~ ~ ~ ~").lpf(saw.range(200,500)),

s("~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ siren:1*4")
)

//Suena mejor como antes, pero y si lo hacemos más lento? Para eso hay que poner la función slow down= /:
//Fuente: https://strudel.cc/workshop/recap/
stack (

s("crow:1 clap:1 fingercymbal:0 <[bd bd] [bd bd jazz:1] [[bd bd] jazz:1] hh:1*2>"),

s("~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ dantranh_tremolo:16/3 ~ ~ ~ ~ ~").lpf(saw.range(200,500)),

s("~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ siren:1*4")
)

~~~
