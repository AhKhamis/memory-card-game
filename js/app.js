const allCards = document.querySelectorAll('.card');

let firstCard = null;
let secondCard = null;

let canClick = true;
let score = 0;


allCards.forEach(card => {
    card.addEventListener('click', handleCardClick);
});

function handleCardClick() {
    if(!canClick) return;

    if(this.classList.contains('flip')) return;


    this.classList.add('flip');

    if (!firstCard) {
  firstCard = this;
  return;
}

secondCard = this;


    const img1 = firstCard ? firstCard.firstElementChild.src : null;
    const img2 = secondCard ? secondCard.firstElementChild.src : null;

    if(img1 === img2){
    
    firstCard = null;
    secondCard = null;

    score++;

    if(score === 6){
        handleGameOver();

    }
    return;
}

    else if(img1 && img2){

        canClick = false;

        setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        firstCard = null;
        secondCard = null;

        canClick = true;
    },1000);
}
function handleGameOver() {
    setTimeout(() => {
        let playAgain = confirm('Game Over! Do you want to play again?');
        if(playAgain === true) {
        location.reload();
        }
    }, 1000);
}
}