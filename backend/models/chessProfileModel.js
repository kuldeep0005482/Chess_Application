import mongoose from "mongoose";

const chessProfileSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
    unique: true,
  },

  rating: {
    type: Number,
    default: 1200,
  },

  wins: {
    type: Number,
    default: 0,
  },

  losses: {
    type: Number,
    default: 0,
  },

  draws: {
    type: Number,
    default: 0,
  },

  gamesPlayed: {
    type: Number,
    default: 0,
  },
});

export default mongoose.model("ChessProfile", chessProfileSchema);