### clase-13
# openSimplexNoise y minim

Objetivo: crear animaciones a través de codigo, que representen audio    
usando graficas creadas a través de openSimplexNoise

Referencias    
* [drawing from noise](https://necessarydisorder.wordpress.com/2017/11/15/drawing-from-noise-and-then-making-animated-loopy-gifs-from-there/)    
* [the coding train](https://www.youtube.com/watch?v=Lv9gyZZJPE0)    
* [processing for music visualization](https://www.generativehut.com/post/using-processing-for-music-visualization)
* ver trabajo de [macarena parrao](https://editor.p5js.org/MacaParrao/sketches/xYmDkVLFS)
* [isabella gutierrez](https://editor.p5js.org/isabellagutierrezm/sketches/2wt78sLuA)
* [sound mapping](http://responsivedesign.de/wp-content/uploads/2016/05/tutorial-06_processing-soundmapping2.pdf)
* [frequency analysis](https://www.youtube.com/watch?v=2O3nm0Nvbi4)

## musica como input   
sonido como una coleccion de potencia de ruido y su amplitud

* smoothingFactor: que tan rapido reacciona la grafica al input
* smooth()
* FFT class: analisis de sonido
* bufferSize: tiempo que el computador procesa el audio
* sampleRate: para capturar la cantidad de frecuencias que escucha el humano

## FFT y creacion de graficas
