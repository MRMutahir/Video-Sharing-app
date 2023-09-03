
import { Comment } from "../model/comment.js"
import { Video } from "../model/Video.js"
async function addcomment(req, res) {
  const newComment = new Comment({ ...req.body, userId: req.user.id });
  try {
    const saveComment = await newComment.save()
    res.status(200).json(newComment)
  } catch (error) {
    res.status(500).json(error)
  }
}
async function deletecomment(req, res) {
  try {
    const comment = await Comment.findById(req.params.id)
    const video = await Video.findById(req.params.id)
    if (req.user.id === comment.userId || req.user.id === video.userId) {
      await Comment.findByIdAndDelete(req.params.id)
      res.status(200).json("Delete Comment")
    } else {
      res.status(403).json(" you can delete only your comment!")
    }
    res.status(200).json("delete Comment")
  } catch (error) {
    res.status(500).json(error)
  }
}
async function getcomment(req, res) {
  try {
    const getComment = await Comment.find({ videoId: req.params.videoId })
    res.status(200).json(getComment)

  } catch (error) {
    res.status(500).json(error)

  }

}
export { addcomment, getcomment, deletecomment };
