import { PLAYER } from "./types";
import { printBoard } from "./print";
import { turn } from "./turn";

const initBoard = [0, 0, 0].map((i) => [PLAYER.None, PLAYER.None, PLAYER.None]);
printBoard(initBoard);
let isXTurn = Math.round(Math.random()) === 0;
console.log(`Player ${isXTurn ? "X" : "O"} starts first!`);
turn(initBoard, isXTurn ? PLAYER.X : PLAYER.O);
