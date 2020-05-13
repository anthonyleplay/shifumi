'use strict';
var SHIFUMI = SHIFUMI || {};
SHIFUMI.Shared = {
  getRandomInt: (max) => Math.floor(Math.random() * Math.floor(max)),
}
SHIFUMI = {
  my_value: 1, //Just for testting
  Player: class {
    constructor(name, points) {
      this.name = name;
      this.points = points;
      this.nbVictory = nbVictory;
    }
  }
  }
let player1 = new SHIFUMI.Player;
player1.points = 100;
player1.nbVictory = 200;
player1.name = `Mr XxxxD4rk_5h@d0w_Lh76`;
console.log(player1);