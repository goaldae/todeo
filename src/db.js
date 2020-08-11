import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGO_URL_PROD, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
const handleOpen = () => console.log("✔ DB connected");
const handleError = (error) => console.log(`Error on DB connection: ${error}`);

db.once("open", handleOpen); //db.once is called once the connection is opened, only once
db.on("error", handleError); //.on means when this happens
