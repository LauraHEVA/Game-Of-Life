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
  1103, 1104, 1105, 1106, 1107, 1108, 1109, 1503, 1403, 1304, 1305, 1406, 1507,
  1508, 1409, 1309, 1703, 1704, 1705, 1706, 1707, 1708, 1709, 1809, 1908, 1907,
  1906, 1905, 1904, 1803, 2103, 2104, 2105, 2106, 2107, 2108, 2109, 1116, 1117,
  1118, 1119, 1120, 1215, 1316, 1317, 1318, 1319, 1320, 1415, 1516, 1517, 1518,
  1519, 1520, 1716, 1717, 1718, 1719, 1820, 1919, 1918, 1917, 1916, 1815, 2115,
  2116, 2117, 2118, 2119, 2120, 2220, 2420, 2419, 2418, 2417, 2416, 2515, 2616,
  2617, 2618, 2619, 2620, 2518,
];

const arrayPattern2 = [
  1203, 1204, 1205, 1206, 1207, 1208, 1209, 1804, 1703, 1603, 1504, 1505, 1606,
  1707, 1808, 1907, 2006, 2105, 2104, 2003, 1903, 1809, 1116, 1117, 1118, 1119,
  1120, 1121, 1122, 1222, 1322, 1219, 1216, 1316, 1716, 1616, 1517, 1518, 1619,
  1720, 1721, 1622, 1522, 1916, 1917, 1918, 1919, 1920, 1921, 1922, 2022, 2216,
  2217, 2218, 2219, 2220, 2221, 2222, 2416, 2417, 2418, 2419, 2420, 2422, 2421,
  2517, 2618, 1109, 1103, 1309, 1303,
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
  1102, 1103, 1104, 1105, 1202, 1303, 1304, 1205, 1106, 1107, 1108, 1502, 1503,
  1504, 1505, 1506, 1507, 1508, 1602, 1703, 1704, 1605, 1706, 1707, 1708, 1902,
  1903, 1904, 1905, 1906, 1908, 1908, 1907, 2002, 2103, 2104, 2005, 2106, 2107,
  2108, 2302, 2303, 2304, 2305, 2306, 2307, 2308, 2402, 2503, 2504, 2405, 2506,
  2507, 2508, 1110, 1111, 1112, 1210, 1311, 1312, 1213, 1314, 1315, 1216, 1116,
  1114, 1113, 1115, 1510, 1610, 1710, 1511, 1512, 1612, 1513, 1514, 1515, 1516,
  1616, 1716, 1613, 1910, 1911, 1912, 1913, 1914, 1915, 1916, 2016, 2116, 2013,
  2010, 2110, 1713, 2113, 2310, 2311, 2312, 2313, 2314, 2315, 2316, 2416, 2516,
  2413, 2513, 2410, 2510, 1118, 1119, 1120, 1121, 1122, 1123, 1218, 1319, 1320,
  1221, 1124, 1518, 1519, 1520, 1521, 1522, 1523, 1524, 1624, 1724, 1919, 1920,
  1921, 1922, 1923, 2024, 2123, 2122, 2121, 2120, 2119, 2018, 2318, 2319, 2320,
  2321, 2322, 2323, 2324, 2418, 2519, 2520, 2421,
];

let isGameRunning = false;

for (const cell of arrayAllCells) {
  cell.addEventListener("click", () => {
    document.getElementById(cell.id).style.background = "#ff006e";
    arrayCellAlives.push(cellIdNumber(cell.id));
  });
}

const newGeneration = () => {
  const arrayCellsAreGonnaDie = [];
  const arrayCellsAreGonnaLive = [];
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

const getPatternOnBoard = (arrayPattern) => {
  resetBoard();
  for (const id of arrayPattern) {
    arrayCellAlives.push(id);
  }
  for (const cell of arrayCellAlives) {
    document.getElementById(cell).style.background = "#ff006e";
  }
  return arrayCellAlives;
};

pattern1.addEventListener("click", () => {
  getPatternOnBoard(arrayPattern1);
});

pattern2.addEventListener("click", () => {
  getPatternOnBoard(arrayPattern2);
});

pattern3.addEventListener("click", () => {
  getPatternOnBoard(arrayPattern3);
});

pattern4.addEventListener("click", () => {
  getPatternOnBoard(arrayPattern4);
});

pattern5.addEventListener("click", () => {
  getPatternOnBoard(arrayPattern5);
});
