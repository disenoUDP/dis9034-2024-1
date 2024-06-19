# clase-08
---
#### opencv libreria de computer vision

---

#### introduccion a clmtrackr herramienta que genera modelos para trakear la cara.
#### ir a releases y buscar la version v1.1.2, la version mas nueva.
#### copiar el codigo

/* clmtrackr libraries */
<script src="js/clmtrackr.js"></script>

#### crear carpeta en p5 editor con el nombre js.
#### en la carpeta js subir un archivo.
#### clmtraket

---
#### codigo para correr un elemento de video.
<video id="inputVideo" width="400" height="300" autoplay loop>
  <source src="./media/somevideo.ogv" type="video/ogg"/>
</video>
<script type="text/javascript">
  var videoInput = document.getElementById('inputVideo');
  
  var ctracker = new clm.tracker();
  ctracker.init();
  ctracker.start(videoInput);
</script>

---

#### video de ejemplo https://www.auduno.com/clmtrackr/examples/example.html.
#### click derecho > codigo de fuente > "./media/franck.mp4" (en la linea 25) > video original, sin codigo.

#### 
  						function positionLoop() {
					requestAnimFrame(positionLoop);
					var positions = ctracker.getCurrentPosition();
					// do something with the positions ...
					// print the positions
					var positionString = "";
					if (positions) {
						for (var p = 0;p < 10;p++) {
							positionString += "featurepoint "+p+" : ["+positions[p][0].toFixed(2)+","+positions[p][1].toFixed(2)+"]<br/>";
						}
						document.getElementById('positions').innerHTML = positionString;
					}
				}
				positionLoop();
