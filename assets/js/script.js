let highScoreTable = document.getElementById("highScoresSaved");
let timer = document.getElementById("timer");
let savedScoresTop = document.getElementById("highScoreTop");
let savedScores = document.getElementById("scores");
let startBtn = document.getElementById("startBtn");
let choice1 = document.getElementById("choice1");
let choice2 = document.getElementById("choice1");
let choice3 = document.getElementById("choice1");
let choice4 = document.getElementById("choice1");
let startComment = document.getElementById("startComment");
let buttonBox = document.querySelectorAll("buttonBox");
let timeLeft = 70
let score = 0
let curQuestion = 0



let questions = [ {
    question : "What does JS stand for111?",
    choiceA : "Java Subject.",
    choiceB : "Jupiter Script.",
    choiceC : "Java Script.",
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
startComment.textContent = "This is a quiz about Javascript. You have 70 seconds to answer 10 questions.  A wrong answer will subtract 5 seconds from your timer.";
let button = document.createElement("button");
button.innerHTML = "Start";
startBtn.appendChild(button);
button.setAttribute("style", "background-color: black; color: white; border-radius: 15%; font-size: 110%; margin: 30px; padding: 20px;")
button.addEventListener("click", function(){
    timerStart()
    questionAsked(questions)
})
}


function timerStart() {
let timerCount = setInterval(function() {
    timeLeft--;
    timer.textContent = timeLeft;
    if(timeLeft <= 0){
    clearInterval(timerCount);
    timerEnd();
    }
}, 1000);
}

function questionAsked() {
if (curQuestion > questions.length-1){
    timerEnd()
    return;
}
let correct = questions[curQuestion].correct;
    if (timeLeft > 0) {
        startComment.textContent = questions[curQuestion].question;
        startComment.setAttribute("style", "font-size: 200%; padding: 20px; text-align: center; justify-content: center; color: black; padding: 20px;");
        startBtn.textContent = "";
        choice1.textContent = "";
        choice2.textContent = "";
        choice3.textContent = "";

        let button = document.createElement("button");
        button.innerHTML = questions[curQuestion].choiceA;
        choice1.append(button);
        button.setAttribute("style", "background-color: black; color: white; border-radius: 15%; font-size: 110%; margin: 20px; padding: 20px;")
        button.addEventListener("click", function(){
            if (curQuestion > questions.length-1){
                timerEnd()
                return;
            }
            let A = questions[curQuestion].correct="A";
            curQuestion++;
            if (A === correct){
                score += 10;
            }
            if (A !== correct){
                if (timeLeft >= 0){
                    timeLeft -= 5;
                }
            }
            questionAsked()
        })
    

        let button2 = document.createElement("button");
        button2.innerHTML = questions[curQuestion].choiceB;
        choice1.append(button2);
        button2.setAttribute("style", "background-color: black; color: white; border-radius: 15%; font-size: 110%; margin: 20px; padding: 20px;")
        button2.addEventListener("click", function(){
            if (curQuestion > questions.length-1){
                timerEnd()
                return;
            }
            let B = questions[curQuestion].correct="B";
            curQuestion++;
            if (B === correct){
                score += 10;
            }
            if (B !== correct) {
                if (timeLeft >= 0){
                    timeLeft -= 5;
                }
                
            }
            questionAsked()
        });

        let button3 = document.createElement("button");
        button3.innerHTML = questions[curQuestion].choiceC;
        choice1.append(button3);
        button3.setAttribute("style", "background-color: black; color: white; border-radius: 15%; font-size: 110%; margin: 20px; padding: 20px;")
        button3.addEventListener("click", function(){
            if (curQuestion > questions.length-1){
                timerEnd()
                return;
            }
            let C = questions[curQuestion].correct="C";
            curQuestion++;
            if (C === correct){
                score += 10;
            }
            if (C !== correct){
                if (timeLeft >= 0){
                timeLeft -= 5;
                }
            }
            questionAsked()

        console.log(correct)
        console.log(C)
        }); 

        for (let i=0; i< questions.length; i++)  {
        }
    } 
        
}


function timerEnd() {
    if(timeLeft <= 0 || curQuestion > questions.length-1) {
        choice1.textContent = "";
        startComment.textContent = "Time is up!";
        startComment.setAttribute("style", "font-size: 200%; padding: 20px; text-align: center; justify-content: center;");
        startBtn.textContent = "Score : " + score;
        startBtn.setAttribute("style","font-size: 125%; padding: 10px;");
        choice2.textContent = "Type your Initials here: ";
        const input = document.createElement("input");
        input.setAttribute("type", "text");
        choice2.appendChild(input);
        let button = document.createElement("button");
        button.innerHTML = "Submit";
        choice2.appendChild(button);
        button.setAttribute("style", "background-color: black; color: white; border-radius: 15%; font-size: 110%; margin: 20px; padding: 3px;")
        choice2.setAttribute("style", "justify-content: center;")
        button.addEventListener("click", function(){
        // need to link to other html page. 
        });
    }
}

init();

// need this to occure during main screen for start button, and for each question w/ answer buttons.
// Dynamic to creature a button in JS
// var button = document.createElement('button');
// button.type = 'button';
// button.innerHTML = 'Press me';
// button.className = 'btn-styled';

// ---------------------------------------------- //
// for (let key in data) {
//     let value = data[key];
//     for (i = 0; i < value.length; i++)

// var selectedUser;

// for( var i = 0; i < users.length; i++ ){
//   if( users[ i ].id === 70 ){
//     selectedUser = users[ i ];

//     break;
//   }
// };

/// ------------------ Functions -----------------------///
/// functions will need to add data to the page, pull question from pool, and fill buttons w/ answer options
// functions will have to style each page
// when questions are answered correctly points will need to be added to the score which is store locally?
// final score will need to be added to a score board w/ initials 
// 
  


