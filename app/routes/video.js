import express from "express";
import {
  addVideo,
  updateVideo,
  deleteVideo,
  getVideo,
} from "../Controllers/video.js";
import { verifytoken } from "../verifytoken.js";
const videorouter = express.Router();
videorouter.post("/", verifytoken, addVideo);
videorouter.put("/:id", verifytoken, updateVideo);
videorouter.delete("/:id", verifytoken, deleteVideo);
videorouter.get("/find/:id", getVideo);

export { videorouter };
