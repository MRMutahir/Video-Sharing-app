import { Comment } from "../model/comment.js";
import { Video } from "../model/Video.js";
async function addcomment(req, res) {
  // console.log(req.params.id);
  const newComment = new Comment({ ...req.body, userId: req.user.id });
  try {
    const saveComment = await newComment.save();
    res.status(200).json(saveComment);
  } catch (error) {
    res.status(500).json(error);
  }
}
async function deletecomment(req, res) {
  const comment = await Comment.findById(req.params.id);
  const video = await Video.findById(req.params.id);
  try {
    if (req.user.id === comment.userId || req.user.id === video.userId) {
      await Comment.findByIdAndDelete(req.params.id);
      res.status(200).json("Delete Comment");
    } else {
      res.status(403).json(" you can delete only your comment!");
    }
  } catch (error) {
    res.status(500).json(error);
  }
}
async function getcomment(req, res) {
  console.log(req.params.id);
  try {
    const comments = await Comment.find({ videoId: req.params.id });
    // console.log(comments);

    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json(error);
  }
}

function getParams(req, res) {
  console.log("SALAM");
  // console.log(req.params.id);
}
export { addcomment, getcomment, deletecomment, getParams };
