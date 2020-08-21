var inicio = document.querySelector('input#txtInicio')
var fim = document.querySelector('input#txtFim')
var passo = document.querySelector('input#txtPasso')
var botao = document.querySelector('input#botao')
var res = document.querySelector('p#res')

botao.addEventListener('click',contar)

function contar() {
    if (inicio.value.length == 0) {
        res.innerHTML = 'Impossivel contar!'
    } else if (Number(inicio.value) > Number(fim.value)) {
        window.alert('[ERRO] O valor INICIAL deve ser menor que o valor FINAL')
    } else  if (Number(passo.value) == 0){
        window.alert('[ERRO] Passo inválido, considerando passo 1')
      
        res.innerHTML = 'Contando...'
        var contagem = document.createElement('p')
        
        for (var cont = Number(inicio.value); cont <= Number(fim.value); cont++) {
            var texto = document.createTextNode(`${cont} 👉 `)
            contagem.appendChild(texto)
            document.querySelector('div#blocop').appendChild(contagem)
        }
        var flag = document.createTextNode(`🏁`)
        contagem.appendChild(flag)
    } else {
        res.innerHTML = 'Contando...'
        var contagem = document.createElement('p')
        
        for (var cont = Number(inicio.value); cont <= Number(fim.value); cont += Number(passo.value)) {
            var texto = document.createTextNode(`${cont} 👉 `)
            contagem.appendChild(texto)
            document.querySelector('div#blocop').appendChild(contagem)
        }
        var flag = document.createTextNode(`🏁`)
        contagem.appendChild(flag)
    }
}