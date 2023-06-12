'use strict';
const btnAgain = document.querySelector('.again');
const btnCheck = document.querySelector('.check');
const hiddenNumber = document.querySelector('.number');
const scoreEl = document.querySelector('.score');
const highscoreEl = document.querySelector('.highscore');

// ========FUNCTION========
const message = function (mess) {
  document.querySelector('.message').textContent = mess;
};
const playgame = function () {
  const guessNumber = Number(document.querySelector('.guess').value);
  if (!guessNumber) {
    message('⛔️ No number ^.^ ');
  } else {
    if (guessNumber === random) {
      message('🎉 You win !!!');
      document.querySelector('body').style.backgroundColor = '#60b347';
      hiddenNumber.textContent = random;
      highscore = score > highscore ? score : highscore;
      highscoreEl.textContent = highscore;
    } else {
      message(guessNumber < random ? '📉 Too low...' : '📈 Too high..');
      score--;
      scoreEl.textContent = score;
    }
  }
};
const playAgain = function () {
  score = 20;
  random = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('body').style.backgroundColor = '#222';
  hiddenNumber.textContent = '?';
  document.querySelector('.guess').value = '';
  message('Start game ...');
  scoreEl.textContent = score;
};
// ========================

let random, score, highscore;
random = Math.trunc(Math.random() * 20) + 1;
score = 20;
highscore = 0;
btnCheck.addEventListener('click', playgame);
btnAgain.addEventListener('click', playAgain);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    playgame();
  } else if (e.key === 'Escape') {
    playAgain();
  }
});
