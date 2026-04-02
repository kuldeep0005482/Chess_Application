import React from "react";
import pieceMap from "../Pieces/pieceMap";
import { motion } from "framer-motion";

const Square = ({ isDark, piece, selected, isValidMove, onClick }) => {
  const pieceSrc = piece ? pieceMap[piece] : null;

  return (
    <motion.div
      onClick={onClick}
      className="relative w-full h-full flex items-center justify-center"
      initial={false}
      animate={{
        backgroundColor: selected
          ? isDark
            ? "#3a5068"
            : "#4a6b8c"
          : isDark
            ? "#2f3e46"
            : "#354f52",
      }}
      transition={{ duration: 0.2 }}
    >
      {/* 🟢 Valid move dot */}
      {isValidMove && !piece && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-4 h-4 bg-black/50 rounded-full z-0"
        />
      )}

      {/* 🔴 Capture ring */}
      {isValidMove && piece && (
        <div className="absolute inset-1 border-4 border-red-500 rounded-full z-0"></div>
      )}

      {/* ♟️ Piece */}
      {pieceSrc && (
        <motion.img
          src={pieceSrc}
          alt={piece}
          className="w-10 h-10 md:w-12 md:h-12 object-contain select-none z-10"
          draggable={false}
          initial={false}
          animate={{
            scale: selected ? 1.2 : 1,
            rotate: selected ? 5 : 0,
            filter: selected
              ? "drop-shadow(0px 0px 8px yellow)"
              : "drop-shadow(0px 0px 0px transparent)",
          }}
          transition={{ type: "spring", stiffness: 300 }}
        />
      )}
    </motion.div>
  );
};

export default Square;