import express from "express";
import routes from "../routes";
import { home, search } from "../controllers/videoController";
import {
  getJoin,
  postJoin,
  postLogin,
  getLogin,
  logout,
  githubLogin,
  postGithubLogin,
} from "../controllers/userController";
import passport from "passport";
import { onlyPublic, onlyPrivate } from "../middlewares";

const globalRouter = express.Router();

globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);
globalRouter.get(routes.join, onlyPublic, getJoin);

globalRouter.post(routes.login, onlyPublic, postLogin);
globalRouter.get(routes.login, onlyPublic, getLogin);

globalRouter.get(routes.github, githubLogin); //auth/github 요청으로 들어오는 깃헙로그인

globalRouter.get(
  //auth/github/callback 요청으로 들어오는 깃헙로그인
  routes.githubCallback,
  passport.authenticate("github", { failureRedirect: "/login" }),
  postGithubLogin
);

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);

globalRouter.get(routes.logout, onlyPrivate, logout);

export default globalRouter;
