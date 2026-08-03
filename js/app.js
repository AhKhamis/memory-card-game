const allCards = document.querySelectorAll('.card');

allCards.forEach(card => {
    card.addEventListener('click', handleCardClick);
});

function handleCardClick(event) {
    this.classList.add('flip');
}