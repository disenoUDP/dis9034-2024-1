# clase-08

Comenzamos investigando acerca clmtrackr, este funciona básicamente cambiando las caras de las personas, funciona de forma parecida a los filtros de instagram 

Para conseguir toda esta info dirigirse al siguiente link 
https://github.com/auduno/clmtrackr?tab=readme-ov-file 

* Para poder hacerlo funcionar: 

1. pegar la siguiente línea en html en head 

/* clmtrackr libraries */
<script src="js/clmtrackr.js"></script>


2. descargar la biblioteca de clmtrackr y pegarla en una carpeta js

   
3. pegar las siguientes lineas de codigo  en html en la parte de body y antes de many 

<video id="inputVideo" width="400" height="300" autoplay loop>
  <source src="./media/somevideo.ogv" type="video/ogg"/>
</video>
<script type="text/javascript">
  var videoInput = document.getElementById('inputVideo');
  
  var ctracker = new clm.tracker();
  ctracker.init();
  ctracker.start(videoInput);
</script>


4. luego se descarga el video y queda posicionado en el html 

  <source src="https://www.auduno.com/clmtrackr/examples/media/franck.mp4" type="video/ogg"/> 
  

5. sacamos la linea de codigo de js del html y lo colocamos en el sketch para que esté más ordenado, se debe colocar hasta arriba del código (es antiguo y eso se puede ver porque “var” actualmente es “let”)

var videoInput = document.getElementById('inputVideo');
  
  var ctracker = new clm.tracker();
  ctracker.init();
  ctracker.start(videoInput);
  

6. se agrego la siguiente linea de codigo en sketch 

let posiciones = ctracker.getCurrentPosition();
  console.log(posiciones);

 
7. no funcionó del todo pero estuvo bien :D 

