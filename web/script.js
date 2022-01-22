const arrayAllCells = document.querySelectorAll(".board__column__cell");
const arrayCellAlives = [];

for (const cell of arrayAllCells) {
  cell.addEventListener("click", () => {
    document.getElementById(cell.id).style.background = "#ff006e";
    arrayCellAlives.push(cell.id);
    console.log(arrayCellAlives);
  });
}
