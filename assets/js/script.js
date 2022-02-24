// Global Variables
let timer = document.getElementById("timer");
let savedScoresTop = document.getElementById("highScoreTop");
let startBtn = document.getElementById("startBtn");
let choice1 = document.getElementById("choice1");
let choice2 = document.getElementById("choice2");
let choice3 = document.getElementById("choice3");
let choice4 = document.getElementById("choice4");
let startComment = document.getElementById("startComment");
let timeLeft = 70;
let score = 0;
let curQuestion = 0;
let userData = []

// Array of questions, the choices, and the correct answers
let questions = [{
    question: "Which Hook should you use to get data from an API in response to Changing a form value?",
    choiceA: "A: useState.",
    choiceB: "B: useEffect.",
    choiceC: "C: useContext.",
    correct: "B"
},
{
    question: "What does JS stand for?",
    choiceA: "A: Java Subject.",
    choiceB: "B: Jupiter Script.",
    choiceC: "C: Java Script.",
    correct: "C"
},
{
    question: "What can be used to store and operate large integers even beyond the safe integer limit for Numbers?",
    choiceA: "A: BigInts.",
    choiceB: "B: BigNumbers.",
    choiceC: "C: LargeInt.",
    correct: "A"
},
{
    question: "What is an object that represents the eventual completion or failure of an asynchronous operation?",
    choiceA: "A: A Class.",
    choiceB: "B: An Object.",
    choiceC: "C: A Promise.",
    correct: "C"
},
{
    question: "If you type the following code in the console window, what result will you get? \n 3>2>1===false;",
    choiceA: "A: True.",
    choiceB: "B: False.",
    choiceC: "C: NaN.",
    correct: "A"
},
{
    question: "Javascript is a ____-side programming language.",
    choiceA: "A: Client.",
    choiceB: "B: Server.",
    choiceC: "C: Both.",
    correct: "C"
},
{
    question: "How do you find the minimum of x and y using Javascript?",
    choiceA: "A: min(x,y);",
    choiceB: "B: Math.min(x.y)",
    choiceC: "C: Math.min(xy)",
    correct: "B"
},
{
    question: "Which JavaScript label catches all the values, except for the ones specified?",
    choiceA: "A: catch",
    choiceB: "B: label",
    choiceC: "C: default",
    correct: "C"
},
{
    question: "Which are the correct 'if' statements to execute certain code if 'x' is equal to 2?",
    choiceA: "A: if(x==2)",
    choiceB: "B: if(x2)",
    choiceC: "C: if(x!=2)",
    correct: "A"
},
{
    question: "What will the code return? \n Boolean(3<7)",
    choiceA: "A: True.",
    choiceB: "B: False.",
    choiceC: "C: SyntaxError",
    correct: "A"
},]

// calls the startWind function to show when the page loads
function init() {
    startWind();
}

// Start button, quiz explanation and event listener to start quiz.
// Formating done through JS for addition of button, and some styling.
function startWind() {
    startComment.textContent = "";
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

// Function starts the time equal to global varible and ticks down 1 second.  If the time hits 0 or less it will run
// the timerEnd function.
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

// Function to cycle through all the questions.
function questionAsked() {

    // if there are no more questions in the array game ends.
    if (curQuestion > questions.length - 1) {
        timerEnd()
        return;
    }

    // defines correct for the correct answer for the qestions.  selecting the Array, the question number, and than the
    // correct choice
    let correct = questions[curQuestion].correct;
    if (timeLeft > 0) {
        
        // Adds the question text to the screen and stylizes it
        startComment.textContent = questions[curQuestion].question;
        startComment.setAttribute("style", "font-size: 200%; padding: 20px; text-align: center; justify-content: center; color: orchid; padding: 20px;");
        
        // clears anything added to the page through JS
        startBtn.textContent = "";
        choice1.textContent = "";
        choice2.textContent = "";
        choice3.textContent = "";

        // creates the buttons for the question answers and stylizes them
        let button = document.createElement("button");
        button.innerHTML = questions[curQuestion].choiceA;
        choice1.append(button);
        button.setAttribute("style", "background-color: black; color: orchid; border-radius: 15%; font-size: 110%; margin: 10px; padding: 10px;")
        
        // On Click event listener 
        button.addEventListener("click", function () {
            if (curQuestion > questions.length - 1) {
                timerEnd()
                return;
            }

            // That checks if the answer is equal to A for current question.
            let A = questions[curQuestion].correct = "A";
            curQuestion++;

            // If A is correct adds score and displays correct.
            if (A === correct) {
                score += 10;
                choice4.textContent = "Correct!"
                choice4.setAttribute("style", "color:orchid")
            }

            // If A is incorrect checks timer, subtracts 5 from timer and displays incorrect.
            if (A !== correct) {
                if (timeLeft >= 0) {
                    timeLeft -= 5;
                    choice4.textContent = "InCorrect!"
                    choice4.setAttribute("style", "color:orchid")
                }
            }   
            questionAsked()  
        })

        // Creates the second answer button like above.
        let button2 = document.createElement("button");
        button2.innerHTML = questions[curQuestion].choiceB;
        choice1.append(button2);
        button2.setAttribute("style", "background-color: black; color: orchid; border-radius: 15%; font-size: 110%; margin: 10px; padding: 10px;")
        
        // On click event listener to check if there are questions still in array to move on, checks to see if the 
        // answer is equal to B.  
        button2.addEventListener("click", function () {
            if (curQuestion > questions.length - 1) {
                timerEnd()
                return;
            }

            // defines B from the array to the current question and selecting correct.
            let B = questions[curQuestion].correct = "B";
            curQuestion++;

            // If correct answer is B adds score, displays correct.
            if (B === correct) {
                score += 10;
                choice4.textContent = "Correct!"
                choice4.setAttribute("style", "color:orchid")
            }

            // If incorrect answer is B checks timer is left, subtracts 5 seconds from timer, displays incorrect.
            if (B !== correct) {
                if (timeLeft >= 0) {
                    timeLeft -= 5;
                    choice4.textContent = "InCorrect!"
                    choice4.setAttribute("style", "color:orchid")
                }
            }
            questionAsked()
        });
        
        // Creates the third answer button like above.
        let button3 = document.createElement("button");
        button3.innerHTML = questions[curQuestion].choiceC;
        choice1.append(button3);
        button3.setAttribute("style", "background-color: black; color: orchid; border-radius: 15%; font-size: 110%; margin: 10px; padding: 10px;")
        
        // On click event listener to check if there are questions still in array to move on, checks to see if the 
        // answer is equal to C.  
        button3.addEventListener("click", function () {
            if (curQuestion > questions.length - 1) {
                timerEnd()
                return;
            }

            // defines C from the array to the current question and selecting correct.
            let C = questions[curQuestion].correct = "C";
            curQuestion++;

            // If correct adds score, displays correct.
            if (C === correct) {
                score += 10;
                choice4.textContent = "Correct!"
                choice4.setAttribute("style", "color:orchid")
            }

            // If incorrect checks timer is left, subtracts 5 seconds from timer, displays incorrect.
            if (C !== correct) {
                if (timeLeft >= 0) {
                    timeLeft -= 5;
                    choice4.textContent = "InCorrect!"
                    choice4.setAttribute("style", "color:orchid")
                }
            }
            questionAsked()
        });
    }
}


function timerEnd() {
    // Checks for timer to equal to or less than 0 OR if theres no questions left in the array to display.
    if (timeLeft <= 0 || curQuestion > questions.length - 1) {
        
        // Clears formated content from screen on load.
        choice1.textContent = "";
        choice4.textContent = "";
        choice2.textContent = "";
        choice3.textContent = "";

        // Displays "Time is up!" and formating.
        startComment.textContent = "Time is up!";
        startComment.setAttribute("style", "font-size: 200%; padding: 20px; text-align: center; justify-content: center; color: orchid");
        
        // Displays your total score at the end and formating.
        startBtn.textContent = "Score : " + score;
        startBtn.setAttribute("style", "font-size: 125%; padding: 10px; color:orchid");
        
        // Displays "Type your initals here:" above input field.
        choice1.textContent = "Type your Initials here: ";
        choice1.setAttribute("style", "color:orchid;")

        // Creates and displays input field and formatting.
        let initialsInput = document.createElement("input");
        initialsInput.setAttribute("type", "text");
        initialsInput.setAttribute("style","background-color: black; color: orchid; padding:10px")
        choice2.appendChild(initialsInput);

        // Creates and displays submit button and formating.
        let button = document.createElement("button");
        button.innerHTML = "Submit";
        choice3.appendChild(button);
        button.setAttribute("style", "background-color: black; color: orchid; border-radius: 15%; font-size: 110%; margin: 20px; padding: 3px;")
        choice3.setAttribute("style", "justify-content: center;")

        // Button event listener attached to Submit button.
        button.addEventListener("click", function (event) {
            event.preventDefault()

            // Defines local Variables for local storage saved items
            let highScores = JSON.parse(localStorage.getItem("highScores")) || [];

            // Format for locally saved storage items.
            let initials = initialsInput.value;
            let scores = score
            let recordedScore = {
                initials: initials,
                scores: scores,
            };

            // Adds highScores variable to recordedScore
            highScores.push(recordedScore);

            // Adds items to local storage
            localStorage.setItem("highScores", JSON.stringify(highScores))
            
            // Sends you to the highscore HTML page.
            location.replace("./highscore.html")

        });
    }
}

init();
