let divs = document.querySelectorAll('.col');
let mark;
let count = 0;
let winXOr0 = "";
let winningCombitations = [
    [0, 1, 2], [0, 3, 6], [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6], [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
];

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
    for (let i = 0; i < winningCombitations.length; ++i) {
        let [a, b, c] = winningCombitations[i];
        if (divs[a].innerText === elem && divs[a].innerText === divs[b].innerText
            && divs[b].innerText === divs[c].innerText) {
            if (elem === "X") {
                winXOr0 = "X";
            } else if ( elem === "0") {
                winXOr0 = "0";
            }
        }
    }
}

function findWinner() {
    for (let i = 0; i < divs.length; ++i) {
        checkConditions(mark);
        if (winXOr0 !== "") {
            document.getElementById('winner').innerHTML = `<h2>Player${winXOr0} WON!!!</h2>`;
        } else if (count === 9) {
            document.getElementById('winner').innerHTML = `<h2>There is no winner...</h2>`;
        }
    }
    if (winXOr0 || count === 9) {
        removeEvents();
    }
}

function removeEvents() {
    divs.forEach(elem => {
        elem.removeEventListener("click", addMark);
    });
}




