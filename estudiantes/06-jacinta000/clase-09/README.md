# clase-09

## solemne 2

comienzo del desarrollo de la solemne dos

1. investigacion de herramientas creadas por sam lavigne
2. FFmpeg
3. como utilizar ffmpeg en google collab

<img width="1195" alt="Captura de pantalla 2024-05-13 a la(s) 15 37 22" src="https://github.com/jacinta000/dis9034-2024-1/assets/163039247/d5513aa7-d2f4-4824-b531-2979736780ba">

refresco de informacion de la clase del 15 de abril

### objetivo de solemne: edicion de video con ffmpeg

- utilizacion de herramienta FFmpeg Explorer creada por sam lavigne
- herramienta para utilizar filtros de ffmpeg
  <img width="1195" alt="Captura de pantalla 2024-05-13 a la(s) 16 08 12" src="https://github.com/jacinta000/dis9034-2024-1/assets/163039247/4ffc6875-7f57-4ac6-9abc-2e745b5a9957">

- decision de utilizar otra plataforma de edicion de video ya que el renderizado toma demasiado tiempo
- preferencia de p5
- bibliotecas de p5

### nuevo objetivo: edicion de videos en p5

- <https://p5js.org/es/libraries/>
- <https://p5play.org/> 
- <https://www.tetoki.eu/asciiart/asciiart_camera.html>
- <https://www.npmjs.com/package/p5.createloop>

como incluir una biblioteca externa a mi archivo
[ascii biblioteca](<https://creative-coding.decontextualize.com/external-libraries/>)

1. descargar libreria
2. upload file -> libreria
3. editar el html, un nuevo script

## proceso

crear un video con el efecto que proporciona la biblioteca asciiart

1. convertir video a png
2. crear un proyecto de animacion con los frames
   referencia: [Image-Based Animation](<https://editor.p5js.org/stungeye/sketches/zEMpTwHvu>)
3. subir las imagenes en una carpeta y utilizar nf() para llamarlas secuencialmente
4. averiguar como utilizar resize() en un array --->

```

  function ajustar() {
  for (let i = 0; i < numFrames; i++) {
    imagenes[i].resize(300, 0);
  }
```

5. ya tengo mi animacion frame by frame lista

https://github.com/disenoUDP/dis9034-2024-1/assets/163039247/c9d17e1d-fd84-4c5d-ac3c-63a05c6c4333


6. ahora utilizare este trabajo como referencia para utlizar la libreria ascii art  https://editor.p5js.org/ronikaufman/sketches/66ApZTs9U
7. no logro comprender bien como utilizar la biblioteca
8. por cuestion del tiempo, no alcanzo a editar el video
9. por hacer: [pixelar](https://editor.p5js.org/ismanfromes/sketches/QYJuxVFTl0)
10. pixelado!!!
https://github.com/disenoUDP/dis9034-2024-1/assets/163039247/2fc7e4b7-fee7-4506-8acd-4c3c86e7ca4d


