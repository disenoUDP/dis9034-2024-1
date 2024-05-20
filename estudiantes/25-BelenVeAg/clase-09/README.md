# clase-09

APi: Interfaz de Programación de Aplicaciones, es una interfaz para comunicarte con una base de datos y buscar contenido/hacer preguntas.

Ejemplo api new yorktimes <https://developer.nytimes.com/apis>
<https://twitter.com/NYT_first_said>

## Idea para la solemne 2: Hacer una melodía en strudel REPL

<https://strudel.cc/>

## Primera parte: Hacer un estudio/acercamiento sobre lo que es Strudel y cómo funciona

Strudel es un entorno de programación musical en vivo para el navegador que traslada el lenguaje de patrones de Tidal Cycles a JavaScript.

Básicamente puedes programar la duración, tipo de sonido.

En Tydal cicle buscar referentes de estilo, y también códigos. Entre los referentes: flor de fuega y error 404.cl (Crhistian Oyarzu)

Fuentes en donde estoy buscando información sobre el programa y referentes:

En Tydal más abajo en la ección seleccionada <https://tidalcycles.org/docs/showcase>

Error 404: <https://www.error404.cl/coyarzun.htm>

<https://soundcloud.com/imavoodoochild/groove_rudiments_demo>

<https://www.youtube.com/watch?v=3QdTgtWpRWw>

Proyecto sobre clima <https://www.error404.cl/cimatica/>

Sobre strudel <https://strudel.cc/learn/samples/>

## Vocabulario/herramientas de strudel

Revisar: <https://strudel.cc/learn/samples/>

La S que vemos al anteponer un código de sonido es una función para reproducir el sonido: s function to play back different default samples (bd, sd, hh and misc) to get a drum beat.

<img width="786" alt="Captura de pantalla 2024-05-13 a la(s) 16 14 35" src="https://github.com/BelenVeAg/dis9034-2024-1/assets/163448892/a7582de8-94f8-4c55-8cab-d3b0f622f523">
<img width="786" alt="Captura de pantalla 2024-05-13 a la(s) 16 15 14" src="https://github.com/BelenVeAg/dis9034-2024-1/assets/163448892/e3bdcb90-9ab0-414c-bdc4-6a8a1f704ca9">

## Bibliotecas de sonido

<img width="563" alt="Captura de pantalla 2024-05-13 a la(s) 16 28 24" src="https://github.com/BelenVeAg/dis9034-2024-1/assets/163448892/3aae9f0d-70e8-4c2a-8810-2b08c125585f">

Biblioteca de VCL, confirmado que se puede: <https://github.com/sgossner/VCSL>

Esta no sé de dónde la saqué <https://github.com/geikha/tidal-drum-machines>

## Cómo moverme en el programa

Primero en <https://strudel.cc/> ir al menú derecho-> patterns-> user-> new (para crear un nuevo código)

Para poner un sonido usar la sintaxis: s ("nombre fuente sonora").n(número de la biblioteca)

En la barra izquierda de strudel click en sounds-> samples y hay una gran biblioteca de sonidos que no son instrumentos
<img width="784" alt="Captura de pantalla 2024-05-13 a la(s) 16 49 27" src="https://github.com/BelenVeAg/dis9034-2024-1/assets/163448892/b39cb9da-d2d5-4fac-907a-3488e50949d7">

En el mismo menú puedo importar audios en "import sounds" y seleccionar del ordenador. Para agregarlo se tiene que usar la función:

samples({

<img width="776" alt="Captura de pantalla 2024-05-13 a la(s) 16 54 24" src="https://github.com/BelenVeAg/dis9034-2024-1/assets/163448892/f5b7263c-7e64-4ac2-8de0-948a7fdc31d8">

## Cómo se hace mi melodía

Primero en <https://strudel.cc/> ir al menú derecho-> patterns-> user-> new (para crear un nuevo código)

Segundo

Código que tengo hasta ahora:

s ("crow").n(0)
