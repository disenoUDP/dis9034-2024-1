function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

console.log(getRandomInt(3));
// Expected output: 0, 1 or 2
//resultado esperado:0,1 o 2

console.log(getRandomInt(1));
// Expected output: 0
// resultado esperado:0 

console.log(Math.random());
// Expected output: a number from 0 to <1
// resultdo esperado: un numero de 0 <1


// Informacion rescatada de https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random 