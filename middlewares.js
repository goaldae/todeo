import routes from "./routes";

export const localMiddleware = (req, res, next) => {
    res.locals.siteName = "Todeo";
    res.locals.routes = routes;
    next();
}