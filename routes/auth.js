import express from "express";
import { signup, signin, googleAuth } from "../Controllers/auth.js";
const authRoutes = express.Router();

//CREATE A USER
authRoutes.post("/signup", signup);
// authRoutes.post("/signin", signin);

//SIGN IN
authRoutes.post("/signin", signin);

// //GOOGLE AUTH
authRoutes.post("/google", googleAuth);
export { authRoutes };
