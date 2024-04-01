## clase-03
# condicion -> IF

`if` (condicion) { esta es la accion que ocurriria 
} 

tiene resultado SI y NO

`if` (condicion) { esto va a pasar si se cumple 
} `else` { sino, esto va a pasar 
} 

`if` (condicion) { esto va a pasar si se cumple 
} `else if` (condicion 2) { sino se cumple el primer if, si es verdadera esta condicion (2) esta se cumple
} `else` { sino, si todas las condiciones son falsas, esto va a pasar
} 

www.wolframalpha.com -> calculadora / enciclopedia

# pixel

para cubrir el rango visual de colores que el humano puede percibir, las pantallas cuentan con 24 beats por pixel, siendo verde, rojo y azul los colores primarios, que cada uno tiene 8 beats

2 elevado a 8 = 256 --> rojo (0 - 255)
                    --> azul (0 - 255)
                    --> verde (0 - 255)
2 elevado a 24 > a 10 millones (la cantidad aprox de colores que el humano percibe) 

# subir imagenes a p5

sketch files `+`
 - upload
 - subir la imagen
 - crear una funcion `preload`
```js
let fotito;
function preload (){
fotito = loadImage("nombre de la imagen");
}

funtion setup() {
createCanvas(600, 600)

function draw() {
backround(255);
image(fotito, 0, 0, width, height);
```


# funcion

## https://editor.p5js.org/jacinta/sketches/ncFjo3xPO
