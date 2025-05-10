let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#msg"); 
let userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");
const genComputerChoice = () => {
  //TODO: generate random choice for computer
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
  //  console.log("Generating random choice", compChoice);
};
const drawGame = () => {
  //TODO: draw the game
  console.log("game was draw");
  message.innerText = "It's a draw!. Please Play Again";
  message.style.backgroundColor ="yellow";
};
const showWinner = (userWin,userChoice,compChoice) => {
  if (userWin) {
    userScore++;
    console.log("you win!");
    message.innerText =` BooYah! You win ${userChoice} beats ${compChoice}!`;
    message.style.backgroundColor ="blue";
    userScorePara.innerText = userScore;
   
  } else {
    compScore++;
    console.log("computer wins");
    compScorePara.innerText = compScore;
   
    message.innerText = `shit! Computer win ${compChoice} beats ${userChoice}!`;
    message.style.backgroundColor ="red";
  }
  // Update the score display if needed
};

const playGame = (userChoice, compChoice) => {
  console.log("userChoice=", userChoice);
  //generate comp choice
  // const compChoice = genComputerChoice();
  console.log("compChoice=", compChoice);

  if (userChoice === compChoice) {
    //  draw game
    // const compChoice = genComputerChoice();
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "scissors" ? true : false;
    } else if (userChoice === "paper") {
      userWin = compChoice === "rock" ? true : false;
    } else if (userChoice === "scissors") {
      userWin = compChoice === "paper" ? true : false;
    }
    showWinner(userWin, userChoice,compChoice);
  }
};

choices.forEach((choice) => {
  // console.log(choice);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    // console.log("choice was clicked",choiceId);

    const compChoice = genComputerChoice();
    playGame(userChoice, compChoice);
  });
});
