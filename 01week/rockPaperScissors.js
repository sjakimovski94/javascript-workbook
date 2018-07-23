'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function rockPaperScissors(hand1, hand2) {

  // Write code here

  //First will convert the input to lowercase. Then will check if the input is correct ( rock, paper, scissors). 
  // If the input is not correct the program won't run and it'll show "Wrong input! Please enter rock,paper or scissors."
  //Next will compare the two inputs and show the winner.
  
  hand1= hand1.toLowerCase();
  hand2= hand2.toLowerCase();

  if((hand1=='rock' || hand1== 'paper' || hand1== 'scissors') && (hand2=='rock' || hand2=='paper' || hand2== 'scissors'))
  {
    if(hand1=='rock' && hand2=='scissors')
    {
      return 'User1 wins. Rock>scissors';
    }
    else if(hand1== 'rock' && hand2=='paper' )
    {
      return 'User2 wins. Paper>rock';
    } 
    else if(hand1 =='rock' && hand2 == 'rock')
    {
      return 'Its a tie';
    }
  
    if(hand1=='paper' && hand2=='rock')
    {
      return 'User1 wins. Paper>rock';
    }
    else if(hand1=='paper' && hand2=='scissors')
    {
      return 'User2 wins. Scissors>paper';
    }
    else if(hand1 =='paper' && hand2 == 'paper')
    {
      return 'Its a tie';
    }
  
    if(hand1=='scissors' && hand2== 'paper')
    {
      return 'User1 wins. Scissors>paper';
    }
  
    else if(hand1=='scissors' && hand2=='rock')
    {
      return 'User2 wins. Rock>scissors';
    }
    else if(hand1 =='scissors' && hand2 =='scissors')
    {
      return 'Its a tie!';
    }
  }
  else{
  return 'Wrong input!Please enter rock,paper or scissors. ';
}




}

function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2) );
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
  });
} else {

  getPrompt();

}
