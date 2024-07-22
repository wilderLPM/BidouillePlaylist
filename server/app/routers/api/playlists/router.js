const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import user-related actions
const {
  browse,
  read,
  add,
  orderByUser,
  madeByUser,
  getPlaylistWithMusics,
} = require("../../../controllers/PlaylistAction");

// Route to get a list of users
router.get("/", browse);

// Route to get a specific user by ID
router.get("/:id", read);

// Route to add a new user
router.post("/", add);

router.post("/order-by-user", orderByUser);

router.get("/from-user/:user_id", madeByUser);

router.get("/with-musics/:id", getPlaylistWithMusics);

/* ************************************************************************* */

module.exports = router;
