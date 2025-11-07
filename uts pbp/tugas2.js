const board = [
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", "R", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", "K", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "."]
];

function cekRaja(board) {
  let rookPos = null;
  let kingPos = null;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (board[i][j] === "R") rookPos = [i, j];
      if (board[i][j] === "K") kingPos = [i, j];
    }
  }
  if (!rookPos || !kingPos) {
    console.log("Papan tidak valid!");
    return;
  }
  const [rRow, rCol] = rookPos;
  const [kRow, kCol] = kingPos;
  if (rRow === kRow) {
    const min = Math.min(rCol, kCol);
    const max = Math.max(rCol, kCol);
    for (let c = min + 1; c < max; c++) {
      if (board[rRow][c] !== ".") return console.log("Aman");
    }
    return console.log("SKAK!");
  }
  if (rCol === kCol) {
    const min = Math.min(rRow, kRow);
    const max = Math.max(rRow, kRow);
    for (let r = min + 1; r < max; r++) {
      if (board[r][rCol] !== ".") return console.log("Aman");
    }
    return console.log("SKAK!");
  }
  console.log("Aman");
}
cekRaja(board);
