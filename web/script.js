/* eslint-disable no-use-before-define */
const arrayAllCells = document.querySelectorAll(".board__column__cell");
const arrayCellAlives = [];
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");
const pattern1 = document.getElementById("pattern1");
const pattern2 = document.getElementById("pattern2");
const pattern3 = document.getElementById("pattern3");
const pattern4 = document.getElementById("pattern4");
const pattern5 = document.getElementById("pattern5");

const arrayPattern1 = [
  1603, 1502, 1302, 1402, 1303, 1304, 1305, 1306, 1406, 1506, 1605, 1910, 1911,
  1912, 1913, 1914, 1712, 1812, 2012, 2112, 2319, 2219, 2320, 2321, 2221, 2220,
  2120, 2020, 1920, 1921, 1922, 1923, 1823, 1723, 1924, 2024, 2124, 2323, 2324,
  2225, 1818, 1919, 1719, 1619,
];

const arrayPattern2 = [
  2403, 2303, 2304, 2404, 2405, 2311, 2211, 2312, 2313, 2314, 2317, 2315, 2014,
  1914, 1814, 1714, 1813, 1815, 2413, 1105, 1205, 1206, 1207, 1307, 1406, 1405,
  1506, 1418, 1518, 1519, 1419, 1419, 1420, 1321, 1320, 1220, 1521, 1821, 1921,
  2021, 2022, 2020, 2423, 2323, 2322, 2321,
];

const arrayPattern3 = [
  1205, 1304, 1403, 1503, 1603, 1704, 1805, 1905, 2005, 2104, 2203, 1014, 1113,
  1212, 1312, 1412, 1513, 1614, 1714, 1814, 1913, 2012, 2622, 2523, 2424, 2324,
  2224, 2123, 2022, 1922, 1822, 1723, 1624,
];

const arrayPattern4 = [
  1403, 1303, 1204, 1205, 1206, 1207, 1308, 1408, 1507, 1506, 1405, 1505, 1803,
  1804, 1805, 1806, 1807, 1808, 2103, 2203, 2303, 2204, 2205, 2206, 2207, 2208,
  1314, 1215, 1216, 1217, 1318, 1417, 1416, 1415, 1518, 1715, 1716, 1717, 1818,
  1917, 1916, 1915, 1814, 1914, 1913, 1912, 2115, 2116, 2117, 2218, 2317, 2316,
  2315, 2214, 2314, 2313, 2312, 2518,
];

const arrayPattern5 = [
  1102, 1103, 1104, 1105, 1106, 1107, 1202, 1302, 1403, 1404, 1305, 1205, 1406,
  1407, 1308, 1208, 1108, 1702, 1602, 1603, 1604, 1605, 1606, 1607, 1608, 1708,
  1808, 1908, 1705, 1805, 1802, 1902, 2102, 2103, 2104, 2105, 2106, 2107, 2108,
  2208, 2308, 2408, 2205, 2305, 2202, 2302, 2402, 1113, 1114, 1115, 1116, 1117,
  1118, 1119, 1120, 1121, 1213, 1313, 1414, 1415, 1316, 1216, 1613, 1614, 1615,
  1616, 1617, 1618, 1619, 1713, 1814, 1815, 1716, 1817, 1818, 1819, 2013, 2014,
  2015, 2016, 2017, 2018, 2019, 2113, 2214, 2215, 2116, 2217, 2218, 2219, 2413,
  2414, 2415, 2416, 2417, 2418, 2419, 2513, 2614,
];

let isGameRunning = false;

for (const cell of arrayAllCells) {
  cell.addEventListener("click", () => {
    document.getElementById(cell.id).style.background = "#ff006e";
    arrayCellAlives.push(cellIdNumber(cell.id));
    console.log(arrayCellAlives);
  });
}

const newGeneration = () => {
  const arrayCellsAreGonnaDie = [];
  const arrayCellsAreGonnaLive = [];
  console.log(arrayCellAlives);
  for (const cell of arrayAllCells) {
    const numberOfNeighbours = checkOneCell(cellIdNumber(cell.id));
    if (arrayCellAlives.includes(cellIdNumber(cell.id))) {
      if (numberOfNeighbours < 2 || numberOfNeighbours > 3) {
        arrayCellsAreGonnaDie.push(cellIdNumber(cell.id));
      }
    } else if (numberOfNeighbours === 3) {
      arrayCellsAreGonnaLive.push(cellIdNumber(cell.id));
    }
  }
  changesAfterChecks(arrayCellsAreGonnaLive, arrayCellsAreGonnaDie);
  return arrayCellAlives;
};

const cellIdNumber = (cellId) => parseInt(cellId, 10);

const changesAfterChecks = (toLive, toDie) => {
  toLive.forEach((aliveCell) => {
    document.getElementById(aliveCell).style.background = "#ff006e";
    arrayCellAlives.push(cellIdNumber(aliveCell));
  });
  toDie.forEach((deathCell) => {
    document.getElementById(deathCell).style.background = "#fff0f5";
    const foundIndex = arrayCellAlives.indexOf(deathCell);
    if (foundIndex !== -1) {
      arrayCellAlives.splice(foundIndex, 1);
    } else {
      console.log("ERROR! CELL WAS NOT ALIVE");
    }
  });
};

startButton.addEventListener("click", () => {
  isGameRunning = true;
  loopNextGeneration();
  return isGameRunning;
});

function loopNextGeneration() {
  newGeneration();
  if (isGameRunning) {
    // eslint-disable-next-line no-implied-eval
    setTimeout("loopNextGeneration()", 400);
  }
}

pauseButton.addEventListener("click", () => {
  isGameRunning = false;
  return isGameRunning;
});

const resetBoard = () => {
  for (const cell of arrayAllCells) {
    document.getElementById(cell.id).style.background = "#fff0f5";
  }
  arrayCellAlives.length = 0;
  return arrayCellAlives;
};

resetButton.addEventListener("click", () => {
  isGameRunning = false;
  resetBoard();
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

pattern1.addEventListener("click", () => {
  arrayCellAlives.length = 0;
  for (const id of arrayPattern1) {
    arrayCellAlives.push(id);
  }
  for (const cell of arrayCellAlives) {
    document.getElementById(cell).style.background = "#ff006e";
    console.log(arrayCellAlives);
  }
});
