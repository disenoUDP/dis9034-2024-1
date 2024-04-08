# clase-04
primero queria hacer un gato que pudiera moverse hasta un ovillo de lana
busque la foto y la puse con lo visto en clases
<img width="260" alt="Captura de pantalla 2024-04-01 a la(s) 16 11 23" src="https://github.com/SofiaAbarca/dis9034-2024-1/assets/163044808/e09d6482-23e1-41a9-b4f8-3b4ed7a88e3e">
Quería que apareciera confetti cuando el gato llegara al ovillo
Investigué esta página de las referencias https://p5js.jp/learn/interactivity.html donde enseñan la interactividad del mouse cuando uno hace click
Los ejemplos son de como cambiar de color de una figura al hacer click, pero yo quería que apareciera confeti
Use el "if" para que apareciera la lana al dar click
<img width="726" alt="Captura de pantalla 2024-04-01 a la(s) 16 16 47" src="https://github.com/SofiaAbarca/dis9034-2024-1/assets/163044808/bd1bd066-5745-41fe-a79e-507cd11f3846">
Logré que al mantener el click apareciera el confeti
Puse la lana en el lienzo
Puse una foto de un gato que se mueva con el mouse
<img width="398" alt="Captura de pantalla 2024-04-01 a la(s) 16 36 16" src="https://github.com/SofiaAbarca/dis9034-2024-1/assets/163044808/151b58d9-4307-40af-ad43-befabea125e3">
Pero el cursor no queda al medio del gato, asi que busqué sobre el cursor aquí https://p5js.org/es/reference/#/p5/cursor
Le resté 100 a MouseX y MouseY para que el cursor quede sobre el gato:
image(gatito, mouseX-100, mouseY-100, 200, 200)



https://editor.p5js.org/SofiaAbarca/sketches/JyXU0a6jG
