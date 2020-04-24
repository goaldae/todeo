import {videos} from "../db"
import routes from "../routes";

export const home = (req, res) => res.render("home", {pageTitle:"Home", videos});

export const search = (req, res) => {
    const {query:{term:searchingBy}} = req; //ES6 문법 const searchingBy = req.query.term; 과 같음
    console.log(searchingBy);
    res.render("search", {pageTitle:"Search", searchingBy, videos});
}

export const getUpload = (req, res) => res.render("upload", {pageTitle:"Upload"});
export const postUpload = (req, res) => {
    const {
        body:{video, title, description}
    } = req;
    console.log(req.body);
    res.redirect(routes.videoDetail(23));
};

export const videoDetail = (req, res) => res.render("videoDetail", {pageTitle:"Video Detail"});
export const editVideo = (req, res) => res.render("editVideo", {pageTitle:"Edit Video"});
export const deleteVideo = (req, res) => res.render("deleteVideo", {pageTitle:"Delete Video"});
