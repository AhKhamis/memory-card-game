const allCards = document.querySelectorAll('.card');
const startScreen = document.querySelector('#start-screen');
const startButton = document.querySelector('#start-button');

const winScreen = document.querySelector('#win-screen');
const finalTime = document.querySelector('#final-time');
const finalBestTime = document.querySelector('#final-best-time');
const playAgainButton = document.querySelector('#play-again-button');

const timer = document.querySelector('#timer');
const bestTimeDisplay = document.querySelector('#best-time');
const scoreDisplay = document.querySelector('#score');

const flipSound = new Audio('./assets/sounds/flip.wav');
const matchSound = new Audio('./assets/sounds/match.wav');
const winSound = new Audio('./assets/sounds/win.wav');
const backgroundMusic = new Audio('./assets/sounds/background.mp3');

let time = 0;
let timerInterval;

let bestTime = localStorage.getItem("bestTime");

if(bestTime !== null){
    bestTimeDisplay.textContent = bestTime;
}


let firstCard = null;
let secondCard = null;

let canClick = true;
let score = 0;


allCards.forEach(card => {
    card.addEventListener('click', handleCardClick);
});

startButton.addEventListener("click", startGame);

playAgainButton.addEventListener("click", function(){
    location.reload();
});

function handleCardClick() {
    if(!canClick) return;

    if(this.classList.contains('flip')) return;


    this.classList.add('flip');

    flipSound.currentTime = 0;
    flipSound.play();

    if (!firstCard) {
  firstCard = this;
  return;
}

secondCard = this;


    const img1 = firstCard ? firstCard.firstElementChild.src : null;
    const img2 = secondCard ? secondCard.firstElementChild.src : null;

    if(img1 === img2){

    matchSound.currentTime = 0;
    matchSound.play();
    
    firstCard = null;
    secondCard = null;

    score++;
    scoreDisplay.textContent = score;

    if(score === 6){

    if(bestTime === null || time < bestTime){
        localStorage.setItem("bestTime", time);
    }

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

    clearInterval(timerInterval);

    backgroundMusic.pause();

    winSound.currentTime = 0;
    winSound.play();

    finalTime.textContent = time;
    finalBestTime.textContent = bestTime;

    winScreen.style.display = 'flex';
}
}

allCards.forEach(card => {
    let randomIndex = Math.floor(Math.random() * 12);
    card.style.order = randomIndex;
});

function startGame() {
    startScreen.style.display = 'none';

    backgroundMusic.loop = true;
    backgroundMusic.volume = 0.2;
    backgroundMusic.play();

    startTimer();
}

function startTimer() {
    timerInterval = setInterval(() => {
        time++;
        timer.textContent = time;
    }, 1000);
}