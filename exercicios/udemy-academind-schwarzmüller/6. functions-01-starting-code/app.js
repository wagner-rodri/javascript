const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';


let gameIsRunning = false;

// Valida escolha do jogador
const getPlayerChoice = () => {
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toLocaleUpperCase();
    if (
        selection !== ROCK && 
        selection !== PAPER && 
        selection !== SCISSORS
        ) {
            alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you`);
            return;
        } else {
            return selection;
        }
}

// Seleciona escolha do computador
getComputerChoice = () => {
    const randomValue = Math.random();
    if (randomValue < 0.34) {
        return ROCK;
    } else if (randomValue < 0.67) {
        return PAPER;
    } else {
        return SCISSORS;
    }
}

// Executa o jogo e avalia quem ganhou
const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) =>
    cChoice === pChoice ? RESULT_DRAW : 
        (cChoice === ROCK && pChoice === PAPER) ||
        (cChoice === SCISSORS && pChoice === ROCK) ||
        (cChoice === PAPER && pChoice === SCISSORS) ?           RESULT_PLAYER_WINS : RESULT_COMPUTER_WINS;  

startGameBtn.addEventListener('click', () => {
    if (gameIsRunning) {
        return;
    }
    gameIsRunning = true;
    console.log('Game is Starting...');
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    let winner;
    // Caso o jogador escolha um valor inválido, um valor 
    //padrão é alocadona variável playerChoice, ver função 
    //getWinner, linha 42.
    if (playerChoice) {
        winner = getWinner(computerChoice, playerChoice);
    } else {
        winner = getWinner(computerChoice)
    }
    // Mostra o resultado
    let message = `You picked ${playerChoice || DEFAULT_USER_CHOICE}, computer picked ${computerChoice}, therefore`
    if (winner === RESULT_DRAW) {
        message += ' you had a draw!';
    } else if (winner === RESULT_PLAYER_WINS) {
        message += ' you won!';
    } else {
        message += ' you lost!';
    }
    alert(message);
    gameIsRunning = false;
})

// NOT RELATED TO THE PROJECT

// const combine = function(resultHandler, operator, ...numbers) {
//     const validateNumber = number => {
//         return isNaN(number) ? 0 : number;
//     };

//     let sum = 0;
//     for (const num of numbers) {
//         if (operator === 'ADD') {
//             sum += validateNumber(num);
//         } else {
//             sum -= validateNumber(num);
//         }
//     }
//     resultHandler(sum);
// }

// const showResult = (textMessage, result) => {
//     alert(textMessage + result)
// }

// combine(showResult.bind(this, 'The result after adding all numbers is: '), 'ADD', 1, 2, 3, 4);
// combine(showResult.bind(this, 'The result after subtracting all numbers is: '), 'SUBTRACT', 1, 2, 3, 4);

