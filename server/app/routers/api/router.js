const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const usersRouter = require("./users/router");

router.use("/users", usersRouter);

const authRouter = require("./auth/router");

router.use("/auth", authRouter);

/* ************************************************************************* */

module.exports = router;
