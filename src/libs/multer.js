const multer = require("multer");
const uuid = require("uuid").v4;
const storage = multer.diskStorage({
  destination: "uploads",
  filename(req, file, cb) {
    cb(null, `${uuid()}&${file.originalname}`);
  },
});

module.exports = multer({ storage });
