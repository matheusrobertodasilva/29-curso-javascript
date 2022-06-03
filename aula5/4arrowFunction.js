//

function aprensentar(nome){
    return `Meu nome é ${nome}`
}


//Arrow function 
const apresentarArrow = nome => `Meu nome é ${nome}`;
const soma = (num1 , num2) => num1 + num2;

//Arrow function com + de 1 linha de instrução

const somaNumerosPequenos = (num1, num2) =>  {
    if(num1 || num2 > 10) {
        return "Somente números de 1 a 9";
    } else {
        return num1 + num2;
    }
}

// Hoisting: arrow function se comporta como expressão
// Não confundir o operador de maior ou igual (>=) com a seta do arrow function(=>);