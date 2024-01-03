const express = require("express");
const { Pool } = require("pg");

const app = express();
app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE, HEAD"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  next();
});

const port = process.env.PORT || 2410;

const pool = new Pool({
  user: "postgres",
  host: "db.timvwqwrfcozwdangepa.supabase.co",
  database: "postgres",
  password: "Jeevan#2021",
  port: 5432,
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});