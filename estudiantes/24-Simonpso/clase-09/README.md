# clase-09
---
### solemne 13 mayo 
---
##### encontre en p5 libraries p5play https://p5play.org/ 
##### en p5play encontre distintos codigos de programacion de juegos de forma interactiva 
##### explorando encontre p5play learn https://p5play.org/learn/index.html donde pudo aprender como trabajar con los comandos dependiendo de lo que necesite 
##### primero busque el archivo HTLM de p5play y asi poder agregarlo a p5 index y aasi poder trabajar con los comandos de p5play 
##### empece estableciendo como seria el fondo con los siguientes comandos
function setup() {
  createCanvas(800, 800);
}

function draw() {
  background("black");
}
##### sigo con la creacion del sprite donde seria un cuadrado negro con borde blanco

let sprite;

function setup() {
	new Canvas(800, 800);

	sprite = new Sprite();
	sprite.width = 50;
	sprite.height = 50;
  sprite.color = 'black';
sprite.stroke = 'white';
}
##### aplique gavedad al codigo, basado en lo que p5play enseña
##### world.gravity.y = 10; sirve para aplicar la gravedad al juego y asi el sprite no queda en el aire 
##### floor = new Sprite(); genera el piso donde va a caer el sprite y con el que va a interacctuar cuando se corra el juego
	floor.y = 600; //sirve para calcular a que altura del fondo quedaria y determine que quede debajo del sprite principal
	floor.w = 900; //sive para determinar cual va a ser la medida del piso en e x
	floor.h = 5; // Sirve para determinar el grosor del piso en el juego
	floor.collider = 'static'; //para determinar si el piso reacciona a la colicion con el sprite
 
