import express from "express";
import { update, deleted, getuser, subscribe, Unsubscribe } from "../Controllers/user.js";
import { verifytoken } from "../verifytoken.js"
const userrouter = express.Router();

userrouter.put("/:id", verifytoken, update);
userrouter.delete("/:id", verifytoken, deleted);
userrouter.get("/get/:id", getuser);
userrouter.put("/subscribe/:id", verifytoken, subscribe);
userrouter.put("/Unsubscribe/:id", Unsubscribe);


export { userrouter };
