import express from "express";
import routes from "../routes";
import { resisterView, postAddComment } from "../controllers/videoController";

const apiRouter = express.Router();

apiRouter.post(routes.resisterView, resisterView);
apiRouter.post(routes.addComment, postAddComment);

export default apiRouter;
