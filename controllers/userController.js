import routes from "../routes";
import User from "../models/User";
import passport from "passport";

export const postJoin = async (req, res, next) => {
  console.log(req.body); //bodyParser 미들웨어로 중간에 값 가져올수있음
  const {
    body: { name, email, password, password2 },
  } = req;
  if (password !== password2) {
    res.send(400);
    res.render("join", { pageTitle: "Join" });
  } else {
    try {
      const user = await User({
        name,
        email,
      });
      await User.register(user, password);
      next();
    } catch (error) {
      console.log(error);
      res.redirect(routes.home);
    }
  }
};

export const postLogin = passport.authenticate("local", {
  failureRedirect: routes.login,
  successRedirect: routes.home,
});

export const getJoin = (req, res) => res.render("join", { pageTitle: "Join" });

export const getLogin = (req, res) =>
  res.render("login", { pageTitle: "Login" });

export const githubLogin = passport.authenticate("github");
export const postGithubLogin = (req, res) => {
  res.redirect(routes.home);
};

export const githubLoginCallback = async (
  accessToken,
  refreshToken,
  profile,
  cb
) => {
  const {
    _json: { id, avatar_url, email, name },
  } = profile;
  try {
    const user = await User.findOne({ email });
    if (user) {
      // user.githubId = id;
      // user.save();
      //안해도 되지 않나..?
      return cb(null, user);
    }
    const newUser = await User.create({
      email,
      name,
      githubId: id,
      avatarUrl: avatar_url,
    });
    return cb(null, newUser);
  } catch (error) {}
};

export const logout = (req, res) => {
  req.logout();
  res.redirect(routes.home);
};
export const users = (req, res) => res.render("users", { pageTitle: "Users" });
export const userDetail = (req, res) =>
  res.render("userDetail", { pageTitle: "User Detail" });
export const editPofile = (req, res) =>
  res.render("editProfile", { pageTitle: "Edit Profile" });
export const changePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "Change Password" });
