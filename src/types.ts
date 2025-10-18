export enum PLAYER {
  None, // 0
  X, // 1
  O, // 2
}

type Row = [PLAYER, PLAYER, PLAYER];
export type Board = [Row, Row, Row];
