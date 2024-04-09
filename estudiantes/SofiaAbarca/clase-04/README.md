# clase-04
Primero quería hacer un gato que pudiera moverse hasta un ovillo de lana.
Busqué la foto y la puse con lo visto en clases.

// cargue 3 imagenes
function preload() {
  fotito = loadImage("./confeti.png")
  lana = loadImage("./lana.png")
  gatito = loadImage("./gatito.png")
  casita = loadImage("./casita.png")

Quería que apareciera confetti cuando el gato llegara al ovillo
Investigué esta página de las referencias https://p5js.jp/learn/interactivity.html donde enseñan la interactividad del mouse cuando uno hace click
Los ejemplos son de como cambiar de color de una figura al hacer click, pero yo quería que apareciera confeti
Use el "if" para que apareciera la lana al dar click
<
Logré que al mantener el click apareciera el confeti
Puse la lana en el lienzo
Puse una foto de un gato que se mueva con el mouse

Pero el cursor no queda al medio del gato, asi que busqué sobre el cursor aquí https://p5js.org/es/reference/#/p5/cursor
Le resté 100 a MouseX y MouseY para que el cursor quede sobre el gato:
image(gatito, mouseX-100, mouseY-100, 200, 200)



https://editor.p5js.org/SofiaAbarca/sketches/JyXU0a6jG
