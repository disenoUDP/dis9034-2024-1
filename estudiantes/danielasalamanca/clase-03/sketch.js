function setup() {
  createCanvas(400, 400);
  frameRate(7);
}

function draw() {
  background(245, 239, 66);
  (random(width),random(height));
  
  let comida = ['🍟', '🍕', '🌭'];

  let choice = random(comida);

  textAlign(CENTER);
  textSize(80);

  text(choice, random(width),random(height));

  //traté de hacer un proceso similar al visto en clases pero con emojis
  //lo de los emojis lo saqué de <

}