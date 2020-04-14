import express from "express";

const userRouter = express.Router();

userRouter.get("/", (req, res) => res.send("get user index"));
userRouter.get("/edit", (req, res) => res.send("get user/edit"));
userRouter.get("/password", (req, res) => res.send("get user/password"));

export {userRouter};

