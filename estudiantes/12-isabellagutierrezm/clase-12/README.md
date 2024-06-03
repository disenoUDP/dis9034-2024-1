![referentes 10 (1)](https://github.com/isabellagutierrezm/dis9034-2024-1/assets/163045412/ba0c03cd-7c04-40bf-9991-5891e4aa2e9f)# clase-12
- Estudio de referentes  
-Rune Madsen: se especializa en proyectos de diseño basados en códigos
# Tile Puzzle
es una escultura interactiva en tamaño real de rompecabezas, dividido en 9 mosaicos, los cuales se proyectan aleatoriamente 
<img width="2048" alt="Captura de pantalla 2024-06-03 a la(s) 2 46 38 p  m" src="https://github.com/isabellagutierrezm/dis9034-2024-1/assets/163045412/e5a39cc1-f69b-41e6-9fba-9e8700c9c7c6">


-Pentagram: Gran estudio de diseño en New York
<img width="2048" alt="Captura de pantalla 2024-06-03 a la(s) 2 52 32 p  m" src="https://github.com/isabellagutierrezm/dis9034-2024-1/assets/163045412/fe02509e-159d-4091-8781-09d0b7722893">
- A-Frame: creador de experiencias en realidad virtual, utilizando un HTML como proyecto independiente de código abierto
<img width="2048" alt="Captura de pantalla 2024-06-03 a la(s) 3 40 31 p  m" src="https://github.com/isabellagutierrezm/dis9034-2024-1/assets/163045412/8ea4d06e-4a08-4fe7-bd43-5121b91d4f75">

## Perlin noise
-Lo primero que hice para poder comenzar con mi idea de proyecto Solemne 02, fue volver a los referentes estudiados en clase en busca de inspiración e ideas, donde el que más me llamó la atención  fue el proyecto de Artes Visuales realizado por Ruth Jarman y Joe Gerhardt del Reino Unido , titulado Semiconductor, del año 2019.  El cual tiene el objetivo de representar datos científicos, y transformarlo en una experiencia artística y sonora. Y
de esta  manera, poder captar la atención del usuario de una manera más inmersiva, utilizando el movimiento de formas/ ondas de manera continua. Donde las partículas se dejan caer, sobre el campo de flujo.


![Up[27.json](https://github.com/user-attachments/files/15539312/27.json)loading referentes 10 (1).png…]()


- Las referencias de p5, encontré las variantes necesaria, llamada Perlin Noise, el cual es un efecto generado por números aleatorios, que para ser utilizada en p5 necesita de dos funciones: noise() y random(), donde el primero de ellos se utiliza para que la textura, movimiento o forma creada, tenga gestos más ”suaves “ , y random() siendo el valor aleatorio para que aquella textura obtenga movimiento.
  ## Paso 01: Creamos figura
  
![circulo  (1)](https://github.com/isabellagutierrezm/dis9034-2024-1/assets/163045412/72d48295-bd4b-4b36-a490-b168cfb12784)


  ## Paso 02:agregamos un valor aleatorio a “x” para establecer el movimiento 
https://github.com/isabellagutierrezm/dis9034-2024-1/assets/163045412/a35a4b80-65a9-4891-8645-4ca60769b885

// los valores del ruido tienen que ser entre 0 y 1. la cual toma dos argumentos, el primero para controlar el número de octavas 
// el segundo argumento determinará la amplitud del ruido 

## Paso 04: agregamos ruido, junto con la función “xoffset” para tener una variable, para mover mi figura de forma más fluida 

https://github.com/isabellagutierrezm/dis9034-2024-1/assets/163045412/4e04cf80-31ff-438b-90b8-e48f73a56c57

 Paso 05:  Ahora vamos a intensificar el movimiento del ruido, y graficar los valores aleatorios
 
![ruido (1)](https://github.com/isabellagutierrezm/dis9034-2024-1/assets/163045412/bb7c98e3-44bd-4afd-a81d-8516fb40835

- Comenzamos a establecer los valores de Perlin noise,  para ello establecemos la variable ”y” , como segundo eje de coordenada, y cambiar el valor para que deje de ser aleatorio y que sea igual al valor del ruido

![grafico random (1)](https://github.com/isabellagutierrezm/dis9034-2024-1/assets/163045412/126d705b-4e94-4fe2-a0f8-dd91d19c9925)


![perlin noise graficado (1)](https://github.com/isabellagutierrezm/dis9034-2024-1/assets/163045412/9e4388bc-96c3-4bfb-8f7c-06b2da6769b9)

-Pasamos el efecto de Perlin noise a dos dimensiones, calculando el índice  de los píxeles y sus colores, para poder crear la visualización predeterminada de la versión bidimensional de perlin noise 
// inc es incremento de la mezcla de píxeles, y se desenfoca 
suaviza la aleatoriedad de cada píxel con una escala de grises  
