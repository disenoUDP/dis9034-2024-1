# clase-10
# Patrones Infinitos - Solemne 02 “Programación Creativa Multimedia”.

Este proyecto genera patrones infinitos a partir de una paleta de colores proporcionada con una URL de la página coolors.co. Cada vez que el usuario hace clic en el lienzo, se generan nuevos patrones utilizando una combinación aleatoria de colores de la paleta y un patrón aleatorio sacado de la librería “p5.pattern”.

## Funcionamiento

El proyecto está escrito en p5.js y el flujo de funcionamiento del programa es el siguiente:

1. Al cargar la página, se muestra un lienzo negro con un mensaje central que indica al usuario que haga clic para descubrir los patrones infinitos.

2. Cuando el usuario hace clic en el lienzo, se activa la generación de patrones. Se selecciona una nueva combinación aleatoria de colores de la paleta y se dibujan los patrones en el lienzo.

3. Los patrones se generan utilizando una variedad de funciones predefinidas de la librería p5.pattern por la que producen formas y texturas interesantes. Estas funciones incluyen patrones de ruido, rayas, círculos, polígonos y más, las cuales estan tomadas del Github de Sayama: https://github.com/SYM380/p5.pattern/blob/main/p5.pattern.js

4. Cada vez que el usuario hace clic, se generan nuevos patrones con una combinación única de colores, lo que proporciona una experiencia visualmente diversa y estimulante.

## Paleta de Colores

La paleta de colores se define inicialmente mediante una URL de colores en formato hexadecimal. Esta URL se proporciona como entrada al programa y se convierte en una matriz de colores utilizables.

## Ejecución del Proyecto

Para ejecutar el proyecto, simplemente abre el archivo `index.html` en un navegador web compatible con JavaScript. Luego, haz clic en el lienzo para comenzar a explorar los patrones infinitos generados.

## Dependencias

El proyecto depende de la biblioteca p5.pattern para la generación de las gráficas interactivas. Esta biblioteca se incluye en el repositorio y no se requiere ninguna instalación adicional.

## Créditos

Este proyecto fue desarrollado por Martín Núñez (https://github.com/M4rtusi) como parte de la solemne 02 de la asignatura de Programación Creativa Multimedia.
