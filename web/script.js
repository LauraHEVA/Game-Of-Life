const arrayAllCells = document.querySelectorAll(".board__column__cell");
const arrayCellAlives = [];
const startButton = document.getElementById("start");
let isGameRunning = false;
let numberOfNeighbours = 0;
const arrayCellsAreGonnaDie = [];
const arrayCellsAreGonnaLive = [];

function resetNumberOfNeighbours() {
  numberOfNeighbours = 0;
}

for (const cell of arrayAllCells) {
  cell.addEventListener("click", () => {
    document.getElementById(cell.id).style.background = "#ff006e";
    arrayCellAlives.push(parseInt(cell.id, 10));
    console.log(arrayCellAlives);
  });
}

function newGeneration() {
  console.log(arrayCellAlives);
  console.log("Function newGeneration");
  for (const cell of arrayAllCells) {
    // eslint-disable-next-line no-use-before-define
    checkOneCell(cell.id);
    console.log(`linea 18 ${cell.id}`);
    // eslint-disable-next-line no-use-before-define
    console.log(checkOneCell(cell.id));
    if (arrayCellAlives.includes(cell.id)) {
      // Si esta viva
      console.log(`${cell.id} esta viva`);
      if (numberOfNeighbours < 2 || numberOfNeighbours > 3) {
        // Si esta viva y tiene que morir
        console.log(`${cell.id} esta viva y va a morir`);
        // document.getElementById(cell.id).style.background = "#fff0f5"; // Color dead cell (probar con $mainColor)
        arrayCellsAreGonnaDie.push(parseInt(cell.id, 10));
        console.log(arrayCellsAreGonnaDie);
        numberOfNeighbours = 0;
      } else if (numberOfNeighbours === 2 || numberOfNeighbours === 3) {
        // si tiene que seguir viviendo
        console.log(`${cell.id} esta viva y seguira viva`);
        numberOfNeighbours = 0;
      }
    } else if (numberOfNeighbours === 2 || numberOfNeighbours === 3) {
      console.log(`${cell.id} esta muerta y tiene que vivir`);
      // si esta muerta y tiene que vivir:
      arrayCellsAreGonnaLive.push(parseInt(cell.id, 10));
      console.log(arrayCellsAreGonnaLive);
      numberOfNeighbours = 0;
    }
  }
  // eslint-disable-next-line no-use-before-define
  changesAfterChecks();
  return arrayCellAlives;
}

function changesAfterChecks() {
  for (let i = 0; i < arrayCellsAreGonnaDie.length; i++) {
    document.getElementById(arrayCellsAreGonnaDie[i]).style.background =
      "#fff0f5";
    arrayCellAlives.splice(arrayCellAlives.findIndex(arrayCellsAreGonnaDie), 1); // Quitamos del array la celda viva
  }
  for (let i = 0; i < arrayCellsAreGonnaLive.length; i++) {
    document.getElementById(arrayCellsAreGonnaLive[i]).style.background =
      "#ff006e"; // Color alive cell
    arrayCellAlives.push(parseInt(arrayCellsAreGonnaLive[i], 10));
  }
}

startButton.addEventListener("click", () => {
  isGameRunning = true;
  newGeneration();
  console.log("Game is running");
  return isGameRunning;
});

function checkOneCell(idCell) {
  resetNumberOfNeighbours();
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
