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
  postSocialLogin,
  kakaoLogin,
  getMe,
} from "../controllers/userController";
import passport from "passport";
import { onlyPublic, onlyPrivate } from "../middlewares";

const globalRouter = express.Router();

globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);
globalRouter.get(routes.join, onlyPublic, getJoin);

globalRouter.post(routes.login, onlyPublic, postLogin);
globalRouter.get(routes.login, onlyPublic, getLogin);

//github 로그인
globalRouter.get(routes.github, githubLogin); //auth/github 요청으로 들어오는 깃헙로그인

globalRouter.get(
  //auth/github/callback 요청으로 들어오는 깃헙로그인
  routes.githubCallback,
  passport.authenticate("github", { failureRedirect: "/login" }),
  postSocialLogin
);

//kakao 로그인
globalRouter.get(routes.kakao, kakaoLogin); //auth/github 요청으로 들어오는 깃헙로그인

globalRouter.get(
  //auth/github/callback 요청으로 들어오는 깃헙로그인
  routes.kakaoCallback,
  passport.authenticate("kakao", { failureRedirect: "/login" }),
  postSocialLogin
);

globalRouter.get(routes.me, getMe);

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);

globalRouter.get(routes.logout, onlyPrivate, logout);

export default globalRouter;
