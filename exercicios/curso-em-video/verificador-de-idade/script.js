var botao = document.querySelector('#botao')
botao.addEventListener('click',verificar)

var data = new Date()
var anoAtual = data.getFullYear()
var res = document.querySelector('div#res')
function verificar() {
    var anoNascimento = window.document.querySelector('#txtano')
    //Validação do ano
    if(anoNascimento.value.length == 0 || anoNascimento.value > anoAtual){
        window.alert('[ERRO] Verifique as informações e tente novamente!')
    } else {
        var sexo = document.getElementsByName('radsex')
        var idade = anoAtual - Number(anoNascimento.value)
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (sexo[0].checked) {
            var genero = 'Homem'
            if (idade >=0 && idade <10) {
                //criança
                img.setAttribute('src', 'img/crianca-menino.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'img/jovem-menino.png')
            } else if (idade <60){
                //Adulto
                img.setAttribute('src','img/adulto-homem.png')
            } else {
                //idoso
                img.setAttribute('src','img/idoso.png')
            }
        } else {
            genero = 'Mulher'
            if (idade >=0 && idade <10) {
                //criança
                img.setAttribute('src','img/crianca-menina.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src','img/jovem-menina.png')
            } else if (idade <65){
                //Adulto
                img.setAttribute('src','img/adulto-mulher.png')
            } else {
                //idoso
                img.setAttribute('src','img/idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos de idade`
        res.appendChild(img)
    }

}