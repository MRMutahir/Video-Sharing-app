import express from "express";
import { test } from "../Controllers/comment.js";
const commentrouter = express.Router();
commentrouter.get("/test", test);

export { commentrouter };