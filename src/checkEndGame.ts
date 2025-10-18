import { PLAYER } from "./types";

export const checkEndGame = (board: number[][]) => {
  const winner = checkWin(board);
  if (winner !== undefined) {
    return { ended: true, winner };
  }

  const isDraw = board.every((row) =>
    row.every((cell) => cell !== PLAYER.None)
  );
  if (isDraw) {
    // TODO better draw handling
    return { ended: true, winner: undefined };
  }

  return { ended: false };
};

const checkWin = (board: number[][]): PLAYER | undefined => {
  // check rows
  board.forEach((row) => {
    if (row[0] !== PLAYER.None && row[0] === row[1] && row[1] === row[2]) {
      return row[0];
    }
  });

  // check columns
  for (let col = 0; col < 3; col++) {
    if (
      board[0]?.[col] !== PLAYER.None &&
      board[0]?.[col] === board[1]?.[col] &&
      board[1]?.[col] === board[2]?.[col]
    ) {
      return board[0]?.[col] || undefined;
    }
  }

  // check left diagonal
  if (
    board[0]?.[0] !== PLAYER.None &&
    board[0]?.[0] === board[1]?.[1] &&
    board[1]?.[1] === board[2]?.[2]
  ) {
    return board[0]?.[0] || undefined;
  }

  // check right diagonal
  if (
    board[0]?.[2] !== PLAYER.None &&
    board[0]?.[2] === board[1]?.[1] &&
    board[1]?.[1] === board[2]?.[0]
  ) {
    return board[0]?.[2] || undefined;
  }
};
