// Desafio 10 (ok)
function techList(tecnologias, userName) {
  // seu código aqui
  // Dando um giro em pull requests vi que algumas pessoas estavam fazendo o metodo de ordenação através do sort desta maneira, o que auxiliou na hora de finalizar a ideia.
  let arrayVazio = [];
  if (tecnologias.length === 0) {
    return 'Vazio!';
  }
  if (tecnologias.length > 0) {
    tecnologias = tecnologias.sort();
    for (let index = 0; index < tecnologias.length; index += 1) {
      arrayVazio.push({ tech: tecnologias[index], name: userName });
    }
  }
  return arrayVazio;
}

// Desafio 11
function generatePhoneNumber(num) {
  // seu código aqui
  let telefone = '(xx) xxxxx-xxxx';
  // Verificando o tamanho do array
  if (num.length > 11 || num.length < 11) return 'Array com tamanho incorreto.';
  for (let key of num) {
    let repetido = 0;
    // Verificando se os numeros vão de 0 a 9;
    if (key > 9 || key < 0) return 'não é possível gerar um número de telefone com esses valores';
    for (let index of num) {
      // Verificando quantas vezes repete
      if (key === index) repetido += 1;
      if (repetido >= 3) return 'não é possível gerar um número de telefone com esses valores';
    }
    // Com tudo ok, alterando o valor da string;
    telefone = telefone.replace('x', key);
  }
  return telefone;
}

// Desafio 12 (ok)
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  // referência site: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
  if (((lineA + lineC) > lineB) && (Math.abs(lineA - lineC) < lineB) === true) {
    return true;
  }
  return false;
}

// Desafio 13 (ok)
function hydrate(sentence) {
  // seu código aqui
  // Referêcia site: https://codereview.stackexchange.com/questions/115885/extract-numbers-from-a-string-javascript
  let numero = sentence.match(/\d+/g).map(Number);
  let somaNumeros = 0;

  for (let key of numero) {
    somaNumeros += key;
  }
  if (somaNumeros === 1) return `${somaNumeros} copo de água`;
  return `${somaNumeros} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
