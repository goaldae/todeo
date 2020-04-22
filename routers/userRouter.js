import express from "express";
import routes from "../routes";
import { users, userDetail, editPofile, changePassword } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.editProfile, editPofile);
userRouter.get(routes.changePassword, changePassword);
userRouter.get(routes.userDetail, userDetail);

export default userRouter;