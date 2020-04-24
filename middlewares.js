import routes from "./routes";

export const localMiddleware = (req, res, next) => {
    res.locals.siteName = "Todeo";
    res.locals.routes = routes;
    res.locals.user = {
        id: 2,
        isAuthenticated: true
    };
    next();
}