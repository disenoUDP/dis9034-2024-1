# Solemne II

- [Sketch P5.js](https://editor.p5js.org/cielqz/sketches/kPYFXThiQ): se crea salvapantallas en el que se aprecian figuras cúbicas con una imagen capturada en vivo en cada uno de sus laterales. Esta figura rota en sus ejes x, y y z en diferentes velocidades. Se añade un fondo color azul y puntos en tamaños pequeños que aparecen de manera aleatoria en el lienzo, simulando pequeños flashes en colores blanco y amarillo. Se pretende disminuir la velocidad en la que aparecen los pequeños flashes sin modificar la velocidad de rotación de los cubos.
- Referencias: [createCapture](https://p5js.org/es/reference/#/p5/createCapture), [texture](https://p5js.org/es/reference/#/p5/texture), [random](https://p5js.org/es/reference/#/p5/random), 
  
## Proceso
- Se añaden elementos que formarán parte de la composición: webcam, corazón, círculo, glitter y confetti.
  
  ![040E61A0-E70D-4057-9611-6D3004FB3D40](https://github.com/cielqz/Rep/assets/163901464/1784a46f-6f39-40b3-a0c4-5eaf6e759419)

- se crea lienzo a trabajar en tono negro, se cargan imágenes previas y webcam en vivo.

  ![72922EF2-67ED-4E8C-8873-D5A91A98AC89](https://github.com/cielqz/Rep/assets/163901464/25ce95cc-a5de-446a-9a64-bfe955a97ffe)

- Las imágenes de la composición aparecen con pequeñas variaciones en sus dimesiones y de manera aleatoria en el lienzo, generando el efecto de destello. Cada acción aparece separada por respectivos sus push(); pop();.

  ![3C398F47-3308-40E9-899A-75F98E1A0C9F](https://github.com/cielqz/Rep/assets/163901464/a1b5db29-3dc7-45e6-8729-801c65229c55)

  ![3D4493C6-3228-4E7C-B28C-7EE53F6081D5](https://github.com/cielqz/Rep/assets/163901464/a2285ff7-1ce0-4447-9296-fe4739e8a75b)

  ![F1C7CA63-9160-403B-B581-09C4745B2B6A](https://github.com/cielqz/Rep/assets/163901464/023eb6bb-43eb-46df-b1c8-42c9e43d37c9)

- Para contuniar con el efecto de destello, se crean figuras circulares en colores blanco y amarillo para simular puntos quue aparecen y desaparecen en tamaños que varían entre los 2 y 5 puntos.

  ![3D5EF4C9-6B1C-4D43-835B-6E4CF7DEDF70](https://github.com/cielqz/Rep/assets/163901464/5d245777-b4e6-485e-814f-29ae6d4b0c5f)

- Como elemento principal, se crean cubos tridimensionales, ubicándose uno de gran tamaño (250, 250, 250) en el centro de la composición rotando en su propio eje. A este cubo se le añade como textura en cada uno de sus laterales la imagen en vivo que transmite el recurso "webcam". 

  ![356EE762-3E7F-4090-BD1F-9CD4F6E34993](https://github.com/cielqz/Rep/assets/163901464/279e8034-7607-460a-b22f-ed6173a2361f)

- Se copia este cubo un total de seis veces en una menor escala (60, 60, 60) y se posicionan de manera que rodeen el cubo principal en cada lateral del mismo.

- Así mismo, se añade a la totalidad de la composición de cubos coordenadas de rotación con el cubo principal como dentro de eje, entonces, además de rodearlo, estos rotarán a su alrededor.
  ![5F8BA20B-3FC8-4B98-9949-8D13AD8E7FB8](https://github.com/cielqz/Rep/assets/163901464/39058191-f476-40cc-84ab-5260211fa5a7)
****
- Para visualizar el proyecto, se debe autorizar el uso de cámara en el dispositivo. 
  ## Resultado
  Para visitar: [Sketch P5.js](https://editor.p5js.org/cielqz/sketches/kPYFXThiQ)
  

https://github.com/cielqz/Rep/assets/163901464/fc3b31cb-b69e-4141-8dd5-f8df1d11b821



