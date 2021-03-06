const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

//Gets input from input field
function getUserNumberInput() {
    return parseInt(userInput.value);
}

//Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) { //Parameters provided from calculateResult function below
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription); //From vendor.js file
}

//Creates new objects for each operation, then adds them into array logEntries
function writeToLog(
    operationIdentifier,
    prevResult,
    operationNumber,
    newResult
) {
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function calculateResult(calculationType) {
    const enteredNumber = getUserNumberInput();
    
    if (enteredNumber === 0 && calculationType === 'DIVIDE') {
        return;
    }

    const initialResult = currentResult;
    let mathOperator;
    if (calculationType === 'ADD') {
        currentResult += enteredNumber;
        mathOperator = '+';
    } else if (calculationType === 'SUBTRACT') {
        currentResult -= enteredNumber;
        mathOperator = '-';
    } else if (calculationType === 'MULTIPLY') {
        currentResult *= enteredNumber;
        mathOperator = 'x';
    } else if (calculationType === 'DIVIDE') {
        currentResult /= enteredNumber;
        mathOperator = '/';
    }
    createAndWriteOutput(mathOperator, initialResult, enteredNumber);
    writeToLog(calculationType, initialResult, enteredNumber,currentResult);
}

//Mathematical functions
function add(operator) {
    calculateResult(operator);
}

function subtract(operator) {
    calculateResult(operator);
}

function multiply(operator) {
    calculateResult(operator);
}

function divide(operator) {
    calculateResult(operator);
}


addBtn.addEventListener('click', add.bind(this, 'ADD'));
subtractBtn.addEventListener('click', subtract.bind(this, 'SUBTRACT'));
multiplyBtn.addEventListener('click', multiply.bind(this, 'MULTIPLY'));
divideBtn.addEventListener('click', divide.bind(this, 'DIVIDE'));

