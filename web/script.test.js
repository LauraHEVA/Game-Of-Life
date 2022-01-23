const arrayCellAlives = [1823, 1824, 1825, 2209, 2210, 2310];

const checkOneCell = (idCell) => {
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
};

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

const cellIdNumber = (cellId) => parseInt(cellId, 10);

describe("Given a cellIdNumber function", () => {
  describe("When it receives the string '6789'", () => {
    test("Then it should return the number 6789", () => {
      const IdString = "6789";
      const expectedNumber = 6789;

      const idNum = cellIdNumber(IdString);

      expect(idNum).toBe(expectedNumber);
    });
  });
});

const resetBoard = () => {
  /* for (const cell of arrayAllCells) {
    document.getElementById(cell.id).style.background = "#fff0f5";
  } */
  arrayCellAlives.length = 0;
  return arrayCellAlives;
};

describe("Given a resetBoard function", () => {
  describe("When it's called", () => {
    test("Then it should retun the arrayCellAlives empty", () => {
      const expectedArray = [];

      const emptyArray = resetBoard();

      expect(emptyArray.length).toBe(expectedArray.length);
    });
  });
});

const getPatternOnBoard = (arrayPattern) => {
  // resetBoard();
  arrayCellAlives.length = 0;
  for (const id of arrayPattern) {
    arrayCellAlives.push(id);
  }
  // for (const cell of arrayCellAlives) {
  //   document.getElementById(cell).style.background = "#ff006e";
  // }
  return arrayCellAlives;
};

describe("Given a getPatternOnBoard function", () => {
  describe("When it receives an array with [3, 4, 5]", () => {
    test("Then it should retun the arrayCellAlives with [3, 4, 5]", () => {
      const arrayWithCells = [3, 4, 5];
      const expectedArray = [3, 4, 5];

      const newArrayCopied = getPatternOnBoard(arrayWithCells);

      expect(newArrayCopied).toEqual(expectedArray);
    });
  });
});
