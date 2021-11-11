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
function generatePhoneNumber() {
  // seu código aqui
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
