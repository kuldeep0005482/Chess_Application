import {
  BlackKing,
  BlackKnight,
  BlackPawn,
  BlackQueen,
  BlackRook,
  WhiteBishop,
  WhiteKing,
  WhiteKnight,
  WhitePawn,
  WhiteQueen,
  WhiteRook,
  BlackBishop
} from '../../assets/GameAssets';

const pieceMap = {
  wp: WhitePawn,
  bp: BlackPawn,

  wr: WhiteRook,
  br: BlackRook,

  wn: WhiteKnight,
  bn: BlackKnight,

  wb: WhiteBishop,
  bb: BlackBishop,

  wq: WhiteQueen,
  bq: BlackQueen,

  wk: WhiteKing,
  bk: BlackKing,
};

export default pieceMap;