import routes from "../routes";
import Video from "../models/Video";

export const home = async (req, res) => {
  try {
    const videos = await Video.find({}).sort({ _id: -1 }); //끝나야 실행한다
    //id값으로 정렬하는데 원래 순서에 반대로 정렬한다는 뜻
    res.render("home", { pageTitle: "Home", videos });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "Home", videos: [] }); //videos:[] : 빈배열 일단 할당하기
  }
};

export const search = async (req, res) => {
  const {
    query: { term: searchingBy },
  } = req; //ES6 문법 const searchingBy = req.query.term; 과 같음
  let videos = [];
  try {
    videos = await Video.find({
      title: { $regex: searchingBy, $options: "i" }, //regular expression
    });
    console.log(videos);
  } catch (error) {
    console.log(error);
  }
  res.render("search", { pageTitle: "Search", searchingBy, videos });
};

export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });

export const postUpload = async (req, res) => {
  const {
    body: { title, description },
    file: { path },
  } = req;

  const newVideo = await Video.create({
    fileUrl: path,
    title,
    description,
  });

  res.redirect(routes.videoDetail(newVideo.id));
};

export const videoDetail = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const video = await Video.findById(id);
    res.render("videoDetail", { pageTitle: "Video Detail", video });
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const getEditVideo = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const video = await Video.findById(id);
    res.render("editVideo", { pageTitle: "Edit Video", video });
  } catch (error) {
    res.redirect(routes.home);
  }

  res.render("editVideo", { pageTitle: "Edit Video" });
};

export const postEditVideo = async (req, res) => {
  const {
    body: { title, description },
    params: { id },
  } = req;

  try {
    await Video.findByIdAndUpdate({ _id: id }, { title, description }); //모델과 변수명이 똑같아서 ㅇㅇ:ㅇㅇ 형식 생략
    res.redirect(routes.videoDetail(id));
  } catch {
    res.redirect(routes.home);
  }
  res.render("editVideo", { pageTitle: "Edit Video" });
};
export const deleteVideo = async (req, res) => {
  const {
    params: { id },
  } = req;

  try {
    await Video.findByIdAndRemove({ _id: id });
  } catch (error) {}

  res.redirect(routes.home);
};
