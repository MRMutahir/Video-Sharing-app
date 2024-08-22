import { json } from "express";
import { User } from "../model/User.js";
import { Video } from "../model/Video.js";

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
async function getuser(req, res) {
  // console.log(req.params.id);
  // console.log("user  API ");
  try {
    const user = await User.findById(req.params.id);
    // console.log(user);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
}

// Subscribe
async function subscribe(req, res, next) {
  try {
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    if (user.subscribedUsers.includes(req.params.id)) {
      return res.status(201).json({ message: "Already subscribed" });
    }

    await User.findByIdAndUpdate(req.user.id, {
      $addToSet: { subscribedUsers: req.params.id },
      $inc: { subscribers: 1 },
    });

    res.status(200).json({ message: "Subscribed successfully" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

// Unsubscribe
async function Unsubscribe(req, res, next) {
  try {
    await User.findByIdAndUpdate(req.user.id, {
      $pull: { subscribedUsers: req.params.id },
      $inc: { subscribers: 1 },
    });
    // let db_User = await User.findById(req.user.id);
    // if (db_User.subscribedUsers.includes(req.params.id)) {
    //   await User.findByIdAndUpdate(req.user.id, {
    //     $pull: { subscribedUsers: req.params.id },
    //   });
    //   await User.findByIdAndUpdate(req.params.id, {
    //     $inc: { subscribers: -1 },
    //   });

    //   res.status(200).json({
    //     message: "Unsubscribe successfully",
    //     db: db_User.subscribedUsers,
    //   });
    // } else {
    //   res.status(400).json({
    //     message: "You are not subscribed to this user",
    //     db: db_User.subscribedUsers,
    //   });
    // }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}

async function like(req, res) {
  try {
    const userId = req.user.id;
    const videoId = req.params.videoId;
    await Video.findByIdAndUpdate(videoId, {
      $addToSet: { likes: userId },
      $pull: { dislikes: userId },
    });
    res.status(200).json("The video has been liked.");
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}

async function dislike(req, res) {
  try {
    const userId = req.user.id;
    const videoId = req.params.videoId;
    await Video.findByIdAndUpdate(videoId, {
      $addToSet: { dislikes: userId },
      $pull: { likes: userId }, // Remove user from likes array if present
    });
    res.status(200).json("The video has been disliked.");
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}

export { update, deleted, getuser, subscribe, Unsubscribe, like, dislike };
