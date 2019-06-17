
const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div =  document.querySelector(".score-board");
const result_div = document.querySelector("result")
const rock_div =  document.getElementById("Rock")
const paper_div =  document.getElementById("Paper")
const scissors_div =  document.getElementById("Scissors")


function getComputerChoice(computerChoice) {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
function game(userChoice) {
    const computerChoice = getComputerChoice();
    console.log("user choice => " + userChoice)
    console.log("computer choice => " + computerChoice)
}

game();

function main() {

rock_div.addEventListener('click', function() {
    game("r")
})
paper_div.addEventListener('click', function() {
    game("p")
})
scissors_div.addEventListener('click', function() {
    game("s")
})

}
main();



