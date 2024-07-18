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
} = require("../../../controllers/PlaylistAction");

// eslint-disable-next-line no-unused-vars
const { hashPassword, verifyCookie } = require("../../../services/auth");

// Route to get a list of users
router.get("/", browse);

// Route to get a specific user by ID
router.get("/:id", read);

// Route to add a new user
router.post("/", hashPassword, add);

router.post("/order-by-user", orderByUser);

router.get("/from-user/:user_id", madeByUser);

/* ************************************************************************* */

module.exports = router;
