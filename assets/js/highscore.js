let savedTitle = document.getElementById("savedTitle");
let resetBtn = document.getElementById("resetBtn");
let scores = document.getElementById("scores");
let highScoreTable = document.getElementById("highScoresSaved");

function init(){
    printScore();
}

let button = document.createElement("button");
    savedTitle.setAttribute("style", "font-sized: 125%; padding: 10px; text-align: center; justify-content: center; border: 5px solid orchid; border-radius 15%; background-color: black; color: orchid; ")
    button.innerHTML = "Clear Score";
    resetBtn.append(button);
    button.setAttribute("style", "justify-content: center; align-content: center;background-color: black; color: orchid; border-radius: 15%; font-size: 110%; margin: 10px; padding: 10px;");
    button.addEventListener("click", function () {
        localStorage.clear();
    })
    
function printScore(){
    let savedScores = JSON.parse(localStorage.getItem("highScores")) || [];
    savedScores.forEach(function(score){
        let li = document.createElement("li");
        li.textContent = `${score.initials}: ${score.scores}` 
        li.setAttribute("style", "background-color: orchid; color: black; font-size: 200%;");
        scores.appendChild(li);
    })
        
}

    
init();

    // for (var i = 0; i < data.length; i++) {
    //     // Creating elements, tablerow, tabledata, and anchor
    //     var createTableRow = document.createElement('tr');
    //     var tableData = document.createElement('td');
    //     var link = document.createElement('a');

    //     // Setting the text of link and the href of the link
    //     link.textContent = data[i].html_url;
    //     link.href = data[i].html_url;

    //     // Appending the link to the tabledata and then appending the tabledata to the tablerow
    //     // The tablerow then gets appended to the tablebody
    //     tableData.appendChild(link);
    //     createTableRow.appendChild(tableData);
    //     tableBody.appendChild(createTableRow);
