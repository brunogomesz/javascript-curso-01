const texto1 = "Olá, mundo!";
const texto2 = 'Olá, mundo!';

const senha = "senhaSuperSegura456!";
const StringDeNumeros = "34567";

const citacao = 'Meu nome é ';
const meuNome = "Leonardo"

// concatenação (+)

console.log(citacao + meuNome);

//----------------------------------

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

//---------------------------------
const cidade = "belo horizonte";
const input = "Belo Horizonte";

console.log(cidade === input); // false

//----------------------------------

const cidade2 = "belo horizonte";
const input2 = "Belo Horizonte";

const inputMinusculo = input2.toLowerCase();

console.log(cidade2 === inputMinusculo); // true

//---------------------------------------

const senha2 = "minhaSenha123"
console.log(senha2.length) // 13 caracteres

// template string OU template literal