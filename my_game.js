//* Quick summary: Rules Pig Game. 
//
//- The game has 2 players, playing in rounds
//- In each turn, a player rolls a dice as many times as he wishes. Each result get added to his ROUND score.
//- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn.
//- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn.
//- The first player to reach 100 points on GLOBAL score wins the game.


var scores = [0, 0];
var roundScore = 0;
var activePlayer = 0;
var gamePlaying = true;
document.querySelector('.dice').style.display = 'none';
document.querySelector('#score-0').innerHTML = 0;
document.querySelector('#current-0').innerHTML = 0;
document.querySelector('#score-1').innerHTML = 0;
document.querySelector('#current-1').innerHTML = 0;

document.querySelector('.btn-roll').addEventListener('click', function () {

    console.log(gamePlaying);
    if (gamePlaying) {

        // 1st we need to generate random number between 1 to 6
        var dice = Math.floor(Math.random() * 6) + 1;

        //2nd display result
        document.querySelector('.dice').style.display = 'block';
        document.querySelector('.dice').src = 'dice-' + dice + '.png';

        //3rd update the round score if the score is not 1

        if (dice !== 1) {
            //add score

            // roundScore += dice ; // we can write in this also
            roundScore = roundScore + dice;
            document.querySelector('#current-' + activePlayer).innerHTML = roundScore;

        } else {
            activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
            roundScore = 0;
            document.querySelector('#current-0').innerHTML = '0';
            document.querySelector('#current-1').innerHTML = '0';
            document.querySelector('.player-0-panel').classList.toggle('active'); // Change active plyer bg
            document.querySelector('.player-1-panel').classList.toggle('active'); // Change active plyer bg
            document.querySelector('.dice').style.display = 'none'; //hide dice on when plyer change

        }
    } else {

        $("#myModal").modal();
    };
});



document.querySelector('.btn-hold').addEventListener('click', function () {

    console.log(gamePlaying);
    if (gamePlaying) {

        //add current score to global score
        scores[activePlayer] += roundScore;
        // Update the ui
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        
        var input = document.querySelector('.final-score').value;
        var winningscore;
        if(input && input > 0 ){
            
         winningscore = input;
             console.log(winningscore);  
           } else{
           
               winningscore = 50;
               console.log(winningscore);
           };
        //check who won the game

        if (scores[activePlayer] >= winningscore) {

            document.querySelector('#name-' + activePlayer).innerHTML = 'Winner';
            document.querySelector('.dice').style.display = 'none';
            //document.querySelector('.btn-roll').style.display = 'none';
            gamePlaying = false;
            console.log(gamePlaying);
        } else {

            activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
            roundScore = 0;
            document.querySelector('#current-0').innerHTML = '0';
            document.querySelector('#current-1').innerHTML = '0';
            document.querySelector('.player-0-panel').classList.toggle('active'); // Change active plyer bg
            document.querySelector('.player-1-panel').classList.toggle('active'); // Change active plyer bg
            document.querySelector('.dice').style.display = 'none'; //hide dice on when plyer change 
        }

    } else {

        $("#myModal").modal();
    };


});


document.querySelector('.btn-new').addEventListener('click', function () {
    
    document.querySelector('#myModal').remove();
    document.querySelector('.btn-roll').style.display = 'block';
    document.querySelector('.dice').style.display = 'none'; //hide dice on when plyer change
    document.querySelector('#score-0').innerHTML = 0;
    document.querySelector('#current-0').innerHTML = 0;
    document.querySelector('#score-1').innerHTML = 0;
    document.querySelector('#current-1').innerHTML = 0;
    document.querySelector('#name-0').innerHTML = 'Akash'
    document.querySelector('#name-1').innerHTML = 'Arijit'

});