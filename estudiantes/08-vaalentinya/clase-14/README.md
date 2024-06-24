# clase-14
*Continuación de examen*

---

#### Referencias usadas el día de hoy:
- p5.js - Key Press Xylophone - Part 1: Midi notes: https://youtu.be/AZsWKqN3bK8?si=ke9aWXbq5cNzqQbr
- midiToFreq: https://p5js.org/reference/#/p5/midiToFreq
- Midi note numbers and centers frequencies: https://inspiredacoustics.com/en/MIDI_note_numbers_and_center_frequencies
- noise: https://p5js.org/reference/#/p5/noise
- Noise Envelope by p5: https://editor.p5js.org/p5/sketches/k5HXP2_qkt9
- keyPressed: https://p5js.org/reference/#/p5/keyPressed

---

### EXAMEN
- Pantalla completa: https://editor.p5js.org/vaalentinya/full/RD5SaEEk1
- Editor: https://editor.p5js.org/vaalentinya/sketches/RD5SaEEk1

---

Primero que todo, simplifiqué el piano, dándome cuenta que no era necesario poner CADA color para CADA tecla:

```javascript
function setup() {
  createCanvas(600, 600);
}

function piano() {
  background(220);
  
  // teclas blancas
  fill(255, 255, 255);
  rect(190, 260, 60, 200);
  rect(250, 260, 60, 200);
  rect(310, 260, 60, 200);
  
  // teclas negras
  fill(0, 0, 0);
  rect(230, 260, 40, 130);
  rect(290, 260, 40, 130);
}

function draw() {
  piano();
}
```

Ahora, tenía que averigüar como hacer que sonaran las notas DoM, Do#, ReM, Re# y MiM, respectivamente en el piano. Para eso, implementé el uso de `midiToFreq` en forma de función gracias a mis referencias:

```javascript
let osc

function setup() {
  createCanvas(600, 600);
  osc = new p5.Oscillator('sine');
  osc.start();
  // el oscilador empieza en 0
  osc.amp(0);
}

// función para convertir notas de midi a frecuencias
function valeMidiToFreq(midiNote) {
  return pow(2, (midiNote - 69) / 12) * 440;
}

function piano() {
  background(220);
  
  // teclas blancas
  fill(255, 255, 255);
  rect(190, 260, 60, 200);
  rect(250, 260, 60, 200);
  rect(310, 260, 60, 200);
  
  // teclas negras
  fill(0, 0, 0);
  rect(230, 260, 40, 130);
  rect(290, 260, 40, 130);
}

function mousePressed() {
  // notas blancas
  if (mouseY > 260 && mouseY < 460 && mouseX < 460) {
    if (mouseX > 190 && mouseX < 250) {
      // DoM
      playNote(84); 
    } else if (mouseX > 250 && mouseX < 310) {
      // ReM
      playNote(86);
    } else if (mouseX > 310 && mouseX < 370) {
      // MiM
      playNote(88);
    }
  }   
  
  // notas negras 
  if (mouseY > 260 && mouseY < 390) {
    if (mouseX > 230 && mouseX < 270) {
      // Do#
      playNote(85);
    } else if (mouseX > 290 && mouseX < 330) {
      // Re#
      playNote(87);
    }
  }
}

function mouseReleased() {
  // cuando el mouse no está apretando, no suena el oscilador
  osc.amp(0);
}

function playNote(midiNote) {
  let freq = midiToFreq(midiNote);
  osc.freq(freq);
  osc.amp(0.5, 0.1);
}

function draw() {
  piano();
}
```

Después, gracias a otra de mis referencias y algunas condicionales, pude usar la variable `noise` para agregarle bloque de color diferente a cada tecla.

```javascript
let osc;
let noise, env, analyzer;
let lastPlayedNote = 60; // se empieza con una nota inicial cualquiera

function setup() {
  createCanvas(560, 600);
  osc = new p5.Oscillator('sine');
  osc.start();
  // el oscilador empieza en 0
  osc.amp(0);
  noise = new p5.Noise(); 
  noise.start();
  noise.amp(0);
  env = new p5.Env();
  env.setADSR(0.001, 0.1, 0.2, 0.1);
  env.setRange(1, 0);
  analyzer = new p5.Amplitude();
}
```

```javascript

function draw() {
  piano();
  let level = analyzer.getLevel();
  let levelHeight = map(level, 0, 0.4, 0, height);

  // cambiar color del rect
  if (lastPlayedNote > 83 && lastPlayedNote < 85) {
    fill(93, 42, 66); 
  } else if (lastPlayedNote > 85 && lastPlayedNote < 87) {
    fill(252, 177, 166); 
  } else if (lastPlayedNote > 87 && lastPlayedNote < 89) {
    fill(255, 249, 236); 
  } else if (lastPlayedNote > 84 && lastPlayedNote < 86) {
    fill(251, 99, 118); 
  } else if (lastPlayedNote > 86 && lastPlayedNote < 88) {
    fill(255, 220, 204); 
  }
  rect(0, height, width, -levelHeight);
}

```

Resultado hasta ahora!

<https://github.com/vaalentinya/dis9034-2024-1/assets/163034795/c1b3a893-2ce9-425a-bd13-24dbbc8822b6>

Para darle más estilo, quise hacerlo más entretenido haciendo una condicional de apretar la tecla `shift` y cambiar notas y colores

```javascript
let osc;
let noise, env, analyzer;
// se empieza con una nota inicial cualquiera
let lastPlayedNote = 60;
//tecla shift empieza no presionada
let shiftPressed = false;
```

teclas blancas y negras!

```javascript
function mousePressed() {
  if (shiftPressed) {
    // teclas blancas + shift
    if (mouseY > 260 && mouseY < 460 && mouseX < 460) {
      if (mouseX > 190 && mouseX < 250) {
        // Shift + C (G)
        playNote(91); 
      } else if (mouseX > 250 && mouseX < 310) {
        // Shift + D (A)
        playNote(93);
      } else if (mouseX > 310 && mouseX < 370) {
        // Shift + E (B)
        playNote(95);
      }
    }   

    // teclas negras + shift
    if (mouseY > 260 && mouseY < 390) {
      if (mouseX > 230 && mouseX < 270) {
        // Shift + C# (G#)
        playNote(92);
      } else if (mouseX > 290 && mouseX < 330) {
        // Shift + D# (A#)
        playNote(94);
      }
    }
  } else {
    // teclas blancas
    if (mouseY > 260 && mouseY < 460 && mouseX < 460) {
      if (mouseX > 190 && mouseX < 250) {
        // C
        playNote(84); 
      } else if (mouseX > 250 && mouseX < 310) {
        // D
        playNote(86);
      } else if (mouseX > 310 && mouseX < 370) {
        // E
        playNote(88);
      }
    }   

    // teclas negras
    if (mouseY > 260 && mouseY < 390) {
      if (mouseX > 230 && mouseX < 270) {
        // C#
        playNote(85);
      } else if (mouseX > 290 && mouseX < 330) {
        // D#
        playNote(87);
      }
    }
  }
}
```

finalmente, los colores acorde a las teclas

```javascript
function draw() {
  piano();
  let level = analyzer.getLevel();
  let levelHeight = map(level, 0, 0.4, 0, height);

  // DoM, Do#, ReM, Re#, MiM sin shift
  // FaM, Fa#, SolM, Sol#, LaM con shift
  if (shiftPressed) {
    if (lastPlayedNote > 88 && lastPlayedNote < 90) {
      fill(94, 252, 141); 
    } else if (lastPlayedNote > 90 && lastPlayedNote < 92) {
      fill(147, 190, 223); 
    } else if (lastPlayedNote > 92 && lastPlayedNote < 94) {
      fill(109, 90, 114); 
    } else if (lastPlayedNote > 89 && lastPlayedNote < 91) {
      fill(142, 249, 243); 
    } else if (lastPlayedNote > 91 && lastPlayedNote < 93) {
      fill(131, 119, 209); 
    }
  } else {
    if (lastPlayedNote > 83 && lastPlayedNote < 85) {
      fill(93, 42, 66); 
    } else if (lastPlayedNote > 85 && lastPlayedNote < 87) {
      fill(252, 177, 166); 
    } else if (lastPlayedNote > 87 && lastPlayedNote < 89) {
      fill(255, 249, 236); 
    } else if (lastPlayedNote > 84 && lastPlayedNote < 86) {
      fill(251, 99, 118); 
    } else if (lastPlayedNote > 86 && lastPlayedNote < 88) {
      fill(255, 220, 204); 
    }
  }
  rect(0, height, width, -levelHeight);
}
```
y ya está! 
resultado final: 


https://github.com/vaalentinya/dis9034-2024-1/assets/163034795/7e16605e-4127-4940-ae89-32ebfdd89876



