import { Player } from "./types";

export const toPlayerString = (status: Player) => {
  switch (status) {
    case Player.None:
      return " ";
    case Player.X:
      return "X";
    case Player.O:
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
