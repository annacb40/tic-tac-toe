import { PLAYER } from "./types";

export const toPlayerString = (status: PLAYER) => {
  switch (status) {
    case PLAYER.None:
      return " ";
    case PLAYER.X:
      return "X";
    case PLAYER.O:
      return "O";
  }
};

export const printBoard = (board: number[][]) => {
  console.log("   A   B   C\n");
  const boardString = board
    .map(
      (value, index) =>
        `${index}  ${value.map((status) => toPlayerString(status)).join(" | ")}`
    )
    .join(`\n   ---------\n`);
  console.log(boardString);
};
