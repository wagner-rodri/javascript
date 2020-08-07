//1. Crie um objeto com seus dados pessoais
var dados = {
    nome: 'Wagner',
    sobrenome: 'Rodrigues',
    cidade: 'Curitiba',
    idade: 28,
}
console.log(dados)

//2. Crie um método no objeto anterior, quemostro seu nome completo
dados.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`;
}
console.log(dados.nomeCompleto())

/*
3. Modifique o valor da propriedade preço para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'VW',
}
*/
//Solução
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'VW',
}
carro.preco = 3000
console.log(carro.preco)

//4. Crie um objeto de um cachorroque represente um labrador de cor preta, com 10 anos, que late ao ver um homem.
var cachorro = {
    raca: 'Labrador',
    cor: 'Preta',
    idade: 10,
    late(pessoa) {
        if (pessoa === 'homem') {
            return 'latindo'
        } else {
            return 'calado'
        }
    }
}
console.log(cachorro.late('homem'))