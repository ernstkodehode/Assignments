const player = document.querySelector("#player");
const scoreDisplay = document.querySelector("#score");
const food = document.querySelector("#food");
const statusDisplay = document.querySelector("#status");
const restartButton = document.querySelector("#restart")

const step = 30;
const limit = 270;

let score = 0;
let foodX = 120;
let foodY = 120;
let gameLoop;

let x = 0;
let y = 0;
let dx = step;
let dy = 0;

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    dx = step;
    dy = 0;
  } else if (event.key === "ArrowLeft") {
    dx = -step;
    dy = 0;
  } else if (event.key === "ArrowUp") {
    dx = 0;
    dy = -step;
  } else if (event.key === "ArrowDown") {
    dx = 0;
    dy = step;
  }
});

function moveSnake() {
  x += dx;
  y += dy;

  if (x < 0 || x > limit || y < 0 || y > limit) {
    endGame();
    return;
  }

  function endGame() {
    clearInterval(gameLoop);
    statusDisplay.textContent = "Game Over!";
  }

  player.style.left = `${x}px`;
  player.style.top = `${y}px`;

  if (x === foodX && y === foodY) {
    score++;
    scoreDisplay.textContent = score;

    foodX = Math.floor(Math.random() * 10) * step;
    foodY = Math.floor(Math.random() * 10) * step;

    food.style.left = `${foodX}px`;
    food.style.top = `${foodY}px`;
  }
}

restartButton.addEventListener("click", restartGame)

function restartGame() {
    clearInterval(gameLoop)
    x = 0
    y = 0
    dx = step
    dy = 0
    score = 0
}


gameLoop = setInterval(moveSnake, 200);
