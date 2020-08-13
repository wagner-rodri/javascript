// 1. Retorne o url da página atual utilizando o objeto window
const pagAtual = window.document.URL
console.log(pagAtual)

//2. Selecione o primeiro elemento da página que possua classe ativo
const classeAtivo = document.querySelector('.ativo')

//3. Retorne a linguagem do nagevador
const linguagem = navigator.language
console.log(linguagem)

//4. Retorne a largura da janela
const larguraJanela = window.innerWidth
console.log(larguraJanela)