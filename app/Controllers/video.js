import { Vedio } from "../model/Video.js";

async function addVideo(req, res) {
  const newVedio = new Vedio({ userId: req.user.id, ...req.body });
  try {
    const saveVedio = await newVedio.save();
    res.status(200).json(saveVedio);
  } catch (error) {
    res.status(500).json(" Vedio is Not Found ");
  }
}

async function updateVideo(req, res) {
  res.json("API CHL GI ");
}
async function deleteVideo(req, res) {
  res.json("API CHL GI ");
}
async function getVideo(req, res) {
  res.json("API CHL GI ");
}
export { addVideo, updateVideo, deleteVideo, getVideo };
