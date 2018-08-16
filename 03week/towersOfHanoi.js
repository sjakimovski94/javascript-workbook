'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//islegal function will check if startstack can be moved to endstack
//(will work if startstack number is lower than endstack or if endstack is empty)
//towersOfHanoi function will push startstack or endstack ONLY if islegal function is true
//checkforwin will return true if all 4 numbers are transfered to C in numerical order (c: [4,3,2,1])
//on user input will check the input if its correct (a,b or c), if correct will run islegal->towersofhanoi->checkforwin
//if not will show "please enter a,b or c"



let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}


function resetStacks(input){
  if(input=="Y"){
    stacks = {
      a: [4, 3, 2, 1],
      b: [],
      c: []
    };
    getPrompt();
  }
  else{
    console.log("Thank you for playing Towers Of Hanoi!");
  }
}

function isLegal(startStack,endStack) {

  if(stacks[endStack][stacks[endStack].length-1]>stacks[startStack][stacks[startStack].length-1] || stacks[endStack][stacks[endStack].length-1]==undefined){
    return true;
  }else{
    console.log(stacks[endStack][stacks[endStack].length-1] + " needs to be bigger than: " + stacks[startStack][stacks[startStack].length-1])
    return false;
  }
}


function checkForWin() {
  return stacks.c.length==4;
}

function movePiece(startStack, endStack) {
  if(startStack=='a'){
    if(endStack=='b'){
      return stacks.b.push(stacks.a[stacks.a.length-1]) && stacks.a.splice(stacks.a.length-1,1);
    }
    else{
      return stacks.c.push(stacks.a[stacks.a.length-1]) && stacks.a.splice(stacks.a.length-1,1);
    }
  }
  if(startStack=='b'){
    if(endStack=='a'){
      return stacks.a.push(stacks.b[stacks.b.length-1]) && stacks.b.splice(stacks.b.length-1);
    }
    else{
      return stacks.c.push(stacks.b[stacks.b.length-1]) && stacks.b.splice(stacks.b.length-1);
    }
  }
  if(startStack=='c'){
    if(endStack=='a'){
      return stacks.a.push(stacks.c[stacks.c.length-1]) && stacks.c.splice(stacks.c.length-1);
    }
    else{
      return stacks.b.push(stacks.c[stacks.c.length-1]) && stacks.c.splice(stacks.c.length-1);  
    }
  }
}



function towersOfHanoi(startStack, endStack){
  if((startStack=='a' || startStack=='b' || startStack=='c') && (endStack=='a' || endStack=='b' || endStack=='c')){
    if (isLegal(startStack,endStack)){
      movePiece(startStack,endStack)
      if(checkForWin()){
        console.log("You won! Would you like to reset and play again? Enter Y for Yes, N for No");
        rl.question("", (input) => {
        resetStacks(input);
        })
      }
    }
  }
  else{
        console.log("Please enter a,b or c!");
        }
      
    }


function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack,endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [], c: [4,3,2,1] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [2],
        c: [1]
      };
      assert.equal(isLegal('b', 'c'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3],
        b: [2],
        c: [1]
      };
      assert.equal(isLegal('c', 'b'), true);
    });
  });

} else {

  getPrompt();

}