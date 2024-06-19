# clase-10

---

## 20 de mayo del 2024

Busqué en p5 libraries p5play <https://p5play.org/> una biblioteca llamada p5play.
En p5play encontre juegos hechos con p5 y explorando encontre <https://p5play.org/lang/es/learn/index.html> que tiene tutoriales donde aprender como programar un juego.

## Cargar archivo HTML con p5.js

Primero coloque archivo HTML de p5.play en p5 index y asi poder trabajar con los comandos de p5play.
![Captura de pantalla 2024-05-20 164738](https://github.com/Simonpso/dis9034-2024-1/assets/163044785/0881340d-7570-4c97-945a-7eacc9f66b73)

![Captura de pantalla 2024-05-20 164901](https://github.com/Simonpso/dis9034-2024-1/assets/163044785/959ef1fb-9fdf-4aaf-bd2e-73e8ac85dd72)
establecer el color del fondo.

## Pasos del código

![Captura de pantalla 2024-05-20 165658](https://github.com/Simonpso/dis9034-2024-1/assets/163044785/05baa933-5330-4c3e-b35c-cfd96a04315b)
new Canvas(800, 800); -> tamaño del lienzo.
world.gravity.y = 10; -> es el código que se aplica para generar gravedad al juego y que asi este se aplique al sprite del jugador.

![Captura de pantalla 2024-05-20 170012](https://github.com/Simonpso/dis9034-2024-1/assets/163044785/da107dfc-829c-4cc3-bb72-2c9fa3a48463)

````javascript
//Base del codigo sacada de https://p5play.org/lang/es/learn/sprite.html?page=0
sprite = new Sprite();
sprite.width = 50;
sprite.height = 50;
sprite.color = "black";
sprite.stroke = "white";
sprite.strokeWeight = 2;

![Captura de pantalla 2024-05-20 170745](https://github.com/Simonpso/dis9034-2024-1/assets/163044785/6eb59a46-fdcf-46f7-afff-183a115c1e54)

Piso generado para que interactue con el sprite y asi este no se desvanezca.

```javascript
//Base del codigo sacada de https://p5play.org/lang/es/learn/sprite.html?page=1
floor = new Sprite(); //definir el piso como un nuevo sprite
floor.y = 600; //definir a que altura del lienzo se encuentra el piso en el eje y
floor.w = 900; //definir las medidas del piso en el eje x
floor.h = 200; // definir el grosor del piso
floor.collider = 'static';
````

![Captura de pantalla 2024-05-20 171235](https://github.com/Simonpso/dis9034-2024-1/assets/163044785/4ac6c3b3-cc5a-4ce6-b5e1-7924e33b7cce)
Funcion que determina el movimiento hacia la izquierda y a la derecha del sprite.

```javascript
//Base del codigo sacada de <https://p5play.org/lang/es/learn/sprite.html?page=3>
function keyPressed() {
  if (kb.pressing('left')) {
    sprite.vel.x = -5;
  } else if (kb.pressing('right')) {
    sprite.vel.x = 5;
  } else {
    sprite.vel.x = 0;
  }
}
```
