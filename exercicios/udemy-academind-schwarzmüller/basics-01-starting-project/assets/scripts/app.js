const defaultResult = 0;
const currentResult = defaultResult;

function add() {
    currentResult += userInput.value;
    outputResult(currentResult,calculationDescription)
}

addBtn.addEventListener('click', add)
