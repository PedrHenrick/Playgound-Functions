// Desafio 1
function compareTrue(ValueOne, ValueTwo) {
  // seu código aqui
  if(ValueOne === true && ValueTwo === true){
    return true;
  }else{
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let triangleArea = (base*height)/2;
  return triangleArea;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  //Referêcia site: https://digitalinnovation.one/artigos/4-maneiras-de-converter-string-em-array-de-caracteres-em-javascript
  const breakSentences = string.split(' ');
  return breakSentences;
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let string = '';
  let arraySize = array.length;


  if(arraySize - 1 === 0){
    string += array[0];
  }else{
    string += array[arraySize-1] + ', ' + array[0];
  }
  return string;
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
