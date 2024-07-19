const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import music-related actions
const { add, join } = require("../../../controllers/MusicAction");

// Route to add a new music
router.post("/", add);

router.post("/join", join);

/* ************************************************************************* */

module.exports = router;
