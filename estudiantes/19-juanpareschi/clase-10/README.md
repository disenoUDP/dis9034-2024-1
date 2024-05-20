# clase-09

## Documentación de la Solemne 02 de Juan Pareschi

> Trabajaré en Processing (Inicialmente el proyecto se intentó en p5js, pero cambié de lenguaje por razones de renderizado).

### Quiero hacer una animación de estilo ASCII, la cual tenga algun cambio gracias a la interacción de un usuario.

> Esto dado que llevo el último año muy interesado en el material “digital” y sobre la programación creativa en relación a la animación e ilustración, por lo que este seria mi primer acercamiento real a esto. Tomaré en referencia John Provencher, quien ha sido mi referente más importante en cuanto el diseño recientemente, y mi objetivo es lograr algo que me emocione tanto como su trabajo.

### Referentes

- [John Provencher](https://johnprovencher.com/)
- [Andreas Gysin](https://editor.p5js.org/lingdong/sketches/xIELTdGwE)

### Referencias de investigación

- [Daniel Shiffman](https://editor.p5js.org/codingtrain/sketches/KTVfEcpWx)
- [ASCII Art de Paweł Janicki](https://www.tetoki.eu/asciiart/)
- [Andy Haskell](https://dev.to/andyhaskell/convert-images-to-mosaics-in-p5js-2dlc)
- [Tim Rodenbröker](https://www.youtube.com/watch?v=m_1lBVxIdM4)
- [Anime.js](https://animejs.com/)
- [EasyEase](https://github.com/fredegd/EasyEase)

### Referencias usadas en el trabajo final

- [Biblioteca FIP](https://github.com/prontopablo/FIP)
- [Curso de ASCII de Tim Rodenbröker](https://timrodenbroeker.de/courses/ascii/)
- [Referencias de Processing](https://processing.org/reference/)


### Proceso de código - Animación/pantalla principal.

- Creó un fondo de 720 por 720 píxeles.

![image](https://github.com/juanpareschi/dis9034-2024-1/assets/163045421/ba61ace4-b791-4c03-a391-2f9c2029ca3f)

- Para generar el efecto deseado, creamos un gráfico donde va a ocurrir la animación y junto a eso, variables que van a ayudar eventualmente a generar un mosaico y tamaño de cada uno de sus cuadros.

![image](https://github.com/juanpareschi/dis9034-2024-1/assets/163045421/8e9fdbae-12ad-40d3-a901-1bd5a1f38428)

- Cargaremos fuentes e imagenes que usaremos durante el proyecto, y a su vez, una cadena con los caracteres ASCII que van a ser utilizados en la animación.

![image](https://github.com/juanpareschi/dis9034-2024-1/assets/163045421/8cc902be-0294-41f9-b507-2de564ee99db)

- Haremos que el tamaño del gráfico sea del porte que las variables de número que definimos como mosaico X e Y, y definiremos que se renderize en 3D para las figuras que vamos a usar.

![image](https://github.com/juanpareschi/dis9034-2024-1/assets/163045421/6bcd9424-f260-4a8d-9426-f0771aa6eab4)

- Definiremos el tamaño de cada cuadro, el cual será definido por la altura / ancho dividido por el número de cuadros definidos. Tambien definiremos que el texto a usar en el ASCII este centrado, su tamaño y la fuente.

![image](https://github.com/juanpareschi/dis9034-2024-1/assets/163045421/110e701d-b147-4b56-a39d-6328df9e7e0d)

- Empezaremos a dibujar la animación, definiendo el color del fondo del canvas y el gráfico, que dentro de este no tendrán bordes las figuras y como la luz va incidir en los objetos 3D a dibujarse.

- Abriremos y cerraremos matrix para cada objeto que sea dibujado, para que así cada uno no se afecte con los valores de otro y tenga su propia posición a donde va a ser trasladado, tamaño, eje en donde va rotar hacia el lado a ser definido.

![image](https://github.com/juanpareschi/dis9034-2024-1/assets/163045421/e5dfc9e5-a30e-4149-86db-6005cbbe0eb0)

- Para lograr objetos interesantes en la animación, pondremos objetos uno sobre otros para así se sobreponen, pero haremos que giren en distintos ángulos, dando así la impresión de un solo objeto con una forma en específico.

![image](https://github.com/juanpareschi/dis9034-2024-1/assets/163045421/ac88e005-878c-4f24-a34c-0e762a30d1af)

- Para finalmente lograr el efecto ASCII, crearemos una imagen la cual es una copia del gráfico.
- Haremos un loop para las variables X e Y, para que así constantemente tomen la información de color de los pixeles, le asignen un valor en base al brillo y con esa informacion, que se le asigne uno de los caracteres ASCII que definimos en la cadena.

![image](https://github.com/juanpareschi/dis9034-2024-1/assets/163045421/fec28a36-5074-4210-9f4b-bdc336feec02)

- Finalmente, definiremos el color de los caracteres y su posición segun las variantes definidas para que así puedan ser dibujados.

![image](https://github.com/juanpareschi/dis9034-2024-1/assets/163045421/5cf02b50-fa11-404b-ac35-75c4bb15e2e0)

- Resultado final del codigo.

![glossy](https://github.com/juanpareschi/dis9034-2024-1/assets/163045421/2323d79d-112e-41f9-bb66-212afbb9fcc2)

### Proceso de código - Créditos/pantalla secundaria.

- Parto haciendo un boceto de como quiero que sea la apariencia de la página y lo que quiero que se dibuje.

![image](https://github.com/juanpareschi/dis9034-2024-1/assets/163045421/9ba8de35-f99a-4aa8-86df-524f16538480)

- Definiremos que la página aparezca cuando se presione algún botón del mouse, y al mismo tiempo, detenga el loop de animación que ocurre en el gráfico. 

![image](https://github.com/juanpareschi/dis9034-2024-1/assets/163045421/7a411f67-62fc-4dbd-8894-494518b0bf9f)

- Dibujaremos los contenidos en base a lo diseñado en el boceto que hice previamente, tratando de lograr coordenadas similares.

![image](https://github.com/juanpareschi/dis9034-2024-1/assets/163045421/32da2a71-4d47-4d83-8c11-7117b6143a8b)

- Haremos que cuando se suelte el botón presionado, se reactive el loop de animación que se encuentra en el gráfico.

![image](https://github.com/juanpareschi/dis9034-2024-1/assets/163045421/3f83c712-d3cd-4553-a219-6e2903fd80c0)

- Resultado final de la pagina.

![image](https://github.com/juanpareschi/dis9034-2024-1/assets/163045421/04ee89e4-5d47-4b98-a816-b3024236b79b)















