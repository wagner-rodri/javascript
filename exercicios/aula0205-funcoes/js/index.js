//Crie uma função para vericar se um valor é true
function corLaranja(cor) {
    if (typeof cor !== 'string') { //Verifica se oque foi digitado é uma palavra
        return 'Por favor digite uma palavra'
    } else if (cor === 'laranja' || cor === 'Laranja'){
        return true
    } else {
        return false
    }
}
console.log(corLaranja('laranja'))

//Crie uma função matemática que retone o perímetro de um quadrado
function perimetroQuadrado(lado) {
    if (typeof lado !== 'number') { //Verifica se oque foi digitado é um número
        return 'Por favor digite um número'
    } else {
        var perimetro = lado * 4
        return perimetro
    }
}
console.log(`O perímetro do quadrado com o lado selecionado é ${perimetroQuadrado(10)}`)

/*
Crie uma função que retorne o seu nome completo;
Ela deve conter as variáveis nome e sobre nome.
*/
function nomeCompleto (nome, sobrenome) {
    if (typeof nome !== 'string' || typeof sobrenome !== 'string') { //Verifica se oq ue foi digitado são palavras
        return 'Os dois nomes devem ser compostos por palavras'
    } else if (nome == '' || sobrenome == '') { //Verifica se alguns dos campos não foi preenchido
        return 'Os dois campos devem ser preenchidos'
    } else {
        return `${nome} ${sobrenome}`
    }
}
console.log(nomeCompleto('Wagner','Rodrigues'))

//Crie uma função que verifica se o número é par
function ePar (numero) {
    if (typeof numero !== 'number') { //Verifica se o que foi digitado é um número
        return 'Por favor, digite um número'
    } else if (numero % 2 == 0) {
        return 'O número digitado é par'
    } else {
        return 'O número digitado é impar'
    }
}
console.log(ePar(5))

//Crie uma função que retorne o tipo de dado que foi passado nela
function tipo (dado) {
    switch (typeof dado) {
        case 'number':
            console.log('O que foi digitado é do tipo Number')
            break
        case 'string':
            console.log('O que foi digitado é do tipo String')
            break
        case 'boolean':
            console.log('O que foi digitado é do tipo Boolean')
            break           
    }
}
tipo('oi')
