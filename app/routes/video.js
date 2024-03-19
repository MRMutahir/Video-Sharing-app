import express from "express";
import {
  addVideo,
  updateVideo,
  deleteVideo,
  getVideo,
  view,
  subscribes,
  random,
  bytags,
  search,
  trend,
} from "../Controllers/video.js";
import { verifytoken } from "../verifytoken.js";
const videorouter = express.Router();
videorouter.post("/", verifytoken, addVideo);
videorouter.put("/:id", verifytoken, updateVideo);
videorouter.delete("/:id", verifytoken, deleteVideo);
videorouter.get("/find/:id", getVideo);
videorouter.get("/view/:id", view);
videorouter.get("/trend", trend);
videorouter.get("/random", random);
videorouter.get("/subscribes", verifytoken, subscribes);
videorouter.get("/tags", bytags);
videorouter.get("/search", search);

export { videorouter };
