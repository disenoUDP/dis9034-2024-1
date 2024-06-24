# clase-15

## planes examen 

- personalmente quiero hacer algo personal jaja, sobre lo conversado en la clase, quiero hacer algo mucho mas significativo para mí, en formato juego en p5.js, creo que será un proceso MUY duro, pero pienso en este proyecto como algo que quedará para siempre en mí (si es que funciona, claro).
- pincipalmente este trabajo está inspirado en [chino kim](https://chino.kim/) y en su trabajo [...and](http://chjno.github.io/...and/)
- [oregon trail](https://es.wikipedia.org/wiki/Oregon_Trail_(videojuego)) no olvidar!
- quiero ver bien mis referentes antes de mepezar a hacer algo
- INCREIBLE, me pse a ver lo juegos hecho en p5.js en [p5play](https://p5play.org/lang/es/index.html) y de tdos los increibles trabajo el que mas se acercaba a lo que queria hacer fue ["into the mines"](https://tezumie.github.io/into-the-mines/?_gl=1*7im9tm*_ga*MjA0Nzk4MDQ2Ni4xNzE4NjQ5OTgw*_ga_EHXNCTSYLK*MTcxODY0OTk3OS4xLjEuMTcxODY1MDEzMy4wLjAuMA..) de @Tezumies

https://github.com/SofiaEct/dis9034-2024-1/assets/163043878/73048c95-e438-4c27-9b1a-ccbbd788b074

- combinandolo con animacion hecha tambien en p5play, referenciando a [forrest live](https://quinton-ashley.github.io/Squirrel/Code/index.html) de @Axiom

https://github.com/SofiaEct/dis9034-2024-1/assets/163043878/2583edcc-482a-4fad-b948-b275159f24b4

## examen

(ya no son planes, esto lo hago si o si)

como mencione en el punteo de los planes para este examen, quiero hacer algo mas personal, asi que hare una pequeña sinopsis del juego: "Sofìa una niña de 14 años recorre un largo camino para encontrarse con su gato 'simio' que es lo que mas quiere en este vidapara estar con su amigo felino`

primero estoy viendo lo que es el personaje pero debo de hacer cada paso dibujandolo por lo que lo dejare para despues (ya que los necesito pa poder usar el cofdigo), me basare en el diseño de personaje de @Tezumines para hacerlo, y demas cosas de su github [Tezumine Github](https://github.com/Tezumie/into-the-mines)

![playerSprite](https://github.com/SofiaEct/dis9034-2024-1/assets/163043878/8ffc2fd0-c2f1-4041-90c5-bcbffa4c85c2)

ya en p5.js estuve probando usar las capas con las imagenes que hice previamente e intentar animar mi sprite con la referencia de @p5play en su apartado de [aprender](https://p5play.org/lang/es/learn/) estan los codigos para animar nuestro personaje [p5play: Animation](https://p5play.org/lang/es/learn/animation.html?page=4)

al final solo tuve errore que estaban fuera de mi entendimiento asi que decidi buscar tutoriales que animaran directamente en p5.js y me ecnontre con el video [Beginner's Guide: Make things move with keyboard input in P5js](https://youtu.be/MA_aFQV9vss?feature=shared) del canal @Barney Codes, donde enseñaba a aplicar un codigo de movimietno para mi personaje.

```js

let player;

let pressedKeys = {};

function setup() {
  createCanvas(600, 600);
  player = new Player(width/2, height/2);
}

function draw() {
  background(220);
  player.update();
  player.draw();
}

function keyPressed() {
  pressedKeys[key] = true;
}

function keyReleased() {
  delete pressedKeys[key];
}

class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    
    this.speed = 4;
  }
  
  update() {
    let mvmt = createVector(0, 0);
    
    if(pressedKeys.a) {
      mvmt.x -= 1;
    }
    if(pressedKeys.d) {
      mvmt.x += 1;
    }
    if(pressedKeys.w) {
      mvmt.y -= 1;
    }
    if(pressedKeys.s) {
      mvmt.y += 1;
    }
    
    mvmt.setMag(this.speed);
    
    this.x += mvmt.x;
    this.y += mvmt.y;
  }
  
  draw() {
    fill(255, 0, 0);
    circle(this.x, this.y, 30);
  }
}

```

continue descifrando como poder cambiar de escenarios con el paso del persobaje, esto fue bastante dficil pero gracias a la ayuda se pudo logar, mas que nada es usando la condicional if y else if.

```js
 if (player.x > 1.0 * width && fotitoActual == 0) {
    // y aqui se indica el fondo
    fotitoActual = 1;
    player.x = 0;
  }
  // pasar de 1 a 2.
  else if (player.x > 1.0 * width && fotitoActual == 1) {
    // y aqui se indica el fondo.
    fotitoActual = 2;
    player.x = 0;
  }
  // pasar de 1 a 0.
  else if (player.x < 0.0 * width && fotitoActual == 1) {
    // y aqui se indica el fondo.
    fotitoActual = 0;
    player.x = width;
  }
  // pasar de 2 a 1.
  else if (player.x < 0.0 * width && fotitoActual == 2) {
    // y aqui se indica el fondo.
    fotitoActual = 1;
    player.x = width;
  }
}
```
y bueno, mas alla del codigo los fondos fueron hecho a mano por mi en estilo pixel, contamplando que queria hacer algo mas interactivo, pero por tiempo y tecnica no pude concretar TT

![fondo_3](https://github.com/SofiaEct/dis9034-2024-1/assets/163043878/1984b1dd-43f1-48f0-b89a-dfee95ebcd01)

![fondo_2](https://github.com/SofiaEct/dis9034-2024-1/assets/163043878/cc58f98b-fcc9-4967-a68d-2e29e873ae3a)

![fondo_1](https://github.com/SofiaEct/dis9034-2024-1/assets/163043878/2b5834ff-3285-455e-9297-ecc6ab76815d)

y finlmente el resultado final.

https://github.com/SofiaEct/dis9034-2024-1/assets/163043878/4a6c25d9-64c4-4af3-9a27-f7a0a0a157f2

https://editor.p5js.org/SofiaEct/sketches/r1vAbchV9

sere sincera, de todos los proyectos que he hecho es el que menos me ha gustado, creo que desde el principio habia tenido demasiadas expectativas, sin considerar el tiempo y la poca experiencia que he tenido con el codigo, pero me motiva a seguir aprendiendo y cuando pueda poder retomar este proyecto.
