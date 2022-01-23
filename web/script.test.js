const arrayCellAlives = [1823, 1824, 1825, 2209, 2210, 2310];

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

describe("Given a checkOneCell function", () => {
  describe("When it receives a 1823", () => {
    test("Then it should return numberOfNeighbours 1", () => {
      const id = 1823;
      const expectedNeighbour = 1;

      const isNeighbour = checkOneCell(id);

      expect(isNeighbour).toBe(expectedNeighbour);
    });
  });
  describe("When it receives a 1824", () => {
    test("Then it should return numberOfNeighbours 2", () => {
      const id = 1824;
      const expectedNeighbour = 2;

      const isNeighbour = checkOneCell(id);

      expect(isNeighbour).toBe(expectedNeighbour);
    });
  });

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
