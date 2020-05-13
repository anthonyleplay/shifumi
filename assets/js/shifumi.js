// const player =`Player 1`;
const player = prompt(`Entrez votre nom :`, `Player 1`);
const png = `Computer`;
const max = 3;
let choiceP;
let pngScore = 0;
let playerScore = 0;
btnShifumi.disabled = true;

pName.innerText = player;

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}

function pngChoice() {
  let pngChoices = ["pierre", "feuille", "ciseaux"];
  let choicePng = pngChoices[getRandomInt(pngChoices.length)];
  resultPng.src = "assets/img/" + choicePng + ".png";
  return choicePng;
}

function playerChoice(choice) {
  btnShifumi.disabled = false;
  let card = document.getElementById(choice)
  pierre.style.border = "rgb(180, 180, 180) solid 1rem";
  feuille.style.border = "rgb(180, 180, 180) solid 1rem";
  ciseaux.style.border = "rgb(180, 180, 180) solid 1rem";
  card.style.border = "#460000 solid 1rem";
  resultPlayer.src = "assets/img/" + choice + ".png";
  choiceP = choice
}
function tempoBtn(temps){
  btnShifumi.disabled = true;
  setTimeout(function(){
    btnShifumi.disabled = false;
  },temps)
}

function battle() {
  let png = pngChoice();

  if (choiceP === "pierre" && png === "ciseaux" || choiceP === "ciseaux" && png === "feuille" || choiceP === "feuille" && png === "pierre") {
    // BRAVO
    messageResult.innerText = "BRAVO !";
    messageResult.style.color = "green";
    let sound = new Audio('assets/sound/bravo.wav');
    sound.play();
    tempoBtn(500);

    playerScore++;

  } else if (png === "pierre" && choiceP === "ciseaux" || png === "ciseaux" && choiceP === "feuille" || png === "feuille" && choiceP === "pierre") {
    //PERDU
    messageResult.innerText = "PERDU !";
    messageResult.style.color = "red";
    pngScore++;
    let sound = new Audio('assets/sound/mauvais.wav');
    sound.play();
    tempoBtn(500);
   

  } else {
    //egalité
    messageResult.innerText = "ÉGALITÉ";
    messageResult.style.color = "blue";
    let sound = new Audio('assets/sound/ha.wav');
    sound.volume = 0.5;
    sound.play();
    tempoBtn(500);
  }

  scorePlayer.innerText = playerScore;
  scorePng.innerText = pngScore;
}