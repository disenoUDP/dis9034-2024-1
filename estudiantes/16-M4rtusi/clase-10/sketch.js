// Definición de la paleta de colores iniciales.
let COLS = createCols("https://coolors.co/f93414-fe6c31-feae6c-06889b-006b8f-011f51");
// Variable para almacenar la paleta de colores.
let PALETTE;
// Variable que indica si se ha hecho clic en el lienzo.
let canvasClicked = false;

function setup() {
	// Creación del lienzo
	const s = min(windowWidth, windowHeight) * 0.9;
	createCanvas(s, s);
}

function draw() {
	// Si no se ha hecho clic, se muestra el mensaje inicial en un fondo negro
	if (!canvasClicked) {
		background(0);
		fill(255);
		textAlign(CENTER, CENTER);
		textSize(20);
		text("Haz clic para descubrir patrones infinitos :)", width/2, height/2);
	}
}

function mouseClicked() {
	// Si se ha hecho clic, se activa la variable canvasClicked y se genera una combinación aleatoria en base a la paleta de colores.
	if (!canvasClicked) {
		canvasClicked = true;
		PALETTE = shuffle(COLS, true);
	} else {
		// Si ya se ha hecho clic antes, se genera una nueva combinacón de colores aleatoria
		PALETTE = shuffle(COLS, true);
		// Se cambia el fondo del lienzo a uno aleatorio de la paleta.
		background(PALETTE[3]);
		PALETTE = PALETTE.slice(0, 3);
		
		const d = width * 0.38;
		// Se generan y dibujan los patrones en el lienzo
		pattern(randPattern(d));
		patternColors(shuffle(PALETTE));
		patternAngle(random(2*PI));
		circlePattern(width  * 0.5, height * 0.5, d);
	}
}

// Función para dibujar los patrones.
function typo(cx, cy, w, h, isp)
{
	// Estructura de patrones:
	const structure = isp ? 
				[[-9, -9],[-9, -9],[0, 1],[-1, -1], [-1, 2], [-1, -9],[2, -9]] :
				[[-1, 2],[-1, -9],[3, 1],[-9, -1], [0, 2], [-9, -9],[-9, -9]] ;

	const xNum = structure[0].length;
	const xSpan = w / xNum;
	const yNum =  structure.length;
	const ySpan = h / yNum;
	
	rectMode(CENTER);
	ellipseMode(CENTER);
	
	push();
	translate(cx - w /2, cy - h / 2);
	
	for(let yi = 0; yi < yNum; yi++)
	{
		for(let xi = 0; xi < xNum; xi++)
		{
			const isDraw = structure[yi][xi];
			if(isDraw >= -1)
			{
				const x = xSpan * (xi + 0.5);
				const y = ySpan * (yi + 0.5);
				patternColors(shuffle(PALETTE));
				pattern(randPattern(xSpan));
				patternAngle(int(random(4)) * PI / 4);
				push();
				translate(x, y);
				if(isDraw >= 0){
					rotate(isDraw * HALF_PI);
					const rn = random();
					if(rn > 0.66)rectPattern(0, 0, xSpan, ySpan, xSpan, 0, 0, 0);
					else if(rn > 0.33) arcPattern(xSpan / 2, ySpan / 2, xSpan * 2, ySpan * 2, PI, TAU / 4 * 3);
					else trianglePattern(xSpan / 2, ySpan / 2, -xSpan / 2, ySpan / 2, xSpan / 2, -ySpan / 2);
				}
				else
				{
					rectPattern(0, 0, xSpan, ySpan);
				}
				pop();
			}
		}
	}
	pop();
}

// Función para generar un patrón aleatorio
// Patrones sacados de la cuenta de Github de Sayama: https://github.com/SYM380/p5.pattern/blob/main/p5.pattern.js
function randPattern(t)
{
	const ptArr = [
		PTN.noise(0.5),
		PTN.noiseGrad(0.4),
		PTN.stripe(t / int(random(6, 12))),
		PTN.stripeCircle(t / int(random(6, 12))),
		PTN.stripePolygon(int(random(3, 7)),  int(random(6, 12))),
		PTN.stripeRadial(TAU /  int(random(6, 30))),
		PTN.wave(t / int(random(1, 3)), t / int(random(10, 20)), t / 5, t / 10),
		PTN.dot(t / 10, t / 10 * random(0.2, 1)),
		PTN.checked(t / int(random(5, 20)), t / int(random(5, 20))),
		PTN.cross(t / int(random(10, 20)), t / int(random(20, 40))),
		PTN.triangle(t / int(random(5, 20)), t / int(random(5, 20)))
	]
	return random(ptArr);
}

// Función para crear una paleta de colores a partir de una URL de coolors.co
function createCols(url)
{
	let slaIndex = url.lastIndexOf("/");
	let colStr = url.slice(slaIndex + 1);
	let colArr = colStr.split("-");
	for(let i = 0; i < colArr.length; i++)colArr[i] = "#" + colArr[i];
	return colArr;
}
