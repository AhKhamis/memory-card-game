const allCards = document.querySelectorAll('.card');
const startScreen = document.querySelector('#start-screen');
const startButton = document.querySelector('#start-button');
const timer = document.querySelector('#timer');

let timeLeft = 30;
let countdown;


let firstCard = null;
let secondCard = null;

let canClick = true;
let score = 0;


allCards.forEach(card => {
    card.addEventListener('click', handleCardClick);
});

startButton.addEventListener("click", startGame);
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
    clearInterval(countdown);
    setTimeout(() => {
        let playAgain = confirm('You Win! Play Again?');
        if(playAgain === true) {
        location.reload();
        }
    }, 1000);
}
}

allCards.forEach(card => {
    let randomIndex = Math.floor(Math.random() * 12);
    card.style.order = randomIndex;
});

function startGame() {
    startScreen.style.display = 'none';

    startTimer();
}

function startTimer() {
    countdown = setInterval(() => {
        timeLeft--;
        timer.textContent = timeLeft;
        if(timeLeft === 0) {
            clearInterval(countdown);
            alert('Time is up! Game Over!');
            location.reload();
        }
    }, 1000);
}