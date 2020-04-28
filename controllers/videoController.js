import routes from "../routes";
import Video from "../models/Video"

export const home = async(req, res) => {
    try {
        const videos = await Video.find({}); //끝나야 실행한다
        res.render("home", {pageTitle:"Home", videos});    
    } catch (error) {
        console.log(error);
        res.render("home", {pageTitle:"Home", videos: []}); //videos:[] : 빈배열 일단 할당하기    
    }
};

export const search = async (req, res) => {
    console.log(req);
    const videos = await Video.find({})
    const {query:{term:searchingBy}} = req; //ES6 문법 const searchingBy = req.query.term; 과 같음
    
    res.render("search", {pageTitle:"Search", searchingBy, videos});
}

export const getUpload = (req, res) => res.render("upload", {pageTitle:"Upload"});

export const postUpload = async(req, res) => {    
    const{
        body:{title, description},
        file:{path}
    } = req;
    
    const newVideo = await Video.create({
        fileUrl:path,
        title,
        description
    });

    res.redirect(routes.videoDetail(newVideo.id));
};

export const videoDetail = async (req, res) => {
    const {
        params :{id}
    } = req;
    
    const video = await Video.findById(id);
    console.log(video);    
    res.render("videoDetail", {pageTitle:"Video Detail", video});
}

export const editVideo = (req, res) => res.render("editVideo", {pageTitle:"Edit Video"});
export const deleteVideo = (req, res) => res.render("deleteVideo", {pageTitle:"Delete Video"});
