const arrayAllCells = document.querySelectorAll(".board__column__cell");

for (const celda of arrayAllCells) {
  celda.addEventListener("click", () => {
    document.getElementById(celda.id).style.background = "#ff006e";
  });
}
