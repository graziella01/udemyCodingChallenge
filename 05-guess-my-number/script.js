'use strict';

/* console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value); */

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
  };

  // when no input
  if (!guess) {
    /* document.querySelector('.message').textContent = '❌ No Number'; */
    displayMessage('No Number');
    // guess is correct
  } else if (guess === secretNumber) {
    /* document.querySelector('.message').textContent = 'Correct Number!'; */
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    //refactoring
    if (score > 1) {
      /* document.querySelector('.message').textContent =
        guess > secretNumber ? 'Guess is too high' : 'Guess is too Low';
       */
      displayMessage(
        guess > secretNumber ? 'Guess is too high' : 'Guess is too low'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You Lose the Game. Try Again');
      /* document.querySelector('.message').textContent =
        'You Lose the Game. Try Again'; */
    }
  }

  //guess is high
  /*   else if (guess > secretNumber) {
    //guess is low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Guess is too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'You Lose the Game. Try Again';
    }
  } */
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
  };

  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  /*  document.querySelector('.message').textContent = 'Start guessing...'; */
  displayMessage('Start guessing...');
  // yung "?" ang di ko
  document.querySelector('.number').textContent = '?';
});
