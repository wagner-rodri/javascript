const defaultResult = 0;
let currentResult = defaultResult;

//Gets input from input field
function getUserNumberInput() {
    return parseInt(userInput.value)
}

//Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) { //Parameters provided from Mathematical functions below
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription); //From vendor.js file
}

//Mathematical functions
function add() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult
    currentResult += enteredNumber;
    createAndWriteOutput('+', initialResult, enteredNumber)
}

function subtract() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult
    currentResult -= enteredNumber;
    createAndWriteOutput('-', initialResult, enteredNumber)
}

function multiply() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult
    currentResult += enteredNumber;
    createAndWriteOutput('x', initialResult, enteredNumber)
}

function divide() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult
    currentResult /= enteredNumber;
    createAndWriteOutput('/', initialResult, enteredNumber)
}


addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

