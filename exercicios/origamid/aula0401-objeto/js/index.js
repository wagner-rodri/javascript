/* 
1. Transforme o objeto abaixo em uma Construction function
const pessoa = {
    nome: 'Nome pessoa',
    idade: 0,
    andar() {
        console.log(this.nome + 'andou')
    }
} 
*/

function Pessoa(nomePessoa, idadePessoa) {
    this.nome = nomePessoa,
    this.idade = idadePessoa,
    this.andar = function() {
        const nomeAndar = this.nome
        console.log(nomeAndar + ' andou')
    }
} 

const maria31 = new Pessoa('Maria', 31)
maria31.andar()
const jose24 = new Pessoa('José', 24)
jose24.andar()

//Crie três pessoas, João - 20 anos, 
//Maria - 25 anos, Bruno - 15 anos

function Pessoas2 (nomePessoa, idadePessoa) {
    this.nome = nomePessoa,
    this.idade = idadePessoa
    this.console = function () {
        console.log(`${this.nome} ${this.idade} anos`)
    }
}

const joao20 = new Pessoas2('João', 20)
joao20.console()
const maria25 = new Pessoas2('Maria', 25)
maria25.console()
const bruno15 = new Pessoas2('Bruno', 15)
bruno15.console()

// Crie um Construction Function (Dom) para 
// manipulação de listas do dom. Deve conter
// as seguintes propriedades e métodos:

// elements, retorna NdeList com os elementos selecionados
// addClasse(classe), adiciona a classe a todos os elementos
// remClasse(classe), remove a classe a todos os elementos

function Dom(seletor) {
    const elements = document.querySelectorAll(seletor)

    this.addClasse = function (classe) {
        elements.forEach((element) => {
            element.classList.add(classe)
        })
    }
    this.remClasse = function (classe) {
        elements.forEach((element) => {
            element.classList.remove(classe)
        })
    }

}
Dom('li')
addClasse('ativo')
//remClasse('ativo') - Comentário para visualizar a classe adicionada.