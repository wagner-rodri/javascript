//Verifique se a sua idade é maior que a de algum parente
var minhaIdade = 26
//Tive que deixar a idade em ordem crescente, pois ainda não aprendi a ordenar automaticamente. Deixar em ordem aleatória pode fazer com que o programa ignore alguns valores, em virtude da ordem de execução do programa.
var idadeParente_A = 26
var idadeParente_B = 26
var idadeParente_C = 26
if (minhaIdade > idadeParente_A) {
    console.log('Sou mais velho que o Parente A')
} else if (minhaIdade > idadeParente_B) {
    console.log('Sou mais velho que o Parente B')
} else if (minhaIdade > idadeParente_C) {
    console.log('Sou mais velho que o Parente C')
} else if (minhaIdade = (idadeParente_A || idadeParente_B || idadeParente_C)) {
    console.log('As nossas idades são iguais')
} else {
    console.log('Sou o mais novo')
}

// Qual o valor retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2)
console.log(expressao) // Retorna o valor 3

//Verifique se as seguintes variáveis são True ou False
var nome = 'Wagner' //true
var idade = 28 //true
var possuiDoutorado = false //false
var empregoFuturo // Como é undefined é false
var dinheiroNaConta = 0 // Como é 0, é false

//Compare o total de habitantes da China com o Brasil (em milhões)
var Brasil = 207
var China = 1340
var diferenca = China - Brasil
//Comparando pela diferença de valores
console.log(`A China tem ${diferenca} milhões de habitantes a mais que o Brasil`)
//Comparando pela representação percentual da população do Brasil sobre a China
var percentualHabitantes = (207/1340) * 100
console.log(`Em números, a população Brasileira representa cerca de ${percentualHabitantes}% da população Chinesa`)

//O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
    console.log('Verdadeiro')
} else {
    console.log("Falso")
}