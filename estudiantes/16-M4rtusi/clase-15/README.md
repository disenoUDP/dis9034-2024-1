# Documentación Examen Programación Creativa Multimedia

## Referencias
Inspiración: 
https://github.com/jeff2957/Music-Visualization--bubble-
Tomé como inspiración este proyecto que replica la burbuja de voz de Siri, pero que la adapta para que sea audio reactiva.

Librería P5.Sound:
https://p5js.org/es/reference/#/libraries/p5.sound

Tutoriales de @The Coding Train para el manejo de la amplitud del sonido. 
https://www.youtube.com/watch?v=NCCHQwNAN6Y
https://www.youtube.com/watch?v=jEwAMgcCgOA

## Descripción
El proyecto "4ngelNumb3rzzz visualizer" realizado por Martín Núñez (@M4rtusi) en p5.js combina música, imágenes y gráficos interactivos para crear una visualización multimedia. El proyecto responde tanto a la interacción del usuario como a la música reproducida.

## Versiones Utilizadas
- **Versión de p5.js:** v1.4.0
- **Web Editor:** v2.13.2

## Objetivo
El objetivo principal del proyecto es explorar elementos auditivos y visuales, utilizando p5.js para generar gráficos y efectos visuales que respondan a la música reproducida, en este caso a la canción “4ngelNumb3rzzz” de Team Mekano. La interacción del usuario mediante clics permite controlar la reproducción de la música y afectar la visualización.

## Funcionalidades Principales

### Variables Globales
- `song`, `analyzer`: Variables para la canción y el analizador de amplitud.
- `img`: Variable para la imagen de inicio.
- `play_state`: Variable booleana que indica el estado de reproducción de la canción.
- `palette`: Paleta de colores definida con seis colores hexadecimales.

![variablesglobales](https://github.com/M4rtusi/dis9034-2024-1/assets/163044473/80e0ea60-4b7c-4045-b4e7-5ee47a97f8bc)

### Precarga de Recursos (`preload()`)
Antes de iniciar la aplicación, se cargan una imagen (`portadainicio.jpeg`) y una canción (`4ngelNumb3rzzz Tropical Gatekeeping Remix.mp3`). Esto asegura que los recursos estén disponibles inmediatamente al comenzar la interacción del usuario.

![sketchfiles](https://github.com/M4rtusi/dis9034-2024-1/assets/163044473/95ea8099-fba4-494e-85b9-a980ec90069c)

![preload](https://github.com/M4rtusi/dis9034-2024-1/assets/163044473/c80b7a69-d940-4327-ae7a-a2cc8cdbf92c)

### Configuración Inicial (`setup()`)
En la función `setup()`:
- Se establece un lienzo (`canvas`) con dimensiones de 750x500 píxeles para la visualización.
- El modo de color se configura a RGB para poder utilizar los colores hexadecimales definidos en la paleta.

![colormode](https://github.com/M4rtusi/dis9034-2024-1/assets/163044473/c4e1167d-656d-4b12-b1ae-fe5c21520e54)

![palette](https://github.com/M4rtusi/dis9034-2024-1/assets/163044473/7ae4cd0e-fc67-412f-8b79-2c15d927ed97)

- Se inicializan dos analizadores de sonido:
  - `p5.Amplitude()` para medir la amplitud de la canción.
  - `p5.FFT()` para realizar un análisis de frecuencia de la canción.
- Se muestra la imagen de inicio como fondo del lienzo utilizando `image(img, 0, 0)`.

![createcanvas](https://github.com/M4rtusi/dis9034-2024-1/assets/163044473/09e5cbda-9d53-4330-beae-3b99007e0cf5)

![analyzer](https://github.com/M4rtusi/dis9034-2024-1/assets/163044473/e1d408d0-c8a2-4fe0-9f06-4a902e6a08f5)

### Interacción del Usuario (`mousePressed()`)
La función `mousePressed()` maneja la interacción del usuario con el lienzo:
- Si la canción está reproduciéndose (`song.isPlaying()` es verdadero), hacer clic detiene la canción (`song.stop()`) y restaura la imagen de fondo.
- Si la canción no está reproduciéndose, hacer clic reproduce la canción (`song.play()`) y también restaura la imagen de fondo.

![mousepressed](https://github.com/M4rtusi/dis9034-2024-1/assets/163044473/1e66c0c9-350a-4756-92cc-1b479f19549a)

### Actualización Visual en Tiempo Real (`draw()`)
En la función `draw()`:
- Se obtiene el nivel de amplitud RMS de la canción usando `analyzer.getLevel()`. Este valor representa la intensidad del sonido en tiempo real.

![getlevel](https://github.com/M4rtusi/dis9034-2024-1/assets/163044473/f7b957d5-607a-4206-a90f-910d43e62e64)

- Se mapea este valor para ajustar dinámicamente la opacidad del color seleccionado entre 50 (baja) y 255 (alta), lo que permite crear efectos de transparencia y profundidad en las elipses generadas.
- Se selecciona un color de la paleta basado en el nivel de amplitud RMS y se ajusta su opacidad usando `selectedColor.setAlpha(alpha)`.

![colorindex](https://github.com/M4rtusi/dis9034-2024-1/assets/163044473/bb90c9f3-ffbc-495e-9f0f-c42c780cd654)

- Se dibujan elipses en el lienzo si la canción está reproduciéndose:
  - Se calcula la posición y el tamaño de cada elipse según la amplitud del sonido y se ajusta dinámicamente con el mapeo de tamaño (`map(rms, 0, 1, minSize, maxSize)`).
 
![songisplaying](https://github.com/M4rtusi/dis9034-2024-1/assets/163044473/5eec804e-2c7d-4ca3-8173-ffe5325311c4)

![mapsize](https://github.com/M4rtusi/dis9034-2024-1/assets/163044473/ad31fde5-2688-4f72-8e8a-227debe10aef)

- Si la canción no está reproduciéndose, se restablece el contador de frames (`frameCount`) a cero para reiniciar cualquier animación cuando se reanude la reproducción.

![framecount](https://github.com/M4rtusi/dis9034-2024-1/assets/163044473/67d9debe-d335-49c8-8109-7984127e6352)

## Funciones Utilizadas
- `preload()`: Carga de la imagen y la canción antes de iniciar la aplicación para asegurar una carga fluida de recursos.
- `setup()`: Configuración inicial del lienzo, analizadores de sonido y visualización de la imagen de inicio.
- `mousePressed()`: Gestión de la interacción del usuario al hacer clic en el lienzo para reproducir o detener la canción, afectando también la visualización.
- `draw()`: Actualización continua del lienzo para mostrar las visuales que responden a la música reproducida, utilizando técnicas de mapeo para ajustar la apariencia visual en tiempo real.

## Proyecto en funcionamiento

https://github.com/M4rtusi/dis9034-2024-1/assets/163044473/97225b88-e2f3-4d46-8b1f-605a0aae9cab



