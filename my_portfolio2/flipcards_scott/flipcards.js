const rand = max => Math.floor(Math.random() * max);

{ // IIFE
const game = (numCards = 4) => {
  let winNum = rand(numCards);
  let hasWon = false;
  let h2 = document.querySelector("h2");
  h2.textContent = "Good luck!";
  let counter = 0;
  let container = document.querySelector("#container");
  container.innerHTML = "";
  for (let i = 0; i < numCards; i++) {
    let text = i === winNum ? "O" : "X";

    let div = document.createElement("div");
    div.classList.add("flip-card");
    div.innerHTML = `<div class="flip-card-inner"><div class="flip-card-front"></div><div class="flip-card-back">${text}</div></div>`;
    container.appendChild(div);

    div.addEventListener("click", function () {
      if (hasWon) return;
      if (div.classList.contains("clicked")) return;
      div.classList.add("clicked");
      counter++;

      let tries = counter == 1 ? "try" : "tries";
      
      if (div.textContent === "O") {
        hasWon = !hasWon;
        h2.textContent = `You won in ${counter} ${tries}!`;
      } else {
        h2.textContent = `You've used ${counter} ${tries}.`;
      }
    });
  }
};

let input = document.querySelector("input");
let button = document.querySelector("button");

button.addEventListener("click", function () {
  game(input.value);
});

input.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    game(input.value);
  }
});

game();
}