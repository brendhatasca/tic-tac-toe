// const players = (function storePlayers() {
//     let player1 = 'X';
//     let player2 = 'O';

//     return { player1, player2 }
// })();

// console.log (players.player1); // X
// console.log (players.player2); // O
// console.log(players); // {player1: 'X', player2: 'O'

function Gameboard() {
    const rows = 3;
    const columns = 3;
    const board = [];

    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j = 0; j < columns; j++) {
          board[i].push(ChangeCell());
        }
      }
    
    const getBoard = () => board;

    function makeMove(x, y, player) {
        if (board[x][y] > 0) { 
            console.log('Invalid move.');
            // GameController().switchPlayerTurn(); switch back to same player?
            return getBoard()}
        board[x][y] = player;
        return getBoard();
    }

    function printBoard() {
        console.log(board)
    }

    return {
        makeMove,
        printBoard
    }
};

// const game = Gameboard();
// game.printBoard();

function ChangeCell() {
    let value = 0;

    // const placeMarker = (player) => {
    //     value = player;
    // }
    // uncomment when i have player function

    const getValue = () => value;

    return getValue();

    // return {
    //     // placeMarker,
    //     getValue
    // }
    // uncomment when i have player function
};

function GameController(
    playerOneName = 'Player One',
    playerTwoName = 'Player Two'
) {
    const board = Gameboard();

    const players = [
        { 
        name: playerOneName,
        marker: 1 
        },
        { 
        name: playerTwoName,
        marker: 2 
        }
    ]
    
    let currentPlayer = players[0];

    const switchPlayerTurn = () => {
        currentPlayer = currentPlayer === players[0] ? players[1] : players[0];
    } // ok

    const getCurrentPlayer = () => currentPlayer;

    const playerTurnMessage = () => {
        let message = `${currentPlayer.name}'s turn`
        console.log(message)
    } // ok

    const playRound = (x, y) => {

        board.makeMove(x, y, getCurrentPlayer().marker);

        switchPlayerTurn();
        // playerTurnMessage();
        printNextRound();
    }

    const printNextRound = () => {
        board.printBoard();
        playerTurnMessage();
    }

    return {
        getCurrentPlayer,
        playRound,
        switchPlayerTurn
    }
};

const game = GameController();

function init() {
    const initMessage = `${game.getCurrentPlayer().name}'s turn. Use game.playRound( x , y ) to place your marker.`;
    console.log(initMessage);

    return Gameboard().printBoard();
}

init();


// const game = GameController();