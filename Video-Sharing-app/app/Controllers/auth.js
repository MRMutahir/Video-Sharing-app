import monoose from "mongoose";
import { User } from "../model/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// CREATE A USER
async function signup(req, res) {
  const userBody = req.body;
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(req.body.password, salt);

  try {
    const newUser = new User({ ...userBody, password: hash });
    await newUser.save();
    res.status(200).send("User has been created!");
  } catch (error) {
    res.status(500).send(error);
    // next();
  }
}
// LOGIN A USER

async function signin(req, res) {
  const user = await User.findOne({ name: req.body.name });
  if (!user) return res.status(404).send("User Not Found");
  const isPssword = await bcrypt.compare(req.body.password, user.password);
  if (isPssword) {
    const token = jwt.sign({ id: user._id }, process.env.JWT_TOKEN, {
      expiresIn: "1h",
    });
    res.cookie("access_token", token, {
      httpOnly: true,
    });
    // Return user data without the password
    // res.status(200).json({ user: { _id: user._id, name: user.name } });
    const { password, ...other } = user._doc;
    res.status(200).json(other);
  }
}

export { signup, signin };
