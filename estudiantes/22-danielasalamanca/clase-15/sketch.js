// 24 de junio del 2024
// bienvenidx! utiliza los botones de la izquierda para cambiar las prendas del osito
// hecho por daniela salamanca
// este proyecto se hizo con p5.js versión: 1.9.4

// variables que almacenan el índice (index) de la prenda actual
// se utilizará para saber cuál imagen de polera está actualmente seleccionada o visible en la pantalla
let currentPolera;
let currentPantalon;
let currentZapatitos;
// dado que cada prenda tiene posiciones distintas necesitaré definirlas
// estos arrays almacenarán las posiciones x e y de cada prenda
let poleraPositions = [];
let pantalonPositions = [];
let zapatitosPositions = [];

// función que carga las imágenes antes de ejecutar el sketch
function preload() {
  
// carga las imágenes para el logo, oso, sombra, poleras, pantalones y zapatitos
  logo = loadImage("logo.svg");
  oso = loadImage("oso.png");
  sombra = loadImage("sombra.png");
  polera1 = loadImage("polera1.png");
  polera2 = loadImage("polera2.png");
  polera3 = loadImage("polera3.png");
  polera4 = loadImage("polera4.png");
  polera5 = loadImage("polera5.png");
  polera6 = loadImage("polera6.png");
  pantalon1 = loadImage("pantalon1.png");
  pantalon2 = loadImage("pantalon2.png");
  pantalon3 = loadImage("pantalon3.png");
  pantalon4 = loadImage("pantalon4.png");
  pantalon5 = loadImage("pantalon5.png");
  zapatitos1 = loadImage("zapatitos1.png");
  zapatitos2 = loadImage("zapatitos2.png");
  zapatitos3 = loadImage("zapatitos3.png");
  zapatitos4 = loadImage("zapatitos4.png");

// arrays para almacenar las imágenes cargadas
  poleras = [];
// loop para cargar y almacenar las imágenes de las 6 poleras
  for (let i = 1; i <= 6; i++) {
    poleras.push(loadImage(`polera${i}.png`));
  }

// arrays para almacenar las imágenes cargadas
  pantalones = [];
// loop para cargar y almacenar las imágenes de los 5 pantalones
  for (let i = 1; i <= 5; i++) {
    pantalones.push(loadImage(`pantalon${i}.png`));
  }

// arrays para almacenar las imágenes cargadas
  zapatitos = [];
// loop para cargar y almacenar las imágenes de los 4 zapatitos
  for (let i = 1; i <= 4; i++) {
    zapatitos.push(loadImage(`zapatitos${i}.png`));
  }
}

function setup() {
// crea un lienzo de 700x560 píxeles
  createCanvas(700, 560);
  
// inicializa las variables de la prenda actual
  currentPolera = 0;
  currentPantalon = 0;
  currentZapatitos = 0;

// define la posición en la que deberían ir cada una de las poleras para que estas calcen en el cuerpo del osito
  poleraPositions = [
    { x: 219, y: 201 },
    { x: 251, y: 201 },
    { x: 250, y: 201 },
    { x: 218, y: 201 },
    { x: 219, y: 201 },
    { x: 218, y: 201 },
  ];

// define la posición en el que deberían ir cada uno de los pantalones para que estos calcen en el cuerpo del osito
  pantalonPositions = [
    { x: 261, y: 305 },
    { x: 273, y: 303 },
    { x: 273, y: 304 },
    { x: 273, y: 303 },
    { x: 273, y: 303 },
  ];

// define la posición en el que deberían ir cada uno de los zapatitos para que estos calcen en el cuerpo del osito
  zapatitosPositions = [
    { x: 278, y: 425 },
    { x: 279, y: 420 },
    { x: 281, y: 426 },
    { x: 278, y: 407 },
  ];

// crea un botón a partir de una imagen para cambiar la polera
  buttonPolera = createImg("1boton.png", "cambiar polera");
// establece la posición del botón
  buttonPolera.position(533, 235);
// asigna la función 'changePolera' al hacer clic en el botón
  buttonPolera.mousePressed(changePolera);

// crea un botón a partir de una imagen para cambiar los pantalones
  buttonPantalon = createImg("2boton.png", "cambiar pantalon");
// establece la posición del botón
  buttonPantalon.position(533, 320);
// asigna la función 'changePantalon' al hacer clic en el botón
  buttonPantalon.mousePressed(changePantalon);

// crea un botón a partir de una imagen para cambiar los zapatitos
  buttonZapatitos = createImg("3boton.png", "cambiar zapatitos");
// establece la posición del botón
  buttonZapatitos.position(533, 405);
// asigna la función 'changeZapatitos' al hacer clic en el botón
  buttonZapatitos.mousePressed(changeZapatitos);
}

function draw() {
// establece el color de fondo
  background(217, 239, 86);
// dibuja y redimensiona la sombra
  image(sombra, 242, 429);
  sombra.resize(215, 29);
// dibuja y redimensiona la figura del oso
  image(oso, 211, 66);
  oso.resize(278, 383);
// dibuja y redimensiona el logo
  image(logo, 311, 497);
  logo.resize(78, 37);

// selecciona la imagen actual de los zapatitos
  let currentZapatitosImage = zapatitos[currentZapatitos];
// obtiene la posición actual de los zapatitos
  let zapatitosPos = zapatitosPositions[currentZapatitos];
// redimensiona la imagen de los zapatitos según el índice actual
  if (currentZapatitos === 0) {
    currentZapatitosImage.resize(144, 28);
  } else if (currentZapatitos === 1) {
    currentZapatitosImage.resize(142, 31);
  } else if (currentZapatitos === 2) {
    currentZapatitosImage.resize(137, 25);
  } else if (currentZapatitos === 3) {
    currentZapatitosImage.resize(144, 45);
  }
// dibuja la imagen de los zapatitos en la posición especificada
  image(currentZapatitosImage, zapatitosPos.x, zapatitosPos.y);

  let currentPantalonImage = pantalones[currentPantalon];
  let pantalonPos = pantalonPositions[currentPantalon];
  if (currentPantalon === 0) {
    currentPantalonImage.resize(177, 61);
  } else if (currentPantalon === 1) {
    currentPantalonImage.resize(154, 69);
  } else if (currentPantalon === 2) {
    currentPantalonImage.resize(154, 127);
  } else if (currentPantalon === 3) {
    currentPantalonImage.resize(154, 70);
  } else if (currentPantalon === 4) {
    currentPantalonImage.resize(154, 127);
  }
  image(currentPantalonImage, pantalonPos.x, pantalonPos.y);

 
  let currentPoleraImage = poleras[currentPolera];
  let poleraPos = poleraPositions[currentPolera];
  if (currentPolera === 0) {
    currentPoleraImage.resize(261, 129);
  } else if (currentPolera === 1) {
    currentPoleraImage.resize(197, 115);
  } else if (currentPolera === 2) {
    currentPoleraImage.resize(199, 115);
  } else if (currentPolera === 3) {
    currentPoleraImage.resize(264, 122);
  } else if (currentPolera === 4) {
    currentPoleraImage.resize(262, 129);
  } else if (currentPolera === 5) {
    currentPoleraImage.resize(264, 122);
  }
  image(currentPoleraImage, poleraPos.x, poleraPos.y);
}

// función para cambiar la polera
// su propósito es actualizar el índice ´currentPolera´ para cambiar a la siguiente polera
function changePolera() {
// al incrementar el valor actual de 'currentPolera' en 1 mueve el índice a la siguiente polera
// el operador módulo (%) se usa para asegurar que el índice vuelva a 0 cuando alcanza el final de la lista de poleras
  currentPolera = (currentPolera + 1) % poleras.length;
}

// función para cambiar el pantalón
function changePantalon() {
  currentPantalon = (currentPantalon + 1) % pantalones.length;
}

// función para cambiar los zapatitos
function changeZapatitos() {
  currentZapatitos = (currentZapatitos + 1) % zapatitos.length;
}

// referencias
// como crear y utilizar arrays: https://happycoding.io/tutorials/p5js/arrays
// array functions: https://happycoding.io/tutorials/p5js/array-functions#push
// utilizar una imagen como botón: https://gist.github.com/lizzybrooks/54045563e4e8321718cc40297db999f9
//