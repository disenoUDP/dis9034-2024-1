# clase-10
Para la solemne quise trabajar con Processing y sus bibliotecas. Me interesaba hacer algo interactivo que tuviera tanto imágenes como sonido. También me gustan mucho los gatos así que, al igual que la Solemne anterior, quise trabajar con uno.

Vi este ejemplo en las referencias:
https://processing.org/examples/mousefunctions.html

![image](https://github.com/SofiaAbarca/dis9034-2024-1/assets/163044808/d7fd83ff-05e1-4d14-bba6-2ef2ecd2a2c7)



Me gustó mucho porque de inmediato me imaginé cómo sería armar un puzzle virtual arrastrando imágenes. Traté de entender el código y se me hizo difícil. Iba a rendirme con esta idea pero después de hablar con el profe decidí intentarlo de nuevo.

Copié el código.
Investigué las variables. Primero entré aquí http://www.sc.ehu.es/sbweb/fisica/cursoJava/fundamentos/introduccion/primero.htm#:~:text=Las%20variables%20del%20tipo%20float,parte%20entera%20y%20parte%20decimal.

![image](https://github.com/SofiaAbarca/dis9034-2024-1/assets/163044808/0eb141f1-472b-4460-b3e2-8e7c452b4f53)

            
Float almacena números con parte entera y decimal. Boolean tiene solo dos valores: verdadero o falso. Int almacena valores enteros. Vi este video de The Coding Train acerca de las expresiones Boolean https://www.youtube.com/watch?v=wsI6N9hfW7E&list=PLRqwX-V7Uu6YqykuLs00261JCqnL_NNZ_


Luego investigué la siguiente parte del código, la cual se encarga de detectar si el cursor está dentro del rectángulo. Y abajo de esto, también la parte del código que le da un trazo blanco al rectángulo si se cumple la condición.

![image](https://github.com/SofiaAbarca/dis9034-2024-1/assets/163044808/c1a9831d-86a9-4fbc-be86-54d86b55e68e)



Luego busqué en las referencias las funciones de mouseDragged, mouseReleased y mousePressed. https://processing.org/reference/mousePressed_.html

Una vez entendí mejor el código me propuse reemplazar el rectángulo por una imagen.
Visité esta página de las referencias sobre cómo trabajar imágenes y los distintos modos de imagen. https://processing.org/reference/imageMode_.html

y vi el video tutorial de The Coding Train https://www.youtube.com/watch?v=-f0WEitGmiw&list=PLzJbM9-DyOZyMZzVda3HaWviHqfPiYN7e&index=44  Aquí también explica cómo añadir, cargar y dibujar imágenes.
Además visité esta página de las referencias https://processing.org/reference/PImage_resize_.html donde se explica como cargar las imágenes y cambiarles el tamaño.

En el video de The Coding Train se mencionaba cómo una imagen funciona casi igual a como funcionaba la figura de rectángulo dentro del código. Esto me sirvió para modificar el código inicial.

1) Añadí la variable de la imagen
   
   ![image](https://github.com/SofiaAbarca/dis9034-2024-1/assets/163044808/27ceab8c-0211-4017-8c83-2f837c3b09f7)


2) Precargué la foto en setup https://processing.org/reference/loadImage_.html
   
   ![image](https://github.com/SofiaAbarca/dis9034-2024-1/assets/163044808/cbd77e92-2680-441d-aaf7-e058b4dce2d4)


3) Agrandé el canvas
   
   ![image](https://github.com/SofiaAbarca/dis9034-2024-1/assets/163044808/05bc22fc-61e3-45df-9be4-3e99277e1a55)


4) Con lo que aprendí en https://processing.org/reference/imageMode_.html y https://processing.org/reference/rectMode_.html reemplacé el rectángulo por la imagen, y le di el modo de (CENTER) en vez de (RADIUS) 

   
 ![image](https://github.com/SofiaAbarca/dis9034-2024-1/assets/163044808/2a0a5974-be3c-4e4c-afa4-1ada7fbd4425)



5) En void draw hice el fondo, mantuve la parte que identifica la posición del cursor, y reemplacé el rectángulo por una foto de un gato. Mantuve las variables pero cambié el tamaño con los dos últimos números.


   ![image](https://github.com/SofiaAbarca/dis9034-2024-1/assets/163044808/099c8548-b9fb-4bb9-905a-a6c9f39eb2fe)



6) Por fin logré cambiar el rectángulo por este gatito. Se le puede arrastrar y soltar en cualquier parte del lienzo. 


 ![image](https://github.com/SofiaAbarca/dis9034-2024-1/assets/163044808/a025e3f8-07b3-4eed-8b0b-4365376c2cfe)


7) Más adelante modifiqué esta variable, de 75 a 100, ya que me di cuenta de que afectaba las zonas de la imagen que se podían arrastrar. Con el 100 puedo arrastrar el gato desde cualquier parte de la foto.

   ![image](https://github.com/SofiaAbarca/dis9034-2024-1/assets/163044808/d3c8ffc5-6e1f-4411-995a-e86e4c020ce6)





Ahora le quise agregar sonido cada vez que se soltara la imagen del gato. Lo practiqué en un nuevo sketch para no alterar lo que había hecho antes.
Vi este video https://www.youtube.com/watch?v=I6fG1wneXWo donde se enseña a importar la biblioteca de sonido de Processing y añadir sonidos a la carpeta del sketch. Luego fui a la referencia de mouseClicked https://processing.org/reference/mouseClicked_.html .
Hice el siguiente código.


![image](https://github.com/SofiaAbarca/dis9034-2024-1/assets/163044808/57c87cc8-9bce-4578-9741-30cd5241193a)



Con este código cada vez que hago click suena un sonido de gota de agua que descargué.
Ahora tocaba intentar que al soltar la imagen del gato hiciera el sonido, así que nuevamente hice otro sketch para practicar. 


1) Copié el código del gato que se puede arrastrar.
  


2) Le Importe la biblioteca de sonido de Processing y el reproductor que permite manipular archivos de audio. https://processing.org/reference/libraries/sound/SoundFile.html

![image](https://github.com/SofiaAbarca/dis9034-2024-1/assets/163044808/99257539-14cf-49c9-80fb-b6d232698420)


3) Cargué el sonido en SetUp

 ![image](https://github.com/SofiaAbarca/dis9034-2024-1/assets/163044808/d0835e11-e4ab-4cc9-b9ad-64e2797525af)


4) En la función de mouseReleased añadí que además de soltar la imagen, reprodujera el sonido.

![image](https://github.com/SofiaAbarca/dis9034-2024-1/assets/163044808/4d74ff1b-8e5c-4fa2-8088-1e3acc0f14fe)


5) Lo probé y funcionó. El gato suena cada vez que se suelta la imagen.



Después de todo esto volví a mi idea del puzzle, así que hice otro sketch para probar.
Corté la imagen del gato, haciendo que le faltara un pedazo.

![image](https://github.com/SofiaAbarca/dis9034-2024-1/assets/163044808/a0edab24-2340-4ad4-b1b5-e0412a07bb6c)



Son 4 imágenes en total.

![image](https://github.com/SofiaAbarca/dis9034-2024-1/assets/163044808/bdccaaa1-a0b0-4874-be7e-5b4f1e9231bf)


La imagen número 4 es la que se puede mover, está ligada a las variables enunciadas al principio.

![image](https://github.com/SofiaAbarca/dis9034-2024-1/assets/163044808/aebd6695-d45a-418c-8b7c-649a63c52b1c)


Ahora me falta añadir sonido a este último sketch

1)

   ![image](https://github.com/SofiaAbarca/dis9034-2024-1/assets/163044808/d210203f-b40d-4faa-8179-257a0feab8c2)

2)

  ![image](https://github.com/SofiaAbarca/dis9034-2024-1/assets/163044808/50c1fc06-cbf4-45f8-b278-31ba80d9e382)

3)

  ![image](https://github.com/SofiaAbarca/dis9034-2024-1/assets/163044808/8b8d4209-c48d-4ac4-b04f-03d5a9fa149d)


4) Funcionó


Otras cosas que investigué pero no utilicé
https://forum.processing.org/one/topic/problem-splitting-an-image-into-several-pieces.html
https://processing.org/reference/mouseWheel_.html
https://www.youtube.com/watch?v=RtAPBvz6k0Y&list=PLzJbM9-DyOZyMZzVda3HaWviHqfPiYN7e&index=23
