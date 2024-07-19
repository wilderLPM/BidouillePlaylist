const AbstractSeeder = require("./AbstractSeeder");

const musics = [
  {
    title: "Yuve yuve yu",
    year: 2019,
    genre: "Rock, Metal",
  },
  {
    title: "Silver Soul",
    year: 2010,
    genre: "Dream Pop, Shoegaze",
  },
  {
    title: "Nothing to declare",
    year: 2024,
    genre: "Alternative",
  },
  {
    title: "The Agency Group",
    year: 2014,
    genre: "Indie",
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
