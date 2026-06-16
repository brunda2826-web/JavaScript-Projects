'use strict';
//Selecting elements
const btnhold=document.querySelector('.btn--hold');
const player0El=document.querySelector('.player--0');
const player1El=document.querySelector('.player--1');

let current0El = document.querySelector('#current--0');
let current1El = document.querySelector('#current--1');

 let score0 = document.querySelector('#score--0');
 let score1 = document.querySelector('#score--1');
const diceroll=document.querySelector('.btn--roll');
const diceEl=document.querySelector('.dice');
const btnnew=document.querySelector('.btn--new');

 // for both-players, //if want value keep existing , keep state value outside function
 const scores=[0,0];
 let activeplayer=0;
 let currentScore = 0;
 
//starting condition
score0.textContent = 0;
score1.textContent = 0;
diceEl.classList.add('hidden');
 const Switchplayer=function(){
   document.getElementById(`current--${activeplayer}`).textContent=0;
    //  set current to 0
       currentScore=0;
       activeplayer=activeplayer===0?1:0;
       player0El.classList.toggle('player--active');
       player1El.classList.toggle('player--active');
 }
// Rolling dice functionality
diceroll.addEventListener('click',function(){
// 1. generate random numbers 1 to 6
let dice = Math.trunc(Math.random()*6)+1;

// 2. Display dice
diceEl.classList.remove('hidden');
diceEl.src=`dice-${dice}.png`;
console.log("dice rolled",dice);

// 3. store generated value and update the current value (currentno(0)+new generated dice value )
if(dice!==1){
currentScore=currentScore+dice;
// current0El.textContent=current1;
document.getElementById(`current--${activeplayer}`).textContent=currentScore;
//if hold btn
holdbtn.addEventListener('click',function(){
document.getElementById(`score--${activeplayer}`).textContent=currentScore;
});
}
else{
    //Switch player
    Switchplayer();
      // currentScore=currentScore+dice;
}
});
holdbtn.addEvenListener('click',function(){
  //doubt
  //1.add currentplayer score to activeplayer
  scores[activeplayer]+=currentScore;
  //score[1]=score[1]+currentScore
  //wrong activeplayer==0?score0.textContent=currentScore:score1.textContent=currentScore;
  document.getElemenntById(`current--${activeplayer}`).textContent=scores[activeplayer];
   Switchplayer();
});
  //  

// or else if not 1, and clicked a hold btn , store all current values to score( score+ currentvalue)
// 6. if score>=100 , that player wins 
//
// }

// score-1=score-1+current0
// })
// diceroll.addEventListener('click',function(){
//     current0=dicevalue+current0
// if dicevalue===1;
// player switch
// })
