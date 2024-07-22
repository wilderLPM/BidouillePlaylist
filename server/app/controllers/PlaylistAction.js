// Import access to database tables
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all playlists from the database
    const playlists = await tables.playlist.readAll();

    // Respond with the playlists in JSON format
    res.json(playlists);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific playlist from the database based on the provided ID
    const playlist = await tables.playlist.read(req.params.id);

    // If the playlist is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the playlist in JSON format
    if (playlist == null) {
      res.sendStatus(404);
    } else {
      res.json(playlist);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const orderByUser = async (req, res, next) => {
  try {
    // Fetch a specific playlist from the database based on the provided ID
    const playlists = await tables.playlist.orderByUser(req.body.id);
    console.info(playlists);
    // If the playlist is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the playlist in JSON format
    if (playlists == null) {
      res.sendStatus(404);
    } else {
      res.json(playlists);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const madeByUser = async (req, res, next) => {
  try {
    // Fetch a specific playlist from the database based on the provided ID
    const playlists = await tables.playlist.madeByUser(req.params.user_id);
    // If the playlist is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the playlist in JSON format
    if (playlists == null) {
      res.sendStatus(404);
    } else {
      res.json(playlists);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
const edit = async (req, res, next) => {
  // Extract the playlist data from the request body and params
  const playlist = { ...req.body, id: req.params.id.slice(1) };
  console.info(playlist);
  try {
    // Update the playlist in the database
    await tables.playlist.update(playlist);

    // Respond with HTTP 204 (No Content)
    res.sendStatus(204);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the playlist data from the request body
  const playlist = req.body;
  console.info(playlist);

  try {
    // Insert the playlist into the database
    const insertId = await tables.playlist.create(playlist);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted playlist
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const getPlaylistWithMusics = async (req, res, next) => {
  const playlistId = req.params.id;
  const cleanId = playlistId.slice(1);

  try {
    const result = await tables.playlist.getPlaylistWithMusics(cleanId);
    console.info("result", result);
    res.json(result);
  } catch (err) {
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  edit,
  add,
  orderByUser,
  madeByUser,
  getPlaylistWithMusics,
};
