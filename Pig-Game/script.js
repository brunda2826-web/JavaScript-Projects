'use strict';
//Selecting elements
const btnhold = document.querySelector('.btn--hold');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

let current0El = document.querySelector('#current--0');
let current1El = document.querySelector('#current--1');

let score0 = document.querySelector('#score--0');
let score1 = document.querySelector('#score--1');
const diceroll = document.querySelector('.btn--roll');
const diceEl = document.querySelector('.dice');
const btnnew = document.querySelector('.btn--new');

let playing,scores,currentScore,activeplayer;

const init = function(){
  // for both-players, //if want value keep existing , keep state value outside function
  scores = [0, 0];
  activeplayer = 0;
  currentScore = 0;
  playing = true; 

//starting condition
  score0.textContent = 0;
  score1.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
   
  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  
}
  init();
  const Switchplayer = function () {
  document.getElementById(`current--${activeplayer}`).textContent = 0;
  //  set current to 0
  currentScore = 0;
  activeplayer = activeplayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Rolling dice functionality
diceroll.addEventListener('click', function () {
  if (playing) {
    // 1. generate random numbers 1 to 6
    let dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    //console.log("dice rolled",dice);

    // 3. store generated value and update the current value (currentno(0)+new generated dice value )
    if (dice !== 1) {
      currentScore = currentScore + dice;
      // current0El.textContent=current1;
      document.getElementById(`current--${activeplayer}`).textContent =
        currentScore;
    } else {
      //Switch player
      Switchplayer();
      // currentScore=currentScore+dice;
    }
  }
});

btnhold.addEventListener('click', function () {
  if (playing) {
    //doubt
    //1.add currentplayer score to activeplayer
    scores[activeplayer] += currentScore;
    //score[1]=score[1]+currentScore
    //wrong activeplayer==0?score0.textContent=currentScore:score1.textContent=currentScore;
    document.getElementById(`score--${activeplayer}`).textContent =
      scores[activeplayer];
    //check if player's score>=100

    if (scores[activeplayer] >= 100) {
      //Finish game
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.remove('player--active');
    } else {
      Switchplayer();
    }
    //switch the player
  }
});
//Reset button
btnnew.addEventListener('click', init);

