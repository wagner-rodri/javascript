//1. Crie uma array com os anos que o Brasil ganhou a copa
var BrasilGanhouACopa = [1959,1962,1970,1994,2002]
//Mostrando resultado no console
for (var item = 0; item < BrasilGanhouACopa.length; item++){
console.log(BrasilGanhouACopa[item])
}

//Interaja com o array utilizando um loop para mostrar no console a seguinte mensagem: 'O Brasil ganhou a copa de ${ano}'
var BrasilGanhouACopa = [1959,1962,1970,1994,2002]
//Mostrando resultado no console
for (var item = 0; item < BrasilGanhouACopa.length; item++){
console.log(`O Brasil ganhou a copa de ${BrasilGanhouACopa[item]}`)
}

//Interaja com um loop nas frutas abaixo e pare após escrever Pera
var frutas = ['Banana','Maçã','Pera','Uva','Melancia']
//Construindo o loop com FOR
for (var item = 0; item < frutas.length; item++){
    if (frutas[item] !== 'Pera') {
        console.log (frutas[item])
    } else {
        console.log (frutas[item])
        break
    }
}
//Construindo o loop com WHILE
var i = 0
while (i < frutas.length) {
    if (frutas[i] !== 'Pera') {
        console.log(frutas[i])
        i++
    } else {
        console.log(frutas[i]) 
        break      
    }
}

//Coloque a última fruta da array acima e uma variável, sem remover a mesma do array
var frutas = ['Banana','Maçã','Pera','Uva','Melancia']
//Varredura para achar o último item do array (frutas.length - 1)
for (var item = 0; item < frutas.length; item++) {
    if (frutas[item] === frutas[frutas.length - 1]) {
        var ultimaFruta = frutas[item]
        console.log(ultimaFruta)
    }
}
