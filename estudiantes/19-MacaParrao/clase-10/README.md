# clase-10
**Explicación del concepto e idea:** La animación tiene el sentido de ser utilizada como visualización de una canción para pantallas como por ejemplo la de Spotify. En este caso la animación tiene inspiración principal en la onda que se produce con la música que personalmente relacioné con la estética de la gráfica psicodélica por lo que decidí utilizar la canción "Lucy in the sky with diamonds" de The Beatles la cual es un icónico referente de la música psicodélica. La animación funcion al hacer click en el lienzo, en el que se puede ver al personaje principal que es una mujer con cabello largo que genera la onda de sonido en sus manos, estrellas, un fondo que cambia de color de forma random, el cual tiene planetas y nubes. Además hice que el personaje abra su tercer ojo al presionar cualquier tecla y que  además el cursor sea una flor, todas estas imagenes fueron ilustradas por mi y hechas con la referencia de la gráfica psicodélica. 

**Investigación:** Encontré este tutorial para hacer la visualizacióna con onda de una canción, usé esta idea como base para la animación https://www.youtube.com/watch?v=uk96O7N1Yo0

**Proyecto:** https://editor.p5js.org/MacaParrao/sketches/xYmDkVLFS

**Cargué la canción "Lucy in the sky with diamonds" de The Beatles" usando la referencia de p5js Sound 
https://p5js.org/es/reference/#/p5.SoundFile**

![Captura de Pantalla 2024-05-20 a la(s) 01 17 29](https://github.com/MacaParrao/dis9034-2024-1/assets/163044952/f82d098a-0011-4b45-9e59-7d03fc90283a)


**Hice un canvas de 560 x 680 pixeles y que la amplitud de la onda sea de 0.8, aquí usé la referencia de p5js https://p5js.org/es/reference/#/p5.FFT**

![Captura de Pantalla 2024-05-20 a la(s) 01 23 14](https://github.com/MacaParrao/dis9034-2024-1/assets/163044952/87954d93-f604-44d5-92f5-c48deabd9099)


**También puse un pequeño texto en la esquina inferior derecha que indica que hay que hacer click en el canvas para reproducir la animación
use la referencia de p5js https://p5js.org/es/reference/#/p5.FFT. Además usé las condicionales if y else para que al hacer click en el canvas la animación se reproduzca y se pause**

![Captura de Pantalla 2024-05-20 a la(s) 01 25 45](https://github.com/MacaParrao/dis9034-2024-1/assets/163044952/3fd44842-a90c-4505-ae9c-e6f0c90dc67c)

<img width="202" alt="Captura de pantalla 2024-05-20 a la(s) 15 41 57" src="https://github.com/MacaParrao/dis9034-2024-1/assets/163044952/fb2dc69c-4845-4a17-a59a-1febae085a09">


**Aquí empecé a hacer la visualización de onda con la referencia de p5js de FFT //https://p5js.org/es/reference/#/p5.FFT y el video que encontré en youtube  //https://www.youtube.com/watch?v=uk96O7N1Yo0. Aquí puse que el color de la onda fuera amarillo y el grosor sea 4**

![Captura de Pantalla 2024-05-20 a la(s) 01 29 31](https://github.com/MacaParrao/dis9034-2024-1/assets/163044952/3c6dcdd9-3452-40ea-9d0d-fca7f0fd62bb)


**Aquí hice la primera mitad de la onda, que es una semicircunferencia en el centro del lienzo**

![Captura de Pantalla 2024-05-20 a la(s) 01 32 18](https://github.com/MacaParrao/dis9034-2024-1/assets/163044952/fd65adab-9ae1-4916-a5c5-4e82c384a21a)

<img width="513" alt="Captura de pantalla 2024-05-20 a la(s) 15 44 58" src="https://github.com/MacaParrao/dis9034-2024-1/assets/163044952/da3b334e-6e7c-4caf-8ab6-72bffacc6488">


**Después copié y pegué el codigo pero cambie los datos de let (x, y) para hacer la onda al lado opuesto y así crear la circunferencia de onda completa**

![Captura de Pantalla 2024-05-20 a la(s) 01 35 22](https://github.com/MacaParrao/dis9034-2024-1/assets/163044952/5ae3ac99-eb64-4c08-8adf-9d2ae1e6d4d2)

<img width="533" alt="Captura de pantalla 2024-05-20 a la(s) 15 45 43" src="https://github.com/MacaParrao/dis9034-2024-1/assets/163044952/93fbfa91-8564-4896-b3e5-d4dc86b12416">


**Después usé un rectangulo del tamaño del lienzo para fondo, con colores planos, pero que cambiaran de forma random dentro de una paleta de colores elegida por mi, además use frameRate para que los colores cambiaran de 6 cuadros por segundo. Puse los códigos RGB de los colores para que el fondo vaya cambiando. Usé referencias de p5js https://p5js.org/es/reference/#/p5/random y un ejercicio hecho en p5js https://editor.p5js.org/hosken/sketches/I_4VSTotf**

![Captura de Pantalla 2024-05-20 a la(s) 02 01 13](https://github.com/MacaParrao/dis9034-2024-1/assets/163044952/9cfbbc6e-bd42-4243-9023-bbae72a19a35)


**Aquí esta el código de los colores random en la function draw donde el rectangulo se ubica al medio y mide el tamaño del lienzo**

![Captura de Pantalla 2024-05-20 a la(s) 02 03 47](https://github.com/MacaParrao/dis9034-2024-1/assets/163044952/1965eb19-217a-4a7c-b53c-9500d2e3f5d9)

<img width="470" alt="Captura de pantalla 2024-05-20 a la(s) 15 48 19" src="https://github.com/MacaParrao/dis9034-2024-1/assets/163044952/c3e019f3-8fb8-41a4-8031-0923ca22a61b">


**Después de ver que la onda y el fondo funcionaran, comencé a hacer las ilustraciones inspiradas en la gráfica psicodélica, aquí hay algunas referencias de las cuales me inspiré**

https://www.pinterest.cl/pin/352195633371494413/

https://www.pinterest.cl/pin/28358672647590582/

https://www.pinterest.cl/pin/5911043255357565/

https://www.pinterest.cl/pin/3448137207552134/

**Cargué todas las ilustraciones que formaban la composición, como la del personaje principal, el tercer ojo, una estrella, planetas para el fondo y la flor**

![Captura de Pantalla 2024-05-20 a la(s) 01 50 15](https://github.com/MacaParrao/dis9034-2024-1/assets/163044952/1196f41c-8f6c-4c68-be88-778711ba55f6)

**Y puse las ilustraciones en el orden que las necesitaba**

![Captura de Pantalla 2024-05-20 a la(s) 01 51 33](https://github.com/MacaParrao/dis9034-2024-1/assets/163044952/ac115507-3bd1-416a-b5a1-fe04151ea36f)

<img width="536" alt="Captura de pantalla 2024-05-20 a la(s) 15 54 17" src="https://github.com/MacaParrao/dis9034-2024-1/assets/163044952/4da7da87-1cb9-425f-aa61-5d4e2d8599da">


**-Puse la imagen de la mujer con el cabello largo en el centro del lienzo.**

**-Use dos veces la misma ilustración de la estrella e hice que apareciera de forma random en el lienzo.**

**-Puse la ilustración de los planetas y la nube para el fondo del lienzo.**

**-Puse la ilustración de la flor e hice que siguiera el cursor del mouse, le puse -40 para que la imagen quedara justo en el centro
del cursor.**

**-Puse la ilustracion del tercer ojo y usé la condicional if para que al presionar cualquier tecla aparezca y tenga este efecto como que el ojo se abra**

![Captura de Pantalla 2024-05-20 a la(s) 01 56 50](https://github.com/MacaParrao/dis9034-2024-1/assets/163044952/ef9e4b37-32a7-406b-a06d-9527a6d86763) 

<img width="533" alt="Captura de pantalla 2024-05-20 a la(s) 15 54 54" src="https://github.com/MacaParrao/dis9034-2024-1/assets/163044952/5a5f8908-afa5-4415-8a97-144196dbc433">

