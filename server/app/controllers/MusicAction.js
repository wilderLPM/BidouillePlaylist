const tables = require("../../database/tables");

const add = async (req, res, next) => {
  // Extract the user data from the request body
  const music = req.body;
  console.info(music);

  try {
    // Insert the user into the database
    const insertId = await tables.user.create(music);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted music
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

module.exports = {
  add,
};
