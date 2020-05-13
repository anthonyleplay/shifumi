// const player =`Player 1`;
let player = prompt(`Entrez votre nom :`, `Xx-D4rk-Warr1or76-xX`);
if (player == `` || player == undefined) {
  player = `Joueur`;
};
const png = `Computer`;
let choiceP;
let pngScore = 0;
let playerScore = 0;
let sound;
let soundPathWin = "assets/sound/win/";
let soundPathLoose = "assets/sound/loose/";
let soundPathDraw = "assets/sound/draw/";
let soundArrayWin = ["beaute", "bravo", "incroyable", "ouéoué", "ouioui", "sultan", "waaw", "wow"];
let soundArrayLoose = ["boule-noire", "cheh", "glissé","haha", "mauvais", "peau", "rate", "regret", "wilhelmscream"];
let soundArrayDraw = ["bluff", "chewbacca", "gros", "ha", "murloc", "pnj", "rien", "wololo"];

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}

btnShifumi.disabled = true;
pName.innerText = player;


function pngChoice() {
  let pngChoices = ["pierre", "feuille", "ciseaux"];
  let choicePng = pngChoices[getRandomInt(pngChoices.length)];
  resultPng.src = "assets/img/" + choicePng + ".png";
  return choicePng;
}

function playerChoice(choice) {
  btnShifumi.disabled = false;
  let card = document.getElementById(choice)
  divPierre.style.backgroundColor = "rgb(180, 180, 180)";
  divFeuille.style.backgroundColor = "rgb(180, 180, 180)";
  divCiseaux.style.backgroundColor = "rgb(180, 180, 180)";
  card.parentElement.style.backgroundColor = "#460000";
  resultPlayer.src = "assets/img/" + choice + ".png";
  choiceP = choice
}

function tempoBtn(temps) {
  btnShifumi.disabled = true;
  setTimeout(function () {
    btnShifumi.disabled = false;
  }, temps)
}

function battle() {
  let png = pngChoice();

  if (choiceP === "pierre" && png === "ciseaux" || choiceP === "ciseaux" && png === "feuille" || choiceP === "feuille" && png === "pierre") {
    // BRAVO
    messageResult.innerText = "BRAVO !";
    messageResult.style.color = "green";
    sound = new Audio(soundPathWin + soundArrayWin[getRandomInt(soundArrayWin.length)] + ".wav");
    sound.play();
    tempoBtn(700);
    playerScore++;

  } else if (png === "pierre" && choiceP === "ciseaux" || png === "ciseaux" && choiceP === "feuille" || png === "feuille" && choiceP === "pierre") {
    //PERDU
    messageResult.innerText = "PERDU !";
    messageResult.style.color = "red";
    pngScore++;
    sound = new Audio(soundPathLoose + soundArrayLoose[getRandomInt(soundArrayLoose.length)] + ".wav");
    sound.play();
    tempoBtn(700);

  } else {
    //egalité
    messageResult.innerText = "ÉGALITÉ";
    messageResult.style.color = "blue";
    sound = new Audio(soundPathDraw + soundArrayDraw[getRandomInt(soundArrayDraw.length)] + ".wav");
    sound.play();
    tempoBtn(700);
  }

  scorePlayer.innerText = playerScore;
  scorePng.innerText = pngScore;
}