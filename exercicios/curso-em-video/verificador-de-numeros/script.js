let num = document.querySelector('input#txtnum')
let botaoAdd = document.querySelector('input#botaoAdd')
let botaoFinalizar = document.querySelector('input#botaoFinalizar')
let lista = document.querySelector('#lista')
let res = document.querySelector('div#res')
let valores = []

botaoAdd.addEventListener('click',adicionar)
botaoFinalizar.addEventListener('click',finalizar)

//Funções de validação
function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista (n,l) {
    if (l.indexOf(Number(n)) == -1) {
        return true
    } else {
        return false
    }
}

//Funcionamento



function relatorios(){
    //Primeiro Relatório
    res.innerHTML = `<p>Ao todo, temos ${valores.length}  números cadastrados</p>`

    //Segundo Relatório
    let maior = valores[0]
    for (let cont2 = 1; cont2 <= valores.length; cont2++) {
        if(valores[cont2] > maior) {
            maior = valores[cont2]
        }
    }
    res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`

    //Terceiro relatório
    let menor = valores[0]
    for (let cont3 = 1; cont3 <= valores.length; cont3++) {
        if(valores[cont3] < menor) {
            menor = valores[cont3]
        }
    }
    res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`

    //Quarto relatório
    let soma = 0
    for (let cont4 = 1; cont4 <= valores.length; cont4++) {
        soma += valores[cont4]
    }
    res.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`

    //Quinto relatório
    let soma5 = 0
    for (cont5 = 1; cont5 <= valores.length; cont5++) {
        soma5 += valores[cont5]
    }
    let media = soma5/valores.length
    res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
}

function finalizar(){
    if (valores.length == 0){
        window.alert('Por favor, digite um número antes de finalizar')
    } else {
        relatorios()
    }
}

function adicionar() {
    if (isNumero(num.value) && inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let option = document.createElement('option')
        let textOption = document.createTextNode(`Digitado o número ${num.value}`)
        option.appendChild(textOption)
        lista.appendChild(option)
        res.innerHTML = ''
    } else {
        window.alert('[Erro] Valor inválido ou já encontrado na lista!')
    }
    num.value = ''
    num.focus()
}