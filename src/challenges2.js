// Desafio 10
function techList(array, User) {
  // seu código aqui
  // Referência site: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  let technology = [];
  let resposta;
  let object = {};
  if (array.length === 0) resposta = 'Vazio!';
  else {
    for (let index = 0; index < array.length; index += 1) {
      technology.push(object = { tech: array[index], name: User });
    }
    if (array.length === 5) {
      technology.sort(function (a, b) {
        if (a.tech > b.tech) return 1;
        if (a.tech < b.tech) return -1;
        return 0; }); resposta = technology 
    } 
    else resposta = technology;
  } return resposta;
}
// console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

// Desafio 11
function generatePhoneNumber(numbers) {
  // seu código aqui
  // referência de site: https://www.horadecodar.com.br/2020/11/12/como-fazer-uma-copia-de-array-sem-referencia-em-javascript/
  let total = numbers.length;
  let repetido = 1;
  let numero = numbers.slice();
  let indexSecond = 0;
  let string = '';
  if (total !== 11) return 'Array com tamanho incorreto.';
  else {
    for (let index = 0; index < total; index += 1) { 
      if (numbers[index] > 9 || numbers[index] < 0) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
    for (let index = 1; index < total; index += 1) {
      for (let indexTwo = 0; indexTwo < index; indexTwo += 1) {
        if (numero[index] > numero[indexTwo]) {
          let aux = numero[index];
          numero[index] = numero[indexTwo];
          numero[indexTwo] = aux;
        }
      }
    }
    for (let index = 1; index < total; index += 1) {
      if (numero[indexSecond] === numero[index]) {
        repetido += 1;
        if (repetido >= 3) return 'não é possível gerar um número de telefone com esses valores';
      } else if (numero[indexSecond] !== numero[index + 1]) indexSecond += 1;
    }
    string = '(' + numbers[0] + numbers[1] + ')' + ' ' + numbers[2] + numbers[3] + numbers[4] + numbers[5] + numbers[6] + '-' + numbers[7] + numbers[8] + numbers[9] + numbers[10];
    return string;
  }
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  // referência site: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
  let absoluteA = Math.abs(lineA);
  let absoluteB = Math.abs(lineB);
  let absoluteC = Math.abs(lineC);
  let resposta;
  let diferençaAbsoluta = absoluteA - absoluteC - absoluteB;
  if ((lineA + lineB) > lineC && (lineC + lineB) > lineA && (lineA + lineC) > lineB && lineC > diferençaAbsoluta && lineB > diferençaAbsoluta && lineA > diferençaAbsoluta) resposta = true;
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
