const arrayAllCells = document.querySelectorAll(".board__column__cell");
const arrayCellAlives = [];
const startButton = document.getElementById("start");
let isGameRunning = false;
let numberOfNeighbours = 0;

for (const cell of arrayAllCells) {
  cell.addEventListener("click", () => {
    document.getElementById(cell.id).style.background = "#ff006e";
    arrayCellAlives.push(parseInt(cell.id, 10));
    console.log(arrayCellAlives);
  });
}

function newGeneration() {
  for (const cell of arrayAllCells) {
    checkOneCell(cell.id);
    if (arrayCellAlives.includes(cell.id)) {
      if (numberOfNeighbours < 2 || numberOfNeighbours > 3) {
        document.getElementById(cell.id).style.background = "#fff0f5"; // Color dead cell probar con $mainColor
      }
    }
    if (numberOfNeighbours === 2 || numberOfNeighbours === 3) {
      // si tiene 2 o 3 vecinos....
    }
  }
}

startButton.addEventListener("click", () => {
  isGameRunning = true;
  newGeneration();
  console.log("Game is running");
  return isGameRunning;
});

function checkNeighboursA(idCell) {
  if (arrayCellAlives.includes(idCell - 1)) {
    numberOfNeighbours++;
  }
  return numberOfNeighbours;
}

function checkNeighboursB(idCell) {
  if (arrayCellAlives.includes(idCell + 99)) {
    numberOfNeighbours++;
  }
  return numberOfNeighbours;
}

function checkNeighboursC(idCell) {
  if (arrayCellAlives.includes(idCell + 100)) {
    numberOfNeighbours++;
  }
  return numberOfNeighbours;
}

function checkNeighboursD(idCell) {
  if (arrayCellAlives.includes(idCell + 101)) {
    numberOfNeighbours++;
  }
  return numberOfNeighbours;
}

function checkNeighboursE(idCell) {
  if (arrayCellAlives.includes(idCell + 1)) {
    numberOfNeighbours++;
  }
  return numberOfNeighbours;
}

function checkNeighboursF(idCell) {
  if (arrayCellAlives.includes(idCell - 99)) {
    numberOfNeighbours++;
  }
  return numberOfNeighbours;
}

function checkNeighboursG(idCell) {
  if (arrayCellAlives.includes(idCell - 100)) {
    numberOfNeighbours++;
  }
  return numberOfNeighbours;
}

function checkNeighboursH(idCell) {
  if (arrayCellAlives.includes(idCell - 101)) {
    numberOfNeighbours++;
  }
  return numberOfNeighbours;
}

function checkOneCell(idCell) {
  checkNeighboursA(idCell);
  checkNeighboursB(idCell);
  checkNeighboursC(idCell);
  checkNeighboursD(idCell);
  checkNeighboursE(idCell);
  checkNeighboursF(idCell);
  checkNeighboursG(idCell);
  checkNeighboursH(idCell);
  return numberOfNeighbours;
}

checkOneCell(1904);
