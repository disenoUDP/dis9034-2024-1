# clase-13

*el objetivo es hacer un mini piano, de cinco notas, que logre sonar con cada una y que tenga un efecto visual de noise, cada vez que suene una tecla*

---

primero que todo, referencias iniciales:

- piano, por monniqian: https://editor.p5js.org/monniqian/sketches/TwckaaeGl
- Keyboard Piano, por mrbombmusic: https://editor.p5js.org/mrbombmusic/sketches/ryeLfZTd-
- midiToFreq: https://p5js.org/reference/#/p5/midiToFreq

---

#### Inicio de examen 

Primero, quise codificar un piano por mí misma, desde p5.js, creando una `function piano()`
```javascript
function piano(){
   background(220);
  push();
  fill (255, 255, 255)
  rect (190, 260, 60, 200)
  push();
  fill (255, 255, 255)
  rect (250, 260, 60, 200)
  push();
  fill (255, 255, 255)
  rect (310, 260, 60, 200)
  push();
  fill (0, 0, 0)
  rect (290, 260, 40, 130)
  push();
  fill (0, 0, 0)
  rect (230, 260, 40, 130)
}
```

resultado: 

<img width="1374" alt="Captura de pantalla 2024-06-17 a la(s) 16 46 41" src="https://github.com/vaalentinya/dis9034-2024-1/assets/163034795/766a8baa-ebb5-4e69-8e24-10b6f79e8beb">
