'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


//Player X will start first
//function TicTacToe will push player X's input of row and column into board
//Next will change player to 'O' and push his input into board
//checkforwin function will return true if there is horizontal,vertical or diagonal win 
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

let playerTurn = 'X';

function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

function horizontalWin() {
  return (board[0][0]==playerTurn && board[0][1]==playerTurn && board[0][2]==playerTurn) 
  || (board[1][0]==playerTurn && board[1][1]==playerTurn && board[1][2]==playerTurn) 
  || (board[2][0]==playerTurn && board[2][1]==playerTurn && board[2][2]==playerTurn)
}

function verticalWin() {
  return (board[0][0]==playerTurn && board[1][0]==playerTurn && board[2][0]==playerTurn) 
  || (board[0][1]==playerTurn && board[1][1]==playerTurn && board[2][1]==playerTurn) 
  || (board[0][2]==playerTurn && board[1][2]==playerTurn && board[2][2]==playerTurn)
}

function diagonalWin() {
  return (board[0][0]==playerTurn && board[1][1]==playerTurn && board[2][2]==playerTurn) 
  || (board[2][0]==playerTurn && board[1][1]==playerTurn && board[0][2]==playerTurn)
}

function checkForWin() {
  return horizontalWin() || verticalWin() || diagonalWin()
}

function ticTacToe(row, column) {
  board[row][column]=playerTurn;
  if(checkForWin()){
    console.log("Player " + playerTurn + " won");
  }
  else{
    if(playerTurn=='X'){
      playerTurn='O'
    }
    else{
      playerTurn='X';
    }
  }
}

function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column)
      getPrompt(); 
    });
    });
}







// Tests

if (typeof describe === 'function') {

  describe('#ticTacToe()', () => {
    it('should place mark on the board', () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should check for vertical wins', () => {
      board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', () => {
      board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}
