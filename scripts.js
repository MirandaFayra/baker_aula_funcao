// modos diferentes de declarar funcoes 
// trechos de código reutilizáveis 
// Parametros tá dentro do () quando definimos funcao 
// Argumentos tá dentro do () quando chamaos a funcao 

console.log(`Salveee`)

// let => muda | const => não muda
// n1 === n2   igual e do mesmo tipo e valor
// n1 !== n2  diferente 
// n1 > n2  número 1 é maior que o 2
// n1 < n2  número 1 é menor que o 2
// - subtraindo 
// !== comparar tipo e valor 
// prompt retorna string 2 === '2' => false

//const numero1 = 10
//const numero2 = 15

//let numero1 = Number(prompt('Digite o primeiro número'))
//let numero2 = Number(prompt('Digite o segundo número'))

/* function verificarValor(n1,n2){
    //trecho de código que será executado ao chamar
    let comparacaoEntreNumeros = n1 === n2
    let diferencaEntreNumeros = n1 !== n2
    let primeiroMaiorQueSegundo = n1 > n2
    let primeiroMenorQueSegundo = n1 < n2

    console.log(`Os números são iguais? ${comparacaoEntreNumeros}.Os números são diferentes? ${diferencaEntreNumeros}. O primeiro número é maior que o segundo? ${primeiroMaiorQueSegundo}.O primeiro número é menor que o segundo ? ${primeiroMenorQueSegundo}`)
}

verificarValor(10,20)
verificarValor(40,550)
verificarValor(50,20)
verificarValor(29,1)*/


/*

// 1. numero 1 igual ao 2 
let comparacaoEntreNumeros = numero1 === numero2
console.log(`Os números são iguais? ${comparacaoEntreNumeros}`)

// 2. numero 1 diferente do 2
let diferencaEntreNumeros = numero1 !== numero2
console.log(`Os números são diferentes? ${diferencaEntreNumeros}`)

// 2. numero 1 maior que o 2
let primeiroMaiorQueSegundo = numero1 > numero2
console.log(`O primeiro número é maior que o segundo? ${primeiroMaiorQueSegundo}`)

// 2. numero 1 menor que 2
let primeiroMenorQueSegundo = numero1 < numero2
console.log(`O primeiro número é menor que o segundo ? ${primeiroMenorQueSegundo} `);

*/

//------------- EXERCICIO 1 ------------ 

/*Crie uma função que receba por parâmetro um nome e imprima no console a mensagem: 
	`Olá ${nome}` 
Invoque (chame) esta função 3 vezes, passando 3 argumentos (nomes) diferentes

Refaça o exercício com a sintaxe de expressão de função (função não-nomeada)*/

//----- JEITO TRADICIONAL ------

// usa palavra reservada function e passao nome da função 

/*function lerNome (nome){
    // trecho de codigo executado ao chamar a funcao
    console.log(`Olá ${nome}` )
}*/ 

//-------- NÃO NOMEADA --------

//funcao não nomeada => cria constante que armazena a funcao

/*const lerNome = function(nome){
    // trecho de codigo executado ao chamar a funcao
    console.log(`Olá ${nome}` )
}*/


//------- ARROW FUNCTION / FUNÇÃO SETA -----

/*const lerNome =(nome)=>{
    // trecho de codigo executado ao chamar a funcao
    console.log(`Olá ${nome}` )
}


lerNome('mandi')  // Chama a primeira nome = mandi
lerNome('caiotas')  // Chama a segunda nome = caiotas
lerNome('gustavo') 
lerNome('leila') 
lerNome('leo') 
lerNome('max') 
lerNome('roger') 
lerNome('thai') 
lerNome('hugo') */ 


// ---------------- EXERCICIO 2 ------------ 

/*Crie uma função que receba um número como parâmetro e:
verifique se ele é par
some com o número 10
multiplique por ele mesmo
Retorne `o número ${numero} é par? ${resultado}. Somado com 1O é igual a ${soma} e multiplicado por ele mesmo é  ${multiplica}`
Refaça o exercício com a sintaxe de expressão de função*/ 

// % => resto  = numero a ser dividido % numero divisor 
// número par tem como resto 0 ao ser dividido por 2   

//------- JEITO NORMAL -------

/*function verificarPar (numero){
    let numeroPar = numero %2 ===0 
    let numeroMaisDez = numero + 10
    let multiplicaNumero = numero * numero
    let resultado = console.log(`o número ${numero} é par? ${numeroPar}. Somado com 1O é igual a ${numeroMaisDez} e multiplicado por ele mesmo é  ${multiplicaNumero }`)
    return resultado
}*/ 

//------- FUNCAO NAO NOMEADA / ANONIMA  -------
/*const verificarPar = function (numero){
    let numeroPar = numero %2 ===0 
    let numeroMaisDez = numero + 10
    let multiplicaNumero = numero * numero
    let resultado = console.log(`o número ${numero} é par? ${numeroPar}. Somado com 1O é igual a ${numeroMaisDez} e multiplicado por ele mesmo é  ${multiplicaNumero }`)
    return resultado
}*/ 

//------- ARROW FUNCTION / FUNCAO SETA -------
/*
const verificarPar = (numero)=>{
    let numeroPar = numero %2 ===0 
    let numeroMaisDez = numero + 10
    let multiplicaNumero = numero * numero
    let resultado = console.log(`o número ${numero} é par? ${numeroPar}. Somado com 1O é igual a ${numeroMaisDez} e multiplicado por ele mesmo é  ${multiplicaNumero }`)
    return resultado
}

verificarPar(10)*/


//-------------- EXERCICIO 3-------- 

/*Faça uma função que receba como parâmetros, login e senha. 
No corpo da função declare duas variáveis:
loginArmazenado = astrodev
senhaArmazenada = bananinha123

Usaremos essas variáveis para verificar se são iguais às que estamos recebendo como parâmetro. Retorne true se as duas variáveis forem verdadeiras. 
Refaça o exercício com a sintaxe de Arrow Function*/

/*function verificarLogin (login, senha){
    let loginArmazenado = 'astrodev'
    let senhaArmazenada = 'bananinha123'
    let comparacaoLogin= loginArmazenado === login
    let comparacaoSenha = senhaArmazenada === senha
    
    const resposta = console.log(` O login é igual ao armazenado: ${comparacaoLogin}. A senha é igual ao armazenado: ${comparacaoSenha}`)
    return resposta
}*/

//verificarLogin('fayra','123')
//verificarLogin('astrodev','bananinha123')


//------- FUNCAO NAO NOMEADA / ANONIMA  -------
/*const verificarLogin = function(login, senha){
    let loginArmazenado = 'astrodev'
    let senhaArmazenada = 'bananinha123'
    let comparacaoLogin= loginArmazenado === login
    let comparacaoSenha = senhaArmazenada === senha
    
    const resposta = console.log(` O login é igual ao armazenado: ${comparacaoLogin}. A senha é igual ao armazenado: ${comparacaoSenha}`)
    return resposta
}*/

//verificarLogin('fayra','123')
//verificarLogin('astrodev','bananinha123')

//------- ARROW FUNCTION / FUNCAO SETA --------

const verificarLogin = (login, senha)=>{
    let loginArmazenado = 'astrodev'
    let senhaArmazenada = 'bananinha123'
    let comparacaoLogin= loginArmazenado === login
    let comparacaoSenha = senhaArmazenada === senha
    
    const resposta = console.log(` O login é igual ao armazenado: ${comparacaoLogin}. A senha é igual ao armazenado: ${comparacaoSenha}`)
    return resposta
}

//verificarLogin('fayra','123')
verificarLogin('astrodev','bananinha123')




