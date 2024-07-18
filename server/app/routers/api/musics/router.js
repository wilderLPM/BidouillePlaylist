const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import music-related actions
const { add } = require("../../../controllers/MusicAction");

const { hashPassword } = require("../../../services/auth");

// Route to add a new music
router.post("/", hashPassword, add);

/* ************************************************************************* */

module.exports = router;
