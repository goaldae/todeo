import routes from "./routes";
import multer from "multer";

const multerVideo = multer({ dest: "uploads/videos/" }); //비디오 업로드 경로 설정

export const localMiddleware = (req, res, next) => {
  res.locals.siteName = "Todeo";
  res.locals.routes = routes;
  res.locals.user = {
    id: 2,
    isAuthenticated: true,
  };
  next();
};

export const uploadVideo = multerVideo.single("videoFile"); //form의 name과 같게, 한개의 파일을 받음
