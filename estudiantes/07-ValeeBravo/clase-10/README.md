# clase-10
La idea principal del proyecto es deconstruir una imagen mediante círculos que tendrán los mismos colores de los pixeles de la imagen, cada píxel explota en un círculo de 15 x 15 píxeles y se van sumando aleatoriamente en el área de trabajo, en conjunto con la generación de sonidos interactivos.

 En este caso, usaremos una fotografía de las Catedrales de Mármol, un Santuario de la Naturaleza ubicado a las orillas del Lago General Carrera en la región de Aysén, elegí esta imagen ya que es un lugar al que quiero en el futuro. 
 
 A medida que el usuario mueve el mouse, se produce un sonido "Marrón" o "Brown" que varía según la dirección en la que se desplaza por la imagen. Cuando se desplaza hacia arriba, se crea un sonido fuerte que refleja el ruido del viento, y cuando se va acercando al agua, se produce un sonido bajo o nulo que representa lo que se escucha bajo del mar, en conjunto al movimiento del mouse también se crea una "estela" de círculos con distintos colores de los píxeles de la misma imagen. Cuando el mouse permanece quieto, se reproduce mediante cualquier tecla del teclado un relajante sonido de mar, entregando una experiencia que combina visualización y sonido. 
 

-Referencias de dónde me inspiré para hacer el proyecto: 

-Investigación en librerías de sonido de processing https://processing.org/reference/libraries/sound/index.html 

-Investigación de imagenes y como tratarlas en https://processing.org/reference/image_.html 

-Referencia de efecto principal de círculos en la imagen sacada de "Happy coding" efecto "Setting Pixels". https://happycoding.io/tutorials/processing/images 

-Referencia de como agregar sonido https://www.youtube.com/watch?v=_4FLlS9TzZw 

![image](https://github.com/ValeeBravo/dis9034-2024-1/assets/163045037/d0b8dadb-6476-4887-9425-73220c113f40)


Dato para que se puedan almacenar y cargar las imágenes en processing.

![image](https://github.com/ValeeBravo/dis9034-2024-1/assets/163045037/fcdd3285-9037-46bf-bc20-88b851125e9f)

 //Librería de sonido de processing. Esto es para que funcione cargar un sonido en el proyecto. 

![image](https://github.com/ValeeBravo/dis9034-2024-1/assets/163045037/7f3b47f8-711c-4115-a129-a39ef4a435dd)

Objeto de la librería que se llamará "sonido" (se puede poner cualquier nombre, es sólo para identificarlo más adelante). 
 
![image](https://github.com/ValeeBravo/dis9034-2024-1/assets/163045037/187dcf90-59f4-4941-a3cc-1389a36eac4f)


Ruido "Marrón llamado "noise", el ruido marrón se puede sacar de la biblioteca de processing de: Ejemplos en Java de processing: Sound- Noise-Brown
https://processing.org/reference/libraries/sound/BrownNoise.html 

![image](https://github.com/ValeeBravo/dis9034-2024-1/assets/163045037/7e51e664-2b1e-4c47-a9bc-030b525c4c86)

Área de trabajo de 1000 x 600 píxeles. El área de trabajo es del tamaño de la imagen de Catedrales de Mármol. 

![image](https://github.com/ValeeBravo/dis9034-2024-1/assets/163045037/cbff6b76-017f-4d3e-b3b3-56dbfb03d5ee)

Cargué una imagen a processing de Catedrales de Mármol. La imagen es sacada de internet proveniente de una página de servicios de tour al sur de Chile, esta imagen es llamada "marmol.jpg". https://www.servituroffi.com/producto/capilla-de-marmol/ 

![image](https://github.com/ValeeBravo/dis9034-2024-1/assets/163045037/4bb0e751-e05c-40ff-b2d2-9be5fff344b7)


La imagen se encuentra en medio del área de trabajo, permite que todos los círculos que estan encima de la imagen se sumen mientras pasa el tiempo. La imagen en 0, 0 (image, 0, 0, width, height) es para ajustarla en el medio del área de trabajo. 

![image](https://github.com/ValeeBravo/dis9034-2024-1/assets/163045037/23282692-3314-465f-b012-810b7c719d66)

Objeto que se llama "sonido" es igual a SoundFile que permite cargar el sonido "ocean.mp3" cargado de una página de internet. : https://pixabay.com/es/sound-effects/search/mar/

![image](https://github.com/ValeeBravo/dis9034-2024-1/assets/163045037/058bc516-1f5b-4d48-8efc-0933404e1047)

Biblioteca que se encuentra en processing que permite la reproducción de ruido marrón. 

![image](https://github.com/ValeeBravo/dis9034-2024-1/assets/163045037/7320126f-d7f5-43c5-8d1b-d0c391f11710)

  Color c es para obtener el color de la posición donde se encuentre el mouse.
![image](https://github.com/ValeeBravo/dis9034-2024-1/assets/163045037/034e3725-f9f7-4247-a86a-51f0add8d3db)

Relleno (color) del círculo 30 x 30 que sigue al mouse. La (c) es para que el círculo se rellene con el color de cada pixel que toca.  

![image](https://github.com/ValeeBravo/dis9034-2024-1/assets/163045037/89c59ae7-76c2-4e5c-84e4-1e079a76e47c)

 Dibujar un círculo, mide 30 x 30 píxeles. Este círculo deja una "estela" de círculos por toda la imagen por donde pasa el mouse. Esta función hace que se pueda dibujar con los círculos. 

![image](https://github.com/ValeeBravo/dis9034-2024-1/assets/163045037/af5e6d5b-88e8-433a-ac81-9d2287756813)


Variable de número donde "x" es la parte del ancho de la imagen, la "y" es la altura de la imagen y es para que funcione color más adelante. 
  
![image](https://github.com/ValeeBravo/dis9034-2024-1/assets/163045037/f852795f-3266-4d9a-afb0-6c84bf6afb12)

Color del trazo de los círculos que apareceran de uno a uno de 15 x 15 píxeles. Stroke es el trazo, NoStroke significa que el círculo no tiene trazo alrededor. 
![image](https://github.com/ValeeBravo/dis9034-2024-1/assets/163045037/e774c920-cdf7-4074-b824-436959fd1e3d)

Color del círculo de 15 x 15 que aparecen aleatoriamente en la imagen, los círculos van explotando cada vez que pasan por un color de píxel de la imagen. 

![image](https://github.com/ValeeBravo/dis9034-2024-1/assets/163045037/c554c406-da89-47d7-8155-7593918f9d8b)


Círculo que aparecen y se suman en la pantalla de porte 15 x 15 píxeles.
![image](https://github.com/ValeeBravo/dis9034-2024-1/assets/163045037/ce185df7-7659-4016-8866-fa158238674a)

Se asigna el ancho del sonido que va desde izquierda a derecha MouseX de 1 a 1.0. 
Cuando la flecha se va a la derecha tiene una frecuencia de 1 y cuando se va a la derecha tiene una frecuencia de 1, 1.0. Es un sonido muy similar.  Referencia biblioteca de processing: https://processing.org/reference/libraries/sound/BrownNoise.html 

![image](https://github.com/ValeeBravo/dis9034-2024-1/assets/163045037/0da624e4-917f-4624-9adf-e82e62d0e080)

Se asigna la amplitud del sonido. MouseY de 1 a 0 para amplitud. Cuando la flecha del mouse va hacia arriba en la imagen, en las rocas de marmol se puede escuchar un ruido mucho más fuerte reflejando al viento y cuando la flecha va hacia abajo cerca del mar no se escucha ni un sonido reflejando lo que se escuha abajo del mar.  Referencia biblioteca de processing: https://processing.org/reference/libraries/sound/BrownNoise.html 

![image](https://github.com/ValeeBravo/dis9034-2024-1/assets/163045037/cacbec21-b807-45f4-923d-2c62c7794db9)

KeyPressed permite presionar una tecla aleotoria para reproducir un sonido, en este caso sonido "ocean.mp3". Sonido.loop es para que sonido = ocean.mp3 suene en loop. Al apretar cuanlquier tecla se reproduce "ocean.mp3" un sonido del mar relajante sacado de internet. https://pixabay.com/es/sound-effects/search/mar/


![image](https://github.com/ValeeBravo/dis9034-2024-1/assets/163045037/2256dca4-c89f-4f04-980b-74df4fa5f319)

