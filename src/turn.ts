import { askQuestion, getTurnPosition, readLine } from "./input";
import { printBoard, toPlayerString } from "./print";
import { checkEndGame } from "./checkEndGame";
import { Board, Player } from "./types";

export const turn = async (
  currentBoard: Board,
  currentPlayer: Player.X | Player.O
): Promise<undefined> => {
  printBoard(currentBoard);
  const turnPosition = await getTurnPosition(currentPlayer, currentBoard);
  if (!turnPosition) {
    return turn(currentBoard, currentPlayer);
  }
  const { row, col } = turnPosition;
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
    return turn(currentBoard, currentPlayer === Player.X ? Player.O : Player.X);
  }
};
