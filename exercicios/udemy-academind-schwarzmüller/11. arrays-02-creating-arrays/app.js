// const numbers = [1, 2, 3];
// console.log(numbers);

// // const moreNumbers = Array(5, 2);
// // console.log(moreNumbers);

// // const yetMoreNumbers = Array.of(1, 2);
// // console.log(yetMoreNumbers);

// const listItems = document.querySelectorAll('li');
// console.log(listItems);

// const arrayListItems = Array.from(listItems);
// console.log(arrayListItems);


// const hobbies = ['coding', 'running'];
// hobbies.push('cooking');
// hobbies.pop();
// hobbies.splice(2, 0, 'dancing', 'eating')
// console.log(hobbies)
// hobbies.splice(-3, 2)
// console.log(hobbies)


// const personData = [{name: 'manuel'}, {name: 'ricardo'}]
// const person = personData.find((person, id, persons) => {
//     return person.name === 'manuel';
// });
// console.log(person)


// const prices = [10.99, 5, 6.85];
// const tax = 0.105;
// const newPrices = [];

// prices.forEach((price, idx) => {
//     const priceObj = {index: idx, newPrice: price + (price * tax)};
//     newPrices.push(priceObj);
// });

// console.log(newPrices)


// const numeros = [1, 3, 5, 8, 7, 9];
// const vetor = [];

// numeros.forEach((num, idx) => {
//     const soma = 10;
//     const numObj = {
//         index: idx, 
//         numeroAntigo: num, 
//         numeroSomado: soma,
//         numeroAposSoma: num + soma
//     }
//     vetor.push(numObj)
// });

// console.log(vetor);

// const numeros = [1, 3, 5, 8, 7, 9];
// const vetor = [];

// numeros.forEach((num, idx) => {
//     const soma = 10;
//     const numObj = {
//         index: idx, 
//         numeroAntigo: num, 
//         numeroSomado: soma,
//         numeroAposSoma: num + soma
//     }
//     vetor.push(numObj)
// });

// console.log(vetor);

// const sum = numeros.reduce((prevValue, curValue) => prevValue + curValue, 0)
// console.log(sum)

// const data = 'new york;19.99;2000'

// const transformedData = data.split(';')[2];
// console.log(transformedData)