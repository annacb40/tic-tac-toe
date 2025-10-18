export enum PLAYER {
  None, // 0
  X, // 1
  O, // 2
}

type RowNumber = 0 | 1 | 2;
type ColNumber = 0 | 1 | 2;
export type Position = {
  row: RowNumber;
  col: ColNumber;
};
type Row = [PLAYER, PLAYER, PLAYER];
export type Board = [Row, Row, Row];
