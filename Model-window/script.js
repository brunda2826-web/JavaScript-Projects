'use strict';
const modal = document.querySelector('.modal');
const overlay= document.querySelector('.overlay');
const btnclosemodal=document.querySelector('.close-modal');
const btnsopenmodal=document.querySelectorAll('.show-modal');
//console.log(btnsopenmodal);
const openmodal = function(){
  //console.log("Button clicked");
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  }
  /* modern loop
    btnsopenmodel.forEach(function(e),
   e.addeventListener('click'),
   modal.classList.remove('hidden');
   overlay.classList.remove('hidden'))
  */
for(let i=0;i<btnsopenmodal.length;i++)
    btnsopenmodal[i].addEventListener('click',openmodal);

//   btnclosemodal.addEventListener('click',function(){
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
// })
// overlay.addEventListener('click',function(){
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
// })
     // clean readable format
     const closemodal=function(){
        {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
        }
     }
     btnclosemodal.addEventListener('click', closemodal);
     overlay.addEventListener('click',closemodal);
//there we didnt wrote()after closemodal ,coz as soon as js exceutes it runs, so we want only when clicked thats why.

document.addEventListener('keydown',function(e){
    console.log(e.key);
    if(e.key==='Escape' && !modal.classList.contains('hidden')){
    closemodal();
    }
    else{

    }
}
);