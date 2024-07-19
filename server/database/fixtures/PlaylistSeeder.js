const AbstractSeeder = require("./AbstractSeeder");
const UserSeeder = require("./UserSeeder");

const playlists = [
  {
    name: "Indie Pop",
    userId: 1,
  },
  {
    name: "Dream Pop",
    userId: 1,
  },
  {
    name: "MGMT",
    userId: 2,
  },
  {
    name: "Indie Rock",
    userId: 2,
  },
];

class PlaylistSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "playlist", truncate: true, dependencies: [UserSeeder] });
  }

  run() {
    playlists.forEach((playlist) => {
      const values = {
        name: playlist.name,
        user_id: playlist.userId,
      };
      this.insert(values);
    });
  }
}

// Export the PlaylistSeeder class
module.exports = PlaylistSeeder;
