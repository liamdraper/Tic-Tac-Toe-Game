/*----- constants -----*/
const SYMBOLS = {
    'null': 'blank',
    '1':'x',
    '-1':'o',
}

const winningCombos = [
    [0, 1, 2], 
    [0, 3, 6], 
    [0, 4, 8], 
    [1, 4, 7], 
    [2, 5, 8], 
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]



/*----- state variables -----*/
let board;
let turn; // 1 or -1
let winner; // null for no winner(game in play), 1 or -1 for player, "T" for tie
/*----- cached elements  -----*/
const displayPrompt = document.querySelector('h1');
const playAgainBtn = document.querySelector('button');
const divCell = [...document.querySelectorAll('#board > div')];

/*----- event listeners -----*/
document.getElementById('board').addEventListener('click', handleClickCell)
playAgainBtn.addEventListener('click', init);

/*----- functions -----*/

init();

//Initialize all state variables, then calls render()
function init () {
    //removes classes on div elements
    divCell.forEach(function(cellVal) {
        cellVal.classList.remove('o', 'x');
    });
    board = [null, null, null, null, null, null, null, null, null];
    turn = 1;
    winner = null;
    render();
}

function handleClickCell (e) {
    const idx = divCell.indexOf(e.target);
    if (
        isNaN(idx) ||
        board[idx] ||
        winner
      ) return;
    board[idx] = turn;
    turn *= -1;
    winner = getWinner();
    render();
}


function getWinner() {
    for (let i = 0; i < winningCombos.length; i++) {
      if (Math.abs(board[winningCombos[i][0]] + board[winningCombos[i][1]] + board[winningCombos[i][2]]) === 3) return board[winningCombos[i][0]];
    }
    if (board.includes(null)) return null;
    return 'T';
  }


function render() {
    renderBoard();
    //Player turn/winner message
    renderMessage();
    playAgainBtn.disabled = !winner;
}

function renderBoard() {
    //Sets symbol for each cell 
    board.forEach(function (cellVal, idx) {
            const cellDiv = document.getElementById(`c${idx}`);
            cellDiv.classList.add(`${SYMBOLS[cellVal]}`);
    });
}

function renderMessage () {
    if (winner === 'T') {
        displayPrompt.innerText = 'Game is a tie!';
    } else if (winner) {
        displayPrompt.innerHTML = `${SYMBOLS[winner]} wins!`;
    } else {
        //Game is still in play
        displayPrompt.innerHTML = `${SYMBOLS[turn].toUpperCase()}'s turn.`;
    }

}
