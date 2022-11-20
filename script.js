

function playerchoice(){
    return prompt("Enter Stone, Paper, Scissor").toLowerCase();
}
function iscomputer(){
    let a = Math.floor(Math.random() * 3);
    if (a == 0){
        return ("scissor");
    }
    if (a == 1){
        return ("stone");
    }
    if (a == 2){
        return ("paper");
    }
}

function playRound(player_choice, computerchoice){
    if (player_choice == computerchoice)
    {
        alert("tie");
        return 2;
    }
    else if (player_choice == "scissor"){
        if (computerchoice == "stone"){
            alert("You lose, stone beats scissor");
            return 0;
        }
        else{
            alert("You win, scissor beats paper");
            return 1;
        }
    }
    else if (player_choice == "stone"){
        if (computerchoice == "paper"){
            alert("You lose, paper beats stone");
            return 0;
        }
        else{
            alert("You win, scissor beats paper");
            return 1;
        }
    }
    else if (player_choice == "paper"){
        if (computerchoice == "scissor"){
            alert("You lose, scissor beats paper");
            return 0;
        }
        else{
            alert("You win, paper beats stone");
            return 1;
        }
    }
    return 3;
}

function game(){
    let playerscore = 0;
    let computerscore = 0;
    for (let i = 0; i < 3; i++){
        let new1 = playRound(playerchoice(), iscomputer());
        if (new1 == 0) computerscore++;
        else if (new1 == 1) playerscore++;
        else if (new1 == 3){
            playerscore++;
            computerscore++;
        }
    }
    if (playerscore > computerscore){
        alert(`Your score : ${playerscore} ; Computer score : ${computerscore} \n You win!`);
    }
    else if (computerscore > playerscore){
        alert(`Your score : ${playerscore} ; Computer score : ${computerscore} \n You Lose!`);
    }
    else{
        alert(`Your score : ${playerscore} ; Computer score : ${computerscore} \n TIE`);
    }
}

game();