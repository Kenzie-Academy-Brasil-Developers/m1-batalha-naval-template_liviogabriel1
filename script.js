// Tabuleiro inicial de exemplo
const seaBoard = [
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
];

/*
  Desenvolva seu código logo abaixo
*/

// Função para alocar os navios no tabuleiro
function allocateShips(shipPositions, initialBoard) {
  for (let i = 0; i < shipPositions.length; i++) {
    let row = shipPositions[i][0];
    let col = shipPositions[i][1];
    initialBoard[row][col] = "S";
  }
  return initialBoard;
}

// Função para verificar as suposições do jogador
function checkGuesses(guesses, mountedBoard) {
  for (let i = 0; i < guesses.length; i++) {
    let row = guesses[i][0];
    let col = guesses[i][1];
    if (mountedBoard[row][col] === "S") {
      mountedBoard[row][col] = "X";
    }
  }
  return mountedBoard;
}

// Função para verificar se o jogador venceu a partida
function checkWinCondition(guessedBoard) {
  for (let i = 0; i < guessedBoard.length; i++) {
    for (let j = 0; j < guessedBoard[i].length; j++) {
      if (guessedBoard[i][j] === "S") {
        return false;
      }
    }
  }
  return true;
}