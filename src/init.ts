import { PLAYER, Board } from "./types";
import { printBoard, toPlayerString } from "./print";
import { turn } from "./turn";

const initBoard = [0, 0, 0].map(() =>
  [0, 0, 0].map(() => PLAYER.None)
) as Board;
printBoard(initBoard);
const firstPlayer = Math.round(Math.random()) === 0 ? PLAYER.X : PLAYER.O;
console.log(`Player ${toPlayerString(firstPlayer)} starts first!`);
turn(initBoard, firstPlayer);
