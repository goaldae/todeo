//app.js 앱의 미들웨어 req, res 기능을 한는 것만 모음

//const express = require('express'); 구버전 문법
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { userRouter } from "./router";
const app = express();

const handleHome = (req, res) => res.send("hello from home");
const handleProfile = (req, res) => res.send("hello from profile");

//미들웨어
app.use(morgan("tiny")); //로거
app.use(helmet()); //보안 기능
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get("/", handleHome);
app.get("/profile", handleProfile);

//라우터 사용
app.use("/user", userRouter); //user 라우터를 "사용(use)"함

export default app;