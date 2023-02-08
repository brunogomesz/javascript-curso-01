// parâmetros de função


// console.log(soma(7, 8))

// function nomeIdade(nome, idade){
//     return `meu nome é ${nome} e minha idade é ${idade}`;
// }

// console.log(nomeIdade(40, "Ju"))

function soma(num1, num2){
    return num1 + num2;
}

function multiplica(numero1 = 1, numero2 = 1){
    return numero1 * numero2;
}

console.log(multiplica(soma(4, 5), soma(3, 3)))

console.log(multiplica(2, 2))
