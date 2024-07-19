const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const usersRouter = require("./users/router");

router.use("/users", usersRouter);

const authRouter = require("./auth/router");

router.use("/auth", authRouter);

const playlistsRouter = require("./playlists/router");

router.use("/playlists", playlistsRouter);

const musicRouter = require("./musics/router");

router.use("/musics", musicRouter);

/* ************************************************************************* */

module.exports = router;
