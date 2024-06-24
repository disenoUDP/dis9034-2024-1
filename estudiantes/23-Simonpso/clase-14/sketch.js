// codigo de referencia de p5.createloop - Noise Loop 2x
const seedX = Math.random()
const seedY = Math.random()
// la siguiente consante determinata con cuanta frecuencia el loop se movera en radio de x y en radio de y
const radX = 0.3
const radY = 1
let ampX
let ampY

const gif = {
    startLoop: 4,
    endLoop: 2,
    fileName: "noiseLoop2x.gif"
}

function setup() {
    createCanvas(600, 600)
    colorMode(HSB, 1, 1, 1)
    frameRate(50)
    background(0)
    fill(100)
    noStroke()
    createLoop(4, { gif })
    ampX = width / 1.3
    ampY = height / 2.3
}

function draw() {
    // background(0)
    fill(animLoop.progress, 0.5, 1)
    translate(width / 2, height / 2)
    const x = animLoop.noise({ radius: radX, seed: seedX }) * ampX
    const y = animLoop.noise({ radius: radY, seed: seedY }) * ampY
    ellipse(x, y, 60, 60)
}