# Clase 10:

# Solemne 02: 
- Lo primero que hice para comezar mi solemne fue buscar referentes sobre la idea inicial que tenía pensada, la cual era poder encontrar una forma de poder visualizar las ondas de sononido de una de mis canciones favoritas, a tráves de una figura a elección, en este caso un circulo. Para ello me base en el video de la canción "Do You Wanna Know" de Arctic Monkeys

  
## Ondas de sonido moviendose por música

# Paso 01: Cargamos la canción en el editor
- Descargamos la canción en versión mp3 y cargamos canción, donde aprendi que, para garantizar la funcón de sonido necesitamos cargarlo antes de que se solicite reproducirlo, con la variable "preload()"
siguiendo este tutorial:

- La canción elegida fue "te para tres" de Soda Stereo versión UNPLUGGED, básicamente la mejor versión en vivo
Seguimos este tutorial para la acción anterior

<https://www.youtube.com/watch?v=Pn1g1wjxl_0&list=PLRqwX-V7Uu6aFcVjlDAkkGIixw70s7jpW>

![cargarcancion](https://github.com/isabellagutierrezm/dis9034-2024-1/assets/163045412/575f4cef-e3b3-4e12-bb78-17ae5e955510)!


- Despúes configuramos el mouse para que la canción suene al hacer clik en la pantalla

![clickmouse](https://github.com/isabellagutierrezm/dis9034-2024-1/assets/163045412/7866bdfc-fff1-49f9-b8c2-fd9f2473b3d8)!

- siguiendo referencia de p5js, establecemos las condicionales para la pantalla

# # Usamos condisicionales

![condicional](https://github.com/isabellagutierrezm/dis9034-2024-1/assets/163045412/621eb499-9aad-4519-8809-cfe62375a22d)!

- Esta funcion lo que nos indica es que, al hacer click en la pantalla, la canción anteriormente cargada se reproduzca, y al hacer click nuevamente esta misma, se detenga

Para hacer mover las ondas utilizamos el algoritmo FFT, el cual analiza las frecuencias de sonido, basado en el analisis de onda, sacado de la referencia de p5
<https://p5js.org/reference/#/p5.FFT>

# Paso 02:
- Siguiendo este tutorial:
<https://www.youtube.com/watch?v=jEwAMgcCgOA&list=PLRqwX-V7Uu6aFcVjlDAkkGIixw70s7jpW&index=9>

- Donde dibujamos la forma de la línea, y para ello establecemos la forma inicial y final de la figura  con las coordenadas (x,y)

[¡ñññ](https://github.com/isabellagutierrezm/dis9034-2024-1/assets/163045412/d0697d8c-6c4a-4ca2-94a8-e5c4c27bb314)!

![linea](https://github.com/isabellagutierrezm/dis9034-2024-1/assets/163045412/4fd8b608-66c7-4b67-8169-763c99d39b85)!

![onadas con stroke](https://github.com/isabellagutierrezm/dis9034-2024-1/assets/163045412/7df141c6-bd12-4b23-9674-a1c81fb81812)!


tenemos nuestra primera linea con relleno


![wave 1](https://github.com/isabellagutierrezm/dis9034-2024-1/assets/163045412/0474a966-32e1-4c4f-afa6-d0cebc1279da)!

# Paso 03: Decidmos usar un circulo como forma y vamos variando que estilo se ve mejor

![p52](https://github.com/isabellagutierrezm/dis9034-2024-1/assets/163045412/5c3ba37a-55cf-48dc-bf31-65f2a13af2c9)!
- Centramos la forma en el lienzo

![circulo](https://github.com/isabellagutierrezm/dis9034-2024-1/assets/163045412/53c2572c-f7ac-4d4e-9581-ca9439705ea5)!

- Hacemos el primer lado de la forma y copiamos para tener la forma completa, en esta funcion es necesaria la variable "index", es decir el indice de la posición de la figura
- Estos valores se complementan con valores de seno y coseno

# Paso 04: Probamos con música

![circulo Completo p5js (1)](https://github.com/isabellagutierrezm/dis9034-2024-1/assets/163045412/b42c0de1-57ba-425e-9b80-018d1f72298e)!

## Referencias del proyecto
- Loading sound: 
<https://www.youtube.com/watch?v=Pn1g1wjxl_0&t=300s)>
- Amplitud de onda: 
  <https://www.youtube.com/watch?v=jEwAMgcCgOA&t=482s>
- Configuración de mouse: 
  <https://www.youtube.com/watch?v=YcezEwOXun4>

  - Proyecto final :
<https://editor.p5js.org/isabellagutierrezm/sketches/2wt78sLuA>
