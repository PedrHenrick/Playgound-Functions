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
// seu código aqui
// Para fechar esse algoritmo tive que fazer um code review nos pull requests e fazer uma adaptação de alguns pontos, mudanças na sintaxe e a adição de recursos já usados anteriormentee como o sort e o replace, para encaixar no meu arquivo e passar nos testes.
function verificaAlgarismos(num) {
  for (let key of num) {
    if (key > 9 || key < 0) return false;
  }
  return true;
}
function verificaRepeticaoDois(num, key, repetido) {
  if (num[key] === num[key + 1]) {
    return (repetido + 1);
  }
  return 1;
}
function verificaRepeticaoUm(num) {
  let repetido = 1;
  for (let key = 0; key < num.length; key += 1) {
    repetido = verificaRepeticaoDois(num, key, repetido);
    if (repetido >= 3) {
      return false;
    }
  }
  return true;
}
function verificaNumero(num) {
  let retorno9ou0 = verificaAlgarismos(num);
  let retornoRepetido = verificaRepeticaoUm([...num].sort());
  return retorno9ou0 && retornoRepetido;
}
function imprimeNumero(num) {
  let telefone = '(xx) xxxxx-xxxx';
  for (let key of num) {
    telefone = telefone.replace('x', key);
  }
  return telefone;
}
function generatePhoneNumber(num) {
  if (num.length !== 11) return 'Array com tamanho incorreto.';
  if (verificaNumero(num)) {
    return imprimeNumero(num);
  }
  return 'não é possível gerar um número de telefone com esses valores';
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
