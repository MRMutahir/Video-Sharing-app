import express from "express";
import { verifytoken } from "../verifytoken.js";
import {
  addcomment,
  getcomment,
  deletecomment,
} from "../Controllers/comment.js";
const commentrouter = express.Router();
commentrouter.post("/addcomment", verifytoken, addcomment);
commentrouter.delete("/:id", verifytoken, deletecomment);
commentrouter.get("/find/:id", getcomment);

export { commentrouter };
