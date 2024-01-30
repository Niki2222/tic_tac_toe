let divs = document.querySelectorAll('.col');
let mark;
let count = 0;
let winX = 0;
let win0 = 0;

function startPlayer(marks) {
    mark = marks;
    playGame();
}

function addMark(e) {
    ++count;
    e.target.innerText = mark;
    findWinner();
    if (mark === "X") {
        mark = "0";
    } else {
        mark = "X";
    }
}

function playGame() {
    document.getElementById('btnX').disabled = true;
    document.getElementById('btn0').disabled = true;
    divs.forEach(element => {
        element.addEventListener("click", addMark);
    });
}

function checkConditions(elem) {
    if ((divs[0].innerText === elem && (divs[0].innerText === divs[1].innerText 
        && divs[1].innerText === divs[2].innerText 
        || divs[0].innerText === divs[3].innerText 
        && divs[3].innerText === divs[6].innerText
        || divs[0].innerText === divs[4].innerText  
        && divs[4].innerText === divs[8].innerText))
        || (divs[1].innerText === elem && divs[1].innerText === divs[4].innerText 
        && divs[4].innerText === divs[7].innerText)
        || (divs[2].innerText === elem && (divs[2].innerText === divs[4].innerText 
        && divs[4].innerText === divs[6].innerText
        || divs[2].innerText === divs[5].innerText 
        && divs[5].innerText === divs[8].innerText))
        || (divs[3].innerText === elem && divs[3].innerText === divs[4].innerText 
        && divs[4].innerText === divs[5].innerText)
        || (divs[6].innerText === elem && divs[6].innerText === divs[7].innerText 
        && divs[7].innerText === divs[8].innerText)) {
        if (elem === "X") {
            winX = 1;
        } else if (elem === "0") {
            win0 = 1;
        }  
    }  
}

function findWinner() {
    for (let i = 0; i < divs.length; ++i) {
        checkConditions(mark);
        if (winX === 1) {
            document.getElementById('winner').innerHTML = `<h2>PlayerX WON!!!</h2>`;
        } else if (win0 === 1) {
            document.getElementById('winner').innerHTML = `<h2>Player0 WON!!!</h2>`;
        } else if (count === 9) {
            document.getElementById('winner').innerHTML = `<h2>There is no winner...</h2>`;
        }
    }
    if (winX === 1 || win0 === 1 || count === 9) {
        removeEvents();
    }
}

function removeEvents() {
    divs.forEach(elem => {
        elem.removeEventListener("click", addMark);
    });
}




