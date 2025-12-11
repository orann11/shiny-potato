console.log("test");

let get_computer_choice = () => {
    let random_choice = parseInt(Math.random() * 3);
    console.log("Inside Function " + random_choice);
    switch(random_choice){
        case 0:
            console.log(0);
            return "rock";
        case 1:
            console.log(1);
            return "paper";
        case 2:
            console.log(2);
            return "scissors";
    }
};



let get_human_choice = (event) => {
    return prompt("Rock, Paper, Scissors?", "Rock").toLowerCase();
    
}

let computer_score = 0; 
let human_score = 0;

computer_value = get_computer_choice();
console.log(computer_value);
human_value = get_human_choice();
console.log(human_value);

if(human_value == "rock") {
    if(computer_value == "paper"){
        computer_score += 1;
    }
    else if(computer_value == "scissors"){
        human_score += 1;
    }
}

else if(human_value == "paper"){
    if(computer_value == "rock"){
        human_score += 1;
    }
    else if(computer_value == "scissors"){
        computer_score += 1;
    }

}

else if(human_value == "scissors"){
    if(computer_value == "paper"){
        human_score += 1;
    }
    else if(computer_value == "rock"){
        computer_score += 1;
    }
}

else {
    console.error("Invalid statement");
}

console.log("Computer score" + computer_score);
console.log("Human score" + human_score)