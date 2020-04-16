import express from "express";
import routes from "../routes";
import { users, userDetail, editPofile, changePassword } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.users, users);
userRouter.get(routes.userDetail, userDetail);
userRouter.get(routes.editProfile, editPofile);
userRouter.get(routes.changePassword, changePassword);

export default userRouter;