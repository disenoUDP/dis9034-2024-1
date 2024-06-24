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

![doc-1](https://github.com/daniellasarai/dis9034-2024-1/assets/163043965/4cf85af1-6235-4c86-9c16-a7457849e631)

- Dentro de funtion draw() se llama a loadPixels lo cual permite realizar un mapeo del video pixel a pixel.
- Generar una función que permita separar los canales rgb para que estos se traduzcan en densidades luego.
- Hacer un promedio de estos canales con avg.

![doc-2](https://github.com/daniellasarai/dis9034-2024-1/assets/163043965/5ecd822e-0f21-4acf-bff5-c94932d7a10e)

![doc-3](https://github.com/daniellasarai/dis9034-2024-1/assets/163043965/e86a6c45-5cfa-489f-9f8f-b9b4c3d672f2)

- Finalmente en el espacio de style.css agregar el color de fondo,la tipografía, su color espaciado y tamaño.

![doc-4](https://github.com/daniellasarai/dis9034-2024-1/assets/163043965/821379a5-e4bf-47e6-b2fd-076acb40b975)

- Dando este resultado final:

https://github.com/daniellasarai/dis9034-2024-1/assets/163043965/a64c31a0-e9b1-468c-adbe-3be08557b702

[Sketch - ASCII Video Cámara](https://editor.p5js.org/daniellasarai/sketches/tij33uGJv)

