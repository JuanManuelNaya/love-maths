// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () { //when the DOM finish loading the code in this function will execute
    let buttons = document.getElementsByTagName("button"); // we have 4 buttons and I get them on an array

    for (let button of buttons){ //go through the buttons array and return each element in the array wich will be stored in that variable button on each iteration
        button.addEventListener("click", function(){ // button represents an individual button element
            if(this.getAttribute("data-type") === "submit"){
                checkAnswer();
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

/**
 * Checks the answer against the first element in
 * the returned calculateCorrectAnswer array
 */
function checkAnswer(){

    let userAnswer = parseInt(document.getElementById("answer-box").value); // we are checking the asnwer, we're retriving it from the dom. 
    let calculatedAnswer = calculateCorrectAnswer();  // it's an array. We are getting the correct answer from the calculateCorrectAnswer function an asign it to variable calculatedAnswer
    let isCorrect = userAnswer === calculatedAnswer[0]; // setting an isCorrect wich will be true or false depending on whether the user's answer matches the correct answer.

    if (isCorrect){
        alert("Hey! You got it right! :D");
        incrementScore();
    }else{
        alert(`Awww.....  you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`); //pulling the first value of the calculatedAnswer array
        incrementWrongAnswer(); 
    }

    runGame(calculatedAnswer[1]); //running another game of the same type.

}

/**
 * Gets the operands (the numbers) and the operator (plus, minus , multiply , division)
 * directyly from the dom, and returns the correct answer.
 */
function calculateCorrectAnswer(){

    let operand1 = parseInt(document.getElementById('operand1').innerText);  //reading values from the DOM and storing them in variables , parsInt its to store the value not as the default string but instead a number.
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;

    if( operator === "+"){
        return [operand1 + operand2, "addition"];
    }else{
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}.Aborting!`;
    }
}

/**
 *  Gets the current score from the DOM and increments it by 1
 */
function incrementScore(){
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
}

/**
 *  Gets the current tally of incorrect answers from the DOM and increments it by 1
 */
function incrementWrongAnswer(){
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
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