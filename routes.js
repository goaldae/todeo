
//global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

//users
const USERS = "/users";
const USER_DETAIL = "/:id"; // ":"을 쓰면 값을 바꾸면서 넣을수있음 ->텍스트가 아님
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";

//videos
const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id";
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete";

const routes = {
    home : HOME,
    join : JOIN,
    login : LOGIN,
    logout : LOGOUT,
    search : SEARCH,
    users : USERS,
    userDetail : (id)=>{
        if(id){
            return `/users/${id}`;
        }else{
            return USER_DETAIL;
        }
    },
    editProfile : EDIT_PROFILE,
    changePassword : CHANGE_PASSWORD,
    videos : VIDEOS,
    upload : UPLOAD,
    videoDetail : (id)=>{
        if(id){
            return `/videos/${id}`;
        }else{
            return VIDEO_DETAIL;
        }
    },
    editVideo : EDIT_VIDEO,
    deleteVideo : DELETE_VIDEO,
};

export default routes;