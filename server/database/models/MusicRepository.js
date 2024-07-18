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
      [music.title, music.year, music.genre]
    );
    return result.insertId;
  }
}

module.exports = MusicRepository;
