'use strict';
var SHIFUMI = SHIFUMI || {};
SHIFUMI.Shared = {
  getRandomInt: (max) => Math.floor(Math.random() * Math.floor(max)),
}
SHIFUMI.Player = {
  pts: 1,
  Init: function(name,score) {
    this.name= name,
    this.score= score,
    console.log(`New Player Created`);
  },
  changePlayerName: () => {
    return this.name = window.prompt(`Entrez votre nom :`, `Anonymous`);
  }
};


// class Player {
//   constructor(name) {
//     this.name = name;
//     console.log(`New Player Created`);
//   }
//   changePlayerName = () => this.name = window.prompt(`Entrez votre nom :`, `Anonymous`);
// }

let player1 = new SHIFUMI.Player.Init(SHIFUMI.Player.changePlayerName(), 0);
console.log(player1.name);
player1.changePlayerName();
console.log(player1.name);
// console.log(player1.changePlayerName());
let i = 10;
// do {
//   console.log(SHIFUMI.Shared.getRandomInt(i));
//   i--;
// } while (i >= 0);




// playerName = ( (playerName)) ? `Player 1`: playerName;
// pName.innerText = playerName;


// const playersChoice = (v) => {

// }