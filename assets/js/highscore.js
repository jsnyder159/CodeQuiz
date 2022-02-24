// Defines Global Variables
let savedTitle = document.getElementById("savedTitle");
let resetBtn = document.getElementById("resetBtn");
let scores = document.getElementById("scores");
let highScoreTable = document.getElementById("highScoresSaved");

// Calls printScore functions.
function init(){
    printScore();
}

// Creates the clear score button and styles.
let button = document.createElement("button");
    savedTitle.setAttribute("style", "font-sized: 125%; padding: 10px; text-align: center; justify-content: center; border: 5px solid orchid; border-radius 15%; background-color: black; color: orchid; ")
    button.innerHTML = "Clear Score";
    resetBtn.append(button);
    button.setAttribute("style", "justify-content: center; align-content: center;background-color: black; color: orchid; border-radius: 15%; font-size: 110%; margin: 10px; padding: 10px;");
    
    // On click event listener that will clear local storage saved items, and resets the page to itself to update
    // the saved scores to show empty.
    button.addEventListener("click", function () {
        window.localStorage.clear();
        location.replace("./highscore.html");
    })

    // Function to pull local saved data and display it on the highscore screen.
function printScore(){

    // Defines savedScores as the local saved array data or as an empty array
    let savedScores = JSON.parse(localStorage.getItem("highScores")) || [];

    // for each loop to go through entire array.
    savedScores.forEach(function(score){

        // Creates li element in document for every object in array.
        let li = document.createElement("li");

        // Adds text content for object in array formated as such:
        // "initials: score" and formatting.
        li.textContent = `${score.initials}: ${score.scores}` 
        li.setAttribute("style", "flex: display; color: orchid; text-shadow: black 3px 3px; font-size: 200%; width: 100%;");
        
        // Appends above text and formatting for each object to li child.
        scores.appendChild(li);
    })
        
}

    
init();
