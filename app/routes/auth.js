import express from "express";
import { signup } from "../Controllers/auth.js";
const authRoutes = express.Router();

//CREATE A USER
authRoutes.post("/signup", signup);

//SIGN IN
// authRoutes.post("/signin", signin);

// //GOOGLE AUTH
// authRoutes.post("/google", googleAuth);
export { authRoutes };
