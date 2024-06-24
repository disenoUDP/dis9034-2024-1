# clase-15
# Exámen 
- ## Perlin noise
-Lo primero que hice para poder comenzar con mi idea de proyecto Exámen, fue buscar referencias visuales de una idea que me surgió en mi ramo de taller de diseño y de áreas silvestres, donde el tema de búsqueda de uno de los grupos, con respecto a un panel interpretativo era "El reino Fungi", o mejor conocido como el mundo de los hongos, y me pregunté ¿Qué ocurre bajo tierra con estas especies?. Y gracias a la ayuda de mi hermana, quien es estudiante de agronomía descubrí los micelio.

## Micelio
- Es una red de filamentos que se va expandiendo hasta conformar el cuerpo del hongo, y que es escesial para la simbiosis del bosque 
![fungi](https://github.com/isabellagutierrezm/dis9034-2024-1/assets/163045412/4f004aa0-cbb5-407f-a8e1-078e036a8f13)

- Con referencias de p5, encontré las variantes necesaria, llamada Perlin Noise, el cual es un efecto generado por números aleatorios, que para ser utilizada en p5 necesita de dos funciones: noise() y random(), donde el primero de ellos se utiliza para que la textura, movimiento o forma creada, tenga gestos más ”suaves “ , y random() siendo el valor aleatorio para que aquella textura obtenga movimiento.
  
  ## Paso 01: Creamos figura
  ![circulo  (1)](https://github.com/isabellagutierrezm/dis9034-2024-1/assets/163045412/72d48295-bd4b-4b36-a490-b168cfb12784)

  ## Paso 02:agregamos un valor aleatorio a “x” para establecer el movimiento 
https://github.com/isabellagutierrezm/dis9034-2024-1/assets/163045412/a35a4b80-65a9-4891-8645-4ca60769b885

// los valores del ruido tienen que ser entre 0 y 1. la cual toma dos argumentos, el primero para controlar el número de octavas 
// el segundo argumento determinará la amplitud del ruido 

## Paso 04:
- agregamos ruido, junto con la función “xoffset” para tener una variable, para mover mi figura de forma más fluida 

https://github.com/isabellagutierrezm/dis9034-2024-1/assets/163045412/4e04cf80-31ff-438b-90b8-e48f73a56c57

 Paso 05:  Ahora vamos a intensificar el movimiento del ruido, y graficar los valores aleatorios
 
- Comenzamos a establecer los valores de Perlin noise,  para ello establecemos la variable ”y” , como segundo eje de coordenada, y cambiar el valor para que deje de ser aleatorio y que sea igual al valor del ruido

![grafico random (1)](https://github.com/isabellagutierrezm/dis9034-2024-1/assets/163045412/126d705b-4e94-4fe2-a0f8-dd91d19c9925)

![perlin noise graficado (1)](https://github.com/isabellagutierrezm/dis9034-2024-1/assets/163045412/9e4388bc-96c3-4bfb-8f7c-06b2da6769b9)

## Paso 06: Pasamos el efecto de Perlin noise a dos dimensiones, 
- calculando el índice  de los píxeles y sus colores, para poder crear la visualización predeterminada de la versión bidimensional de perlin noise
- // inc es incremento de la mezcla de píxeles, y se desenfoca 
suaviza la aleatoriedad de cada píxel con una escala de grises

![desenfoque (1)](https://github.com/isabellagutierrezm/dis9034-2024-1/assets/163045412/8b590155-d732-4170-8469-9b2400f0956a)
## Paso 07:
- Pasamos de crear pixeles a vectores, para ello agregamos la variable escala, derivando columnas y filas 

![cuadricula (1)](https://github.com/isabellagutierrezm/dis9034-2024-1/assets/163045412/93658e30-eaf2-4296-918d-86289e6c21fc)

![lineaas (1)](https://github.com/isabellagutierrezm/dis9034-2024-1/assets/163045412/b7c00abf-2f99-49e0-a566-64e8b8647b61)

## Paso 08:
- Este paso es muy importate, ya que es necesario crear un nuevo archivo en js, para poder establecer, la posición, velocidad
y aceleración de estas partículas. Creo que este fue el paso más difícil ya que a cada momento p5 me decía que "particle" no estaba definido
 y ya lo estaba dando todo por perdido, por eso es muy importante revisar el html!! y establecer la acción 
 
  ![editor particulas ](https://github.com/isabellagutierrezm/dis9034-2024-1/assets/163045412/d6aa0817-6efb-47ff-b9c5-a52280be096e)
  - Además de establecer la función del mouse
    
    ![mouse ](https://github.com/isabellagutierrezm/dis9034-2024-1/assets/163045412/48895120-71ae-4c0f-be7c-87ef17964b41)


- Y cuando esto sucedió todo hizo sentido!
![particulas moviendose](https://github.com/isabellagutierrezm/dis9034-2024-1/assets/163045412/994ef694-0088-455e-a9f6-4a270bf671f9)

## Paso 09:
- Por último establecemos la acción "flow field", para visualizar el campo de flujo y agregamos colores

![particulas en linea ](https://github.com/isabellagutierrezm/dis9034-2024-1/assets/163045412/675ac63e-ae06-4057-ba82-f2a37fa36632)
<img width="910" alt="Captura de pantalla 2024-06-24 a la(s) 4 09 00 p  m" src="https://github.com/isabellagutierrezm/dis9034-2024-1/assets/163045412/099f52d8-6266-4150-b0a9-998d184a4eac">


 ## Final: 
 
https://github.com/isabellagutierrezm/dis9034-2024-1/assets/163045412/0a76e3a7-d0b1-47ef-b71b-e14a1aa7a613

-Link Editor: [](https://editor.p5js.org/isabellagutierrezm/sketches/TSZQDTjtj)
- Referencia del proyecto
https://www.youtube.com/watch?v=BjoM9oKOAKY
