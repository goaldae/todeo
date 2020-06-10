import express from "express";
import routes from "../routes";
import {
  userDetail,
  getEditPofile,
  postChangePassword,
  getChangePassword,
  postEditPofile,
} from "../controllers/userController";
import { onlyPrivate, uploadAvatar } from "../middlewares";

const userRouter = express.Router();

userRouter.get(routes.editProfile, onlyPrivate, getEditPofile);
userRouter.post(routes.editProfile, uploadAvatar, onlyPrivate, postEditPofile);

userRouter.get(routes.changePassword, onlyPrivate, getChangePassword);
userRouter.post(routes.changePassword, onlyPrivate, postChangePassword);

userRouter.get(routes.userDetail(), userDetail);

export default userRouter;
