// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () { //when the DOM finish loading the code in this function will execute
    let buttons = document.getElementsByTagName("button"); // we have 4 buttons and I get them on an array

    for (let button of buttons){ //go through the buttons array and return each element in the array wich will be stored in that variable button on each iteration
        button.addEventListener("click", function(){ // button represents an individual button element
            if(this.getAttribute("data-type") === "submit"){
                alert("You clicked Submit!");
            }else{
                let gameType = this.getAttribute("data-type"); //this will tell us what game type we are wanting to run.
                runGame(gameType);
            }
        })
    }

    runGame("addition");

})


/**
 * The main game "loop", called when the script is first loaded   
 * and after the user's answer has been processed
 */
function runGame(gameType){ //passing game type as an argument
    
    // Creates two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if(gameType === "addition"){ //checking parameter  otherwise throw an error
        displayAdditionQuestion(num1, num2);
    }else{
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}.Aborting!`;
    }

}

function checkAnswer(){

}

function calculateCorrectAnswer(){

}

function incrementScore(){

}

function incrementWrongAnswer(){

}

function displayAdditionQuestion(operand1, operand2){
    document.getElementById('operand1').textContent = operand1; //we interrogating our HTML we're going to get the element that has the ID of operand1 , and we set his text content to operand1
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";
}

function displaySubtractQuestion(){

}

function displayMultiplyQuestion(){

}

function displayDivisionQuestion(){

}