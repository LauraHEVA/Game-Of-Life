/* eslint-disable no-use-before-define */
const arrayAllCells = document.querySelectorAll(".board__column__cell");
const arrayCellAlives = [];
const startButton = document.getElementById("start");
let isGameRunning = false;
let arrayCellsAreGonnaDie = [];
let arrayCellsAreGonnaLive = [];

for (const cell of arrayAllCells) {
  cell.addEventListener("click", () => {
    document.getElementById(cell.id).style.background = "#ff006e";
    arrayCellAlives.push(cellIdNumber(cell.id));
    console.log(arrayCellAlives);
  });
}

function newGeneration() {
  console.log(arrayCellAlives);
  console.log("Function newGeneration");
  for (const cell of arrayAllCells) {
    const numberOfNeighbours = checkOneCell(cellIdNumber(cell.id));
    console.log(`cell id: ${cell.id}`);
    // debugger;
    if (arrayCellAlives.includes(cellIdNumber(cell.id))) {
      // Si esta viva
      console.log(`${cell.id} esta viva`);
      if (numberOfNeighbours < 2 || numberOfNeighbours > 3) {
        // Si esta viva y tiene que morir
        console.log(`${cell.id} esta viva y va a morir`);
        // document.getElementById(cell.id).style.background = "#fff0f5"; // Color dead cell (probar con $mainColor)
        arrayCellsAreGonnaDie.push(cellIdNumber(cell.id));
        console.log(arrayCellsAreGonnaDie);
      } else {
        // si tiene que seguir viviendo
        console.log(`${cell.id} esta viva y seguira viva`);
      }
    } else if (numberOfNeighbours === 3) {
      console.log(`${cell.id} esta muerta y tiene que vivir`);
      // si esta muerta y tiene que vivir:
      arrayCellsAreGonnaLive.push(cellIdNumber(cell.id));
      console.log(arrayCellsAreGonnaLive);
    }
  }
  // eslint-disable-next-line no-use-before-define
  changesAfterChecks();
  return arrayCellAlives;
}

function cellIdNumber(cellId) {
  return parseInt(cellId, 10);
}

function changesAfterChecks() {
  arrayCellsAreGonnaDie.forEach((deathCell) => {
    // Quitamos del array la celda que muere
    document.getElementById(deathCell).style.background = "#fff0f5";
    const foundIndex = arrayCellAlives.indexOf(deathCell);
    if (foundIndex !== -1) {
      arrayCellAlives.splice(foundIndex, 1);
    } else {
      console.log("ERROR! CELL WAS NOT ALIVE");
    }
  });
  arrayCellsAreGonnaLive.forEach((aliveCell) => {
    document.getElementById(aliveCell).style.background = "#ff006e"; // Color alive cell
    arrayCellAlives.push(cellIdNumber(aliveCell));
  });
  arrayCellsAreGonnaLive = [];
  arrayCellsAreGonnaDie = [];
}

startButton.addEventListener("click", () => {
  isGameRunning = true;
  newGeneration();
  console.log("Game is running");
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
