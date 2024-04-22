# clase-07

lunes 22 abril 2024

miércoles 20 septiembre 2023

osciladores, sampling e interactividad en Processing

hoy aprenderemos:

- bibliotecas y lenguajes de sonido digital
- biblioteca Sound de Processing
- osciladores
- análisis de Fourier
- ruido
- filtros

## bibliotecas y lenguajes de sonido digital

- Bela <https://bela.io/>
- ChucK <https://chuck.cs.princeton.edu/>
- Csound <https://csound.com/>
- FoxDot <https://foxdot.org/>
- Cycling74 Max <https://cycling74.com/>
- Mozzi <https://sensorium.github.io/Mozzi/>
- p5.js sound <https://github.com/processing/p5.js-sound>
- Processing Sound <https://github.com/processing/processing-sound>
- Pure Data <https://puredata.info/>
- Sonic Pi <https://sonic-pi.net/>
- SuperCollider <https://supercollider.github.io/>
- PJRC Teensy <https://www.pjrc.com/>
- TidalCycles <https://tidalcycles.org/>

## biblioteca Processing Sound

en este curso usaremos la biblioteca de sonido de Processing, que debemos instalar de la siguiente manera.

en inglés, tienes que ir a: Sketch -> Import Library -> Manage Libraries...

ahí podrás buscar la biblioteca Sound, cuyo autor es The Processing Foundation. En julio 2022 su versión actual es 2.4.0.

haz click en el botón de instalación y listo!

para comprobar que instalaste bien la biblioteca, abramos un ejemplo.

para eso, vamos en el menú a File -> Examples, y en la ventana con carpetas que aparece, ir a Libraries -> Sound -> Oscillators -> SineWave, y corremos ese ejemplo, el que debería hacer un sonido de onda sinusoidal, cuya frecuencia y amplitud son controladas por la posición del ratón.

la referencia de la biblioteca, con las variables y funciones que nos brinda, está documentada en <https://processing.org/reference/libraries/sound/index.html>

## sonido analógico

el sonido es una vibración / oscilación. el sonido que escuchamos es una onda que se propaga a través de la atmósfera. esa onda es de cambios en presión atmosférica.

con nuestros oídos e incluso el resto de nuestro cuerpo podemos percibir vibraciones.

para hacer sonido, tenemos que ser capaces de mover aire. el sonido mientras se propaga por el aire, lo hace de forma radial en todas direcciones y a medida que viaja su energía se va disipando.

como el sonido es una magnitud física, podemos modelarla matemáticamente para entenderlo.

lo que hacemos, es fijar un punto (x, y, z) de escucha, nuestro oído o un micrófono, y medir la presión atmósferica en ese punto, como una función del tiempo, que podemos graficar.

## análisis de Fourier

Jean-Baptiste Fourier (1768 - 1830) fue un matemático y físico francés, cuyo apellido le da el nombre al análisis de Fourier y la transformada de Fourier, que son las bases del sonido digital como lo conocemos.

El análisis de Fourier, nos permite entre otras cosas, tomar una onda graficable x(t), y descomponerla como la suma de ondas sinusoidales. esto nos permite pensar en cualquier onda como una combinación de ondas sinusoidales, y a la inversa, si tenemos control sobre ondas sinusoidales, podemos construir cualquier sonido!

gracias al análisis de Fourier, podemos cambiar entre distintos dominios, podemos pensar en el sonido como una magnitud de presión atmosférica en el tiempo, o podemos analizar en cada ventana de tiempo, cuál es la combinación de ondas sinusoidales que nos permiten recrear ese sonido.

## ondas sinusoidales

una onda sinusoidal $A * sin ( 2 \cdot \pi \cdot f \cdot t + \phi)$ se puede describir con las siguientes 3 características:

- amplitud (A): la distancia entre su máximo y su mínimo.
- frecuencia (f): cuán frecuentemente alterna entre su máxima y mínima amplitud.
- fase ($\phi$): la distancia entre el origen del sistema de coordenadas y el cero.

cada una de estas descripciones matemáticas o físicas, que aplican a ondas sinusoidales, pero también a cualquier onda periódica que podemos escuchar, tiene una correspondencia sensorial así:

- la amplitud la percibimos como intensidad (o volumen).
- la frecuencia la percibimos como altura (o nota, en inglés pitch).
- la fase no somos capaz de percibirla en sí misma, solamente en combinación con más sonidos.

## osciladores

en esta clase consideraremos a los osciladores como los componentes básicos de la música digital.

las ondas clásicas que podemos hacer con Processing Sound son sinusoidales, cuadradas, pulsos, diente de sierra y triangulares.

## ruido blanco

antes de ver filtros, en vez de usar nuestro oscilador que hemos estado usando, introduciremos el concepto de ruido blanco.

el ruido blanco es el resultado de sumar todas las sinusoides posibles con igual probabilidad. el análisis de Fourier es una línea recta.

existen otros tipos de ruidos, como el ruido rosado o el ruido café, que veremos en otra clase.

usaremos este sonido rico en frecuencias, como un gran cubo de piedra, y usaremos los filtros para recortar frecuencias de este sonido y sentir sus efectos en los sonidos.

## definición de filtro y sabores de filtros

los filtros son efectos, a los cuales ingresa audio y sale audio.

son muy parecidos a una envolvente a un multiplicador, en el sentido de que son capaces de manipular la amplitud de la onda.

la gracia de los filtros es que no afectan a todo el sonido, pueden afectar al sonido dependiendo de las frecuencias que lo componen.

según su funcionamiento, reciben distintos nombres y poseen distintos parámetros. los más simples son:

- filtro pasabajos: tiene una frecuencia de corte, y todo las frecuencias bajo esa frecuencia de corte no son afectadas por el filtro, y todas las frecuencias arriba de la frecuencia de corte son atenuadas e incluso eliminadas.

- filtro pasaaltos: tiene una frecuencia de corte y un comportamiento inverso al filtro pasabajos, deja pasar todas las frecuencias sobre la de corte, y las que están bajo la frecuencia de corte son atenuadas o eliminadas.

otro filtro interesante es el filtro pasabanda, que tiene una frecuencia central, y un ancho de banda, y solamente deja pasar las frecuencias en torno a la frecuencia central, y el ancho de banda determina el alcance de eso. en guitarra eléctrico esto recibe el nombre de wah wah por el sonido que hace.

## sampleo y buffers

con esta biblioteca también podemos leer, cargar, escribir, modificar y reproducir archivos de audio.

un buffer es un espacio en memoria, como una variable, donde alojamos nuestro audio.

## teoría de envolventes AR y ASR

hasta el momento hemos visto cómo crear sonidos con osciladores y filtros, cuyos parámetros son estáticos o controlados por ratón o teclado.

ahora aprenderemos a crear trayectorias para esos parámetros, con envolventes.

hasta el momento hemos trabajado con audio, que está normalizado, lo que significa que su amplitud máxima tiene magnitud 1.0. en lenguajes de programación el sonido es una onda, en torno a 0.0, con amplitud máxima 1.0 y mínima -1.0.

el audio digital que produce un oscilador o una grabación o el audio desde un micrófono ocurre entre esos valores: -1.0 y 1.0, y por eso se llama onda bipolar, porque ocurre a ambos lados positivo y negativos del 0.

en contraste, las envolventes son ondas unipolares, solamente con valores no negativos entre 0 y 1.0, y las usaremos para generar trayectorias de variación de parámetros.

las envolventes se usan típicamente para controlar el volumen de un oscilador, y podemos definir con un gesto como un click con el ratón o con el teclado, o con un sensor, cuándo la envolvente parte.

la envolvente más simple la llamaremos AR por la presencia de 2 parámetros:

- tiempo A del inglés attack, que se traduce generalmente como ataque, pero llamaremos arribo, para usar lenguaje no militarizado ni violento.
- tiempo R, del inglés release, que se traduce generalmente como relajo.

la coreografía de una envolvente es la siguiente:

- la envolvente emite el número 0.0, o está apagada.
- en algún momento, se la da una señal de inicio, para que la envolvente se prenda y empiece a emitir una trayectoria.
- la envolvente va desde su valor mínimo 0.0 a su valor máximo 1.0, y se demora el tiempo definido por su parámetro A.
- inmediatamente tras llegar a su valor máximo 1.0, desciende a su valor mínimo 0.0, y se demora el tiempo definido por su parámetro R.
- volvemos al primer paso, al volver a apagarse.

notar que no hemos hablado de la curva entre los valores mínimo y máximo, generalmente se implementa con una curva =lineal, exponencial o logarítmica.

notar que tampoco hemos dicho qué pasa si mientras la envolvente está prendida y funcionando, le llega otra señal de inicio, podemos elegir entre ignorarla o hacer que salte al inicio de su trayectoria y empiece de nuevo.

las envolventes AR son muy útiles para implementar sonidos percusivos, donde se le dice a un sonido que empiece y termine.

si queremos tener un comportamiento sonoro más complejo, por ejemplo, ser capaces de sostener el sonido indefinidamente por una cantidad de tiempo, podemos usar un parámetro extra llamado S:

- nivel S, del inglés sustain, traducido generalmente como sostenimiento.

este parámetro nos permite retardar el funcionamiento de la sección R (relajo) de la onda, con la siguiente coreografía:

- la envolvente emite el número 0.0, o está apagada.
- en algún momento, se la da una señal de inicio, para que la envolvente se prenda y empiece a emitir una trayectoria.
- la envolvente va desde su valor mínimo 0.0 a su valor máximo S, y se demora el tiempo definido por su parámetro A.
- la envolvente se queda en su valor máximo S, hasta que recibe una señal de apagado.
- inmediatamente tras recibir la señal de apagado, desciende a su valor mínimo 0.0, y se demora el tiempo definido por su parámetro R.
- volvemos al primer paso, al volver a apagarse.

en el contexto de un sintetizador podemos hacer que el accionar de una tecla, elija dos cosas: la frecuencia base del sonido, y también el momento en que iniciamos esta envolvente.

así, podemos hacer que nuestro oscilador tenga un sonido distinto, dependiendo de los parámetros de esta envolvente, y de lo que estamos controlando con esta envolvente.

usaremos como arquitectura de síntesis, un teclado que controla la frecuencia del oscilador y que activa las envolventes.

el oscilador entra a un filtro, cuya frecuencia de corte está controlada por una envolvente AR y la salida del filtro está conectada a un VCA, cuya amplitud está controlada por una envolvente ASR.

## envolventes ASR en Processing Sound con clase Env

Processing nos entrega una envolvente ASR que aprenderemos a usar.

## envolventes AR en Processing a mano

otra opción es pensar cómo crear una envolvente a mano, usando nuestra gestualidad, que por hoy será con presionar, mantener y soltar una tecla de nuestro teclado.

## ritmo en beats por minute

cuando ya definimos envolventes, podemos empezar a secuenciar eventos en Processing, por ejemplo haciendo que se repitan cada cierto tiempo.

en música hablamos de beats por minuto.

## introducción a teoría musical

el teclado de un piano tiene 88 teclas.

en computación almacenamos la información en bits, y cada bit adicional duplica la cantidad de información que podemos almacenar, así:

- 01 bit => 0002 estados posibles
- 02 bit => 0004 estados posibles
- 03 bit => 0008 estados posibles
- 04 bit => 0016 estados posibles
- 05 bit => 0032 estados posibles
- 06 bit => 0064 estados posibles
- 07 bit => 0128 estados posibles
- 08 bit => 0256 estados posibles
- 09 bit => 0512 estados posibles
- 10 bit => 1024 estados posibles

vemos que si tenemos 88 teclas de un piano, que son 88 notas musicales, con 7 bits podemos contarlas, y nos sobran notas incluso.

en música occidental, definimos que hay 12 notas musicales:

| nombre nota solfeo | nombre nota inglés |
| :----------------- | :----------------- |
| do                 | C                  |
| do sostenido       | C#                 |
| re                 | D                  |
| re sostenido       | D#                 |
| mi                 | E                  |
| fa                 | F                  |
| fa sostenido       | F#                 |
| sol                | G                  |
| sol sostenido      | G#                 |
| la                 | A                  |
| la sostenido       | A#                 |
| si                 | B                  |

estas 12 notas están separadas una de otro por un semitono.

de esas 12 notas, hay 7 notas con un nombre a secas, en este orden:

- do
- re
- mi
- fa
- sol
- la
- si

entre cada una de ellas, hay un espacio de un tono, con dos excepciones:

- entre mi y fa, hay un semitono
- entre si y do, hay un semitono

entonces, entre estas notas hay una nota justo al medio:

- entre do y re
- entre re y mi
- entre fa y sol
- entre sol y la
- entre la y si

para nombrarlas, podemos usar:

- sostenido (#): un semitono más arriba
- bemol (b): un semitono más abajo

y con eso queda:

| descripción nota solfeo | nombre nota con sostenido | nombre nota con bemol |
| :---------------------- | :------------------------ | --------------------- |
| entre do y re           | do# o C#                  | reb o Db              |
| entre re y mi           | re# o D#                  | mib o Eb              |
| entre fa y sol          | fa# o F#                  | solb o Gb             |
| entre sol y la          | sol# o G#                 | lab o Ab              |
| entre la y si           | la# o A#                  | sib o Bb              |

## bibliografía

más referencias usadas en esta clase:

- <https://github.com/disenoUChile/audiv020-2022-2>
- <https://github.com/sinestesiacc/2023-2-programa-medios-interactivos>
- <https://tidalcycles.org/>
- <https://strudel.cc/>
- <http://misaa.cc/>
- <https://error404.cl/>
- <https://felipeweason.cl/>
- <https://seanmoscoso.cl/>
- <https://1riss.github.io/>
- <https://es.wikipedia.org/wiki/M%C3%B3nica_Bate>
- <https://www.instagram.com/flordefuega>
- <https://www.instagram.com/hypereikon/>
