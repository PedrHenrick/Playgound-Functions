// Desafio 10 (ok)
function techList(tecnologias, userName) {
  // seu código aqui
  // referência site: https://www.youtube.com/watch?v=JxdsTHdgqAU
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
  let repetido = 0;
  if (num.length > 11 || num.length < 11) return 'Array com tamanho incorreto.';
  for (let key of num) {
    if (key > 9 || key < 0) return 'não é possível gerar um número de telefone com esses valores';
    telefone = telefone.replace('x', key);
  }
  for (let key of num) {
    repetido = 0;
    for (let index of num) {
      if (index === key) {
        repetido += 1;
        if (repetido >= 3) return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  }
  return telefone;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  // referência site: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
  let resposta;
  let diferençaAbsoluta = Math.abs(lineA) - Math.abs(lineB) - Math.abs(lineC);
  let somaAB = lineA + lineB;
  let somaAC = lineA + lineC;
  let somaCB = lineC + lineB;

  if (somaAB > lineC && somaCB > lineA && somaAC > lineB && lineC > diferençaAbsoluta && lineB > diferençaAbsoluta && lineA > diferençaAbsoluta) resposta = true;
  else resposta = false;
  return resposta;
}

// Desafio 13
function hydrate(sentence) {
  // seu código aqui
  // Referêcia site: https://www.horadecodar.com.br/2020/10/14/como-obter-apenas-os-numeros-de-uma-string-em-javascript/
  let numero = sentence.replace(/[^0-9]/g, '');
  let somaNumeros = 0;
  let string = '';
  for (let index = 0; index < numero.length; index += 1) {
    somaNumeros += parseInt(numero[index]);
  }
  if (somaNumeros === 1) string = somaNumeros + ' copo de água';
  else string = somaNumeros + ' copos de água';
  return string;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
