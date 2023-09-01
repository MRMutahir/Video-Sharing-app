import monoose from "mongoose";
import { user } from "../model/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// CREATE A USER
async function signup(req, res, next) {
  const userBody = req.body;
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(req.body.password, salt);

  try {
    const newUser = new user({ ...userBody, password: hash });
    await newUser.save();
    res.status(200).send("User has been created!");
  } catch (error) {
    res.status(500).send(error);
    // next();
  }
}
// LOGIN A USER

async function signin(req, res, next) {
  try {
    const User = await user.findOne({ name: req.body.name });
    // if (!User) return res.status(500).send("User Not Found");
    const userpassword = await bcrypt.compare(req.body.password, User.password);
    if (userpassword) {
      const token = jwt.sign({ id: User._id }, process.env.JWT_TOKEN);
      res
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .status(200)
        .json(User);
      res.status(200).send(User);
    } else {
      return res.status(500).send("User  Not Found  check your Authentication");
    }
  } catch (error) {
    res.status(500).send(error);
  }
}

export { signup, signin };
