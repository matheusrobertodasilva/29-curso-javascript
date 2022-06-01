const texto1 = "Olá, mundo!"; 
const textto2 = 'Olá mundo!';
const senha = "senhaSuperSegura456!";
const StringDeNumeros = "34567";

const citacao = "Meu nome é: ";
const meuNome = "Leonardo"

// concatenação (+)

console.log(citacao + meuNome)

// template string OU template literal 

/*const recado = `Matheus disse: ${texto1}`
console.log(recado)*/

// Unicode
const cifrao = '\u0024';
const aManuiscrito = '\u0041';
const tique = '\u2705';
const hiragana = '\u3041';

console.log(cifrao)
console.log(aManuiscrito)
console.log(tique)
console.log(hiragana)

// comparação 

const cidade = "belo horizonte";
const input = "Belo Horizonte";

console.log(cidade === input); // false

// Todas a letras minuscular

/* const cidade = "belo horizonte";
const input = "Belo Horizonte";

const inputMinusculo = input.toLowerCase();
//toLowerCase é um método 
console.log(cidade === inputMinusculo); // true

// Contador

const senha = "minhaSenha123"
console.log(senha.length) // 13 caracteres
// lenght é uma propriedade. */