const express = require("express");
const app = express();
const { Pool } = require("pg");

const pool = new Pool({
  database: "people",
});

const port = 4000;

app.use(express.static("public"));

app.get("/users", (req, res) => {
  pool.query("SELECT * FROM users").then((result) => {
    res.send(result.rows);
  });
});

app.listen(port);
