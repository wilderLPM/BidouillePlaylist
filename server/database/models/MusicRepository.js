const AbstractRepository = require("./AbstractRepository");

class MusicRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "music" as configuration
    super({ table: "music" });
  }

  // The C of CRUD - Create operation

  async create(music) {
    // Execute the SQL INSERT query to add a new music to the "music" table
    const [result] = await this.database.query(
      `insert into ${this.table} (title, year, genre) values (?, ?, ?)`,
      [music.song.title, music.song.year, music.song.genre]
    );
    return result.insertId;
  }

  async join(ids) {
    // Execute the SQL INSERT query to add a new music to the "music" table
    const [result] = await this.database.query(
      `insert into playlist_music (playlist_id, music_id) values (?, ?)`,
      [ids.playlistId, ids.musicId.insertId]
    );
    return result.insertId;
  }
}

module.exports = MusicRepository;
