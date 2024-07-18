const AbstractSeeder = require("./AbstractSeeder");
const PlaylistSeeder = require("./PlaylistSeeder");
const MusicSeeder = require("./MusicSeeder");

const fks = [
  {
    playlistId: 1,
    musicId: 1,
  },
];

class PlaylistMusicSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({
      table: "playlist_music",
      truncate: true,
      dependencies: [PlaylistSeeder, MusicSeeder],
    });
  }

  run() {
    fks.forEach((tuple) => {
      const values = {
        playlist_id: tuple.playlistId,
        music_id: tuple.musicId,
      };
      this.insert(values);
    });
  }
}

// Export the Playlist_MusicSeeder class
module.exports = PlaylistMusicSeeder;
