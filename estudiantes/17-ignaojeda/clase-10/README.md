# clase-10
Solemne 2 - Api Nyt


Api, en palabras simples es una interfaz de programación de aplicaciones, reglas definidas que permiten que diferentes aplicaciones se comuniquen entre sí.
Pero es mucho más que eso, se menciona frecuentemente que es el “tejido conectivo del sistema tecnológico mundial actualmente”. Hay decenas de miles de API públicas y abiertas que ofrecen una enorme variedad de funciones a las apps webs y móviles. Estas abarcan desde datos meteorológicos, probabilidades de apuestas, horas de llegada de vuelos o conectividad de voz, entre muchos otros. 

Las API son la modalidad de comunicación de las aplicaciones nativas de la nube. A medida que las organizaciones se expanden, crean y consumen más API. Esto requerirá que casi todo esté conectado a través de API. 

API New York Times 
https://developer.nytimes.com/ 
Link de Homepage del servicio del Nyt Developers, donde se solicita el acceso a las APIs.

Paso 1: Para comenzar el uso de esta, se debe crear una cuenta en el Nyt Developers. Se solicitará algunos datos como nombre, mail y crear una clave.

! [img ss1] (./Img_1.png)

Paso 2: Luego de esto se solicitará que añadas un nombre de proyecto y breve descripción para que puedan darte un acceso para utilizar "API Key" 

! [img ss2] (./Img_2.png)

Paso 3: Luego de esto ya estará creada, y podrás verificar viendo en la barra de menú, en donde dice App

! [img ss3] (./Img_3.png)

Ejemplo de uso:

-> Si quisiera buscar una reseña de un libro que este leyendo, con una cita en específico del libro.
- Utilizar Books Api junto a el comando de /reviews.json y ahi me encontraré con una tabla que me pidirá datos del libro ( isbn, nombre y autor del libro)

  * Dato: El ISBN (International Standard Book Number) " es un número de 13 cifras que identifica de una manera única a cada libro o producto de editorial publicado en el mundo. Su propósito es identificar un título o la edición de un título de un editor específico". Fuente: (https://www.isbn.org/isbn_spanish#:~:text=International%20Standard%20Book%20Number%20(ISBN,el%20mundo%20con%20caracter%C3%ADsticas%20semejantes.&text=Para%20qu%C3%A9%20sirve%20el%20ISBN%3F,t%C3%ADtulo%20de%20un%20editor%20espec%C3%ADfico.)

! [img ss4] (./Img_4.png)

-> Si el libro que quiero buscra es uno de Harry Potter por ejemplo, debo tener los siguientes datos: 
Harry Potter and the Sorcerer`s Stone 
Autor: J.K. Rowling
ISBN:  9781338878929
Esto funciona utilizando la Key que te proporciona el Nyt para poder utilizar las diferentes funciones que ellos tienen de Api, como en este caso fue la de Book Api, pero cuentan con 10 diferentes bases de datos mediante API.

A pesar de haber contado con mi Key no obtuve resultados de esta (como se puede ver en la siguiente imágen)
! [img ss5] (./Img_5.png)

Reflexión personal: A pesar de no haber obtenido resultados de mi búsqueda en la Api del Nyt, todos los pasos para llegar a solicitar una información a esta interfaz me incentivaron a querer aprender más y lograr una buena interacción con este tipo de interfaz que cada vez es más utilizada y poco sabida por la gente. 






