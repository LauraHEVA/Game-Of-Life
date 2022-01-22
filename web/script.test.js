const arrayCellAlives = [1823, 1824];
let numberOfNeighbours = 0;

function checkNeighbours(idCell) {
  if (arrayCellAlives.includes(idCell + 1)) {
    numberOfNeighbours++;
  }
  return numberOfNeighbours;
}

describe("Given a checkNeighbours function", () => {
  describe("When it receives a 1823", () => {
    test("Then it should return numberOfNeighbours 1", () => {
      const id = 1823;
      const expectedNeighbour = 1;

      const isNeighbour = checkNeighbours(id);

      expect(isNeighbour).toBe(expectedNeighbour);
    });
  });
});

checkOneCell(cell.id);
if (arrayCellAlives.includes(cell.id)) {
  // Si esta viva
  if (numberOfNeighbours < 2 || numberOfNeighbours > 3) {
    // Si esta viva y tiene que morir
    document.getElementById(cell.id).style.background = "#fff0f5"; // Color dead cell probar con $mainColor
    arrayCellAlives.splice(arrayCellAlives.findIndex(cell.id), 1);
  }
}
if (numberOfNeighbours === 2 || numberOfNeighbours === 3) {
  // si tiene 2 o 3 vecinos....
}
