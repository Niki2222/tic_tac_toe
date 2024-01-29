let divs = document.querySelectorAll('.col');
let mark;
let count = 0;
let winX = 0;
let win0 = 0;

function startPlayerX() {
    document.getElementsByClassName('.btn-primary x');
    mark = "X";
    playGame();
}

function startPlayerY() {
    document.getElementsByClassName('.btn-primary y');
    mark = "0";
    playGame();
}

function playGame() {
    document.getElementById('btnX').disabled = true;
    document.getElementById('btn0').disabled = true;
    for (let i = 0; i < divs.length; ++i) {
        count = 0;
        divs[i].addEventListener("click", function() {
            this.innerText = mark;
            if (mark === "X") {
                mark = "0";
            } else if (mark === "0") {
                mark = "X";
            }
            ++count;
            console.log(count, "first time play");

            if ((divs[0].innerHTML === "X" && (divs[0].innerHTML === divs[1].innerHTML 
                && divs[1].innerHTML === divs[2].innerHTML 
                || divs[0].innerHTML === divs[3].innerHTML 
                && divs[3].innerHTML === divs[6].innerHTML
                || divs[0].innerHTML === divs[4].innerHTML  
                && divs[4].innerHTML === divs[8].innerHTML))
                || (divs[1].innerHTML === "X" && divs[1].innerHTML === divs[4].innerHTML 
                && divs[4].innerHTML === divs[7].innerHTML)
                || (divs[2].innerHTML === "X" && (divs[2].innerHTML === divs[4].innerHTML 
                && divs[4].innerHTML === divs[6].innerHTML
                || divs[2].innerHTML === divs[5].innerHTML 
                && divs[5].innerHTML === divs[8].innerHTML))
                || (divs[3].innerHTML === "X" && divs[3].innerHTML === divs[4].innerHTML 
                && divs[4].innerHTML === divs[5].innerHTML)
                || (divs[6].innerHTML === "X" && divs[6].innerHTML === divs[7].innerHTML 
                && divs[7].innerHTML === divs[8].innerHTML)) {
                winX = 1;
            } 
            if ((divs[0].innerHTML === "0" && (divs[0].innerHTML === divs[1].innerHTML 
                && divs[1].innerHTML === divs[2].innerHTML 
                || divs[0].innerHTML === divs[3].innerHTML 
                && divs[3].innerHTML === divs[6].innerHTML
                || divs[0].innerHTML === divs[4].innerHTML 
                && divs[4].innerHTML === divs[8].innerHTML))
                || (divs[1].innerHTML === "0" && divs[1].innerHTML === divs[4].innerHTML 
                && divs[4].innerHTML === divs[7].innerHTML)
                || (divs[2].innerHTML === "0" && (divs[2].innerHTML === divs[4].innerHTML 
                && divs[4].innerHTML === divs[6].innerHTML
                || divs[2].innerHTML === divs[5].innerHTML 
                && divs[5].innerHTML === divs[8].innerHTML))
                || (divs[3].innerHTML === "0" && divs[3].innerHTML === divs[4].innerHTML 
                && divs[4].innerHTML === divs[5].innerHTML)
                || (divs[6].innerHTML === "0" && divs[6].innerHTML === divs[7].innerHTML 
                && divs[7].innerHTML === divs[8].innerHTML)) {
                win0 = 1;
            } 
            if (winX === 1) {
                document.getElementById('winner').innerHTML = `<h2>PlayerX WON!!!</h2>`;
            } else if (win0 === 1) {
                document.getElementById('winner').innerHTML = `<h2>Player0 WON!!!</h2>`;
            } else if (count === 9) {
                document.getElementById('winner').innerHTML = `<h2>There is no winner...</h2>`;
            }
        });
    }
}
    
function reset_all() {
    divs.forEach(element => {
        element.innerText = "";
    });
    document.getElementById('winner').innerHTML = "";
    mark = "a";
    count = 0;
    winX = 0;
    win0 = 0;
    document.getElementById('btnX').disabled = false;
    document.getElementById('btn0').disabled = false;
}




