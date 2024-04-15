# Clase 05
# Continuación solemne 1

- quiero agregar una figura inscrita en el cubo
- fuente: https://p5js.org/es/reference/#/p5/translate
<img width="2048" alt="Captura de pantalla 2024-04-08 a la(s) 15 26 27" src="https://github.com/emiguerra/dis9034-2024-1/assets/128399363/89ff361e-547f-4771-9c0f-109a4a708db7">

- dupliqué las figuras según un eje 

<img width="2038" alt="Captura de pantalla 2024-04-08 a la(s) 15 40 52" src="https://github.com/emiguerra/dis9034-2024-1/assets/128399363/5c0012d2-c32d-40be-9ee1-8eb8078a4daf">

- La figura es responsiva según zoom del mouse
 <img width="561" alt="Captura de pantalla 2024-04-08 a la(s) 16 50 26" src="https://github.com/emiguerra/dis9034-2024-1/assets/128399363/1fc5b0fb-ba3f-4c62-8a24-d71f54f493d1">
 
 <img width="686" alt="Captura de pantalla 2024-04-08 a la(s) 16 50 37" src="https://github.com/emiguerra/dis9034-2024-1/assets/128399363/15817de5-db2e-411a-90f6-4b82bfe263c1">

- pude definir los parámetros vectoriales y eso alteró la rotación de las figuras

<img width="529" alt="Captura de pantalla 2024-04-08 a la(s) 15 50 43" src="https://github.com/emiguerra/dis9034-2024-1/assets/128399363/368731f7-8a2f-4078-a3cf-0b59c7ba3c21">
<img width="2007" alt="Captura de pantalla 2024-04-08 a la(s) 15 55 01" src="https://github.com/emiguerra/dis9034-2024-1/assets/128399363/223b6453-dc8c-4274-8295-a5c0208d8516">
<img width="2048" alt="Captura de pantalla 2024-04-08 a la(s) 16 44 04" src="https://github.com/emiguerra/dis9034-2024-1/assets/128399363/13c7203f-858a-432f-9a2e-c1759f06324e">

- la figura rota según click y desplazamiento del mouse
   - //translate(p5);
     - // me permite agregar traslación de las figuras
     - //https://p5js.org/es/reference/#/p5/translate
     - // quiero agregar una figura inscrita al cubo
     - translate(p5.Vector.fromAngle(millis() / 1000, 40));

<img width="674" alt="Captura de pantalla 2024-04-08 a la(s) 17 01 07" src="https://github.com/emiguerra/dis9034-2024-1/assets/128399363/d3c79bbb-95fc-4c39-936c-74f4084930ba">
<img width="630" alt="Captura de pantalla 2024-04-08 a la(s) 17 01 22" src="https://github.com/emiguerra/dis9034-2024-1/assets/128399363/655c53e3-c84f-4fab-a22c-82f59137955b">

 - fuente: https://p5js.org/es/reference/#/p5.Vector
 - fuente: https://p5js.org/reference/#/p5/orbitControl
  

- esta función está sin definir, veré como arreglarla.
  - sin(2 * a) * RADIUS * sin(b),
        - (cos(b) * RADIUS) / 2,
        - cos(2 * a) * RADIUS * sin(b);
    

<img width="542" alt="Captura de pantalla 2024-04-08 a la(s) 16 45 03" src="https://github.com/emiguerra/dis9034-2024-1/assets/128399363/d4c5b287-84b9-4cdb-a89f-21fad089d2f9">

- realmente no era necesaria para los bucles y condicionales, la eliminé
  
 <img width="950" alt="Captura de pantalla 2024-04-08 a la(s) 16 49 01" src="https://github.com/emiguerra/dis9034-2024-1/assets/128399363/2535acb2-5688-4d31-aa71-9948631f0adb">

 - así resultó el codigo eliminando la función mencionada
   
 <img width="2048" alt="Captura de pantalla 2024-04-08 a la(s) 16 54 01" src="https://github.com/emiguerra/dis9034-2024-1/assets/128399363/880ffde0-9ac3-4c86-9bac-3d7a4917b192">
 <img width="2048" alt="Captura de pantalla 2024-04-08 a la(s) 16 53 56" src="https://github.com/emiguerra/dis9034-2024-1/assets/128399363/29bf2e12-09f0-4ee1-86b4-a3d698fd619d">
 <img width="2048" alt="Captura de pantalla 2024-04-08 a la(s) 16 53 55" src="https://github.com/emiguerra/dis9034-2024-1/assets/128399363/bf88dd17-5497-4f9d-a5e8-5e9a62ac9c74">




# Enlace a mi proyecto
https://editor.p5js.org/emiguerra/sketches/nx8CDSPMr
