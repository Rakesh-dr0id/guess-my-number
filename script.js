'use strict';
/** 
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;

document.querySelector('.score').textContent = 15;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
let secretNumber = Math.round(Math.random() * 20) + 1;
let highScore = 0;
let score = 20;

/*
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
*/

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';
  }
  //When player wins
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number';

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  //When is guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      //19 tries to win the game
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Too HIGH' : 'TOO LOW';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      //If reaches 0, game over
      document.querySelector('.message').textContent = 'GAME OVER';
    }
  }
});

/*
  //If guess is too high
  else if (guess > secretNumber) {
    if (score > 1) {
      //19 tries to win the game
      document.querySelector('.message').textContent = 'Too HIGH';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      //If reaches 0, game over
      document.querySelector('.message').textContent = 'GAME OVER';
    }
  }
  //If the guess is too low
  else if (guess < secretNumber) {
    if (score > 1) {
      //19 tries to win the game
      document.querySelector('.message').textContent = 'Too LOW';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //If reaches 0, game over
      document.querySelector('.message').textContent =
        'GAME OVER, U LOST LOSER';
    }
  }
  */

//AGAIN functionality click event
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
