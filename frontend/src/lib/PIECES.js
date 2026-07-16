import whiteKing from "../assets/pieces/white-king.svg";
import whiteQueen from "../assets/pieces/white-queen.svg";
import whiteRook from "../assets/pieces/white-rook.svg";
import whiteBishop from "../assets/pieces/white-bishop.svg";
import whiteKnight from "../assets/pieces/white-knight.svg";
import whitePawn from "../assets/pieces/white-pawn.svg";

import blackKing from "../assets/pieces/black-king.svg";
import blackQueen from "../assets/pieces/black-queen.svg";
import blackRook from "../assets/pieces/black-rook.svg";
import blackBishop from "../assets/pieces/black-bishop.svg";
import blackKnight from "../assets/pieces/black-knight.svg";
import blackPawn from "../assets/pieces/black-pawn.svg";

const PIECES = {
  K: {
    name: "White King",
    image: whiteKing,
  },
  Q: {
    name: "White Queen",
    image: whiteQueen,
  },
  R: {
    name: "White Rook",
    image: whiteRook,
  },
  B: {
    name: "White Bishop",
    image: whiteBishop,
  },
  N: {
    name: "White Knight",
    image: whiteKnight,
  },
  P: {
    name: "White Pawn",
    image: whitePawn,
  },

  k: {
    name: "Black King",
    image: blackKing,
  },
  q: {
    name: "Black Queen",
    image: blackQueen,
  },
  r: {
    name: "Black Rook",
    image: blackRook,
  },
  b: {
    name: "Black Bishop",
    image: blackBishop,
  },
  n: {
    name: "Black Knight",
    image: blackKnight,
  },
  p: {
    name: "Black Pawn",
    image: blackPawn,
  },
};

export default PIECES;