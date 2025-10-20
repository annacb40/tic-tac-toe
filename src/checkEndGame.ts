import { Player } from "./types";

export const checkEndGame = (board: number[][]) => {
  const winner = checkWin(board);
  if (winner !== undefined) {
    return { ended: true, winner };
  }

  const isDraw = board.every((row) =>
    row.every((cell) => cell !== Player.None)
  );
  if (isDraw) {
    // TODO better draw handling
    return { ended: true, winner: undefined };
  }

  return { ended: false };
};

const checkWin = (board: number[][]): Player | undefined => {
  // check rows
  board.forEach((row) => {
    if (row[0] !== Player.None && row[0] === row[1] && row[1] === row[2]) {
      return row[0];
    }
  });

  // check columns
  for (let col = 0; col < 3; col++) {
    if (
      board[0]?.[col] !== Player.None &&
      board[0]?.[col] === board[1]?.[col] &&
      board[1]?.[col] === board[2]?.[col]
    ) {
      return board[0]?.[col] || undefined;
    }
  }

  // check left diagonal
  if (
    board[0]?.[0] !== Player.None &&
    board[0]?.[0] === board[1]?.[1] &&
    board[1]?.[1] === board[2]?.[2]
  ) {
    return board[0]?.[0] || undefined;
  }

  // check right diagonal
  if (
    board[0]?.[2] !== Player.None &&
    board[0]?.[2] === board[1]?.[1] &&
    board[1]?.[1] === board[2]?.[0]
  ) {
    return board[0]?.[2] || undefined;
  }
};
