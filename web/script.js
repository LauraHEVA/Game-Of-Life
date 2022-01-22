const arrayAllCells = document.querySelectorAll(".board__column__cell");
const arrayCellAlives = [];
const startButton = document.getElementById("start");
let isGameRunning = false;

for (const cell of arrayAllCells) {
  cell.addEventListener("click", () => {
    document.getElementById(cell.id).style.background = "#ff006e";
    arrayCellAlives.push(cell.id);
    console.log(arrayCellAlives);
  });
}

startButton.addEventListener("click", () => {
  isGameRunning = true;
  console.log("Game is running");
  return isGameRunning;
});

function checkNeighbours(idCell) {}
