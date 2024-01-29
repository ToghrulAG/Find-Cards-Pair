const cardsData = [
    { name: 'card1', img: './assets/card1.png' },
    { name: 'card2', img: './assets/card2.png' },
    { name: 'card3', img: './assets/card3.png' },
    { name: 'card4', img: './assets/card4.png' },
    { name: 'card5', img: './assets/card5.png' },
    { name: 'card6', img: './assets/card6.png' },
    { name: 'card1', img: './assets/card1.png' },
    { name: 'card2', img: './assets/card2.png' },
    { name: 'card3', img: './assets/card3.png' },
    { name: 'card4', img: './assets/card4.png' },
    { name: 'card5', img: './assets/card5.png' },
    { name: 'card6', img: './assets/card6.png' },
];

cardsData.sort(() => 0.5 - Math.random());

const gameContent = document.querySelector('#game_content');

let cardChosen = [];
let cardChosenID = [];
let cardWon = [];

function createBoard() {
    for (let i = 0; i < cardsData.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', './assets/default.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        
        gameContent.appendChild(card);
    }
}
createBoard();

function checkMatch() {
    const cards = document.querySelectorAll('#game_content img');
    let option1ID = cardChosenID[0];
    let option2ID = cardChosenID[1];
    let score = document.querySelector('#score')

    if (cardChosen[0] === cardChosen[1] && option1ID !== option2ID) {
        score.innerHTML = isNaN(parseInt(score.innerHTML)) ? 0 : score.innerHTML;
        score.innerHTML = parseInt(score.innerHTML) + 20;

        cards[option1ID].setAttribute('src', './assets/images.jpeg');
        cards[option2ID].setAttribute('src', './assets/images.jpeg');
        cards[option1ID].removeEventListener('click', flipCard);
        cards[option2ID].removeEventListener('click', flipCard);
        cardWon.push(cardChosen[0]);
    } else {
        cards[option1ID].setAttribute('src', './assets/default.png');
        cards[option2ID].setAttribute('src', './assets/default.png');
    }

    cardChosen = [];
    cardChosenID = [];

    if (cardWon.length === cardsData.length / 2) {
        //MUST BE MODAL
    }
}

function flipCard() {
    let cardFlipSound = new Audio('./sounds/cardFlip.mp3')
    cardFlipSound.play()
    const cardID = this.getAttribute('data-id');
    cardChosen.push(cardsData[cardID].name);
    cardChosenID.push(cardID);
    this.setAttribute('src', cardsData[cardID].img);

    if (cardChosen.length === 2) {
        setTimeout(checkMatch, 300);
    }
}
