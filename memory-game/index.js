// Scrypt file
const cards = document.querySelectorAll('.game__card');

let cardIsSpinned = false;
let isLoced = false;
let firstCard, secondCard;

function spinCard() {
  if (isLoced) {
    return;
  }

  if (!cardIsSpinned) {
    this.classList.add('spin');
    firstCard = this;
    cardIsSpinned = true;
  } else if (this !== firstCard) {
    this.classList.add('spin');
    secondCard = this;

    checkCards()
  }

}

function checkCards() {
  firstCard.dataset.character === secondCard.dataset.character ? disableCards() : spinCardsBack();
}

function disableCards() {
  cardIsSpinned = false;
  firstCard.removeEventListener('click', spinCard);
  secondCard.removeEventListener('click', spinCard);
}

function spinCardsBack() {
  isLoced = true;

  setTimeout(() => {
    firstCard.classList.remove('spin');
    secondCard.classList.remove('spin');

    cardIsSpinned = false;
    isLoced = false;
  }, 1500);
}

function mixCards() {
  cards.forEach(card => {
    let randomNumber = Math.floor(Math.random() * 12);
    card.style.order = randomNumber;
  })
}

mixCards()
cards.forEach(card => card.addEventListener('click', spinCard));