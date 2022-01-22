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
    console.log(`linea 18 ${cell.id}`);
    console.log(numberOfNeighbours);
    if (arrayCellAlives.includes(cell.id)) {
      // Si esta viva
      if (numberOfNeighbours < 2 || numberOfNeighbours > 3) {
        // Si esta viva y tiene que morir
        document.getElementById(cell.id).style.background = "#fff0f5"; // Color dead cell (probar con $mainColor)
        arrayCellAlives.splice(arrayCellAlives.findIndex(cell.id), 1); // Quitamos del array la celda viva
        numberOfNeighbours = 0;
      } else if (numberOfNeighbours === 2 || numberOfNeighbours === 3) {
        // si tiene que seguir viviendo
        numberOfNeighbours = 0;
        return numberOfNeighbours;
      }
    } else if (numberOfNeighbours === 2 || numberOfNeighbours === 3) {
      // si esta muerta y tiene que vivir:
      document.getElementById(cell.id).style.background = "#ff006e"; // Color alive cell
      arrayCellAlives.push(parseInt(cell.id, 10));
      numberOfNeighbours = 0;
      return numberOfNeighbours;
    }
  }
}

startButton.addEventListener("click", () => {
  isGameRunning = true;
  newGeneration();
  console.log("Game is running");
  return isGameRunning;
});

function checkOneCell(idCell) {
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
