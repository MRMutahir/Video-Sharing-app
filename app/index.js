import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { userrouter } from "./routes/user.js";
import { videorouter } from "./routes/video.js";
import { commentrouter } from "./routes/comment.js";
import { authRoutes } from "./routes/auth.js";
import cookieParser from "cookie-parser";
import cors from "cors";

let app = express();
let port = 8000;
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

dotenv.config();
const connect = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("connect to DB");
    })
    .catch((error) => {
      throw error;
    });
};

app.use("/api/auth", authRoutes);
app.use("/api/user", userrouter);
app.use("/api/video", videorouter);
app.use("/api/comment", commentrouter);

app.listen(port, () => {
  connect();
  console.log(" Server  Start", port);
});
// app.use((error, req, res, next) => {
//   const status = error.status || 500;
//   const meassage = error.meassage || "Something went wrong ";
//   return res.status(status).json({
//     succes: false,
//     status,
//     meassage,
//   });
// });
