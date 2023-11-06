import express from "express";
import {
  update,
  deleted,
  getuser,
  subscribe,
  Unsubscribe,
  like,
  dislike,
} from "../Controllers/user.js";
import { verifytoken } from "../verifytoken.js";
const userrouter = express.Router();

userrouter.put("/:id", verifytoken, update);
userrouter.delete("/:id", verifytoken, deleted);
userrouter.get("/find/:id", getuser);
userrouter.put("/subscribe/:id", verifytoken, subscribe);
userrouter.put("/Unsubscribe/:id", verifytoken, Unsubscribe);
userrouter.put("/like/:videoId", verifytoken, like);
userrouter.put("/dislike/:videoId", verifytoken, dislike);

export { userrouter };
