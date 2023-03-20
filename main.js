function getComputerChoice() {
	let randomIndex = Math.floor( Math.random() * 3 );  // 0 <= randomIndex < 3
	let randomChoice = CHOICES[randomIndex];
	return randomChoice;
}

function play(playerSelection, computerSelection) {
	playerSelection = playerSelection.toUpperCase();
	let resultMessage;
	let resultMessages = {
		"win": "You win!",
		"lose": `You lose. ${computerSelection} beats ${playerSelection}`,
		"draw": "It's a draw"
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

function getPlayerChoice() {
	let playerSelection = "";
	do  {
		playerSelection = prompt("Enter a choice from rock, paper, and scissors : ").toString();
	} while ( !CHOICES.includes( playerSelection.toUpperCase() ) );

	return playerSelection;	
}

function main() {


	let playerSelection = ""; 
	let computerSelection = "";
	let playing = true
	let shallWePlayAgain = "false"

	while (playing) {

		playerSelection = getPlayerChoice();
		computerSelection = getComputerChoice();

		console.log( 
`***********************************************\n \
	You have chosen ${playerSelection.toUpperCase()}\n \
	CPU has chosed ${computerSelection}\n \
	${play(playerSelection, computerSelection)}\n \
************************************************
		` 
		);
		playing = prompt("PLAY AGAIN?\n(Y/N):") == "Y";

	};

	console.log("Thanks for playing! Bye!");
}

/************************************************/
/* ---------- MAIN CODE STARTS HERE ----------- */
/************************************************/

const CHOICES = ["ROCK", "SCISSORS", "PAPER"];
main();
