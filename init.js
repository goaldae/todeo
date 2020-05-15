import "./db"; //DB 연결만
import app from "./app";

import dotenv from "dotenv";
dotenv.config();
import "./models/Video"; //모델 가져오기
import "./models/Comment";
import "./models/User";

const PORT = process.env.PORT;

const handleListening = () =>
  console.log(`✔ Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);
