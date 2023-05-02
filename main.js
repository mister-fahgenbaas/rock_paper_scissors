function getComputerSelection() {
	let randomIndex = Math.floor( Math.random() * 3 );  // 0 <= randomIndex < 3
	let randomSelection = CHOICES[randomIndex];
	return randomSelection;
}

function playRound(playerSelection, computerSelection) {
	playerSelection = playerSelection.toUpperCase();
	let resultMessage;
	let resultMessages = {
		"win": `You win a point! ${playerSelection} beats ${computerSelection}`,
		"lose": `You lose a point. ${computerSelection} beats ${playerSelection}`,
		"draw": "It's a draw."
	};

	if (
	 	playerSelection === "ROCK" && computerSelection === "SCISSORS" ||
	 	playerSelection === "SCISSORS" && computerSelection === "PAPER" ||
	 	playerSelection === "PAPER" && computerSelection === "ROCK" 
	   )
			resultMessage = resultMessages["win"];
	else if (
	 	playerSelection === "ROCK" && computerSelection === "PAPER" ||
	 	playerSelection === "SCISSORS" && computerSelection === "ROCK" ||
	 	playerSelection === "PAPER" && computerSelection === "SCISSORS" 
		)
			resultMessage = resultMessages["lose"];
	else
			resultMessage = resultMessages["draw"];
	return resultMessage;
}

function getPlayerSelection() {
	let playerSelection = "";
	do  {
		playerSelection = prompt("Enter a choice from rock, paper, and scissors : ").toString();
	} while ( !CHOICES.includes( playerSelection.toUpperCase() ) );

	return playerSelection;	
}

function updateScoresText(playerScore, computerScore) {
	divScores.innerText = `Player: ${playerScore} --- Computer: ${computerScore}`;	
}

function game() {
	let computerScore = 0;
	let playerScore = 0;
	let gamesPlayed = 0;
	let maxScore = 5;
	let playerSelection = "";
	let computerSelection = "";
	let result = "";

	divScores.innerText = `Player: ${playerScore} --- Computer: ${computerScore}`;

	buttons.forEach( (button) => { 
		button.addEventListener("click", (e) => {
			if (playerScore < maxScore && computerScore < maxScore) {
				result = playRound(e.target["id"], getComputerSelection());	
				divMessages.innerText = `Game no. ${gamesPlayed + 1} : ` + result;
				if (result.includes("win")) { playerScore++; }
				else if (result.includes("lose")) { computerScore++; }
			}
			if (playerScore === maxScore || computerScore === maxScore) {
				if (playerScore - computerScore > 0)
					divMessages.innerText = "Congratulations! You win the game!";
				else 
					divMessages.innerText = "Sorry. You lose the game!";
			}
			updateScoresText(playerScore, computerScore);
		});
	});
}



/************************************************/
/* ---------- MAIN CODE STARTS HERE ----------- */
/************************************************/

const CHOICES = ["ROCK", "SCISSORS", "PAPER"];
const buttons = document.querySelectorAll("button");
divScores = document.querySelector(".scores");
divMessages = document.querySelector(".messages");
game();
