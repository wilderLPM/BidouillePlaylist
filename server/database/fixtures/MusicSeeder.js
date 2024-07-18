const AbstractSeeder = require("./AbstractSeeder");

const musics = [
  {
    title: "Woman",
    year: 1998,
    genre: "Electro",
  },
];

class MusicSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "music" });
  }

  run() {
    musics.forEach((music) => {
      const values = {
        title: music.title,
        year: music.year,
        genre: music.genre,
      };
      this.insert(values);
    });
  }
}

// Export the MusicSeeder class
module.exports = MusicSeeder;
