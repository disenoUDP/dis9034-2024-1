#### clase-10
# solemne 2

## idea del proyecto

el objetivo de mi proyecto es crear un código en p5.js que capture el video de la cámara y aplique el filtro *threshold* ante un sonido fuerte

***
### proceso del código

1. declaramos las variables: *mic* y *threshold*

```javascript
// mic será la variable que se utilizará para acceder al micrófono
let mic;
// valor que define el nivel de sonido necesario para activar el filtro
// un valor más alto significará que necesita un sonido más fuerte
let threshold = 0.08;
```

#### function setup()
2. creamos un canvas de (650, 500) pixeles

```javascript
function setup() {
  // crear un lienzo de 650 por 500 pixeles
  createCanvas(650, 500);
```
3. captura de video

```javascript
// captura la imagen de la cámara del computador
  // se utiliza "flipped" para voltear horizontalmente el video, visto en https://p5js.org/es/reference/#/p5/createCapture
  camaraWeb = createCapture(VIDEO, { flipped:true });

  // se establece el tamaño del video capturado
  camaraWeb.size(650, 500);

  // oculta la vista previa de la cámara
  camaraWeb.hide();
```
4. captura de audio

```javascript
  // accede al micrófono del dispositivo.
  mic = new p5.AudioIn();

  // inicia la captura de audio
  mic.start();
```
#### function draw()

5. definimos como blanco el color del fondo `background(255);`

6. proyectamos la imagen capturada por la cámara en el canvas, ocupando toda su área

```javascript
image(camaraWeb, 0, 0, width, height);
```

7. se obtiene el nivel de volumen actual del micrófono, **volumen** será la variable que equivale al nivel de volumen actual del micrófono
   
```javascript
let volumen = mic.getLevel();
```

8. esta condición verifica si el nivel de volumen actual (volumen) es superior al valor umbral (threshold) establecido al inicio

```javascript
  // se implementa una condición para verificar si el nivel de volumen supera el umbral establecido,
  if (volumen > threshold) {
```
#### si se cumple la condición:

```javascript
    // obtiene la imagen capturada por la cámara web y la "almacena" en una variable llamada camara
    let camara = capturaWeb.get();
    // aplica el filtro THRESHOLD a la imagen almacenada en camara
    camara.filter(THRESHOLD);
    // proyecta la imagen con filtro
    image(camara, 0, 0, width, height);
  }
}
```

***
### referentes

- mi referente para activar el audio <https://www.youtube.com/watch?v=q2IDNkUws-A&t=307s> así supe cómo acceder al micrófono del dispositivo, comenzar la captura del audio y obtener el volumen actual del micrófono.
  `mic = new p5.AudioIn();` `mic.start();` `let volumen = mic.getLevel();`

- mis referentes para activar el video fueron <https://www.youtube.com/watch?v=hHZcIMppkFc&t=835s> y <https://p5js.org/es/reference/#/p5/createCapture> así supe cómo acceder a la cámara, voltear el video (para que sea como un espejo), establecer el tamaño y ocultar la vista previa de video que muestra p5

- mi referente para el uso de *if* <https://es.javascript.info/ifelseZ>

- mi referente de uso de filtros <https://p5js.org/es/reference/#/p5.Image/filter>

***
### link de acceso:

<https://editor.p5js.org/danielasalamanca/sketches/7YY-ADQv_V>
