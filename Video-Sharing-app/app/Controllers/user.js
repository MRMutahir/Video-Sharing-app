import { json } from "express";
import { User } from "../model/User.js";

// UPDATED USER

async function update(req, res) {
  // console.log(req.user.id);
  // console.log(req.params.id);
  if (req.params.id === req.user.id) {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json("User update");
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.send("You can update only your account!");
  }
}
// DELET USER
async function deleted(req, res) {
  if (req.params.id === req.user.id) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("User deleted");
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.send("You can Delete only your account!");
  }
}

// GET USER
async function getuser(req, res, next) {
  console.log(req.params.id);
  try {
    const user = await User.findById(req.params.id);
    console.log(user);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
}

// subscribe
async function subscribe(req, res, next) {
  try {
    await User.findByIdAndUpdate(req.user.id, {
      $push: { subscribedUsers: req.params.id },
    });
    await User.findByIdAndUpdate(req.params.id, {
      $inc: { subscribers: 1 },
    });
    res.status(200).json("subscribe successfully")
  } catch (error) {

    res.status(500).json(error)
  }

}

// Unsubscribe
async function Unsubscribe(req, res, next) {
  try {
    await User.findByIdAndUpdate(req.user.id, {
      $pull: { subscribedUsers: req.params.id },
    });
    await User.findByIdAndUpdate(req.params.id, {
      $inc: { subscribers: -1 },
    });
    res.status(200).json("Unsubscribe successfully")
  } catch (error) {
    res.status(500).json(error)
  }

}



export { update, deleted, getuser, subscribe, Unsubscribe };
