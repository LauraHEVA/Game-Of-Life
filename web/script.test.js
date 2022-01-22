const arrayCellAlives = [1823, 1824];
const isGameRunning = false;
let numberOfNeighbours = 0;

function checkNeighbours(idCell) {
  const numberToCheckVertical = idCell + 1;
  if (arrayCellAlives.includes(numberToCheckVertical)) {
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