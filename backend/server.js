import express from "express";
import cors from "cors";
import { Server } from "socket.io";
import http from "http";
import "dotenv/config";
import cookieParser from "cookie-parser";
import initializeSocket from "./sockets/index.js";

import connectDb from "./config/mongodb.js";
import authRouter from "./routes/authRoutes.js";
import userRouter from "./routes/userRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://authentication-system-kohl.vercel.app",
    ],
    credentials: true,
  })
);

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: [
      "http://localhost:5173",
      "https://authentication-system-kohl.vercel.app",
    ],
    methods: ["GET", "POST"],
    credentials: true,
  },
});
 
initializeSocket(io);


connectDb();

app.get("/", (req, res) => {
  res.send("Hello World backend API is working!");
});

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});