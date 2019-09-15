const validOptions = ['rock', 'paper', 'scissors'];
let playerOption = null;
let computerOption = null;
let playerScore = {
  wins: 0,
  loses: 0,
  ties: 0
};
const chooseButton = document.querySelector('button#rps-choose');

chooseButton.addEventListener('click', function(event) {
  playerOption = getPlayerChoice();
  computerChoiceIndex = randomInt(0, 2); // Generate random number between 0 - 2
  computerOption = validOptions[computerChoiceIndex];

  // Replace player choice text with their selected option
  document.querySelector(
    '#player-choice'
  ).innerHTML = `You choose: ${playerOption}`;

  // Replace computer choice text with the randomly generated value
  document.querySelector(
    '#computer-choice'
  ).innerHTML = `Computer choose: ${computerOption}`;

  findWinnerOfGame();
});

function findWinnerOfGame() {
  let resultMessage = 'Computer wins, try harder!';
  if (playerOption === computerOption) {
    resultMessage = 'You both tied, Please play again!';
    playerScore.ties += 1;
  } else if (
    (playerOption === 'rock' && computerOption === 'scissors') ||
    (playerOption === 'scissors' && computerOption === 'paper') ||
    (playerOption === 'paper' && computerOption === 'rock')
  ) {
    resultMessage = 'User wins, great job!';
    playerScore.wins += 1;
  } else {
    playerScore.loses += 1;
  }

  document.querySelector('#result-message').innerHTML = resultMessage;
}

function updateScoreboard() {
  const { wins, loses, ties } = playerScore;
  document.querySelector(
    '#scoreboard'
  ).innerHTML = `User Wins: ${wins} - User Loses: ${loses} - Ties with Computer: ${ties}`;
}

function getPlayerChoice() {
  const nodelist = document.querySelectorAll('input[name="option"]');
  const elements = Array.from(nodelist);
  const selectedOption = elements.find(({ checked = false }) => checked);
  return selectedOption.value;
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function replayFunction() {
  alert("Please choose the option again!")
}

function endsGame(){
  updateScoreboard();
}