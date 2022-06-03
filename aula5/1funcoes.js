/* let x = "";
console.log(x);
x = "oi"; */

//DECLARAÇÃO DE FUNÇÃO (FORMA CLASSICA)

// 1° declara a função
                     //string
function imprimeTexto(texto){
    console.log(texto)
}

//2° executa a função (1 ou + vezes)

imprimeTexto(soma());
//imprimeTexto("outro texto")

// três formas de escrever funções 

function soma(){
    return 2 + 2; // a palavra return retorna o que queremos; O returns deve ser colocado no final; 
}

//console.log(soma())