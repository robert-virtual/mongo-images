const { hash } = require("argon2");
const multer = require("../libs/multer");
const User = require("../models/Users");

const router = require("express").Router();

router.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

router.post("/", multer.single("profile"), async (req, res) => {
  const user = req.body;
  console.log(req.file);
  const password = await hash(user.password);
  const newUser = await User.create({
    ...user,
    password,
    profilePath: `http://localhost:3030/${req.file.path}`,
  });
  res.json({ msg: "usuario creado ", newUser });
});

module.exports = router;
