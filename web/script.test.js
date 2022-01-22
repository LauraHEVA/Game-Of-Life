const arrayCellAlives = [1823, 1824, 2209, 2210, 2310];
let numberOfNeighbours = 0;

function resetNumberOfNeighbours() {
  numberOfNeighbours = 0;
}

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

describe("Given a checkOneCell function", () => {
  describe("When it receives a 1923", () => {
    test("Then it should return numberOfNeighbours 2", () => {
      const id = 1923;
      const expectedNeighbours = 2;

      const howManyNeighbours = checkOneCell(id);

      expect(howManyNeighbours).toBe(expectedNeighbours);
    });
  });

  describe("When it receives a 2309", () => {
    test("Then it should return numberOfNeighbours 3", () => {
      const id = 2309;
      const expectedNeighbours = 3;

      const howManyNeighbours = checkOneCell(id);

      expect(howManyNeighbours).toBe(expectedNeighbours);
    });
  });
});
