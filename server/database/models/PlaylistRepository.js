const AbstractRepository = require("./AbstractRepository");

class PlaylistRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "playlist" as configuration
    super({ table: "playlist" });
  }

  // The C of CRUD - Create operation

  async create(playlist) {
    // Execute the SQL INSERT query to add a new playlist to the "playlist" table
    const [result] = await this.database.query(
      `insert into ${this.table} (name, user_id) values (?, ?)`,
      [playlist.playlistName, playlist.userId]
    );

    // Return the ID of the newly inserted playlist
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific playlist by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the playlist
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all playlists from the "playlist" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of playlists
    return rows;
  }

  async orderByUser(id) {
    // Execute the SQL SELECT query to retrieve all playlists from the "playlist" table
    const [rows] = await this.database.query(
      `select * from ${this.table} order by case when user_id = ? then 0 else 1 end, created_at`,
      [id]
    );

    // Return the array of playlists
    return rows;
  }

  async madeByUser(userId) {
    const cleanId = userId.slice(1);
    // Execute the SQL SELECT query to retrieve all playlists from the "playlist" table
    const [rows] = await this.database.query(
      `select * from ${this.table} where user_id = ? order by created_at`,
      [cleanId]
    );

    // Return the array of playlists
    return rows;
  }

  async verifyPlaylist(playlistname) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where playlistname = ?`,
      [playlistname]
    );

    return rows[0];
  }

  async getPlaylistWithMusics(playlistId) {
    const [rows] = await this.database.query(
      `select p.name, m.id, m.title, m.year, m.genre from ${this.table} p join playlist_music pm on pm.playlist_id = p.id join music m on pm.music_id = m.id where p.id = ?`,
      [playlistId]
    );
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing playlist

  // async update(playlist) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an playlist by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = PlaylistRepository;
