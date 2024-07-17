const express = require("express");

const router = express.Router();

const { login, logout } = require("../../../controllers/AuthAction");

// to do : create middleware to verify hash

router.post("/log-in", login);

router.post("/log-out", logout);

/* ************************************************************************* */

module.exports = router;
