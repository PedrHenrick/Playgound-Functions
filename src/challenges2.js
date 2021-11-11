// Desafio 10
function techList(array3, nameUser) {
  // seu código aqui
  // Referência site: https://ricardo-reis.medium.com/o-m%C3%A9todo-sort-do-array-javascript-482576734e0a
  // Referência site: https://www.edsonemiliano.com.br/blog/como-ordenar-uma-array-de-objetos-com-javascript-sort/
  let technology = [];
  let object = {};
  let total = array3.length;

    if(total === 0){ 
    return "Vazio!";
    }
    else{
      for(let index = 0; index < total; index+=1){
        technology.push (object = { tech: array3[index], name: nameUser});
      };
      if(total === 5){
      technology.sort(function (a, b) {
        return (a.tech > b.tech) ? 1 : ((b.tech > a.tech) ? -1 : 0);
      });
      return technology;
      } else {
        return technology;
      }
  };
}

// Desafio 11
function generatePhoneNumber(numbers) {
  // seu código aqui
  // referência de site: https://www.horadecodar.com.br/2020/11/12/como-fazer-uma-copia-de-array-sem-referencia-em-javascript/

  let total = numbers.length;
  let repetido = 1;
  let numero = numbers.slice();
  let indexSecond = 0;
  
  

  if(total !== 11){
    return "Array com tamanho incorreto."
  }
  else{
    for(let index = 0; index < total; index+=1){
      if(numbers[index] > 9 || numbers[index] < 0){
      return "não é possível gerar um número de telefone com esses valores"
      break;
      }
    }
    
    for(let index = 1; index < total; index+=1) {
      for(let indexTwo = 0; indexTwo < index; indexTwo+=1) {
          if(numero[index] > numero[indexTwo]){
              let aux = numero[index];
              numero[index] = numero[indexTwo];
              numero[indexTwo] = aux;
          }
      }
    }
    for(let index = 1; index < total; index+=1) {
      if(numero[indexSecond] === numero[index]) {
        repetido += 1;
          if(repetido >= 3){
            return "não é possível gerar um número de telefone com esses valores";
            break;
          }
      } else if(numero[indexSecond] !== numero[index+1]) {
          indexSecond += 1;
      } 
    }
    return '(' + numbers[0] + numbers[1] + ')' +  ' ' + numbers[2] + numbers[3] + numbers[4] + numbers[5] + numbers[6] + '-' + numbers[7] + numbers[8] + numbers[9] + numbers[10]; 
    }
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
