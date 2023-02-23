
const inputs = document.querySelectorAll(".input");
const reset = document.querySelector(".reset");
reset.addEventListener("click", resetInput);

function resetInput() {
  inputs.forEach((elem) => {
    elem.value = "";
    elem.style.backgroundColor = "";
  });
}

const WINNING_COMBOS = [
  [0, 1, 2],
  [0, 4, 8],
  [0, 3, 6],
  [6, 7, 8],
  [2, 5, 8],
  [1, 4, 7],
  [3, 4, 5],
  [2, 4, 6],
];

let count = 0;
inputs.forEach((elem) => {
  elem.addEventListener("click", function () {
    count++;
    if (count % 2 === 0) {
      elem.value = "x";
      WINNING_COMBOS.forEach((combo) => {
        const [a, b, c] = combo;
        if (
          inputs[a].value === elem.value &&
          inputs[b].value === elem.value &&
          inputs[c].value === elem.value
        ) {
          inputs[a].style.backgroundColor = "red";
          inputs[b].style.backgroundColor = "red";
          inputs[c].style.backgroundColor = "red";
          setTimeout(function () {
            alert(`${elem.value} won!`);
          }, 100);
        }
      });
    } else {
      elem.value = "0";
      WINNING_COMBOS.forEach((combo) => {
        const [a, b, c] = combo;
        if (
          inputs[a].value === elem.value &&
          inputs[b].value === elem.value &&
          inputs[c].value === elem.value
        ) {
          inputs[a].style.backgroundColor = "blue";
          inputs[b].style.backgroundColor = "blue";
          inputs[c].style.backgroundColor = "blue";
          setTimeout(function () {
            alert(`${elem.value} won!`);
          }, 100);
        }
      });
    }    
  });
});


// Different style:
// const inputs = document.querySelectorAll(".input");
// const input_1 = document.querySelector(".input_1");
// const input_2 = document.querySelector(".input_2");
// const input_3 = document.querySelector(".input_3");
// const input_4 = document.querySelector(".input_4");
// const input_5 = document.querySelector(".input_5");
// const input_6 = document.querySelector(".input_6");
// const input_7 = document.querySelector(".input_7");
// const input_8 = document.querySelector(".input_8");
// const input_9 = document.querySelector(".input_9");
// const reset = document.querySelector('.reset');
// reset.addEventListener('click', resetInput);

// function resetInput() {
//   inputs.forEach(elem => {
//     elem.value = '';
//     elem.style.backgroundColor = '';
//   })
// }
// let count = 0;
// inputs.forEach(elem => {
//   elem.addEventListener("click", function () {
//     count++;
//     if (count % 2 === 0) {
//       elem.value = "x";
//     } else {
//       elem.value = "0";
//     }
//     // X wins:
//     if (
//       input_1.value === "x" &&
//       input_2.value === "x" &&
//       input_3.value === "x"
//     ) {
//       input_1.style.backgroundColor = "red";
//       input_2.style.backgroundColor = "red";
//       input_3.style.backgroundColor = "red";
//       // Add a short delay before showing the alert
//       setTimeout(function() {
//         alert("X won!");
//       }, 100);
//       return;
//     }
//     if (
//       input_1.value === "x" &&
//       input_4.value === "x" &&
//       input_7.value === "x"
//     ) {
//       input_1.style.backgroundColor = "red";
//       input_4.style.backgroundColor = "red";
//       input_7.style.backgroundColor = "red";
//       setTimeout(function() {
//         alert("X won!");
//       }, 100);
//       return;
//     }
//     if (
//       input_7.value === "x" &&
//       input_8.value === "x" &&
//       input_9.value === "x"
//     ) {
//       input_7.style.backgroundColor = "red";
//       input_8.style.backgroundColor = "red";
//       input_9.style.backgroundColor = "red";
//       setTimeout(function() {
//         alert("X won!");
//       }, 100);
//       return;
//     }
//     if (
//       input_3.value === "x" &&
//       input_6.value === "x" &&
//       input_9.value === "x"
//     ) {
//       input_3.style.backgroundColor = "red";
//       input_6.style.backgroundColor = "red";
//       input_9.style.backgroundColor = "red";
//       setTimeout(function() {
//         alert("X won!");
//       }, 100);
//       return;
//     }
//     if (
//       input_1.value === "x" &&
//       input_5.value === "x" &&
//       input_9.value === "x"
//     ) {
//       input_1.style.backgroundColor = "red";
//       input_5.style.backgroundColor = "red";
//       input_9.style.backgroundColor = "red";
//       setTimeout(function() {
//         alert("X won!");
//       }, 100);
//       return;
//     }
//     if (
//       input_3.value === "x" &&
//       input_5.value === "x" &&
//       input_7.value === "x"
//     ) {
//       input_3.style.backgroundColor = "red";
//       input_5.style.backgroundColor = "red";
//       input_7.style.backgroundColor = "red";
//       setTimeout(function() {
//         alert("X won!");
//       }, 100);
//       return;
//     }
//     if (
//       input_2.value === "x" &&
//       input_5.value === "x" &&
//       input_8.value === "x"
//     ) {
//       input_2.style.backgroundColor = "red";
//       input_5.style.backgroundColor = "red";
//       input_8.style.backgroundColor = "red";
//       setTimeout(function() {
//         alert("X won!");
//       }, 100);
//       return;
//     }
//     if (
//       input_4.value === "x" &&
//       input_5.value === "x" &&
//       input_6.value === "x"
//     ) {
//       input_4.style.backgroundColor = "red";
//       input_5.style.backgroundColor = "red";
//       input_6.style.backgroundColor = "red";
//       setTimeout(function() {
//         alert("X won!");
//       }, 100);
//       return;
//     }
    

//     // 0 wins:
//     if (
//       input_1.value === "0" &&
//       input_2.value === "0" &&
//       input_3.value === "0"
//     ) {
//       input_1.style.backgroundColor = "blue";
//       input_2.style.backgroundColor = "blue";
//       input_3.style.backgroundColor = "blue";
//       setTimeout(function() {
//         alert("0 won!");
//       }, 100);
//       return;
//     }
//     if (
//       input_1.value === "0" &&
//       input_4.value === "0" &&
//       input_7.value === "0"
//     ) {
//       input_1.style.backgroundColor = "blue";
//       input_4.style.backgroundColor = "blue";
//       input_7.style.backgroundColor = "blue";
//       setTimeout(function() {
//         alert("0 won!");
//       }, 100);
//       return;
//     }
//     if (
//       input_7.value === "0" &&
//       input_8.value === "0" &&
//       input_9.value === "0"
//     ) {
//       input_7.style.backgroundColor = "blue";
//       input_8.style.backgroundColor = "blue";
//       input_9.style.backgroundColor = "blue";
//       setTimeout(function() {
//         alert("0 won!");
//       }, 100);
//       return;
//     }
//     if (
//       input_3.value === "0" &&
//       input_6.value === "0" &&
//       input_9.value === "0"
//     ) {
//       input_3.style.backgroundColor = "blue";
//       input_6.style.backgroundColor = "blue";
//       input_9.style.backgroundColor = "blue";
//       setTimeout(function() {
//         alert("0 won!");
//       }, 100);
//       return;
//     }
//     if (
//       input_1.value === "0" &&
//       input_5.value === "0" &&
//       input_9.value === "0"
//     ) {
//       input_1.style.backgroundColor = "blue";
//       input_5.style.backgroundColor = "blue";
//       input_9.style.backgroundColor = "blue";
//       setTimeout(function() {
//         alert("0 won!");
//       }, 100);
//       return;
//     }
//     if (
//       input_3.value === "0" &&
//       input_5.value === "0" &&
//       input_7.value === "0"
//     ) {
//       input_3.style.backgroundColor = "blue";
//       input_5.style.backgroundColor = "blue";
//       input_7.style.backgroundColor = "blue";
//       setTimeout(function() {
//         alert("0 won!");
//       }, 100);
//       return;
//     }
//     if (
//       input_2.value === "0" &&
//       input_5.value === "0" &&
//       input_8.value === "0"
//     ) {
//       input_2.style.backgroundColor = "blue";
//       input_5.style.backgroundColor = "blue";
//       input_8.style.backgroundColor = "blue";
//       setTimeout(function() {
//         alert("0 won!");
//       }, 100);
//       return;
//     }
//     if (
//       input_4.value === "0" &&
//       input_5.value === "0" &&
//       input_6.value === "0"
//     ) {
//       input_4.style.backgroundColor = "blue";
//       input_5.style.backgroundColor = "blue";
//       input_6.style.backgroundColor = "blue";
//       setTimeout(function() {
//         alert("0 won!");
//       }, 100);
//       return;
//     }
//   });
// });
