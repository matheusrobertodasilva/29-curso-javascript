// == -> comparação implicita

const numero = 5;
const texto = "5";

console.log(numero == texto) // true; da verdadeiro pois o o js faz a converção da string de texto 
console.log(numero === texto) // false; da falso pois nesse caso o js não faz a conversão 

// typeof: saber o tipo de dado contido em uma variavel 
console.log(typeof numero)
console.log(typeof texto)

// == só compara o valor 
// === compara o valor e o tipo de dado; * boa pratica

// Converção explícita

Number()
String()