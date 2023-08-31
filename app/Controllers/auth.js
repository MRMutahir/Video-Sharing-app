import monoose from "mongoose";
import { user } from "../model/User.js";
import bcrypt from "bcryptjs";

async function signup(req, res) {
  const userBody = req.body;
  const salt = bcrypt.genSalt(10);
  const hash = bcrypt.hash(req.body.password, salt);
  try {
    const newUser = new user({ ...userBody, password: hash });
    await newUser.save();
    res.status(200).send("User has been created!");
  } catch (error) {
    res.status(500).send(error);
  }
}

export { signup };
