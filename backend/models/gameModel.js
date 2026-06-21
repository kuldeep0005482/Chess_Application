import mongoose from "mongoose";

const gameSchema = new mongoose.Schema({
    roomId: {
        type: String,
        unique: true
    },

    whitePlayer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },

    blackPlayer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },

    winner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: null,
    },

    result: {
        type: String,
        enum: ["white", "black", "draw"],
    },

    pgn: String,

    moves: [String]
}, {
    timestamps: true
});

export default mongoose.model("game", gameSchema);