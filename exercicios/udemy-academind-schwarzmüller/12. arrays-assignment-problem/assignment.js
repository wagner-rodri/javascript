
// Create an array of numbers (of your choice) and perform three array
// operations on it: filter for numbers greater than 5, map every number to
// an object which holds the number on some property (e.g. "num") and
// reduce the array to a single number (the multiplication of all numbers).

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const filteredNumbers = numbers.filter(num => num > 5);
console.log(filteredNumbers);

const mapNumbers = numbers.map(numItem => ({num: numItem}));
console.log(mapNumbers)

const multiplication = numbers.reduce((prevValue, curValue) => prevValue * curValue, numbers[0]);
console.log(multiplication);

// Write a function ("findMax") which executes some logic that finds the
// largest number in a list of arguments. Pass the array from task 1 split
// up into multiple arguments to that function.

const numbers2 = [1, 2, 3, 4, 5, 25, 7, 8, 9, 10]

function findMax(...array) {
    let maxNumber;
    array.forEach((number, idx) => {
        if (idx === 0) {
            maxNumber = number;
        } else if (number > maxNumber) {
            maxNumber = number;
        }
    });
    console.log(maxNumber);
}
findMax(numbers2);

// Tweak the "findMax" function such that it finds both the minimum and
// maximum and returns those as an array. Then use destructuring when
// calling the function to store the two results in separate constants.

const numbers3 = [3, -2, 25, 4, 5, 1, 7, 8, 9, 10]

function findMinMax(...array) {
    let maxNumber;
    let minNumber;
    array.forEach((number, idx) => {
        if (idx === 0) {
            maxNumber = number;
            minNumber = number;
        } else if (number > maxNumber) {
            maxNumber = number;
        } else if (number < minNumber) {
            minNumber = number;
        }
    });
    return [minNumber, maxNumber];
}
const [min, max] = findMinMax(...numbers3);
console.log(min, max);



// Create a list (and possibly some surrounding logic) where you ensure
// that NO duplicate values can be added. Use whichever approach seems
// appropriate to you.

const userId = new Set();
userId.add(10);
userId.add(5);
userId.add(4);
userId.add(-10);
userId.add(10); // this one will fail

console.log(userId)