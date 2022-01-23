/* eslint-disable no-use-before-define */
const arrayAllCells = document.querySelectorAll(".board__column__cell");
const arrayCellAlives = [];
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");
let isGameRunning = false;

for (const cell of arrayAllCells) {
  cell.addEventListener("click", () => {
    document.getElementById(cell.id).style.background = "#ff006e";
    arrayCellAlives.push(cellIdNumber(cell.id));
    console.log(arrayCellAlives); // FIXME
  });
}

const newGeneration = () => {
  const arrayCellsAreGonnaDie = [];
  const arrayCellsAreGonnaLive = [];
  console.log(arrayCellAlives);
  for (const cell of arrayAllCells) {
    const numberOfNeighbours = checkOneCell(cellIdNumber(cell.id));
    if (arrayCellAlives.includes(cellIdNumber(cell.id))) {
      if (numberOfNeighbours < 2 || numberOfNeighbours > 3) {
        console.log(`${cell.id} esta viva y va a morir`);
        arrayCellsAreGonnaDie.push(cellIdNumber(cell.id));
      } else {
        console.log(`${cell.id} esta viva y seguira viva`);
      }
    } else if (numberOfNeighbours === 3) {
      console.log(`${cell.id} esta muerta y tiene que vivir`);
      arrayCellsAreGonnaLive.push(cellIdNumber(cell.id));
    }
  }
  changesAfterChecks(arrayCellsAreGonnaLive, arrayCellsAreGonnaDie);
  return arrayCellAlives;
};

const cellIdNumber = (cellId) => parseInt(cellId, 10);

const changesAfterChecks = (toLive, toDie) => {
  toLive.forEach((aliveCell) => {
    document.getElementById(aliveCell).style.background = "#ff006e";
    arrayCellAlives.push(cellIdNumber(aliveCell));
  });
  toDie.forEach((deathCell) => {
    document.getElementById(deathCell).style.background = "#fff0f5";
    const foundIndex = arrayCellAlives.indexOf(deathCell);
    if (foundIndex !== -1) {
      arrayCellAlives.splice(foundIndex, 1);
    } else {
      console.log("ERROR! CELL WAS NOT ALIVE");
    }
  });
};

startButton.addEventListener("click", () => {
  isGameRunning = true;
  loopNextGeneration();
  return isGameRunning;
});

function loopNextGeneration() {
  newGeneration();
  if (isGameRunning) {
    // eslint-disable-next-line no-implied-eval
    setTimeout("loopNextGeneration()", 500);
  }
}

pauseButton.addEventListener("click", () => {
  isGameRunning = false;
  return isGameRunning;
});

const resetBoard = () => {
  for (const cell of arrayAllCells) {
    document.getElementById(cell.id).style.background = "#fff0f5";
  }
  arrayCellAlives.length = 0;
  return arrayCellAlives;
};

resetButton.addEventListener("click", () => {
  isGameRunning = false;
  resetBoard();
  return isGameRunning;
});

function checkOneCell(idCell) {
  let numberOfNeighbours = 0;
  if (arrayCellAlives.includes(idCell - 1)) {
    numberOfNeighbours++;
  }
  if (arrayCellAlives.includes(idCell + 99)) {
    numberOfNeighbours++;
  }
  if (arrayCellAlives.includes(idCell + 100)) {
    numberOfNeighbours++;
  }
  if (arrayCellAlives.includes(idCell + 101)) {
    numberOfNeighbours++;
  }
  if (arrayCellAlives.includes(idCell + 1)) {
    numberOfNeighbours++;
  }
  if (arrayCellAlives.includes(idCell - 99)) {
    numberOfNeighbours++;
  }
  if (arrayCellAlives.includes(idCell - 100)) {
    numberOfNeighbours++;
  }
  if (arrayCellAlives.includes(idCell - 101)) {
    numberOfNeighbours++;
  }
  return numberOfNeighbours;
}

/*
const cellsPattern1 = [
  1206, 1305, 1404, 1504, 1605, 1706, 1806, 1905, 2004, 1420, 1519, 1618, 1718,
  1819, 1920, 2020, 2119,
]; */
