let highScoreTable = document.getElementById("highScoresSaved");
let timer = document.getElementById("timer");
let savedScoresTop = document.getElementById("highScoreTop");
let savedScores = document.getElementById("scores");
let startBtn = document.getElementById("startBtn");
let choices = document.getElementById("choice");
let startComment = document.getElementById("startComment");
let buttonBox = document.querySelectorAll("buttonBox");
let timeLeft = 5
let score = 0
let currentQuestion = 0



let questions = [ {
    question : "What does JS stand for111?",
    choiceA : "Java Subject.",
    choiceB : "Jupiter Script.",
    choiceC : "Java Script",
    correct : "C"
},
{
    question : "What does JS stand for222?",
    choiceA : "Java Subject.",
    choiceB : "Jupiter Script.",
    choiceC : "Java Script",
    correct : "C" 
},
{
    question : "What does JS stand for333?",
    choiceA : "Java Subject.",
    choiceB : "Jupiter Script.",
    choiceC : "Java Script",
    correct : "C"
},
{
    question : "What does JS stand for444?",
    choiceA : "Java Subject.",
    choiceB : "Jupiter Script.",
    choiceC : "Java Script",
    correct : "C"
},
{
    question : "What does JS stand for555?",
    choiceA : "Java Subject.",
    choiceB : "Jupiter Script.",
    choiceC : "Java Script",
    correct : "C"
}]


function init(){
    startWind();
}


function startWind(){
startComment.textContent += "This is a quiz about Javascript. You have 70 seconds to answer 10 questions.  A wrong answer will subtract 5 seconds from your timer.";
let button = document.createElement("button");
button.innerHTML = "Start";
startBtn.appendChild(button);
button.setAttribute("style", "background-color: black; color: white; border-radius: 15%; font-size: 110%; margin: 20px; padding: 20px;")
button.addEventListener("click", function(){
    timerStart()
    questionAsked()
})
}


function timerStart() {
let timerCount = setInterval(function() {
    timeLeft--;
    timer.textContent = timeLeft;
    if(timeLeft === 0){
    clearInterval(timerCount);
    timerEnd();
    }
}, 1000);
}

function timerEnd() {
    startComment.textContent = "";
    startBtn.textContent = "";
    if(timeLeft === 0){
        startComment.textContent += "Time is up!";
        startComment.setAttribute("style", "font-size: 200%; padding: 20px; text-align: center; justify-content: center;")
        startBtn.textContent += "Score :"
        startBtn.setAttribute("style","font-size: 125%; padding: 10px;")
        choice2.textContent += "Type your Initials here: "
        const input = document.createElement("input");
        input.setAttribute("type", "text");
        choice2.appendChild(input);
        let button = document.createElement("button");
        button.innerHTML = "Submit";
        choice2.appendChild(button);
        button.setAttribute("style", "background-color: black; color: white; border-radius: 15%; font-size: 110%; margin: 20px; padding: 3px;")
        choice2.setAttribute("style", "justify-content: center;")
        button.addEventListener("click", function(){

        });
    }
}

function questionAsked() {
    startComment.textContent = "";
    startBtn.textContent = "";

}
init();

// need this to occure during main screen for start button, and for each question w/ answer buttons.
// Dynamic to creature a button in JS
// var button = document.createElement('button');
// button.type = 'button';
// button.innerHTML = 'Press me';
// button.className = 'btn-styled';

// ---------------------------------------------- //




/// ------------------ Functions -----------------------///
/// functions will need to add data to the page, pull question from pool, and fill buttons w/ answer options
// functions will have to style each page
// when questions are answered correctly points will need to be added to the score which is store locally?
// final score will need to be added to a score board w/ initials 
// 
  


