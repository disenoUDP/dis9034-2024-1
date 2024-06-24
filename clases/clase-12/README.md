# clase-12

- <https://mechanic.design/>
- <https://programmingdesignsystems.com>
- <https://m3.material.io/>
- <https://designsystems.international>
- <https://www.pentagram.com/>
- <https://es.wikipedia.org/wiki/Paul_Rand>
- <https://aframe.io/docs/1.5.0/introduction/>
- <https://developers.google.com/ar>
- <https://developer.apple.com/augmented-reality/arkit/>
- <https://www.random.org/>
- <https://en.wikipedia.org/wiki/Pseudorandomness>
- <https://www.w3schools.com/python/ref_random_seed.asp>
- <https://www.w3schools.com/python/ref_random_seed.asp>
- <https://es.wikipedia.org/wiki/Distribuci%C3%B3n_uniforme_continua>
- <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random>
- <https://p5js.org/reference/#/p5/noise>
- <https://www.youtube.com/watch?v=c6K-wJQ77yQ>

```javascript
let numeroParticulas = 100;

// arreglos
let posActualX = [];
let posActualY = [];

// cuánto es lo máximo que varía
let pasoMax = null;

function setup() {
  createCanvas(400, 400);
  
  background(255);
  
  // tasa de refresco
  frameRate(30);

  for (let i = 0; i < numeroParticulas; i++) {
    posActualX.push(random(width));
    posActualY.push(random(height));
  }

  pasoMax = (1 * width) / 100;
}

function draw() {
  
  fill(255, 10*255/100);
  rect(0, 0, width, height);

  for (let i = 0; i < numeroParticulas; i++) {
    posActualX[i] = posActualX[i] + random(-pasoMax, pasoMax);
    posActualY[i] = posActualY[i] + random(-pasoMax, pasoMax);

    posActualX[i] = constrain(posActualX[i], 0, width);
    posActualY[i] = constrain(posActualY[i], 0, height);

    
    fill(random(255), random(255), random(255));
    ellipse(posActualX[i], posActualY[i], 10, 10);
  }
}

```
