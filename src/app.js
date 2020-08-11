//app.js 앱의 미들웨어 req, res 기능을 한는 것만 모음

//const express = require('express'); 구버전 문법
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import path from "path";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import apiRouter from "./routers/apiRouter";
import routes from "./routes";
import { localMiddleware } from "./middlewares";
import passport from "passport"; //passport 모듈
import mongoose from "mongoose";
import session from "express-session"; //express session 모듈
import "./passport"; //passport 설정파일
import MongoStore from "connect-mongo";

const app = express();

const CookieStore = MongoStore(session); //session 객체가 필요함

//미들웨어
app.use(helmet()); //보안 기능
app.set("view engine", "pug"); //view engine 설정
app.set("views", path.join(__dirname, "views"));
//app.use("/uploads", express.static("uploads")); //일단 /uploads 경로에 있는 것을 가져다 쓰겠다.
app.use("/static", express.static(path.join(__dirname, "static")));
app.use(cookieParser());
app.use(morgan("tiny")); //로거
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: true,
    saveUninitialized: false,
    store: new CookieStore({
      //세션과 데이터베이스 연결 : 서버를 재시작해도 세션이 그대로 있는 기능
      mongooseConnection: mongoose.connection,
    }),
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(localMiddleware);

//라우터 사용
app.use(routes.home, globalRouter);
app.use(routes.videos, videoRouter);
app.use(routes.users, userRouter); //user 라우터를 "사용(use)"함
app.use(routes.api, apiRouter);

export default app;
