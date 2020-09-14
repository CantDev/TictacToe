let cells = document.querySelectorAll(".row > div");

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", cellClicked);
}

let clicked = false;
let playerOne = 1;
let playerTwo = 2;

function cellClicked() {
  if (event.target.textContent !== "") {
    return;
  } else if (playerOne === 1) {
    event.target.textContent = "X";
    playerOne = 0;
  } else {
    event.target.textContent = "O";
    playerOne = 1;
  }
}

console.log(cells);

function gameReset() {
  location.reload();
}

// Honestly, this is as far as I got in a weekend's worth of work. This was much more challenging than I anticipated. 
//I ended up researching things were not possible or not what I needed. 
//I can articulate what i want my code to do but I am having a hard time putting that into the javescript language. 
//I will revisit this assignment.
