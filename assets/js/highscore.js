let savedTitle = document.getElementById("savedTitle");
let resetBtn = document.getElementById("resetBtn");
let savedScore = document.getElementById('savedScore');
let savedInfo = JSON.parse(window.localStorage.getItem('recordedScore'));

let scores = 0

function init(){
    scoreTable();
}

if (typeof(Storage) !== "undefined") {

} else {

}


let button = document.createElement("button");
    savedTitle.setAttribute("style", "font-sized: 125%; padding: 10px; text-align: center; justify-content: center; border: 5px solid orchid; border-radius 15%; background-color: black; color: orchid; ")
    button.innerHTML = "Clear Score";
    resetBtn.append(button);
    button.setAttribute("style", "justify-content: center; align-content: center;background-color: black; color: orchid; border-radius: 15%; font-size: 110%; margin: 10px; padding: 10px;");
    button.addEventListener("click", function () {
        localStorage.clear();
    })

