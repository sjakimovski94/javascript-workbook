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
  
  hand1= hand1.toLowerCase().trim();
  hand2= hand2.toLowerCase().trim();

  if((hand1=='rock' || hand1=='paper' || hand1== 'scissors') && (hand2=='rock' || hand2=='paper' || hand2=='scissors'))
  {
    if(hand1=='rock' && hand2=='scissors')
    {
      return 'Hand one wins!';
    }
    else if(hand1== 'rock' && hand2=='paper' )
    {
      return 'Hand two wins!';
    } 
    else if(hand1 =='rock' && hand2 == 'rock')
    {
      return "It's a tie!";
    }
  
    if(hand1=='paper' && hand2=='rock')
    {
      return 'Hand one wins!';
    }
    else if(hand1=='paper' && hand2=='scissors')
    {
      return 'Hand two wins!';
    }
    else if(hand1 =='paper' && hand2 == 'paper')
    {
      return "It's a tie!";
    }
  
    if(hand1=='scissors' && hand2== 'paper')
    {
      return 'Hand one wins!';
    }
  
    else if(hand1=='scissors' && hand2=='rock')
    {
      return 'Hand two wins!';
    }
    else if(hand1 =='scissors' && hand2 =='scissors')
    {
      return "It's a tie!";
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
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
      assert.equal(rockPaperScissors('paper', 'rock'), "Hand one wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('scissors', 'rock'), "Hand two wins!");
      assert.equal(rockPaperScissors('scissors', 'paper'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOck', 'paPer'), "Hand two wins!");
      assert.equal(rockPaperScissors('rOCk', 'scIssoRs'), "Hand one wins!");
      assert.equal(rockPaperScissors('PAper', 'rocK'), "Hand one wins!");
      assert.equal(rockPaperScissors('paPEr', 'SCISSors'), "Hand two wins!");
      assert.equal(rockPaperScissors('ScIssoRs', 'rocK'), "Hand two wins!");
      assert.equal(rockPaperScissors('scissorS', 'PAPER'), "Hand one wins!");
    });
  });
} else {

  getPrompt();

}
