let playerScore = 0;
let computerScore = 0;
let instructionDisplay =document.getElementById('instructions');
let resultDisplay = document.getElementById('roundResult');
let playerDisplay = document.getElementById('playerScore');
let computerDisplay = document.getElementById('computerScore');
let selectionDisplay = document.getElementById('compPick');
let finalDisplay = document.getElementById('results');
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    let playerSelection = button.id;
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    updateResults();
  });
});

function computerPlay()
{
  let pick = Math.floor(Math.random() * 3 + 1);
   if (pick == 1) {
     return "rock";
   }
   else if (pick == 2) {
     return "paper";
   }
   else if (pick == 3) {
     return "scissors";
   }
}

function playRound(playerSelection, computerSelection)
{
  let selection = playerSelection;
  if (computerSelection == "rock") {
    if (selection == "rock") {
      selectionDisplay.textContent = "Your opponent picked: " + computerSelection;
      resultDisplay.textContent = "It's a draw!";
    }
    else if (selection == "paper") {
      playerScore++;
      selectionDisplay.textContent = "Your opponent picked: " + computerSelection;
      resultDisplay.textContent = "You win! Paper beats rock!";
    }
    else if (selection == "scissors") {
      computerScore++;
      selectionDisplay.textContent = "Your opponent picked: " + computerSelection;
      resultDisplay.textContent = "You lose! Rock beats scissors!";
    }
  }
  else if (computerSelection == "paper") {
    if (selection == "rock") {
      computerScore++;
      selectionDisplay.textContent = "Your opponent picked: " + computerSelection;
      resultDisplay.textContent = "You lose! Paper beats rock!";
    }
    else if (selection == "paper") {
      selectionDisplay.textContent = "Your opponent picked: " + computerSelection;
      resultDisplay.textContent = "It's a draw!";
    }
    else if (selection == "scissors") {
      playerScore++;
      selectionDisplay.textContent = "Your opponent picked: " + computerSelection;
      resultDisplay.textContent = "You win! Scissors beats paper!";
    }
  }
  else if (computerSelection == "scissors") {
    if (selection == "rock") {
      playerScore++;
      selectionDisplay.textContent = "Your opponent picked: " + computerSelection;
      resultDisplay.textContent = "You win! Rock beats scissors!";
    }
    else if (selection == "paper") {
      computerScore++;
      selectionDisplay.textContent = "Your opponent picked: " + computerSelection;
      resultDisplay.textContent = "You lose! Scissors beats paper!";
    }
    else if (selection == "scissors") {
      selectionDisplay.textContent = "Your opponent picked: " + computerSelection;
      resultDisplay.textContent = "It's a draw!";
    }
  }
}

function updateResults()
{
  playerDisplay.textContent = "Your score is: " + playerScore;
  computerDisplay.textContent = "Your opponent's score is: " + computerScore;
    if (playerScore == 5 || computerScore == 5)
      {
        if (playerScore > computerScore) {
          finalDisplay.textContent = "You win!";
        }
  else if (playerScore < computerScore) {
    finalDisplay.textContent = "You lose!";
  }
  else {
    finalDisplay.textContent = "It's a draw!";
  }
  endGame();
}
}

function endGame()
{
  instructionDisplay.textContent = "Refresh the page to play again."
  removeElement("rock");
  removeElement("paper");
  removeElement("scissors");
}

function removeElement(elementId) {
    var element = document.getElementById(elementId);
    element.remove();
}
