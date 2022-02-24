let highScoreTable = document.getElementById("highScoresSaved");
let timer = document.getElementById("timer");
let savedScoresTop = document.getElementById("highScoreTop");
let savedScores = document.getElementById("scores");
let startBtn = document.getElementById("startBtn");
let choice1 = document.getElementById("choice1");
let choice2 = document.getElementById("choice2");
let choice3 = document.getElementById("choice3");
let choice4 = document.getElementById("choice4");
let startComment = document.getElementById("startComment");
let savedScore = document.getElementById("savedScore");
let timeLeft = 70;
let score = 0;
let curQuestion = 0;
let scored = []



let questions = [{
    question: "What does JS stand for111?",
    choiceA: "A: Java Subject.",
    choiceB: "B: Jupiter Script.",
    choiceC: "C: Java Script.",
    correct: "C"
},
{
    question: "What does JS stand for222?",
    choiceA: "A: Java Subject.",
    choiceB: "B: Jupiter Script.",
    choiceC: "C: Java Script.",
    correct: "C"
},
{
    question: "What does JS stand for333?",
    choiceA: "A: Java Subject.",
    choiceB: "B: Jupiter Script.",
    choiceC: "C: Java Script.",
    correct: "C"
},
{
    question: "What does JS stand for444?",
    choiceA: "A: Java Subject.",
    choiceB: "B: Jupiter Script.",
    choiceC: "C: Java Script.",
    correct: "C"
},
{
    question: "What does JS stand for555?",
    choiceA: "A: Java Subject.",
    choiceB: "B: Jupiter Script.",
    choiceC: "C: Java Script.",
    correct: "C"
}]


function init() {
    startWind();
}


function startWind() {
    startComment.textContent = "This is a quiz about Javascript. You have 70 seconds to answer 10 questions.  A wrong answer will subtract 5 seconds from your timer.";
    startComment.setAttribute("style", "color: orchid;")
    let button = document.createElement("button");
    button.innerHTML = "Start";
    startBtn.appendChild(button);
    button.setAttribute("style", "background-color: black; color: orchid; border-radius: 15%; font-size: 110%; margin: 10px; padding: 10px;");
    button.addEventListener("click", function () {
        timerStart()
        questionAsked(questions)
    })
}


function timerStart() {
    let timerCount = setInterval(function () {
        timeLeft--;
        timer.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerCount);
            timerEnd();
        }
    }, 1000);
}

function questionAsked() {
    if (curQuestion > questions.length - 1) {
        timerEnd()
        return;
    }
    let correct = questions[curQuestion].correct;
    if (timeLeft > 0) {
        startComment.textContent = questions[curQuestion].question;
        startComment.setAttribute("style", "font-size: 200%; padding: 20px; text-align: center; justify-content: center; color: orchid; padding: 20px;");
        startBtn.textContent = "";
        choice1.textContent = "";
        choice2.textContent = "";
        choice3.textContent = "";

        let button = document.createElement("button");
        button.innerHTML = questions[curQuestion].choiceA;
        choice1.append(button);
        button.setAttribute("style", "background-color: black; color: orchid; border-radius: 15%; font-size: 110%; margin: 10px; padding: 10px;")
        button.addEventListener("click", function () {
            if (curQuestion > questions.length - 1) {
                timerEnd()
                return;
            }
            let A = questions[curQuestion].correct = "A";
            curQuestion++;
            if (A === correct) {
                score += 10;
                choice4.textContent = "Correct!"
                choice4.setAttribute("style", "color:orchid")
            }
            if (A !== correct) {
                if (timeLeft >= 0) {
                    timeLeft -= 5;
                    choice4.textContent = "InCorrect!"
                    choice4.setAttribute("style", "color:orchid")
                }
            }   
            questionAsked()  
        })


        let button2 = document.createElement("button");
        button2.innerHTML = questions[curQuestion].choiceB;
        choice1.append(button2);
        button2.setAttribute("style", "background-color: black; color: orchid; border-radius: 15%; font-size: 110%; margin: 10px; padding: 10px;")
        button2.addEventListener("click", function () {
            if (curQuestion > questions.length - 1) {
                timerEnd()
                return;
            }
            let B = questions[curQuestion].correct = "B";
            curQuestion++;
            if (B === correct) {
                score += 10;
                choice4.textContent = "Correct!"
                choice4.setAttribute("style", "color:orchid")
            }
            if (B !== correct) {
                if (timeLeft >= 0) {
                    timeLeft -= 5;
                    choice4.textContent = "InCorrect!"
                    choice4.setAttribute("style", "color:orchid")
                }

            }
            questionAsked()
        });

        let button3 = document.createElement("button");
        button3.innerHTML = questions[curQuestion].choiceC;
        choice1.append(button3);
        button3.setAttribute("style", "background-color: black; color: orchid; border-radius: 15%; font-size: 110%; margin: 10px; padding: 10px;")
        button3.addEventListener("click", function () {
            if (curQuestion > questions.length - 1) {
                timerEnd()
                return;
            }
            let C = questions[curQuestion].correct = "C";
            curQuestion++;
            if (C === correct) {
                score += 10;
                choice4.textContent = "Correct!"
                choice4.setAttribute("style", "color:orchid")
            }
            if (C !== correct) {
                if (timeLeft >= 0) {
                    timeLeft -= 5;
                    choice4.textContent = "InCorrect!"
                    choice4.setAttribute("style", "color:orchid")
                }
            }
            questionAsked()

            console.log(correct)
            console.log(C)
        });


    }

}


function timerEnd() {
    if (timeLeft <= 0 || curQuestion > questions.length - 1) {
        choice1.textContent = "";
        choice4.textContent = "";
        startComment.textContent = "Time is up!";
        startComment.setAttribute("style", "font-size: 200%; padding: 20px; text-align: center; justify-content: center; color: orchid");
        startBtn.textContent = "Score : " + score;
        startBtn.setAttribute("style", "font-size: 125%; padding: 10px; color:orchid");
        choice1.textContent = "Type your Initials here: ";
        choice1.setAttribute("style", "color:orchid;")
        let initialsInput = document.createElement("input");
        initialsInput.setAttribute("type", "text");
        initialsInput.setAttribute("style","background-color: black; color: orchid; padding:10px")
        choice2.appendChild(initialsInput);
        let button = document.createElement("button");
        button.innerHTML = "Submit";
        choice3.appendChild(button);
        button.setAttribute("style", "background-color: black; color: orchid; border-radius: 15%; font-size: 110%; margin: 20px; padding: 3px;")
        choice3.setAttribute("style", "justify-content: center;")
        button.addEventListener("click", function (event) {
            event.preventDefault()
            let initials = initialsInput.value;
            let scores = score
            let recordedScore = {
                initials: initials,
                scores: scores,
            };
            scored.push(recordedScore)
            console.log(scored)
            
            localStorage.setItem("recordedScore", JSON.stringify(recordedScore));
            location.replace("./highscore.html")

        });
    }
}

init();

/// ------------------ Functions -----------------------///
/// functions will need to add data to the page, pull question from pool, and fill buttons w/ answer options
// functions will have to style each page
// when questions are answered correctly points will need to be added to the score which is store locally?
// final score will need to be added to a score board w/ initials
// 
/// __________________________________________________///
///// our array
// var movies = ["Reservoir Dogs", "Pulp Fiction", "Jackie Brown", 
// "Kill Bill", "Death Proof", "Inglourious Basterds"];
 
// // storing our array as a string
// localStorage.setItem("quentinTarantino", JSON.stringify(movies));
 
// // retrieving our data and converting it back into an array
// var retrievedData = localStorage.getItem("quentinTarantino");
// var movies2 = JSON.parse(retrievedData);
 
// //making sure it still is an array
// alert(movies2.length);


