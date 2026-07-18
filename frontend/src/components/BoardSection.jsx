import React from 'react';
import { motion } from "framer-motion";
import { useRef, useContext } from 'react';
import PlayerStrip from "./PlayerStrip";
import InteractiveBoard from "./InteractiveBoard.jsx";
import useResponsiveBoardSize from "../hooks/useResponsiveBoardSize.js";
import useChessGame from "../hooks/useChessGame.js";
import { AppContext } from '../context/AppContext.jsx';


const fadeUp = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };


function BoardSection() {
    const centerRef = useRef(null);
    const topStripRef = useRef(null);
    const bottomStripRef = useRef(null);
    const { userData } = useContext(AppContext);
    const boardSize = useResponsiveBoardSize({
        centerRef,
        topStripRef,
        bottomStripRef,
    });

    const {
        board,
        turn,
        selected,
        legalMoves,
        history,
        captured,
        lastMove,
        onSquareClick,
        resetGame,
    } = useChessGame();

    return (

        <motion.div
            className="flex justify-center"
            initial="hidden"
            animate="show"
            variants={fadeUp}
        >
            <div className="flex w-full  justify-center">
                <div ref={centerRef} className="flex w-full flex-col items-center gap-1">
                    <div ref={topStripRef} className="w-full">
                        <PlayerStrip
                            name="VolkovK_92"
                            elo={2148}
                            color="black"
                            clock="--:--"
                            top
                        />
                    </div>

                    <div
                        className="overflow-hidden "
                        style={{ width: boardSize, height: boardSize }}
                    >
                        <InteractiveBoard
                            board={board}
                            selected={selected}
                            playerColor="black"
                            legalMoves={legalMoves}
                            lastMove={lastMove}
                            onSquareClick={onSquareClick}
                        />
                    </div>

                    <div ref={bottomStripRef} className="w-full">
                        <PlayerStrip
                            name={userData.name}
                            elo={userData.rating}
                            color="white"
                            clock="--:--"
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default BoardSection