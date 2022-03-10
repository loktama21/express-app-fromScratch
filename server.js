const express = require("express");
const app = express();
const { Pool } = require("pg");

const pool = new Pool({
  database: "people",
});

const port = 4000;

app.get("/users", (req, res) => {
  pool.query("SELECT * FROM users").then((result) => {
    res.send(result.rows[0]);
  });
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
