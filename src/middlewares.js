import routes from "./routes";
import multer from "multer";
import multerS3 from "multer-s3";
import aws from "aws-sdk";

const s3 = new aws.S3({
  //s3 저장소 설정
  accessKeyId: process.env.AWS_KEY,
  secretAccessKey: process.env.AWS_PRIVATE_KEY,
  region: "ap-northeast-2",
});

const multerVideo = multer({
  storage: multerS3({
    s3,
    acl: "public-read",
    bucket: "todeo/video",
  }),
}); //비디오 업로드 경로 설정
const multerAvatar = multer({ dest: "uploads/avatars/" }); //임시 방편

export const uploadVideo = multerVideo.single("videoFile"); //form의 name과 같게, 한개의 파일을 받음
export const uploadAvatar = multerAvatar.single("avatar");

export const localMiddleware = (req, res, next) => {
  res.locals.siteName = "Todeo";
  res.locals.routes = routes;
  res.locals.loggedUser = req.user || null;
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
