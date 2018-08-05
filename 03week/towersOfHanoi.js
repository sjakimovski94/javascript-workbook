'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

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

function movePiece() {

}


function isLegal(startStack,endStack) {
  if(startStack=='a' && endStack=='b'){
    if(stacks.a[stacks.a.length-1] < stacks.b[stacks.b.length-1] || stacks.b[stacks.b.length-1]==undefined){
      return true;
    }
    else{
      return console.log("Error!" + stacks.a[stacks.a.length-1] + " needs to be lower number than " + stacks.b[stacks.b.length-1]);
    }
  }
  else if(startStack=='a' && endStack=='c'){
    if(stacks.a[stacks.a.length-1] < stacks.c[stacks.c.length-1] || stacks.c[stacks.c.length-1]==undefined){
        return true;
      }
    else{
      return console.log("Error!" + stacks.a[stacks.a.length-1] + " needs to be lower number than " + stacks.c[stacks.c.length-1]);
      }
    }
    if(startStack=='b' && endStack=='a'){
      if(stacks.b[stacks.b.length-1] < stacks.a[stacks.a.length-1] || stacks.a[stacks.a.length-1]==undefined){
        return true;
      }
      else{
      return console.log("Error!" + stacks.b[stacks.b.length-1] + " needs to be lower number than " + stacks.a[stacks.a.length-1]);
      }
    }
    else if(startStack=='b' && endStack=='c'){
      if(stacks.b[stacks.b.length-1] < stacks.c[stacks.c.length-1] || stacks.c[stacks.c.length-1]==undefined){
        return true;
    }
    else{
      return console.log("Error!" + stacks.b[stacks.b.length-1] + " needs to be lower number than " + stacks.c[stacks.c.length-1]);
      }
  }
  if(startStack=='c' && endStack=='a'){
    if(stacks.c[stacks.c.length-1] < stacks.a[stacks.a.length-1] || stacks.a[stacks.a.length-1]==undefined){
      return true;
    }
    else{
      return console.log("Error!" + stacks.c[stacks.c.length-1] + " needs to be lower number than " + stacks.a[stacks.a.length-1]);
      }
    }
    else if(startStack=='c' && endStack=='b'){
      if(stacks.c[stacks.c.length-1] < stacks.b[stacks.b.length-1] || stacks.b[stacks.b.length-1]==undefined){
        return true;
      }
      else{
        return console.log("Error!" + stacks.c[stacks.c.length-1] + " needs to be lower number than " + stacks.b[stacks.b.length-1]);
        }
    }

}


function checkForWin() {
  return stacks.c[0]==4 && stacks.c[1]==3 && stacks.c[2]==2 && stacks.c[3]==1;
}

function towersOfHanoi(startStack, endStack) {
  if(startStack=='a' && endStack=='b'){
      return stacks.b.push(stacks.a[stacks.a.length-1]) && stacks.a.splice(stacks.a.length-1,1);
    }
    else if(startStack=='a' && endStack=='c'){
      return stacks.c.push(stacks.a[stacks.a.length-1]) && stacks.a.splice(stacks.a.length-1,1);
    }
  if(startStack=='b' && endStack=='a'){
      return stacks.a.push(stacks.b[stacks.b.length-1]) && stacks.b.splice(stacks.b.length-1);
    }
    else if(startStack=='b' && endStack=='c'){
      return stacks.c.push(stacks.b[stacks.b.length-1]) && stacks.b.splice(stacks.b.length-1);
    }
  if(startStack=='c' && endStack=='a'){
      return stacks.a.push(stacks.c[stacks.c.length-1]) && stacks.c.splice(stacks.c.length-1);
    }
    else if(startStack=='c' && endStack=='b'){
      return stacks.b.push(stacks.c[stacks.c.length-1]) && stacks.c.splice(stacks.c.length-1);
  }

}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      if (isLegal(startStack,endStack)){
        towersOfHanoi(startStack,endStack)
        checkForWin();
      }
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
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
