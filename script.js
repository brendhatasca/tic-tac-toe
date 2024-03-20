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
      } // makes 3x3 board
    
    const getBoard = () => board;

    function makeMove(x, y, player) {
        if (board[x][y] > 0) { 
            console.log('Invalid move.');
            return }

        board[x][y] = player;
        return getBoard();
    }

    function printBoard() {
        console.log(board)
    }

    board[0][0] = 1;
    board[1][1] = 1;


    return {
        makeMove,
        printBoard,
        getBoard
    }
};

// const game = Gameboard();
// game.printBoard();

function ChangeCell() {
    let value = 0; // !!!!!

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
    playerOneName = "Player One",
    playerTwoName = "Player Two"
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
    let endOfGame = false;

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

        checkWinner(); // SEE IF FUNCTION WORKS HERE
        switchPlayerTurn();
        printNextRound();
    }

    const printNextRound = () => {
        board.printBoard();
        playerTurnMessage();
    }


    const checkWinner = () => {
        const currentGameBoard = board.getBoard();
        const greaterZero = value => value > 0;
        const gameOverMsg = `Game over. ${getCurrentPlayer().name} wins.`;


        (function rowWin() {
        for (let k = 0; k < currentGameBoard.length; k++) {    
            if( currentGameBoard[k].every( el => el === currentGameBoard[k][0])
            && currentGameBoard[k].every( el => el > 0) ) {
                console.log(gameOverMsg);
                return;
            }
        }
    })();

        (function columnWin() {
            let columnsArr = [];

            for (let i =0; i < currentGameBoard.length; i++) {
                let column = [];

                currentGameBoard.forEach((rowEl) => {
                    column.push(rowEl[i]);
                });

                columnsArr.push(column);
            }
            columnsArr.forEach((col) => {
                if (col.every(greaterZero) && col.every( el => el === col[0])) {console.log(gameOverMsg)}
            })


        })();

        (function diagonalWin() {
            if ( currentGameBoard[0][0] === currentGameBoard[1][1]
                &&  currentGameBoard[0][0] === currentGameBoard[2][2]
                && currentGameBoard[0][0] > 0) {
                    console.log(gameOverMsg)
                    return;
                } else if (currentGameBoard[0][2] === currentGameBoard[1][1]
                    &&  currentGameBoard[0][2] === currentGameBoard[2][0]
                    && currentGameBoard[0][2] > 0) {
                    console.log(gameOverMsg)
                    return;
                }
        })();

        (function tie() {
            if( currentGameBoard[0].every(greaterZero) 
            && currentGameBoard[1].every(greaterZero)
            && currentGameBoard[2].every(greaterZero)) { 
                console.log('Tie.');
                return; 
            }
        })();

        function gameOver() {
            console.log(gameOverMsg);

        }

        // GameController().checkWinner()

    };

    return {
        getCurrentPlayer,
        playRound,
        switchPlayerTurn,
        checkWinner
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