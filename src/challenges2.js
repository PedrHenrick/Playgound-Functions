// Desafio 10
function techList(tecnologias, userName) {
  // seu código aqui
  // referência site: https://www.youtube.com/watch?v=JxdsTHdgqAU
  let arrayVazio = [];
  let objeto = {};
  if (tecnologias.length === 0) {
    return 'Vazio!';
  }
  if (tecnologias.length > 0) {
    for (let index = 0; index < tecnologias.length; index += 1) {
      arrayVazio.push(objeto = { tech: tecnologias[index], name: userName });
    }
  }
  if (tecnologias.length >= 5) {
    const ordem = arrayVazio.sort((a, b) => {
      return a.tech.localeCompare(b.tech);
    });
  }
  return arrayVazio;
}
// console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

// Desafio 11
function generatePhoneNumber(num) {
  // seu código aqui
  let total = num.length;
  let repetido = 0;
  if (total !== 11) return 'Array com tamanho incorreto.';
  if (total === 11) {
    for (let index = 0; index < total; index += 1) {
      if (num[index] > 9 || num[index] < 0) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
    for (let index = 0; index < total; index += 1) {
      for (let secondIndex = 1; secondIndex < total; secondIndex += 1) {
        if (num[index] === num[secondIndex]) {
          repetido += 1;
          if (repetido === 3) return 'não é possível gerar um número de telefone com esses valores';
        }
      }
      repetido = 0;
    }
    
  }
  return '(' + num[0] + num[1] + ') ' + num[2] + num[3] + num[4] + num[5] + num[6] + '-' + num[7] + num[8] + num[9] + num[10];
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
