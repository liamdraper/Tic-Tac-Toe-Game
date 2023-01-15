/*----- constants -----*/


/*----- state variables -----*/
let board;
let turn; // 1 or 2
let winner; // null for no winner(game in play), 1 or 2 for player, "T" for tie
/*----- cached elements  -----*/


/*----- event listeners -----*/


/*----- functions -----*/

//Initialize all state variables, then calls render()
function init () {
    board = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ]
    turn = 1;
    winner = null;
    render ();
}

//
function render() {
    renderBoard()
    render
}