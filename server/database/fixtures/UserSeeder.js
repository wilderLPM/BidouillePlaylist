const AbstractSeeder = require("./AbstractSeeder");

const users = [
  {
    username: "Bidou",
    hashed_password:
      "$argon2id$v=19$m=19456,t=2,p=1$VGsEYWpwQ++ve/En/U0ppQ$O1s33RSqzggltvRt6i7bB9eeVC39NNuEvQkYcVcyDaY", // cute
  },
  {
    username: "Lolo",
    hashed_password:
      "$argon2id$v=19$m=19456,t=2,p=1$gJQDfkcAbQ2jgzdYi6kwWg$GPeagKamIguSvPTbBmrdRpQH7OZ52TxnjunO+lxryTw", // elo
  },
];

class UserSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "user", truncate: true });
  }

  run() {
    users.forEach((user) => {
      const values = {
        username: user.username,
        hashed_password: user.hashed_password,
      };
      this.insert(values);
    });
  }
}

// Export the UserSeeder class
module.exports = UserSeeder;
