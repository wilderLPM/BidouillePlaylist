const AbstractSeeder = require("./AbstractSeeder");

const users = [
  {
    username: "Bidou",
    hashed_password: "eznd$zdcjé",
  },
  {
    username: "Lolo",
    hashed_password: "xjuéuuec",
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
