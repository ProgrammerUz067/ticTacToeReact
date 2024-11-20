import React from "react";
import "./Tic.css";

const Tic = () => {
  let spots = document.querySelectorAll(".spot");
  spots = Array.from(spots);
  let playerOne = [];
  let playerTwo = [];
  let pOneScore = 0;
  let pTwoScore = 0;
  let spanScore1 = document.querySelector(".p-one");
  let spanScore2 = document.querySelector(".p-two");
  let gameOverDiv = document.querySelector(".game-over");
  let j = 0;
  let won = false;

  console.log(spanScore1);
  console.log(spanScore2);

  let checkWinner = (moves) => {
    let win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [3, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    let winHappened = false;
    for (let i = 0; i < win.length; i++) {
      if (
        moves.includes(win[i][0]) &&
        moves.includes(win[i][1]) &&
        moves.includes(win[i][2])
      ) {
        winHappened = true;
      }
    }
    return winHappened;
  };

  let resetGame = () => {
    for (let i = 0; i < spots.length; i++) {
      spots[i].classList.remove("spot-x");
      spots[i].classList.remove("flip-x");
      spots[i].classList.remove("spot-o");
      spots[i].classList.remove("flip-o");
    }
    playerOne = [];
    playerTwo = [];
    j = 0;
    won = false;
  };

  let gameOver = () => {
    gameOverDiv.style.display = "block";
    setTimeout(() => {
      resetGame();
      gameOverDiv.style.display = "none";
    }, 1500);
  };

  for (let i = 0; i < spots.length; i++) {
    spots[i].addEventListener("click", function () {
      // console.log(this);
      if (
        !this.classList.contains("spot-x") &&
        !this.classList.contains("spot-o")
      ) {
        if (j % 2 === 0) {
          this.classList.add("spot-x");
          this.classList.add("flip-x");
          playerOne.push(spots.indexOf(this));
          // console.log(playerOne);
        } else {
          this.classList.add("spot-o");
          this.classList.add("flip-o");
          playerTwo.push(spots.indexOf(this));
          // console.log(playerTwo);
        }
        if (j % 2 === 0) {
          if (checkWinner(playerOne)) {
            pOneScore++;
            spanScore1.innerHTML = pOneScore;
            setTimeout(resetGame, 350);
            won = true;
          }
        } else {
          if (checkWinner(playerTwo)) {
            pTwoScore++;
            spanScore2.innerHTML = pTwoScore;
            setTimeout(resetGame, 350);
            won = true;
          }
        }
        j++;
        if (j === 9 && !won) {
          gameOver();
        }
      }
    });
  }

  return (
    <div className="tic">
      <header>
        <div class="container">
          <h1>Tic Tac Toe</h1>
        </div>
      </header>
      <div class="container">
        <ul class="spot-row">
          <li class="spot"></li>
          <li class="spot"></li>
          <li class="spot"></li>
        </ul>
        <ul class="spot-row">
          <li class="spot"></li>
          <li class="spot"></li>
          <li class="spot"></li>
        </ul>
        <ul class="spot-row">
          <li class="spot"></li>
          <li class="spot"></li>
          <li class="spot"></li>
        </ul>
      </div>
      <div class="score clearfix">
        <div class="container">
          <h2 class="player-1">
            Player One: <span class="p-one">0</span>
          </h2>
          <h2 class="player-2">
            Player Two: <span class="p-two">0</span>
          </h2>
        </div>
      </div>
      <div class="game-over">
        <div class="container">
          <h1>Game Over!</h1>
        </div>
      </div>
    </div>
  );
};

export default Tic;
