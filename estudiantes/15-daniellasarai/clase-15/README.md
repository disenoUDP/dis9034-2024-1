# clase-15
## Examen 
> Para el examen final decidí trabajar con la herrammienta de [ASCII](https://www.tetoki.eu/asciiart/)
- Comencé a investigar cómo funcionaba y de qué manera podía aplicar esta herramienta, utilizando el [video tutorial](https://youtu.be/55iwMYv8tGI?si=27dvJOpGSa8W4LV-) de [The Coding Train](https://thecodingtrain.com/) llegando a las siguientes pruebas:

![ASCII Imagen Flor](https://github.com/daniellasarai/dis9034-2024-1/assets/163043965/09624524-cace-4522-be7a-8a1dc5f90429)
- [ASCII Imagen Flor](https://editor.p5js.org/daniellasarai/sketches/_CxYBktuh)

![ASCII Imagen Flor 2](https://github.com/daniellasarai/dis9034-2024-1/assets/163043965/4672341b-2d48-45ba-b7a5-5f995df75e8e)
- [ASCII Imagen Flor 2](https://editor.p5js.org/daniellasarai/sketches/0igG_06mG)

> Para luego hacer lo que realmente me interesaba lograr, generar un video a través de cámara con ASCII, que explicaba como hacerlo en el mismo video tutorial de The Coding Train.
- Primero se genera la selección de caracteres que generarán una densidad que se traspasará a la densidad de rgb que hay por pixel.
- Luego se permite al video y al asciiDiv funcionar para luego llamarlos, let; y function setup(), se crea captura de video y se le dan medidas.

```javascript
// Video Cámara ASCII
//
// Sketch basado en el video tutorial de The Coding Train  https://youtu.be/55iwMYv8tGI?si=JPM8JiAxjQ4Ufuz7

//Densidad a través de caracteres

const density = "Ñ@#W$9876543210?!abc;:+=-,._  ";

let video;
let asciiDiv;

// Agregar función para utilizar video cámara

function setup() {
  asciiDiv = createDiv();
  noCanvas();
  video = createCapture(VIDEO);
  video.size(64, 48);
}

```

![doc-1](https://github.com/daniellasarai/dis9034-2024-1/assets/163043965/4cf85af1-6235-4c86-9c16-a7457849e631)

- Dentro de funtion draw() se llama a loadPixels lo cual permite realizar un mapeo del video pixel a pixel.
- Generar una función que permita separar los canales rgb para que estos se traduzcan en densidades luego.
- Hacer un promedio de estos canales con avg.

```javascript
function draw() {
 
// Hacer mapeo de pixel por pixel para que cada uno dentro del rgb tenga un caracter asignado
// Llamar a loadPixels(); 

  video.loadPixels();
  let asciiImage = "";
  for (let j = 0; j < video.height; j++) {
    for (let i = 0; i < video.width; i++) {
      const pixelIndex = (i + j * video.width) * 4;
      const r = video.pixels[pixelIndex + 0];
      const g = video.pixels[pixelIndex + 1];
      const b = video.pixels[pixelIndex + 2];   
      
      // Hacer un promedio del brillo basandose en los valores rgb
      
      const avg = (r + g + b) / 3;
```

![doc-2](https://github.com/daniellasarai/dis9034-2024-1/assets/163043965/5ecd822e-0f21-4acf-bff5-c94932d7a10e)

```javascript
      
// Mapear el valor de brillo para pasarlo a los caracteres dentro del rango
// Agregar la función floor para que los números no sean intermedios decimales, para que sean enteros
      
      const len = density.length;
      const charIndex = floor(map(avg, 0, 255, 0, len));
      
      const c = density.charAt(charIndex);
      if (c == " ") asciiImage += "&nbsp;";
      else asciiImage += c;
      
      //textSize(w);
      //textAlign(CENTER, CENTER);
      //text(density.charAt(charIndex), i * w + w * 0.5, j * h + h * 0.5);
      
    }
    asciiImage += '<br/>';
  }
  asciiDiv.html(asciiImage);
}
```

![doc-3](https://github.com/daniellasarai/dis9034-2024-1/assets/163043965/e86a6c45-5cfa-489f-9f8f-b9b4c3d672f2)

- Finalmente en el espacio de style.css agregar el color de fondo,la tipografía, su color espaciado y tamaño.

```css
html, body {
  margin: 0;
  padding: 0;
  background-color: #001ADB;
  font-family: 'Courier';
  color: #FFF;
  font-size: 12pt;
  line-height: 10pt;
}

canvas {
  display: block;
}

```

![doc-4](https://github.com/daniellasarai/dis9034-2024-1/assets/163043965/821379a5-e4bf-47e6-b2fd-076acb40b975)

- Dando este resultado final:

https://github.com/daniellasarai/dis9034-2024-1/assets/163043965/a64c31a0-e9b1-468c-adbe-3be08557b702

[Sketch - ASCII Video Cámara](https://editor.p5js.org/daniellasarai/sketches/tij33uGJv)

Aquí están los enlaces a los 3 códigos que desarrollé:

[ASCII_Imagen_Flor_2024_06_24_19_18_26](./ASCII_Imagen_Flor_2024_06_24_19_18_26)

[ASCII_Imagen_Flor_2_2024_06_24_19_18_17](./ASCII_Imagen_Flor_2_2024_06_24_19_18_17)


