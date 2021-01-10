const bcrypt = require("bcryptjs");

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Raju",
    email: "raju@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Shyaam",
    email: "shyaam@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

module.exports = users;
