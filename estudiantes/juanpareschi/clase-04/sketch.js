//En esta pagina busco representar sensaciones y pensamientos de un dia especifico de mi vida, en base a lo aprendido sobre codigo hasta ahora.


function setup() {
  pensamiento = loadImage('pensamiento.jpg');
  trabajo = loadImage('trabajo.gif');
  ella1 = loadImage('ella1.jpg');
  ella2 = loadImage('ella2.jpg');
  ella3 = loadImage('ella3.jpg');
  
  riesgo = createGraphics(450, 450);
  riesgo.background(0);
  encargo = createGraphics(450, 450);
  encargo.background(156, 220, 4);
  
  createCanvas(450, 450);
}


function draw() {
  if ((keyIsPressed == true) && (key == 'a')) {
   image (riesgo, 0, 0);
   fill (0);
   rect (82, 142, 286, 166);
   textSize(40);
   textStyle (BOLD);
   text ('DUELE MÁS', 110, 100)
   text ('NO INTENTARLO', 70, 380)
   image (pensamiento, 85, 145, 280, 160);
    riesgo.rotate(millis() / 500);
    riesgo.fill(random(255), random(255), random(255), random(255));
    riesgo.textFont('Courier New', 13);
    riesgo.text('El miedo mata la mente. El miedo es la pequeña muerte que conduce a la destrucción total. Afrontaré mi miedo. Permitiré que pase sobre mí y a través de mí. Y cuando haya pasado girare mi ojo interior para escrutar su camino. Allá donde haya pasado el miedo ya no habrá nada. Solo estare yo.', random(windowWidth), random(windowHeight), 200, 400);
   }
  

  else if ((keyIsPressed == true) && (key == 's')) {
   image (encargo, 0, 0);
    encargo.noFill();
    encargo.stroke(0);
    encargo.ellipse(mouseX, mouseY, 35, 35);
   fill (0)
   rect (225, 0, 90, 450);
   image(trabajo, 0 ,0);
   textStyle (NORMAL);
   textSize(40);
   fill(156, 220, 4);
   translate(255,423);
   rotate(300);
   text("TANTAS COSAS QUE UNO VE Y QUIERE PERO NUNCA TENDRA.", 0, 0, 425, 500);
   } 
   
  
  else if ((keyIsPressed == true) && (key == 'd')) {
   background(35, 79, 200);
   textStyle (ITALIC);
   textFont ('Times New Roman');
   textSize (20);
   text('"Quizás, con ella al fin todo encaja"', 72, 373);
      if (mouseX < 100){
      image(ella1, 100, 72, 250, 250);
      } else if (mouseX >= 100 && mouseX < 300){
      image(ella2, 100, 72, 250, 250);
      } else if (mouseX >= 300){
      image(ella3, 100, 72, 250, 250);
      } 
   }
  
  else {
   background(34);
   fill ('white');
   textStyle (NORMAL);
   textFont ('Arial');
   textSize(12);
   text('En la siguiente pagina encontraran una representacion de distintos pensamientos que tuve durante el dia 6 de abril del año 2024.',50, 50, 200, 400);
   fill ('white');
   text('Los invito abiertamente a explorar todos estos espacios precionando las siguientes teclas:', 50, 125, 200, 400);
   textFont ('Arial')
   textSize(16);
   text('a = sobre el miedo', 264, 340);
   text('s = sobre intereses', 261, 365);
   text('d = sobre ella', 300, 390);
   }
}



//https://p5js.org/es/examples/structure-create-graphics.html
//https://editor.p5js.org/simmj054/sketches/zc_CVBi80
//https://editor.p5js.org/Matt99/sketches/rqecSJMkN
//https://www.youtube.com/watch?v=TaluaAD9MKA
//https://editor.p5js.org/chjno/sketches/Hkm84o6FW


