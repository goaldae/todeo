import routes from "./routes";
import multer from "multer";

const multerVideo = multer({ dest: "uploads/videos/" }); //비디오 업로드 경로 설정

export const localMiddleware = (req, res, next) => {
  res.locals.siteName = "Todeo";
  res.locals.routes = routes;
  res.locals.user = req.user || null;
  console.log(req.user);
  next();
};

export const onlyPublic = (req, res, next) => {
  //로그인되지 않은 상태 요청 걸러주는 미들웨어
  if (req.user) {
    res.redirect(routes.home);
  } else {
    next();
  }
};

export const onlyPrivate = (req, res, next) => {
  //로그인되지 않은 상태 요청 걸러주는 미들웨어
  if (req.user) {
    next();
  } else {
    res.redirect(routes.home);
  }
};

export const uploadVideo = multerVideo.single("videoFile"); //form의 name과 같게, 한개의 파일을 받음
