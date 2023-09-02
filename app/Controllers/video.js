import { Video } from "../model/Video.js";
// ADD VIDEO

async function addVideo(req, res) {
  const newVedio = new Video({ userId: req.user.id, ...req.body });
  try {
    const saveVedio = await newVedio.save();
    res.status(200).json(saveVedio);
  } catch (error) {
    res.status(500).json(" Vedio is Not Found ");
  }
}
//  UPDATE VIDEO
async function updateVideo(req, res) {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) return res.status(404).json("Video is not Found ");
    if (req.user.id === video.userId) {
      const updateVideo = await Vedio.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
    } else {
      res.status(403).send("You can update only your video!");
    }
    res.status(200).json(updateVideo);
  } catch (error) {
    res.status(403).json(error);
  }
}
// DELETE VIDEO
async function deleteVideo(req, res) {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) return res.status(404).json("Video is not Found ");
    if (req.user.id === video.userId) {
      await Vedio.findByIdAndDelete(req.params.id);
    } else {
      res.status(403).send("You can delete  only your video!");
    }
    res.status(200).json(" the Video has been delete");
  } catch (error) {
    res.status(403).json(error);
  }
}

// GET VIDEO
async function getVideo(req, res) {
  try {
    const video = await Video.findById(req.params.id);
    res.status(200).json(video);
  } catch (error) {
    res.status(500).json(error);
  }
}

// Other Functions
async function view(req, res) {
  try {
    await Video.findByIdAndUpdate(req.params.id, {
      $inc: { views: 1 },
    });
    res.status(200).json("The view has been increased.");
  } catch (error) {
    res.status(500).json(error);
  }
}
async function rondom(req, res) {
  try {
    const videos = await Video.aggregate([{ $sample: { size: 40 } }]);
    res.status(200).json(videos);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function trend(req, res) {
  try {
    const videos = await Video.find().sort({ view: -1 });
    res.status(200).json(videos);
  } catch (error) {
    res.status(500).json(error);
  }
}
async function subscribes(req, res) {
  try {
    const video = await Video.findById(req.params.id);
    res.status(200).json(video);
  } catch (error) {
    res.status(500).json(error);
  }
}
export { addVideo, updateVideo, deleteVideo, getVideo, view };
