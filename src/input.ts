import { createInterface } from "readline";
import { toPlayerString } from "./print";
import { Board, PLAYER, Position } from "./types";

export const readLine = createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

export const askQuestion = (question: string): Promise<string> => {
  return new Promise((resolve) => {
    readLine.question(question, (answer) => {
      resolve(answer);
    });
  });
};

export const getTurnPosition = async (
  currentPlayer: PLAYER,
  currentBoard: Board
): Promise<Position | undefined> => {
  const position = await askQuestion(
    `Player ${toPlayerString(
      currentPlayer
    )}, enter your position (e.g., A1, B2):`
  );

  const colMap: { [key: string]: number } = { A: 0, B: 1, C: 2 };
  const col = position[0] ? colMap[position[0].toUpperCase()] ?? -1 : -1;
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
    // return turn(currentBoard, currentPlayer);
  }
  if (currentBoard[row]?.[col] !== PLAYER.None) {
    console.log("Position already taken. Please try again.");
    // return turn(currentBoard, currentPlayer);
  }

  return { row, col } as Position;
};
