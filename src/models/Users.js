const { model } = require("../db/db");

const User = model("User", {
  name: String,
  email: String,
  password: String,
  profilePath: String,
});

module.exports = User;
