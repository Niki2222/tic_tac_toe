let divs = document.querySelectorAll('.col');
let mark;
let count = 0;
let winX = 0;
let win0 = 0;
let gameInProgress = true;

function startPlayer(marks) {
    mark = marks;
    playGame();
}

function playGame() {
    document.getElementById('btnX').disabled = true;
    document.getElementById('btn0').disabled = true;
    for (let i = 0; i < divs.length; ++i) {
        count = 0;
        if (divs[i].innerText === "" && gameInProgress) {
            divs[i].addEventListener("click", function() {
                this.innerText = mark;
                if (mark === "X") {
                    mark = "0";
                } else if (mark === "0") {
                    mark = "X";
                }
                ++count;
                if ((divs[0].innerText === "X" && (divs[0].innerText === divs[1].innerText 
                    && divs[1].innerText === divs[2].innerText 
                    || divs[0].innerText === divs[3].innerText 
                    && divs[3].innerText === divs[6].innerText
                    || divs[0].innerText === divs[4].innerText  
                    && divs[4].innerText === divs[8].innerText))
                    || (divs[1].innerText === "X" && divs[1].innerText === divs[4].innerText 
                    && divs[4].innerText === divs[7].innerText)
                    || (divs[2].innerText === "X" && (divs[2].innerText === divs[4].innerText 
                    && divs[4].innerText === divs[6].innerText
                    || divs[2].innerText === divs[5].innerText 
                    && divs[5].innerText === divs[8].innerText))
                    || (divs[3].innerText === "X" && divs[3].innerText === divs[4].innerText 
                    && divs[4].innerText === divs[5].innerText)
                    || (divs[6].innerText === "X" && divs[6].innerText === divs[7].innerText 
                    && divs[7].innerText === divs[8].innerText)) {
                    winX = 1;
                } 
                if ((divs[0].innerText === "0" && (divs[0].innerText === divs[1].innerText 
                    && divs[1].innerText === divs[2].innerText 
                    || divs[0].innerText === divs[3].innerText 
                    && divs[3].innerText === divs[6].innerText
                    || divs[0].innerText === divs[4].innerText 
                    && divs[4].innerText === divs[8].innerText))
                    || (divs[1].innerText === "0" && divs[1].innerText === divs[4].innerText 
                    && divs[4].innerText === divs[7].innerText)
                    || (divs[2].innerText === "0" && (divs[2].innerText === divs[4].innerText 
                    && divs[4].innerText === divs[6].innerText
                    || divs[2].innerText === divs[5].innerText 
                    && divs[5].innerText === divs[8].innerText))
                    || (divs[3].innerText === "0" && divs[3].innerText === divs[4].innerText 
                    && divs[4].innerText === divs[5].innerText)
                    || (divs[6].innerText === "0" && divs[6].innerText === divs[7].innerText 
                    && divs[7].innerText === divs[8].innerText)) {
                    win0 = 1;
                } 
                if (winX === 1) {
                    document.getElementById('winner').innerHTML = `<h2>PlayerX WON!!!</h2>`;
                } else if (win0 === 1) {
                    document.getElementById('winner').innerHTML = `<h2>Player0 WON!!!</h2>`;
                } else if (count === 9) {
                    document.getElementById('winner').innerHTML = `<h2>There is no winner...</h2>`;
                }
                if (winX === 1 || win0 === 1 || count === 9) {
                    gameInProgress = false;
                }
            });
        }
    }
}

function resetAll() {
    divs.forEach(element => {
        element.innerText = "";
    });
    document.getElementById('winner').innerHTML = "";
    mark = "";
    count = 0;
    winX = 0;
    win0 = 0;
    document.getElementById('btnX').disabled = false;
    document.getElementById('btn0').disabled = false;
}




