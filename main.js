const computers_points = document.getElementById('computerPoints')
const players_points = document.getElementById('playersPoints')
const computerPlayerItem = document.getElementById('currentComputerPlayer')
const playerItem = document.getElementById('currentPlayer')
// game buttons
const rockBtn = document.getElementById('rock')
const paperBtn = document.getElementById('paper')
const scissorsBtn = document.getElementById('scissors')

let computerScore = 0;
let playerScore = 0


function play() {
    const playerOptions = [rockBtn, paperBtn, scissorsBtn]
    
    const computerOptions = ['👊', '✋', '✌']

    playerOptions.forEach( options => {
        options.addEventListener('click', function() {
            let player = options.textContent;
            playerItem.textContent = player;
            const choiceNumber = Math.floor(Math.random() * 3);
            // console.log(choiceNumber)
            
            const computerValue = computerOptions[choiceNumber];
            // console.log(player)
            // console.log(computerValue)
            // console.log("")

            computerPlayerItem.textContent=computerValue
            
        results(player, computerValue)
    })
    })
}

const results = (player, computer) => {
    const game_results = document.getElementById('results')
   
    player = player.toLowerCase();
    computer = computer.toLowerCase();

    if (player === computer) {
        game_results.textContent = 'Draw'
        
    } else if (player == '✌'){
        if (computer == '✋' ) {
            game_results.textContent = "Player Wins"
            playerScore++
            players_points.textContent = playerScore
        } else {
            game_results.innerText = "Computer Wins";
            computerScore++
            computers_points.textContent = computerScore
        }
    } else if (player === '👊') {
        if (computer === '✌') {
           game_results.textContent = "Player Wins";
           playerScore++
           players_points.textContent = playerScore
        } else {
            game_results.textContent = 'Computer Wins'
            computerScore++
            computers_points.textContent = computerScore
        } 
    } else if(player == '✋') {
        if(computer == '👊') {
            game_results.textContent = 'Player Wins'
            playerScore++;
            players_points.textContent = playerScore
        } else {
            game_results.textContent = 'Computer Wins'
            computerScore++
            computers_points.textContent = computerScore
        }
    }
}

play()