// NodeList of all buttons
const buttons = document.querySelectorAll("button");

const div = document.createElement("div");
const p = document.createElement("p");
div.appendChild(p);

const container_div = document.querySelector(".container");
container_div.appendChild(div);


let player_score = 0;
let machine_score = 0;

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        // Refer to button tags inside player div inside index.html
        const player_choice = button.getAttribute("id");
        console.log(`Player has chosen ${button.getAttribute("id")}`);
        // console.log(player_choice);
        const machine_choice = random_choice();
        console.log(`Machine has chosen ${machine_choice}`);
        const result = is_player_winner(player_choice, machine_choice);
        if(result != "draw"){
            // If result is 1 then add it to player else reverse it and add it to machine
            player_score += result;
            machine_score += !result;
        }
        turn_result(player_score, machine_score, player_choice, machine_choice);
        if((player_score >= 5 || machine_score >= 5)){
            player_score = 0; 
            machine_score = 0;
            alert(`${player_score % 5 == 0 ? "Player" : "Machine"} Has won the game!`);
            p.textContent = "---------------" + 
                `${player_score % 5 == 0 ? "Player" : "Machine"}` +
                "---------------";
        }
    })
})

function random_choice(){
    //                  0       1          2
    // Valid states ["rock", "paper", "scissors"] total of 3 value to choose

    let choice_val = Math.floor(Math.random() * 3);
    switch(choice_val){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}


function is_player_winner(player_choice, machine_choice){
    
    // Assuming no other choice besides ["rock", "paper", "scissors"] is given as input
    // If so change the inputs to valid states

    // draw state
    if(player_choice == machine_choice){
        return "draw";
    }

    else if(player_choice == "rock"){
        return machine_choice == "paper" ? 1 : 0;
    }

    else if (player_choice == "paper") {
        return machine_choice == "rock" ? 1 : 0;
    }

    else if (player_choice == "scissors") {
        return machine_choice == "paper" ? 1 : 0;
    }
}

function turn_result(player_score, machine_score, player_choice, machine_choice){
    if(player_choice === machine_choice){
        console.log("Draw!");
    }
    else if(is_player_winner(player_choice, machine_choice)){
        console.log("Player has won the turn!");
    }
    else{
        console.log("Machine has won the turn!");
    }
    console.log(`Player Score: ${player_score}`);
    console.log(`Machine Score: ${machine_score}`);
}
