// const players = (function storePlayers() {
//     let player1 = 'X';
//     let player2 = 'O';

//     return { player1, player2 }
// })();

// console.log (players.player1); // X
// console.log (players.player2); // O
// console.log(players); // {player1: 'X', player2: 'O'

(function Gameboard() {
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
    
    return console.log(getBoard())
})();

function ChangeCell() {
    let value = 0;

    // const placeMarker = (player) => {
    //     value = player;
    // }

    const getValue = () => value;

    return getValue()

    // return {
    //     // placeMarker,
    //     getValue
    // }
};

function GameController() {
    //
};

const game = GameController();