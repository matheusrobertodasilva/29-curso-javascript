//Parâmetro de funções 

                //2     //2
function soma(numero1, numero2){
    return numero1 + numero2;
}

/* console.log(soma(2 , 2));
console.log(soma(245 , 20));
console.log(soma(-500 , 60)); */

// parâmetro X argumentos 

// ordem dos parâmetros

function nomeIdade(nome, idade){
    return `eu nome é ${nome} e minha idade é ${idade}`
}

//console.log(nomeIdade(40, "juliana"))

function meultiplica(numero1 = 1, numero2 = 1){
    return numero1 * numero2;
}

//console.log(meultiplica(soma(4, 5), soma(3 , 3)))
console.log(meultiplica(soma(4, 5)))

// boa pratica usar poucos parâmetros