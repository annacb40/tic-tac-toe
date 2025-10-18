import { askQuestion, readLine } from "./question";
import { printBoard, toPlayerString } from "./print";
import { checkEndGame } from "./checkEndGame";
import { PLAYER } from "./types";

export const turn = async (
  currentBoard: PLAYER[][],
  currentPlayer: PLAYER.X | PLAYER.O
): Promise<undefined> => {
  printBoard(currentBoard);
  const position = await askQuestion(
    `Player ${toPlayerString(
      currentPlayer
    )}, enter your position (e.g., A1, B2):`
  );

  const colMap: { [key: string]: number } = { A: 0, B: 1, C: 2 };
  const col = position[0] ? colMap[position[0].toUpperCase()] : -1;
  const row = position[1] ? parseInt(position[1], 10) : -1;

  if (
    col === undefined ||
    col < 0 ||
    col > 2 ||
    isNaN(row) ||
    row < 0 ||
    row > 2
  ) {
    console.log("Invalid position. Please try again.");
    return turn(currentBoard, currentPlayer);
  }
  if (currentBoard[row]?.[col] !== PLAYER.None) {
    console.log("Position already taken. Please try again.");
    return turn(currentBoard, currentPlayer);
  }
  currentBoard[row][col] = currentPlayer;

  const endGameStatus = checkEndGame(currentBoard);
  if (endGameStatus.ended) {
    printBoard(currentBoard);
    if (endGameStatus.winner !== undefined) {
      console.log(`Player ${toPlayerString(endGameStatus.winner)} wins!`);
    } else {
      console.log("It's a draw!");
    }
    readLine.close();
  } else {
    return turn(currentBoard, currentPlayer === PLAYER.X ? PLAYER.O : PLAYER.X);
  }
};
