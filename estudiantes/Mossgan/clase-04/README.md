# clase-04
Para mi proyecto solemne-01 me inspire a base a lo que hice en #clase-03 como tarea https://editor.p5js.org/Mossgan/sketches/aXxPivtQI

1 punto por uso de bucles y/o condicionales

Estoy haciendo que la imagen de un dibujo rote  https://p5js.org/reference/#/p5/rotateZ 
rotate(millis() / 10);

image mode https://p5js.org/reference/#/p5/imageMode

y que interactue con el cursor https://openprocessing.org/sketch/105403/ 
image(fotito,mouseX, mouseY, -500, 200);

https://editor.p5js.org/caleececconi/skztches/-MOYKZoib si el se hace uso del el click izquierdo la imagen ocupa el filtro negativo
if (mouseIsPressed === true) { 
    //https://p5js.org/reference/#/p5.Image/filter
    fotito.filter(INVERT);
