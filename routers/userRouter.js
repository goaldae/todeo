import express from "express";
import routes from "../routes";
import {
  userDetail,
  getEditPofile,
  changePassword,
  postEditPofile,
} from "../controllers/userController";
import { onlyPrivate, uploadAvatar } from "../middlewares";

const userRouter = express.Router();

userRouter.get(routes.editProfile, onlyPrivate, getEditPofile);
userRouter.post(routes.editProfile, uploadAvatar, onlyPrivate, postEditPofile);

userRouter.get(routes.changePassword, onlyPrivate, changePassword);
userRouter.get(routes.userDetail(), onlyPrivate, userDetail);

export default userRouter;
