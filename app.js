//app.js 앱의 미들웨어 req, res 기능을 한는 것만 모음

//const express = require('express'); 구버전 문법
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import userRouter  from "./routers/userRouter";
import videoRouter  from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";
const app = express();

//미들웨어
app.use(morgan("tiny")); //로거
app.use(helmet()); //보안 기능
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//라우터 사용

app.use(routes.home, globalRouter); 
app.use(routes.videos, videoRouter); 
app.use(routes.users, userRouter); //user 라우터를 "사용(use)"함

export default app;