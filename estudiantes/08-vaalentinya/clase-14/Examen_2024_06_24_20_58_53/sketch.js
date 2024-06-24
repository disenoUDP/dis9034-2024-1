let osc;
let noise, env, analyzer;
// se empieza con una nota inicial cualquiera
let lastPlayedNote = 60;
//tecla shift empieza no presionada
let shiftPressed = false;

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

//funciones para el shift!
function keyPressed() {
  if (keyCode === SHIFT) {
    shiftPressed = true;
  }
}

function keyReleased() {
  if (keyCode === SHIFT) {
    shiftPressed = false;
  }
}

// función para convertir notas de midi a frecuencias
function midiii(midiNote) {
  return pow(2, (midiNote - 69) / 12) * 440;
}

function piano() {
  background(255);
  
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
  if (shiftPressed) {
    // teclas blancas + shift
    if (mouseY > 260 && mouseY < 460 && mouseX < 460) {
      if (mouseX > 190 && mouseX < 250) {
        // shift + DoM = FaM
        playNote(89); 
      } else if (mouseX > 250 && mouseX < 310) {
        // shift + ReM (SolM)
        playNote(91);
      } else if (mouseX > 310 && mouseX < 370) {
        // shift + MiM (LaM)
        playNote(93);
      }
    }   

    // teclas negras + shift
    if (mouseY > 260 && mouseY < 390) {
      if (mouseX > 230 && mouseX < 270) {
        // shift + Do# (Fa#)
        playNote(90);
      } else if (mouseX > 290 && mouseX < 330) {
        // ahift + Re# (Sol#)
        playNote(92);
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

function mouseReleased() {
  // cuando el mouse no está apretando, no suena el oscilador
  osc.amp(0);
}

function playNote(midiNote) {
  lastPlayedNote = midiNote;
  let freq = midiii(midiNote);
  osc.freq(freq);
  osc.amp(0.5, 0.1);
}

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