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
                alert(`You clicked ${gameType}`);
            }
        })
    }
})

function runGame(){

}

function checkAnswer(){

}

function calculateCorrectAnswer(){

}

function incrementScore(){

}

function incrementWrongAnswer(){

}

function displayAdditionQuestion(){

}

function displaySubtractQuestion(){

}

function displayMultiplyQuestion(){

}

function displayDivisionQuestion(){

}