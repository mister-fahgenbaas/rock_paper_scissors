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
	//console.table([playerSelection, computerSelection]);
	return resultMessage;
}

function getPlayerSelection() {
	let playerSelection = "";
	do  {
		playerSelection = prompt("Enter a choice from rock, paper, and scissors : ").toString();
	} while ( !CHOICES.includes( playerSelection.toUpperCase() ) );

	return playerSelection;	
}

function game() {
	let computerScore = 0;
	let playerScore = 0;
	let roundsToPlay = 5;
	let playerSelection = "";
	let computerSelection = "";

	for (let i = 0; i < roundsToPlay; ++i) {
		playerSelection = getPlayerSelection();
		computerSelection = getComputerSelection();
		result = playRound(playerSelection, computerSelection);
		console.log(result);
		if (result.includes("win")) { playerScore++; }
		else if (result.includes("lose")) { computerScore++; }
	}
	//console.log(playerScore - computerScore);
	if (playerScore - computerScore > 0)
		console.log("Congratulations! You win the game!");
	else if (playerScore - computerScore > 0)
		console.log("Sorry. You lose the game!");
	else
		console.log("Scores drawn. No one wins.");
}



/************************************************/
/* ---------- MAIN CODE STARTS HERE ----------- */
/************************************************/

const CHOICES = ["ROCK", "SCISSORS", "PAPER"];
game();
