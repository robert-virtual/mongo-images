const db = require("mongoose");

(async () => {
  try {
    await db.connect(process.env.db_host);
    console.log("db connected");
  } catch (error) {
    throw error;
  }
})();

module.exports = db;
