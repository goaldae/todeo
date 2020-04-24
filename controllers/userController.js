import routes from "../routes";

export const postJoin = (req, res) => {
    console.log(req.body);//bodyParser 미들웨어로 중간에 값 가져올수있음
    const {
        body: { name, email, password, password2}
        } = req;
    if(password !== password2){
        res.send(400);
        res.render("join", {pageTitle:"Join"});
    }else{
        res.redirect(routes.home);
    }
    
};

export const postLogin = (req, res) => {    
    res.redirect(routes.home);
};

export const getJoin = (req, res) => res.render("join", {pageTitle:"Join"});

export const getLogin = (req, res) => res.render("login", {pageTitle:"Login"});

export const logout = (req, res) => res.render("logout", {pageTitle:"Logout"});
export const users = (req, res) => res.render("users", {pageTitle:"Users"});
export const userDetail = (req, res) => res.render("userDetail", {pageTitle:"User Detail"});
export const editPofile = (req, res) => res.render("editProfile", {pageTitle:"Edit Profile"});
export const changePassword = (req, res) => res.render("changePassword", {pageTitle:"Change Password"});
