// Desafio 1 (ok)
function compareTrue(ValueOne, ValueTwo) {
  // seu código aqui
  let resposta;
  if (ValueOne === true && ValueTwo === true) resposta = true;
  else resposta = false;
  return resposta;
}

// Desafio 2 (ok)
function calcArea(base, height) {
  // seu código aqui
  let triangleArea = (base * height) / 2;
  return triangleArea;
}

// Desafio 3 (ok)
function splitSentence(string) {
  // seu código aqui
  // referêcia site: https://digitalinnovation.one/artigos/4-maneiras-de-converter-string-em-array-de-caracteres-em-javascript
  const breakSentences = string.split(' ');
  return breakSentences;
}

// Desafio 4 (ok)
function concatName(array) {
  // seu código aqui
  // referência site: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/join#juntando_um_array-like_object_objeto_estilo-array
  let arraySize = array.length;
  let arrayVazio = [];

  if (arraySize - 1 === 0) arrayVazio.push(array);
  else {
    arrayVazio.push(array[arraySize - 1]);
    arrayVazio.push(array[0]);
  }
  return arrayVazio.join(', ');
}

// Desafio 5 (ok)
function footballPoints(wins, ties) {
  // seu código aqui
  let winningPoints = wins * 3;
  let tiePoints = ties * 1;
  let scoreResult = winningPoints + tiePoints;
  return scoreResult;
}

// Desafio 6 (ok)
function highestCount(num) {
  // seu código aqui
  // referência site: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max
  let numeros = num.length;
  let counter = numeros;
  let maiorNumero = Math.max(...num);

  for (let index = 0; index < numeros; index += 1) {
    if (num[index] !== maiorNumero) counter -= 1;
  }
  return counter;
}

// Desafio 7 (ok)
function catAndMouse(rato, primeiroGato, segundoGato) {
  // seu código aqui
  // referência site: https://qastack.com.br/programming/4652104/convert-a-negative-number-to-a-positive-one-in-javascript;
  let distancia = '';
  let distanciaPrimeiroGato = primeiroGato - rato;
  let distanciaSegunoGato = segundoGato - rato;
  if (Math.abs(distanciaPrimeiroGato) < Math.abs(distanciaSegunoGato)) {
    distancia = 'cat1';
  } else if (Math.abs(distanciaPrimeiroGato) > Math.abs(distanciaSegunoGato)) {
    distancia = 'cat2';
  } else if (Math.abs(distanciaPrimeiroGato) === Math.abs(distanciaSegunoGato)) {
    distancia = 'os gatos trombam e o rato foge';
  }
  return distancia;
}

// Desafio 8 (ok)
function fizzBuzz(array) {
// seu código aqui
// referência site: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#imprimindo_os_conte%C3%BAdos_de_uma_ordem
  let arrayVazio = [];
  array.forEach((index) => {
    if (index % 3 === 0 && index % 5 === 0) arrayVazio.push('fizzBuzz');
    else if (index % 3 === 0) arrayVazio.push('fizz');
    else if (index % 5 === 0) arrayVazio.push('buzz');
    else arrayVazio.push('bug!');
  });
  return arrayVazio;
}

// Desafio 9 (ok)
function encode(mensagem) {
  // seu código aqui
  // referência site: https://blog.betrybe.com/javascript/javascript-replace/
  let frase = '';
  frase = mensagem.replace(/a/gi, '1');
  frase = frase.replace(/e/gi, '2');
  frase = frase.replace(/i/gi, '3');
  frase = frase.replace(/o/gi, '4');
  frase = frase.replace(/u/gi, '5');
  return frase;
}
// (ok)
function decode(frase) {
  // seu código aqui
  // referência site: https://blog.betrybe.com/javascript/javascript-replace/
  let frase2 = '';
  frase2 = frase.replace(/1/gi, 'a');
  frase2 = frase2.replace(/2/gi, 'e');
  frase2 = frase2.replace(/3/gi, 'i');
  frase2 = frase2.replace(/4/gi, 'o');
  frase2 = frase2.replace(/5/gi, 'u');
  return frase2;
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
