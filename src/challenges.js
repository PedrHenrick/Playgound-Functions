// Desafio 1
function compareTrue(ValueOne, ValueTwo) {
  // seu código aqui
  if(ValueOne === true && ValueTwo === true) {
    return true;
  } else {
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
  } else {
    string += array[arraySize-1] + ', ' + array[0];
  }
  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let winningPoints = wins*3;
  let tiePoints = ties*1;
  let scoreResult = winningPoints + tiePoints;
  return scoreResult;
}

// Desafio 6
function highestCount(numbers) {
  // seu código aqui
  let counter = 1;

  for(let index = 1; index < numbers.length; index+=1) {
    for(let indexTwo = 0; indexTwo < index; indexTwo+=1) {
        if(numbers[index] > numbers[indexTwo]){
            let aux = numbers[index];
            numbers[index] = numbers[indexTwo];
            numbers[indexTwo] = aux;
        }
    }
  }
  for(let index = 0; index < numbers.length; index+=1) {
    if(numbers[index] == numbers[index+1]) {
      counter += 1;
    } else {
      break;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  

  if(mouse-cat1 === 6 || mouse-cat1 === -6 && mouse-cat2 === 12 || mouse-cat2 === -12){
    return "cat1"
  } else if(mouse-cat1 === 3 || mouse-cat1 === -3 && mouse-cat2 === 2 || mouse-cat2 === -2) {
    return "cat2"
  } else if(mouse-cat1 === mouse-cat2 || mouse-cat1 - mouse-cat2 <= 0 || mouse-cat2 - mouse-cat1 <= 0 ){
    return "os gatos trombam e o rato foge"
  }

}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let ArrayOfString = [];

  for(let index = 0; index < array.length; index+=1){
    if(array[index]%3 === 0 && array[index]%5 !== 0){
      ArrayOfString.push("fizz");
    } else if(array[index]%3 !== 0 && array[index]%5 === 0){
      ArrayOfString.push("buzz");
    } else if(array[index]%3 === 0 && array[index]%5 === 0) {
      ArrayOfString.push("fizzBuzz");
    } else{
      ArrayOfString.push("bug!");
    }
  }
  return ArrayOfString;
}

// Desafio 9
function encode(mensagem) {
  // seu código aqui
  let frase = '';

  for(let index = 0; index < mensagem.length; index+=1){
    if(mensagem[index] === 'a'){
      frase += '1';
    } else if(mensagem[index] === 'e'){
      frase += '2';
    } else if(mensagem[index] === 'i'){
      frase += '3';
    } else if(mensagem[index] === 'o'){
      frase += '4';
    } else if(mensagem[index] === 'u'){
      frase += '5';
    } else {
      frase += mensagem[index];
    }
  }
  return frase;
}
function decode(frase) {
  // seu código aqui
  let frase2 = '';
  for(let index = 0; index < frase.length; index+=1){
    if(frase[index] === '1'){
      frase2 += 'a';
    } else if(frase[index] === '2'){
      frase2 += 'e';
    } else if(frase[index] === '3'){
      frase2 += 'i';
    } else if(frase[index] === '4'){
      frase2 += 'o';
    } else if(frase[index] === '5'){
      frase2 += 'u';
    } else {
      frase2 += frase[index];
    }
  }
  return frase2;
}

// Desafio 10
function listOfTechnology(array3, nameUser) {
  let technology = [];
  let object = {};
if(array3.length === 0){
  return "Vazio!";
} else{
    for(let index = 0; index < array3.length; index+=1){
      technology.push (object = { tech: array3[index], nome: nameUser});
    };
  };
technology.sort(function (a, b) {
      return (a.tech > b.tech) ? 1 : ((b.tech > a.tech) ? -1 : 0);
    });
  return technology;
};

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
