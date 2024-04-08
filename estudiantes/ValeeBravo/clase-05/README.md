# clase-05
Quería hacer el ciclo de la luna creciente que cambiara a luna llena y que girara entorno a algo. Busqué una imagen de bola de disco para que estuviera en medio y las lunas giraran en torno a la bola. También elegí una foto para que cambiara de filtro  img.filter(THRESHOLD); para que se viera en blanco y negro al 100. Queria que apareciera algo en el fondo cuando se tocara el click izqierdo: elegí las lunas y las estrellas del fondo para que aparecieran. 

Cargué la imagen como png en sketchfiles, saturno.png sacada de internet de saturno color rosado.  
<img width="507" alt="Captura de pantalla 2024-04-08 a la(s) 16 12 40" src="https://github.com/ValeeBravo/dis9034-2024-1/assets/163045037/c2b37fe9-4ada-4569-97fe-b7a2957afda9">

Cargué la imagen como png en sketchfiles, luna.png, es la luna llena blanca que aparece 
<img width="605" alt="Captura de pantalla 2024-04-08 a la(s) 16 15 05" src="https://github.com/ValeeBravo/dis9034-2024-1/assets/163045037/53236158-4832-4f5d-9394-2fe7886ffff2">

Cargué la imagen como png en sketchfiles, creciente.png es la luna a la mitad 
<img width="540" alt="Captura de pantalla 2024-04-08 a la(s) 16 16 22" src="https://github.com/ValeeBravo/dis9034-2024-1/assets/163045037/54a9385d-30d5-4031-9779-c44c08c6b8b2">

Cargué la imagen como png en sketchfiles, llena.png, es la luna llena gris oscura casi negra 
<img width="544" alt="Captura de pantalla 2024-04-08 a la(s) 16 18 00" src="https://github.com/ValeeBravo/dis9034-2024-1/assets/163045037/dc6a4fe1-e5f1-44a2-a26a-aa7df9502406">

Cargué la imagen como png en sketchfiles, mitad.pn es la luna a la mitad. Mitad luna y mitad oscuro o negro
<img width="487" alt="Captura de pantalla 2024-04-08 a la(s) 16 19 06" src="https://github.com/ValeeBravo/dis9034-2024-1/assets/163045037/f0316ab1-2de5-4084-903a-e3afea109c81">

Imagen de estrella en png sacada de internet, se llama star.png (son estrellas celestes 
<img width="552" alt="Captura de pantalla 2024-04-08 a la(s) 16 21 28" src="https://github.com/ValeeBravo/dis9034-2024-1/assets/163045037/4dae6cbd-7f36-4272-8482-aa79776c87b6">


Fuction setup 
El porte del canvas es de 1000x700, La WEBGL permite que en el canvas puedan rotar objeto. Permite que  rotateZ(millis() / 2000); funcione. 
<img width="828" alt="Captura de pantalla 2024-04-08 a la(s) 16 22 58" src="https://github.com/ValeeBravo/dis9034-2024-1/assets/163045037/f5c94c04-52bc-4417-9b8d-f5ed813c074a">

Imagen de saturno estática, también una imagen de bola de disco (bol.png) celeste que estara en medio de la rotación. 
<img width="537" alt="Captura de pantalla 2024-04-08 a la(s) 16 24 59" src="https://github.com/ValeeBravo/dis9034-2024-1/assets/163045037/ff69f02e-54e9-47f1-a44a-69a934b0921d">

Color de fondo azul, en background le puse 70 en la tercera , para que fuera un azul oscuro. 
<img width="354" alt="Captura de pantalla 2024-04-08 a la(s) 16 38 02" src="https://github.com/ValeeBravo/dis9034-2024-1/assets/163045037/385df925-43ee-4978-bf6a-b77737e75515">

Imagen de saturno rosado con porte de 200x200, hice que estuviera por encima de la flecha o cursor para que siguiera la flecha siempre. mouseX -585 lo ajusta al eje x y el mouseY -440 lo ajusta en el eje Y para que pueda quedar justo justo en el cursor. 
<img width="819" alt="Captura de pantalla 2024-04-08 a la(s) 16 40 15" src="https://github.com/ValeeBravo/dis9034-2024-1/assets/163045037/305c5a93-5308-45bb-b09c-0a181a8223cd">

Imagen de estrellas celestes para que aparezcan en el fondo al presionar el botón izquierdo del mouse referencia sacada de https://p5js.org/es/reference/#/p5/mouseButton . mousebutton=left 
Debajo de esa condición puse la imagen llamada star en el eje X -100 y en el eje Y -110. El porte de la imagen es de 1200x800. 
<img width="738" alt="Captura de pantalla 2024-04-08 a la(s) 16 45 51" src="https://github.com/ValeeBravo/dis9034-2024-1/assets/163045037/3d450419-3c22-4f2b-85e0-5f7bde651562">

Imagen de bola de disco celeste de porte 200x200 en -100 eje x y -100 eje y para que la bola quede en el medio del canvas 
<img width="728" alt="Captura de pantalla 2024-04-08 a la(s) 16 48 13" src="https://github.com/ValeeBravo/dis9034-2024-1/assets/163045037/9aeaf776-63d6-4eb4-8105-f9c62269baeb">

Primero esta fill que es el color morado del mini cuadrado que esta en medio del canvas por encima de la bola de disco. 
Luego está la rotacion del cuadrado y lo que rota entorno al mini cuadrado morado con la opción RotateZ(millis), el 2000 que viene después es la velocidad en que gira las cosas alrededor. 
Box es el mini cuadrado que esta en medio (en torno a este cuadrado giran todas las lunas) de porte 5x5 
<img width="819" alt="Captura de pantalla 2024-04-08 a la(s) 16 49 36" src="https://github.com/ValeeBravo/dis9034-2024-1/assets/163045037/7fb586ba-e31e-4bd0-aab4-e6d6e7436678">

La primera imagen es la que se ve siempre es la luna creciente en rotación moon= creciente.png cargada anteriormente. Como está por debajo de rotate Z permite que gire entorno al cuadrado morado.
La luna llena es luna = luna.png está en la posición 190 y 190. La luna aparece cuando se toca el botón izquierdo del mouse gracias a mouseIsPressed y mouseButton referencia sacada de https://p5js.org/es/reference/#/p5/mouseButton
<img width="824" alt="Captura de pantalla 2024-04-08 a la(s) 16 59 10" src="https://github.com/ValeeBravo/dis9034-2024-1/assets/163045037/0399b571-802e-42dc-ac67-270d52e05afe">

  Imagen de luna mitad negro y mitad luna está rotando entorno a mini cuadrado morado.
  La imagen  lu = llena png es la luna llena oscura es de porte 160x160 y esta en el ejeX -400 y en el eje Y 70 esta luna gira entorno al mini cuadrado pero también aparece cuando se apreta la tecla izq. del ratón. 
<img width="831" alt="Captura de pantalla 2024-04-08 a la(s) 17 01 21" src="https://github.com/ValeeBravo/dis9034-2024-1/assets/163045037/7a54bd7a-5d50-4a7f-a35d-36a6776313f1">

Filtro de la bola de disco celeste para que queda en blanco y negro cuando se toca la pantalla referencia de https://p5js.org/es/reference/#/p5.Image/filter
<img width="819" alt="Captura de pantalla 2024-04-08 a la(s) 17 05 24" src="https://github.com/ValeeBravo/dis9034-2024-1/assets/163045037/6fc6e351-c84b-432e-a817-2903b75a7783">


https://editor.p5js.org/ValeeBravo/sketches/B2O4u1zAO


