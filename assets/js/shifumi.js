'use strict';
var SHIFUMI = SHIFUMI || {};

SHIFUMI = {
  my_value: 1, //Just for testting
  Player: class {
    constructor(name) {
      this.name = name;
    }
    points = 0;
    nbVictory = 0;
    isIA = false;
    sayHello = () => console.log(`Hello ! I'm ${this.name}.`);   
  },
  };

  SHIFUMI.SHARED = {
    myValue: 3,
    getRandomInt: (max) => Math.floor(Math.random() * Math.floor(max)),
    
  };

  SHIFUMI.GAME = {
    rock: `rock`,
    paper: `paper`,
    scissors: `scissors`,
    npcPlay: () => {
      let npcChoices = [SHIFUMI.GAME.rock, SHIFUMI.GAME.paper, SHIFUMI.GAME.scissors];
      // console.log(npcChoices);
      return npcChoices[SHIFUMI.SHARED.getRandomInt(npcChoices.length)];
    },
    testBattle: (npcChoice,playerChoice) => {
      if (npcChoice === playerChoice) {
        return `Égalité`;
      } else if ((npcChoice === this.rock && npcChoice === this.scissors) || (npcChoice === this.scissors && npcChoice === this.paper) || (npcChoice === this.paper && npcChoice === this.rock)) {
        return `Perdu`;
      } else {
        return `BRAVO`;
      }
    },
  };



  

let player1 = new SHIFUMI.Player(prompt(`Votre nom:`, `Player`));
let npc = new SHIFUMI.Player(`npc`);
npc.isIA = true;

console.log(player1);
console.log(npc);

player1.sayHello();
npc.sayHello();

for (let index = 0; index < 10; index++) {
  console.log(SHIFUMI.GAME.testBattle(SHIFUMI.GAME.npcPlay(), `rock`));  
}
