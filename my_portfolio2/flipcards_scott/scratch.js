const HOW_MANY_CARDS = 4;
let body = document.body;

function randomNum(num) {
    return Math.floor(Math.random() * num); 
}

function showCard(e) {
    e.currentTarget.classList.add('show');
    if (e.currentTarget.textContent == "O") {
        alert("You win!");
    }
}

let luckyNum = randomNum(HOW_MANY_CARDS);

// CREATION OF CARDS
for (let i=0; i<HOW_MANY_CARDS; i++) {
    let card = document.createElement('div');
    card.textContent = i == luckyNum ? "O" : "X";
    // if (i == luckyNum) {
    //     card.textContent = "O";
    // } else {
    //     card.textContent = "X";
    // }
    body.appendChild(card);
    card.addEventListener('click', showCard);
}