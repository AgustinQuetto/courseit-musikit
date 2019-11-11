const express = require("express");
const next = require("next");
const cookieParser = require("cookie-parser");
const config = require("./config");
const _ = require("lodash");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const SpotifyController = require("./controllers/SpotifyController");
const SpotifyControllerInstance = new SpotifyController(
    config.client_id,
    config.client_secret
);

const checkAuth = (req, res, next) => {
    const query = req.query || {};

    let code = _.get(req, "cookies.code") ? req.cookies.code : "";
    let queryCode = _.get(req, "query.code") ? req.query.code : "";
    if (!queryCode && !code) {
        res.redirect(config.spotifyAuth);
    }
    next();
};

app.prepare().then(() => {
    const server = express();
    server.use(cookieParser());

    server.get("/", checkAuth, (req, res) => {
        return app.render(req, res, "/");
    });

    server.get("/app", (req, res) => {
        return app.render(req, res, "/index");
    });

    server.get("/spotify/auth", async (req, res) => {
        if (!req.cookies.code)
            return res.status(500).json({ error: "missing cookie: code" });
        try {
            const login = await SpotifyControllerInstance.login(
                req.cookies.code
            );
            const status = login.error ? 500 : 200;
            return res.status(status).json(login);
        } catch (e) {
            console.log(e);
        }
    });

    server.all("*", (req, res) => {
        return handle(req, res);
    });

    server.listen(port, err => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`);
    });
});
