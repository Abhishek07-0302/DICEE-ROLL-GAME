const firstOutcome= Math.floor(Math.random()*6) + 1;
const firstDiceImage= 'dice'+ firstOutcome + '.png';
document.querySelectorAll('img')[0].setAttribute('src', firstDiceImage);


const secondOutcome= Math.floor(Math.random()*6) + 1;
const secondDiceImage= 'dice'+ secondOutcome + '.png';
document.querySelectorAll('img')[1].setAttribute('src', secondDiceImage);

if(firstOutcome>secondOutcome){
    document.querySelector('h1').innerHTML="Player 1 is the winner!";
}
else if(firstOutcome<secondOutcome){
    document.querySelector('h1').innerHTML="Player 2 is the winner!";
}
else{
    document.querySelector('h1').innerHTML="It's a Draw!";
}

