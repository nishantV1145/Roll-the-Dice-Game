var roundScore,scores,activePlayer,gamePlaying;

init();

var lastdiceValue;
let play=document.querySelector('.btn--roll');

play.addEventListener('click', ()=>{
     if(gamePlaying){
         //Random value
     var dice=Math.floor(Math.random() * 6) + 1;
     //Display the Result
     var diceTemp=document.querySelector('.dice');
          diceTemp.style.display='block';
        //change HTML
          diceTemp.src='dice'+dice+'.jpeg';
     
     //Update the Result
     if(dice === 6 && lastdiceValue === 6)
     {
      scores[activePlayer] = 0;
      document.querySelector('#score--' + activePlayer).textContent = '0';
      nextPlayer();
     }

     else if(dice !== 1){
         //Add Score 
         roundScore+=dice;
         document.querySelector('#current--'+ activePlayer).textContent=roundScore;
         
      }
     else{
         //NextPlayer
         nextPlayer();
      }
       lastdiceValue = dice; 
     }  
});


document.querySelector('.btn--hold').addEventListener('click',function(){
     if(gamePlaying){
        // add current score to player total score
       scores[activePlayer] +=roundScore;
       lastdiceValue = 0;
       document.querySelector('#score--' + activePlayer).textContent = scores[activePlayer];
     if(scores[activePlayer] >= 100){
        document.querySelector('#name--' + activePlayer).textContent = 'WINNER!';
        document.querySelector('.player--' + activePlayer).classList.add('player--winner');
        document.querySelector('.player--' + activePlayer).classList.remove('player--active');
        
          gamePlaying = false;   
         }
     else{
            //NextPlayer
            nextPlayer();
       }
     }   
});

function nextPlayer(){
     activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
     roundScore = 0 ;

     document.getElementById('current--0').textContent='0';
     document.getElementById('current--1').textContent='0';

     document.querySelector('.player--0').classList.toggle('player--active');
     document.querySelector('.player--1').classList.toggle('player--active');
    
}

document.querySelector('.btn--new').addEventListener('click',init);

function init(){
     scores = [0 , 0];
     activePlayer = 0;
     roundScore = 0;
     gamePlaying = true;
     document.querySelector('.dice').style.display='none';

     document.getElementById('score--0').textContent='0';
     document.getElementById('score--1').textContent='0';
     document.getElementById('current--0').textContent='0';
     document.getElementById('current--1').textContent='0';
     document.getElementById('name--0').textContent = 'Player 1';
     document.getElementById('name--1').textContent = 'Player 2';
     document.querySelector('.player--0').classList.remove('player--winner');
     document.querySelector('.player--1').classList.remove('player--winner');
     document.querySelector('.player--0').classList.remove('player--active');
     document.querySelector('.player--0').classList.add('player--active');
     document.querySelector('.player--1').classList.remove('player--active');
}