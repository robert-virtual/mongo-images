const express = require("express");
require("dotenv").config();
const cors = require("cors");
const users = require("./routes/users");
const app = express();

const port = process.env.PORT || 3030;

app.use(express.json());
app.use(cors());
app.use("/users", users);
app.use(express.static("public"));
app.use("/uploads", express.static("uploads"));

app.listen(port, () => {
  console.log(`server running on port ${port}...`);
});
