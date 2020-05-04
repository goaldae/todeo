import express from "express";
import routes from "../routes";
import {videoDetail, editVideo, deleteVideo, postUpload, getUpload, getEditVideo, postEditVideo } from "../controllers/videoController";
import {uploadVideo} from"../middlewares"

const videoRouter = express.Router();

videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);

videoRouter.get(routes.videoDetail(), videoDetail);

videoRouter.get(routes.deleteVideo(), deleteVideo);

export default videoRouter;

