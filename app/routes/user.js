import express from "express";
import { test } from "../Controllers/user.js";
const userrouter = express.Router();

// userrouter.get("/test", test);

export { userrouter };
