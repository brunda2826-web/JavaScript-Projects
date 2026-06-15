'use strict';

// console.log(document.querySelector('.message').textContent);
// console.log(document.querySelector('.message').innerHTML='correct answer!');
// document.querySelector('.score').innerHTML= 30;
// document.querySelector('.number').innerHTML= 3;
// console.log(document.querySelector('.guess').value=20);
let secretnumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore=0;
let msgindex=0;
let Displaymsg = function(message){
 document.querySelector('.message').textContent=message; 
}

//visible number
//document.querySelector('.number').textContent = secretnumber;

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // when no input
  if (!guess) {
    let msgs=[
      'no number😒',
      'still no value🤔',
      'come on, enter something to start a game😊',
      'Last warning🙄'
    ]
    Displaymsg(msgs[msgindex]);
    // document.querySelector('.message').textContent =msgs[msgindex];
    msgindex=(msgindex+1) % msgs.length;

   // NOTE: %msgs.length , loops again and again
    // CHANGED:console.log(
    //   (document.querySelector('.message').textContent = 'no number😒'));
      
    //when user wins
  } else if (guess === secretnumber) {
    //document.querySelector('.message').textContent = 'Correct Answer!🏆😍';
    Displaymsg('Correct Answer!🏆😍');
    document.querySelector('.number').textContent = secretnumber;
    document.querySelector('body').style.backgroundColor = 'darkgreen';
    document.querySelector('.number').style.width='30rem';
    if(score>highscore){
    highscore=score;
    document.querySelector('.highscore').textContent=highscore;
    }

  } 
  //Restructured code 
  //when guess is wrong
  else if(guess!==secretnumber){
    if (score > 1) {
      Displaymsg(guess>secretnumber?'📉Too High!':'📈low low!');
     // document.querySelector('.message').textContent = guess>secretnumber?'📉Too High!':'📈low low!';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      //document.querySelector('.message').textContent ='You Lost The Game😕,Try Again!';
      Displaymsg('You Lost The Game😕,Try Again!');
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.score').textContent = 0;
      
    }
  }
});
  
  //when guess is high

  // else if (guess > secretnumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉Too High';
  //     score = score - 1;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent =
  //       'You Lost The Game😕,Try Again!';
  //     document.querySelector('body').style.backgroundColor = 'red';
  //     document.querySelector('.score').textContent = 0;
      
  //   }
  // }

  //when guess is low

  //  else if (guess < secretnumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈Too Low';
  //     score = score - 1;
  //     document.querySelector('.score').textContent = score;
  //   }
  //  else {
  //   document.querySelector('.message').textContent =
  //     'You Lost The Game😕,Try Again!';
  //   document.querySelector('body').style.backgroundColor = 'red';
  //   document.querySelector('.score').textContent = 0;
  // }
  // }
  // });

  document.querySelector('.again').addEventListener('click',function()
  {
  document.querySelector('body').style.backgroundColor='#222';
  secretnumber = Math.trunc(Math.random() * 20 + 1);
  Displaymsg('Start Guessing...');
  // document.querySelector('.message').textContent = 'Start Guessing...';
  score=20;
  document.querySelector('.guess').value= "";
  document.querySelector('.number').style.width='15rem';
  document.querySelector('.number').textContent='?';
  document.querySelector('.score').textContent = 20;
  });