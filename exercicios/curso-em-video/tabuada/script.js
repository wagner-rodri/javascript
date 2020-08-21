var botao = document.getElementById('botao')
botao.addEventListener('click',calcular)

function calcular() {
    let num = document.getElementById('txtn')
    let tab = document.querySelector('div#seltab')
    if (num.value.length == 0) {
        window.alert('[ERRO] Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let cont = 1
        while (cont <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${cont} = ${n*cont}`
            var tabela = document.querySelector('#seltab')
            tabela.appendChild(item)
            item.setAttribute('value',`v${cont}`)
            cont++
        }
    }
}